using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.ViewModels;

namespace ngStore.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    [Produces("application/json")]
    public class OrdersController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<OrdersController> _logger;

        public OrdersController(IOrderRepository orderRepository, ILogger<OrdersController> logger)
        {
            _orderRepository = orderRepository;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_orderRepository.GetAll());
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
                    return Ok(order);
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
        public IActionResult Post([FromBody]OrderViewModel model)
        {
            try
            {
                var order = new Order()
                {
                    Id = model.Id,
                    OrderDate = model.OrderDate,
                    OrderNumber = model.OrderNumber,
                    TotalAmount = model.TotalAmount,
                    CustomerId = model.CustomerId
                };

                if (ModelState.IsValid)
                {
                    var result = _orderRepository.Save(order);
                    if (result != 0)
                    {
                        var vm = new OrderViewModel()
                        {
                            Id = order.Id,
                            OrderDate = order.OrderDate,
                            OrderNumber = order.OrderNumber,
                            TotalAmount = order.TotalAmount,
                            CustomerId = order.CustomerId
                        };
                        return Created($"/api/orders/{vm.Id}", vm);
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