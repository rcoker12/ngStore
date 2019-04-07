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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;
        private readonly ILogger<CustomersController> _logger;
        private readonly IMapper _mapper;

        public CustomersController(ICustomerRepository customerRepository, ILogger<CustomersController> logger, IMapper mapper)
        {
            _customerRepository = customerRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("api/customers")]
        public IActionResult Get()
        {
            try
            {
                return Ok(_customerRepository.GetAll());
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get customers: {ex}");
                return BadRequest("Failed to get customers");
            }
        }

        [HttpGet]
        [Route("api/customer/{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                return Ok(_customerRepository.Get(id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get customer: {ex}");
                return BadRequest("Failed to get customer");
            }
        }

        [HttpPost]
        [Route("api/customer")]
        public IActionResult Post([FromBody]CustomerViewModel model)
        {
            try
            {
                var customer = _mapper.Map<CustomerViewModel, Customer>(model);
                return Ok(_customerRepository.Save(customer));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save customer: {ex}");
                return BadRequest("Failed to save customer");
            }
        }

        [HttpPost]
        [Route("api/customer/delete")]
        public IActionResult Delete([FromBody]CustomerViewModel model)
        {
            try
            {
                var customer = _mapper.Map<CustomerViewModel, Customer>(model);
                return Ok(_customerRepository.Delete(customer.Id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete customer: {ex}");
                return BadRequest("Failed to delete customer");
            }
        }

        [HttpPost]
        [Route("api/customer/deleteOrder")]
        public IActionResult DeleteOrder([FromBody]CustomerViewModel model)
        {
            try
            {
                var customer = _mapper.Map<CustomerViewModel, Customer>(model);
                return Ok(_customerRepository.DeleteOrder(customer, model.Order.Id));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete supplier product: {ex}");
                return BadRequest("Failed to delete supplier product");
            }
        }
    }
}