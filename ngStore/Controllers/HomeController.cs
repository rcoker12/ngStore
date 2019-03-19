using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Interfaces;

namespace ngStore.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductsController> _logger;

        public HomeController(IProductRepository productRepository, ILogger<ProductsController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [Authorize]
        public IActionResult Products()
        {
            var results = _productRepository.GetAll();
            return View(results);
        }
    }
}