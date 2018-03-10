using System;
using System.Collections.Generic;
using System.Text;

namespace TravelCalculator.Domain.Models
{
    /// <summary>
    /// Блюдо
    /// </summary>
    public class Dish : BaseEntity
    {
        public List<ProductDish> ProductDish { get; set; }
      
        public Period Period { get; set; }
    }
}
