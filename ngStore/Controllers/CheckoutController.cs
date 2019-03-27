using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using ngStore.Database.Repositories;

namespace ngStore.Controllers
{
    public class CartController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<CartController> _logger;

        public CartController(IOrderRepository orderRepository, ILogger<CartController> logger)
        {
            _orderRepository = orderRepository;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}