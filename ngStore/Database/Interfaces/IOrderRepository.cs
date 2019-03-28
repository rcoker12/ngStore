using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface IOrderRepository
    {
        int Delete(int id);
        Order Get(int id);
        IEnumerable<Order> GetAll();
        int Save(Order entity);
        string GetNextOrderNumber();
    }
}