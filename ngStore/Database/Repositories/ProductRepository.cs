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
            try
            {
                _logger.LogInformation("Delete<Product> was called");
                var result = 0;
                var p = _ctx.Products.Find(id);
                if (p != null)
                {
                    _ctx.Products.Remove(p);
                    result = _ctx.SaveChanges();
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete product: {ex}");
                return 0;
            }
        }

        public Product Get(int id)
        {
            try
            {
                _logger.LogInformation("Get<Product> was called");
                return _ctx.Products
                    .Include(p => p.Supplier)
                    .Where(p => p.Id == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get product: {ex}");
                return null;
            }
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

        public int Save(Product product)
        {
            try
            {
                if (product.Id == 0)
                {
                    _ctx.Add(product);
                }
                else
                {
                    var p = _ctx.Products.Find(product.Id);
                    if (p != null)
                    {
                        p.Id = product.Id;
                        p.IsDiscontinued = product.IsDiscontinued;
                        p.Package = product.Package;
                        p.ProductName = product.ProductName;
                        p.Supplier = product.Supplier;
                        p.SupplierId = product.SupplierId;
                        p.UnitPrice = product.UnitPrice;
                    }
                }
                _ctx.SaveChanges();
                return product.Id;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save product: {ex}");
                return 0;
            }
        }
    }
}
