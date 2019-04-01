using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.ViewModels;

namespace ngStore.Controllers
{
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IConfiguration _config;
        private readonly ICustomerRepository _customerRepository;
        private readonly IMapper _mapper;

        public AccountController(ILogger<AccountController> logger, SignInManager<User> signInManager, UserManager<User> userManager, IConfiguration config, 
            ICustomerRepository customerRepository, IMapper mapper)
        {
            _logger = logger;
            _signInManager = signInManager;
            _userManager = userManager;
            _config = config;
            _customerRepository = customerRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("Account/Login")]
        public IActionResult Login()
        {
            if (this.User.Identity.IsAuthenticated)
            {
                return RedirectToAction("Index", "Home");
            }

            return View();
        }

        [HttpPost]
        [Route("Account/Login")]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Username, model.Password, model.RememberMe, false);

                if (result.Succeeded)
                {
                    if (Request.Query.Keys.Contains("ReturnUrl"))
                    {
                        return Redirect(Request.Query["ReturnUrl"].First());
                    }
                    else
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
            }

            ModelState.AddModelError("", "Failed to login");

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        [HttpGet]
        [Route("Account/Register")]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        [Route("Account/Register")]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            try
            {
                //  Check passwords for equality
                if (model.Password != model.PasswordConfirm)
                {
                    ModelState.AddModelError("", "Passwords do not match");
                }

                if (ModelState.IsValid)
                {
                    //  Create the identity user and add to user role
                    var user = new User
                    {
                        Email = model.Email,
                        EmailConfirmed = true,
                        FirstName = model.FirstName,
                        IsAdmin = false,
                        LastName = model.LastName,
                        UserName = model.UserName,
                        PhoneNumber = model.Phone,
                        PhoneNumberConfirmed = !string.IsNullOrEmpty(model.Phone)
                    };
                    user.PasswordHash = _userManager.PasswordHasher.HashPassword(user, model.Password);

                    //  Check that user is not already there
                    var existingUser = await _userManager.FindByNameAsync(model.UserName);
                    if (existingUser != null)
                    {
                        ModelState.AddModelError("", "User already exists");
                        return View();
                    }

                    var result = await _userManager.CreateAsync(user, model.Password);
                    if (result.Succeeded)
                    {
                        result = await _userManager.AddToRoleAsync(user, "user");
                    }
                    else
                    {
                        //  This will show things like bad password
                        foreach (var err in result.Errors)
                        {
                            ModelState.AddModelError("", err.Description);
                        }
                        return View();
                    }

                    //  Create the customer if we got this far
                    var customer = _mapper.Map<RegisterViewModel, Customer>(model);
                    var result2 = _customerRepository.Save(customer);
                    if (result2 != 0)
                    {
                        return RedirectToAction("Login", "Account");
                    }
                }
                return View();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save customer: {ex}");
                return BadRequest("Failed to save customer");
            }
        }

        [HttpGet]
        [Route("Account/ResetPassword")]
        public IActionResult ResetPassword()
        {
            return View();
        }

        [HttpPost]
        [Route("Account/ResetPassword")]
        public async Task<IActionResult> ResetPassword(ResetPasswordViewModel model)
        {
            //  Check passwords for equality
            if (model.NewPassword != model.NewPasswordConfirm)
            {
                ModelState.AddModelError("", "Passwords do not match");
            }

            if (ModelState.IsValid)
            {
                //  Check that user is not already there
                var user = await _userManager.FindByNameAsync(model.UserName);
                if (user == null)
                {
                    ModelState.AddModelError("", "User not found");
                    return View();
                }
                else
                {
                    var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
                    if (result.Succeeded)
                    {
                        return RedirectToAction("Login", "Account");
                    }
                    else
                    {
                        foreach (var err in result.Errors)
                        {
                            ModelState.AddModelError("", err.Description);
                        }
                    }
                }

            }
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> CreateToken([FromBody] LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(model.Username);

                if (user != null)
                {
                    var result = await _signInManager.CheckPasswordSignInAsync(user, model.Password, false);

                    if (result.Succeeded)
                    {
                        // Create the token
                        var claims = new[]
                        {
                            new Claim(JwtRegisteredClaimNames.Sub, user.Email),
                            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                            new Claim(ClaimTypes.Name, user.UserName)
                        };

                        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]));
                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var token = new JwtSecurityToken(
                            _config["Tokens:Issuer"],
                            _config["Tokens:Audience"],
                            claims,
                            expires: System.DateTime.Now.AddMinutes(60),
                            signingCredentials: creds);

                        var results = new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(token),
                            expiration = token.ValidTo
                        };

                        return Created("", results);
                    }
                }
            }
            return BadRequest();
        }
    }
}