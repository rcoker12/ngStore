using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.ViewModels;

namespace ngStore.Controllers.Api
{
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly ILogger<UsersController> _logger;
        private readonly IMapper _mapper;

        public UsersController(IUserRepository userRepository, ILogger<UsersController> logger, IMapper mapper)
        {
            _userRepository = userRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/users")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_userRepository.GetAll());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get users: {ex}");
                return BadRequest("Failed to get users");
            }
        }

        [HttpGet]
        [Route("api/user/{id}")]
        public IActionResult Get(string id)
        {
            try
            {
                return Ok(_userRepository.Get(id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get user: {ex}");
                return BadRequest("Failed to get user");
            }
        }

        [HttpPost]
        [Route("api/user")]
        public IActionResult Post([FromBody]UserViewModel model)
        {
            try
            {
                var user = _mapper.Map<UserViewModel, User>(model);
                return Ok(_userRepository.Save(user));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save user: {ex}");
                return BadRequest("Failed to save user");
            }
        }

        [HttpPost]
        [Route("api/user/delete")]
        public IActionResult Delete([FromBody]UserViewModel model)
        {
            try
            {
                var user = _mapper.Map<UserViewModel, User>(model);
                return Ok(_userRepository.Delete(user.Id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete user: {ex}");
                return BadRequest("Failed to delete user");
            }
        }
    }
}