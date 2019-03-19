using System.Collections.Generic;
using ngStore.Database.Entities;

namespace ngStore.Database.Interfaces
{
    public interface ISupplierRepository
    {
        int Delete(int id);
        Supplier Get(int id);
        IEnumerable<Supplier> GetAll();
        void Save(Supplier entity);
    }
}