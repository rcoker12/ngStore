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

        public List<Customer> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Save(Customer entity)
        {
            throw new NotImplementedException();
        }
    }
}
