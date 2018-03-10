using System;
using System.Collections.Generic;
using System.Text;
using TravelCalculator.Domain.Models;
using System.Linq;

namespace TravelCalculator.Domain.Repositories
{
    public class ProductRepository
    {
        private readonly ApplicationContext _applicationContext;

        public ProductRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public IEnumerable<Product> GetProducts()
        {
            return _applicationContext.Products.AsEnumerable();
        }
    }
}
