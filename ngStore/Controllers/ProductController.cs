using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.Database.Repositories;

namespace ngStore.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductRepository productRepository, ILogger<ProductController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;
        }

        public IActionResult Products()
        {
            ViewBag.Layout = "~/Views/Shared/_Layout.cshtml";
            return View("Index");
        }

        public IActionResult CmsProduct()
        {
            SetLayout();
            return View();
        }

        [Route("product/{id}")]
        public IActionResult Product()
        {
            SetLayout();
            return View();
        }
    }
}