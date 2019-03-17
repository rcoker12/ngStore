using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database.Repositories
{
    public class SupplierRepository : IBaseRepository<Supplier>
    {
        private readonly ngStoreContext _ctx;

        public SupplierRepository(ngStoreContext ctx)
        {
            _ctx = ctx;
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Supplier Get(int id)
        {
            throw new NotImplementedException();
        }

        public List<Supplier> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Save(Supplier entity)
        {
            throw new NotImplementedException();
        }
    }
}
