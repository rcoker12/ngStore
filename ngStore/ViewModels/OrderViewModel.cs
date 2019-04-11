using ngStore.Database.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.ViewModels
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        [Required]
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        [Required]
        public Customer Customer { get; set; }
        public int CustomerId { get; set; }
        [Required]
        public decimal TotalAmount { get; set; }

        public ICollection<OrderItemViewModel> OrderItems { get; set; }
        public OrderItem OrderItem { get; set; }
    }
}
