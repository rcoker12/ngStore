using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required]
        public string Password { get; set; }
        [Required]
        public string PasswordConfirm { get; set; }
    }
}
