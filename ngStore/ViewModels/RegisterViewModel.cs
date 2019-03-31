using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.ViewModels
{
    public class RegisterViewModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string PasswordConfirm { get; set; }
        [Required]
        public string Email { get; set; }
        public bool IsAdmin { get; set; }
        public string PhoneNumber { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }
}
