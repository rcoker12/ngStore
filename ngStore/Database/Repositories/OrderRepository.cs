using ngStore.Database.Entities;
using ngStore.Database.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System.Collections.ObjectModel;

namespace ngStore.Database.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly ngStoreContext _ctx;
        private readonly ILogger<OrderRepository> _logger;

        public OrderRepository(ngStoreContext ctx, ILogger<OrderRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public int Delete(int id)
        {
            try
            {
                _logger.LogInformation("Delete<Order> was called");
                var result = 0;
                var o = _ctx.Orders.Find(id);
                if (o != null)
                {
                    _ctx.Orders.Remove(o);
                    result = _ctx.SaveChanges();
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete order: {ex}");
                return 0;
            }

        }

        public int DeleteItem(Order entity, int orderItemId)
        {
            try
            {
                _logger.LogInformation("Delete<OrderItem> was called");
                var result = 0;
                var order = Get(entity.Id);

                if (order != null)
                {
                    var item = order.OrderItems.Where(i => i.Id == orderItemId).FirstOrDefault();
                    if (item != null)
                    {
                        order.OrderItems.Remove(item);
                        result = _ctx.SaveChanges();
                    }
                }
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to delete order item: {ex}");
                return 0;
            }
        }

        public Order Get(int id)
        {
            try
            {
                _logger.LogInformation("Get<Order> was called");
                return _ctx.Orders
                    .Include(o => o.OrderItems)
                    .ThenInclude(i => i.Product)
                    .Include(c => c.Customer)
                    .Where(o => o.Id == id)
                    .FirstOrDefault();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get order: {ex}");
                return null;
            }
        }

        public IEnumerable<Order> GetAll()
        {
            try
            {
                _logger.LogInformation("GetAll<Order> was called");
                return _ctx.Orders
                    .Include(i => i.OrderItems)
                    .Include(c => c.Customer)
                    .OrderBy(o => o.OrderDate);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to get all orders: {ex}");
                return null;
            }
        }

        public string GetNextOrderNumber()
        {
            var orders = _ctx.Orders.OrderByDescending(o => o.OrderNumber);
            var max = orders.FirstOrDefault().OrderNumber;
            var orderNumber = Convert.ToInt64(max) + 1;
            return orderNumber.ToString();
        }

        public int Save(Order order)
        {
            try
            {
                if (order.Id == 0)
                {
                    foreach (var item in order.OrderItems)
                    {
                        item.Product = null;
                    }
                    order.Customer = null;
                    _ctx.Add(order);
                }
                else
                {
                    var o = _ctx.Orders.Find(order.Id);
                    if (o != null)
                    {
                        o.Id = order.Id;
                        o.CustomerId = order.CustomerId;
                        o.OrderDate = order.OrderDate;
                        o.OrderNumber = order.OrderNumber;
                        o.TotalAmount = order.TotalAmount;
                    }
                }
                _ctx.SaveChanges();
                foreach (var item in order.OrderItems)
                {
                    item.Product = null;
                    if (item.Id == 0)
                    {
                        _ctx.OrderItems.Add(item);
                    }
                    else
                    {
                        var i = _ctx.OrderItems.Find(item.Id);
                        i.OrderId = item.OrderId;
                        i.ProductId = item.ProductId;
                        i.UnitPrice = item.UnitPrice;
                        i.Quantity = item.Quantity;
                        i.Product = null;
                    }
                }
                _ctx.SaveChanges();
                return order.Id;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Failed to save order: {ex}");
                return 0;
            }
        }
    }
}
