using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.Database.Repositories;

namespace ngStore.Controllers
{
    [Route("api/[Controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductsController> _logger;

        public ProductsController(IProductRepository productRepository, ILogger<ProductsController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var results = _productRepository.GetAll();
            try
            {
                return _productRepository.GetAll();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return null;
            }
        }
    }
}