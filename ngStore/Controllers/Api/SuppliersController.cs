using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Interfaces;

namespace ngStore.Controllers.Api
{
    [ApiController]
    public class SuppliersController : ControllerBase
    {
        private readonly ISupplierRepository _supplierRepository;
        private readonly ILogger<SuppliersController> _logger;

        public SuppliersController(ISupplierRepository supplierRepository, ILogger<SuppliersController> logger)
        {
            _supplierRepository = supplierRepository;
            _logger = logger;
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
    }
}