using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TravelCalculator.Domain.Models
{
    public abstract class BaseEntity
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }
    }
}
