using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ngStore.Controllers
{
    public class BaseController : Controller
    {
        // Method for setting the layout
        protected void SetLayout()
        {
            // For CMS users
            if (User.Identity.IsAuthenticated && User.IsInRole("admin"))
            {
                ViewBag.Layout = "~/Views/Shared/_CmsLayout.cshtml";
                return;
            }
            else
            {
                ViewBag.Layout = "~/Views/Shared/_Layout.cshtml";
                return;
            }
        }
    }
}