using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ngStore.Database.Entities;

namespace ngStore.ViewModels
{
    public class UserViewModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAdmin { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
