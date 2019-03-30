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
    public class SupplierController : Controller
    {
        private readonly ISupplierRepository _supplierRepository;
        private readonly ILogger<SupplierController> _logger;

        public SupplierController(ISupplierRepository supplierRepository, ILogger<SupplierController> logger)
        {
            _supplierRepository = supplierRepository;
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
    }
}