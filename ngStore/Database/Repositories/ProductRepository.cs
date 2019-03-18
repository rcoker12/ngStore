using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database.Repositories
{
    public class ProductRepository : IBaseRepository<Product>, IProductRepository
    {
        private readonly ngStoreContext _ctx;

        public ProductRepository(ngStoreContext ctx)
        {
            _ctx = ctx;
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Product Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<Product> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Save(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}
