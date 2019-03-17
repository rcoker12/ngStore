using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngStore.Database.Interfaces
{
    public interface IBaseRepository<T>
    {
        T Get(int id);
        List<T> GetAll();
        void Save(T entity);
        int Delete(int id);
    }
}
