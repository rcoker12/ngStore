using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ngStore.Controllers
{
    public class CmsController : BaseController
    {
        public IActionResult Index()
        {
            //  Identity user not set until the controller default constructor is called
            SetLayout();
            return View();
        }
    }
}