using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace ngStore.Database.Repositories
{
    public class SupplierRepository : ISupplierRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<SupplierRepository> _logger;

        public SupplierRepository(ngStoreContext ctx, ILogger<SupplierRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public int Delete(int id)
        {
            throw new NotImplementedException();
        }

        public Supplier Get(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Supplier> GetAll()
        {
            throw new NotImplementedException();
        }

        public void Save(Supplier entity)
        {
            throw new NotImplementedException();
        }
    }
}
