using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface IUserRepository
    {
        int Delete(int id);
        User Get(string id);
        IEnumerable<User> GetAll();
        string Save(User entity);
    }
}