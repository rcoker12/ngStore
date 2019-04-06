using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface ICustomerRepository
    {
        int Delete(int id);
        Customer Get(int id);
        IEnumerable<Customer> GetAll();
        Customer GetCustomerByName(string firstName, string lastName);
        int Save(Customer customer);
        int DeleteOrder(Customer entity, int orderId);
    }
}