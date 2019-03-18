using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<ProductRepository> _logger;

        public ProductRepository(ngStoreContext ctx, ILogger<ProductRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Product Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetAll()
        {
            try
            {
                _logger.LogInformation("GetAll<Product> was called");
                return _ctx.Products
                    .Include(p => p.Supplier)
                    .OrderBy(p => p.ProductName);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all products: {ex}");
                return null;
            }
        }

        public void Save(Product entity)
        {
            throw new NotImplementedException();
        }
    }
}
