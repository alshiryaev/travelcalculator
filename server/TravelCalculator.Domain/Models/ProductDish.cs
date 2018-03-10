using System;
using System.Collections.Generic;
using System.Text;

namespace TravelCalculator.Domain.Models
{
    public class ProductDish
    {
        public Guid ProductId { get; set; }
        public Product Product { get; set; }

        public Guid DishId { get; set; }
        public Dish Dish { get; set; }
    }
}
