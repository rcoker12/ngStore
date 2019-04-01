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
    [Route("api/customers")]
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

        [HttpPost]
        public IActionResult Post([FromBody]CustomerViewModel model)
        {
            try
            {
                var customer = _mapper.Map<CustomerViewModel, Customer>(model);

                if (ModelState.IsValid)
                {
                    var result = _customerRepository.Save(customer);
                    if (result != 0)
                    {
                        return Created($"/api/customers/{customer.Id}", _mapper.Map<Customer, CustomerViewModel>(customer));
                    }
                    {
                        return BadRequest(ModelState);
                    }
                }
                else
                {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save customer: {ex}");
                return BadRequest("Failed to save customer");
            }
        }
    }
}