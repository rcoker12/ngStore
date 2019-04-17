using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface IUserRepository
    {
        int Delete(string id);
        User Get(string id);
        IEnumerable<User> GetAll();
        User Save(User entity);
    }
}