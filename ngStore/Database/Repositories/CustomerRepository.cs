using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database.Repositories
{
    public class CustomerRepository : IBaseRepository<Customer>, ICustomerRepository
    {
        private readonly ngStoreContext _ctx;

        public CustomerRepository(ngStoreContext ctx)
        {
            _ctx = ctx;
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
