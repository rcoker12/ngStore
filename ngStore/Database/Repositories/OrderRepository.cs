using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace ngStore.Database.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<OrderRepository> _logger;

        public OrderRepository(ngStoreContext ctx, ILogger<OrderRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
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
