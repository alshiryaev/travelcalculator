using System;
using System.Collections.Generic;
using System.Text;

namespace TravelCalculator.Domain.Models
{
    /// <summary>
    /// Продукт
    /// </summary>
    public class Product : BaseEntity
    {
        /// <summary>
        /// Жиры
        /// </summary>
        public double Fat { get; set; }

        /// <summary>
        /// Белки
        /// </summary>
        public double Protein { get; set; }

        /// <summary>
        /// Углеводы
        /// </summary>
        public double Carbohydrates { get; set; }

        /// <summary>
        /// Калорийность
        /// </summary>
        public double Calories { get; set; }

        /// <summary>
        /// В состав какого блюда входит
        /// </summary>
        public List<ProductDish> ProductDish { get; set; }
    }
}
