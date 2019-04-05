using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.ViewModels;

namespace ngStore.Controllers.Api
{
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly ISupplierRepository _supplierRepository;
        private readonly ILogger<SuppliersController> _logger;
        private readonly IMapper _mapper;

        public SuppliersController(ISupplierRepository supplierRepository, ILogger<SuppliersController> logger, IMapper mapper)
        {
            _supplierRepository = supplierRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/suppliers")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_supplierRepository.GetAll());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get suppliers: {ex}");
                return BadRequest("Failed to get suppliers");
            }
        }

        [HttpGet]
        [Route("api/supplier/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_supplierRepository.Get(id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get supplier: {ex}");
                return BadRequest("Failed to get supplier");
            }
        }

        [HttpPost]
        [Route("api/supplier")]
        public IActionResult Post([FromBody]SupplierViewModel model)
        {
            try
            {
                var supplier = _mapper.Map<SupplierViewModel, Supplier>(model);
                return Ok(_supplierRepository.Save(supplier));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save supplier: {ex}");
                return BadRequest("Failed to save supplier");
            }
        }

        [HttpPost]
        [Route("api/supplier/deleteProduct")]
        public IActionResult DeleteProduct([FromBody]SupplierViewModel model)
        {
            try
            {
                var supplier = _mapper.Map<SupplierViewModel, Supplier>(model);
                return Ok(_supplierRepository.DeleteProduct(supplier, model.Product.Id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete supplier product: {ex}");
                return BadRequest("Failed to delete supplier product");
            }
        }
    }
}