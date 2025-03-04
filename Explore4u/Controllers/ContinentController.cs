using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace ExploreMeNow.Controllers
{
    //[Microsoft.AspNetCore.Authorization.Authorize]
    public class ContinentController : Controller
    {
        public IActionResult USA()
        {
            return View();
        }

        public IActionResult Europe()
        {
            return View();
        }

        public IActionResult Canada()
        {
            return View();
        }

        public IActionResult Asia()
        {
            return View();
        }

        public IActionResult Africa()
        {
            return View();
        }

        public IActionResult Australia()
        {
            return View();
        }

        public IActionResult SouthAmerica()
        {
            return View();
        }

        public IActionResult CentralAmerica()
        {
            return View();
        }
    }
}