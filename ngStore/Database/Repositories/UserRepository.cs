using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ngStore.Database.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<UserRepository> _logger;

        public UserRepository(ngStoreContext ctx, ILogger<UserRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public int Delete(string id)
        {
            try
            {
                _logger.LogInformation("Delete<User> was called");
                var result = 0;
                var u = _ctx.Users.Find(id);
                if (u != null)
                {
                    _ctx.Users.Remove(u);
                    result = _ctx.SaveChanges();
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete user: {ex}");
                return 0;
            }
        }

        public User Get(string id)
        {
            try
            {
                id = id.Trim('"');
                _logger.LogInformation("Get<User> was called");
                var user = _ctx.Users
                    .Include(u => u.Orders)
                    .Where(u => u.Id == id)
                    .FirstOrDefault();
                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get supplier: {ex}");
                return null;
            }
        }

        public IEnumerable<User> GetAll()
        {
            try
            {
                _logger.LogInformation("GetAll<User> was called");
                var users = _ctx.Users
                    .Include(u => u.Orders)
                    .OrderBy(u => u.UserName);
                return users;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all users: {ex}");
                return null;
            }
        }

        public User Save(User user)
        {
            try
            {
                if (user.Id == null)
                {
                    _ctx.Add(user);
                }
                else
                {
                    var u = _ctx.Users.Find(user.Id);
                    if (u != null)
                    {
                        u.Email = user.Email;
                        u.FirstName = user.FirstName;
                        u.Id = user.Id;
                        u.IsAdmin = user.IsAdmin;
                        u.LastName = user.LastName;
                        u.Orders = user.Orders;
                        u.PasswordHash = user.PasswordHash;
                        u.PhoneNumber = user.PhoneNumber;
                        u.PhoneNumberConfirmed = true;
                        u.UserName = user.UserName;
                    }
                }
                _ctx.SaveChanges();
                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save user: {ex}");
                return null;
            }
        }
    }
}
