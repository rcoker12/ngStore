using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.Database.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database
{
    public class ngStoreSeeder
    {
        private readonly ngStoreContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ICustomerRepository _customerRepository;

        public ngStoreSeeder(ngStoreContext context, IHostingEnvironment hosting, UserManager<User> userManager, RoleManager<IdentityRole> roleManager, ICustomerRepository customerRepository)
        {
            _ctx = context;
            _hosting = hosting;
            _userManager = userManager;
            _roleManager = roleManager;
            _customerRepository = customerRepository;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();

            //  Seed roles
            await SeedRolesAsync();
            
            //  Seed admin user
            var user = await _userManager.FindByEmailAsync("admin@ngStore.com");
            if (user == null)
            {
                user = new User()
                {
                    LastName = "Smith",
                    FirstName = "John",
                    Email = "admin@ngStore.com",
                    UserName = "admin@ngStore.com",
                    IsAdmin = true
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create user in seeder");
                }
                await _userManager.AddToRoleAsync(user, "admin");
                await _userManager.AddToRoleAsync(user, "user");
            }
            else
            {
                bool inRole = await _userManager.IsInRoleAsync(user, "admin");
                if (!inRole)
                {
                    await _userManager.AddToRoleAsync(user, "admin");
                }

                inRole = await _userManager.IsInRoleAsync(user, "user");
                if (!inRole)
                {
                    await _userManager.AddToRoleAsync(user, "user");
                }
            }

            //  Seed user as customer
            var customer = _customerRepository.GetCustomerByName(user.FirstName, user.LastName);
            if (customer == null)
            {
                customer = new Customer()
                {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    City = "Chicago",
                    Country = "USA",
                    Phone = "312-564-9511"
                };
                _customerRepository.Save(customer);
            }
        }

        private async Task SeedRolesAsync()
        {
            var adminRole = await _roleManager.FindByNameAsync("admin");
            if (adminRole == null)
            {
                adminRole = new IdentityRole()
                {
                    Name = "admin",
                    NormalizedName = "Admin"
                };

                var result = await _roleManager.CreateAsync(adminRole);
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create admin role in seeder");
                }
            }

            var userRole = await _roleManager.FindByNameAsync("user");
            if (userRole == null)
            {
                userRole = new IdentityRole()
                {
                    Name = "user",
                    NormalizedName = "User"
                };

                var result = await _roleManager.CreateAsync(userRole);
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create user role in seeder");
                }
            }
        }
    }
}