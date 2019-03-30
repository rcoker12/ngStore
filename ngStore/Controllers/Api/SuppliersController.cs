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
    [Route("api/suppliers")]
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
    }
}