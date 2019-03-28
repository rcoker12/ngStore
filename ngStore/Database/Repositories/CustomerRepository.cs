using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace ngStore.Database.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<CustomerRepository> _logger;

        public CustomerRepository(ngStoreContext ctx, ILogger<CustomerRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Customer Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> GetAll()
        {
            throw new NotImplementedException();
        }

        public int Save(Customer customer)
        {
            if (customer.Id == 0)
            {
                _ctx.Add(customer);
            }
            else
            {
                var c = _ctx.Customers.Find(customer.Id);
                if (c != null)
                {
                    c.FirstName = customer.FirstName;
                    c.LastName = customer.LastName;
                    c.City = customer.City;
                    c.Country = customer.Country;
                    c.Phone = customer.Phone;
                }

            }
            return _ctx.SaveChanges();
        }

        public Customer GetCustomerByName(string firstName, string lastName)
        {
            var customer = _ctx.Customers.Where(c => c.FirstName == firstName && c.LastName == lastName).FirstOrDefault();
            return customer;
        }
    }
}
