using ngStore.Database.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.ViewModels
{
    public class OrderItemViewModel
    {
        public int Id { get; set; }
        [Required]
        public int OrderId { get; set; }
        [Required]
        public Product Product { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
        [Required]
        public int Quantity { get; set; }
    }
}
