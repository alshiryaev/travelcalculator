using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using TravelCalculator.Domain.Models;

namespace TravelCalculator.Domain
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductDish>()
                .HasKey(t => new { t.ProductId, t.DishId });

            modelBuilder.Entity<ProductDish>()
                .HasOne(sc => sc.Product)
                .WithMany(s => s.ProductDish)
                .HasForeignKey(sc => sc.ProductId);

            modelBuilder.Entity<ProductDish>()
                .HasOne(sc => sc.Dish)
                .WithMany(c => c.ProductDish)
                .HasForeignKey(sc => sc.DishId);
        }

        public DbSet<Product> Products { get; set; }

        public DbSet<Dish> Dishes { get; set; }
    }
}
