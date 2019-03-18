using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database.Repositories
{
    public class OrderRepository : IBaseRepository<Order>, IOrderRepository
    {
        private readonly ngStoreContext _ctx;

        public OrderRepository(ngStoreContext ctx)
        {
            _ctx = ctx;
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Order Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<Order> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Save(Order entity)
        {
            throw new NotImplementedException();
        }
    }
}
