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
            try
            {
                _logger.LogInformation("Delete<Customer> was called");
                var result = 0;
                var s = _ctx.Customers.Find(id);
                if (s != null)
                {
                    _ctx.Customers.Remove(s);
                    result = _ctx.SaveChanges();
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete customer: {ex}");
                return 0;
            }
        }

        public Customer Get(int id)
        {
            try
            {
                _logger.LogInformation("Get<Customer> was called");
                return _ctx.Customers
                    .Include(c => c.Orders)
                    .ThenInclude(o => o.OrderItems)
                    .ThenInclude(p => p.Product)
                    .Where(c => c.Id == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get customer: {ex}");
                return null;
            }
        }

        public IEnumerable<Customer> GetAll()
        {
            try
            {
                _logger.LogInformation("GetAll<Customer> was called");
                return _ctx.Customers
                    .Include(c => c.Orders)
                    .OrderBy(c => c.LastName);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all customers: {ex}");
                return null;
            }
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
