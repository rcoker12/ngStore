using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface IOrderRepository
    {
        int Delete(int id);
        Order Get(int id);
        List<Order> GetAll();
        void Save(Order entity);
    }
}