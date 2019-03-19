using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface ISupplierRepository
    {
        int Delete(int id);
        Supplier Get(int id);
        IEnumerable<Supplier> GetAll();
        int Save(Supplier entity);
    }
}