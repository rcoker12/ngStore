﻿using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface IProductRepository
    {
        int Delete(int id);
        Product Get(int id);
        List<Product> GetAll();
        void Save(Product entity);
    }
}