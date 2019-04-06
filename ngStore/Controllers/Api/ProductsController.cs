using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.Database.Repositories;

namespace ngStore.Controllers.Api
{
    [ApiController]
    public class ProductsController : Controller
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductsController> _logger;
        private readonly IMapper _mapper;

        public ProductsController(IProductRepository productRepository, ILogger<ProductsController> logger, IMapper mapper)
        {
            _productRepository = productRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/products")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_productRepository.GetAll());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get products: {ex}");
                return BadRequest("Failed to get products");
            }
        }

        [HttpGet]
        [Route("api/product/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_productRepository.Get(id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get product: {ex}");
                return BadRequest("Failed to get product");
            }
        }

        [HttpPost]
        [Route("api/product")]
        public IActionResult Post([FromBody]ProductViewModel model)
        {
            try
            {
                var product = _mapper.Map<ProductViewModel, Product>(model);
                return Ok(_productRepository.Save(product));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save product: {ex}");
                return BadRequest("Failed to save product");
            }
        }

        [HttpPost]
        [Route("api/product/delete")]
        public IActionResult Delete([FromBody]ProductViewModel model)
        {
            try
            {
                var product = _mapper.Map<ProductViewModel, Product>(model);
                return Ok(_productRepository.Delete(product.Id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete product: {ex}");
                return BadRequest("Failed to delete product");
            }
        }
    }
}