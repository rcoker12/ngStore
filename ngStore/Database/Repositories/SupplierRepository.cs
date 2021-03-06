﻿using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace ngStore.Database.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<SupplierRepository> _logger;

        public SupplierRepository(ngStoreContext ctx, ILogger<SupplierRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public int Delete(int id)
        {
            try
            {
                _logger.LogInformation("Delete<Supplier> was called");
                var result = 0;
                var s = _ctx.Suppliers.Find(id);
                if (s != null)
                {
                    _ctx.Suppliers.Remove(s);
                    result = _ctx.SaveChanges();
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete supplier: {ex}");
                return 0;
            }
        }

        public int DeleteProduct(Supplier entity, int productId)
        {
            try
            {
                _logger.LogInformation("Delete<SupplierProduct> was called");
                var result = 0;
                var supplier = Get(entity.Id);

                if (supplier != null)
                {
                    var product = supplier.Products.Where(p => p.Id == productId).FirstOrDefault();
                    if (product != null)
                    {
                        supplier.Products.Remove(product);
                        result = _ctx.SaveChanges();
                    }
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete supplier product: {ex}");
                return 0;
            }
        }

        public Supplier Get(int id)
        {
            try
            {
                _logger.LogInformation("Get<Supplier> was called");
                return _ctx.Suppliers
                    .Include(s => s.Products)
                    .Where(s => s.Id == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get supplier: {ex}");
                return null;
            }
        }

        public IEnumerable<Supplier> GetAll()
        {
            try
            {
                _logger.LogInformation("GetAll<Supplier> was called");
                return _ctx.Suppliers
                    .Include(s => s.Products)
                    .OrderBy(s => s.CompanyName);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all suppliers: {ex}");
                return null;
            }
        }

        public int Save(Supplier supplier)
        {
            try
            {
                var products = supplier.Products;
                if (supplier.Id == 0)
                {
                    _ctx.Add(supplier);
                }
                else
                {
                    var allSuppliers = _ctx.Suppliers.Include(p => p.Products);
                    var s = allSuppliers.First(i => i.Id == supplier.Id);
                    if (s != null)
                    {
                        s.Id = supplier.Id;
                        s.City = supplier.City;
                        s.CompanyName = supplier.CompanyName;
                        s.ContactName = supplier.ContactName;
                        s.ContactTitle = supplier.ContactTitle;
                        s.Country = supplier.Country;
                        s.Fax = supplier.Fax;
                        s.Phone = supplier.Phone;
                    }
                }
                supplier.Products = null;
                _ctx.SaveChanges();

                //  Save products, these are adds only. Supplier form doesn't allow product edits. 
                foreach (var product in products)
                {
                    var p = _ctx.Products.Find(product.Id);
                    if (p != null)
                    {
                        p.SupplierId = supplier.Id;
                    }
                }
                _ctx.SaveChanges();
                return supplier.Id;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save supplier: {ex}");
                return 0;
            }
        }
    }
}
