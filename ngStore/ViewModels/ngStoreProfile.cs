using AutoMapper;
using ngStore.Database.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.ViewModels
{
    public class ngStoreProfile : Profile
    {
        public ngStoreProfile()
        {
            CreateMap<Order, OrderViewModel>().ReverseMap();
            CreateMap<OrderItem, OrderItemViewModel>().ReverseMap();
            CreateMap<Customer, CustomerViewModel>().ReverseMap();
            CreateMap<Customer, RegisterViewModel>().ReverseMap();
        }
    }
}
