using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface ICustomerRepository
    {
        int Delete(int id);
        Customer Get(int id);
        IEnumerable<Customer> GetAll();
        void Save(Customer entity);
    }
}