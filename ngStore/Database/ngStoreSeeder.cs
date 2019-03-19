using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using ngStore.Database.Entities;
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

        public ngStoreSeeder(ngStoreContext context, IHostingEnvironment hosting, UserManager<User> userManager)
        {
            _ctx = context;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();

            //  Seed admin user
            User user = await _userManager.FindByEmailAsync("admin@ngStore.com");
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
            }

        }
    }
}