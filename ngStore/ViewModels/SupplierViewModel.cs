﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ngStore.Database.Entities;

namespace ngStore.ViewModels
{
    public class SupplierViewModel
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string ContactTitle { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Phone { get; set; }
        public string Fax { get; set; }
        public ICollection<Product> Products { get; set; }
        public Product Product { get; set; }
    }
}
