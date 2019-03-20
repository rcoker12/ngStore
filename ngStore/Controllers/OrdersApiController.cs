using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.ViewModels;

namespace ngStore.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    [Produces("application/json")]
    public class OrdersApiController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<OrdersApiController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public OrdersApiController(IOrderRepository orderRepository, ILogger<OrdersApiController> logger, IMapper mapper, UserManager<User> userManager)
        {
            _orderRepository = orderRepository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(_orderRepository.GetAll()));
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get orders: {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var order = _orderRepository.Get(id);
                if (order != null)
                {
                    return Ok(_mapper.Map<Order, OrderViewModel>(order));
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get order: {ex}");
                return BadRequest("Failed to get order");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]OrderViewModel model)
        {
            try
            {
                var user = await _userManager.FindByNameAsync(User.Identity.Name);
                var order = _mapper.Map<OrderViewModel, Order>(model);
                order.User = user;

                if (ModelState.IsValid)
                {
                    var result = _orderRepository.Save(order);
                    if (result != 0)
                    {
                        return Created($"/api/orders/{order.Id}", _mapper.Map<Order, OrderViewModel>(order));
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
                _logger.LogError($"Failed to save order: {ex}");
                return BadRequest("Failed to save order");
            }
        }
    }
}