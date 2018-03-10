﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using TravelCalculator.Domain;
using TravelCalculator.Domain.Models;

namespace TravelCalculator.Domain.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20180307185203_Initial")]
    partial class Initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("TravelCalculator.Domain.Models.Dish", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .HasMaxLength(1000);

                    b.Property<string>("Name")
                        .HasMaxLength(50);

                    b.Property<int>("Period");

                    b.HasKey("Id");

                    b.ToTable("Dishes");
                });

            modelBuilder.Entity("TravelCalculator.Domain.Models.Product", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<double>("Calories");

                    b.Property<double>("Carbohydrates");

                    b.Property<string>("Description")
                        .HasMaxLength(1000);

                    b.Property<double>("Fat");

                    b.Property<string>("Name")
                        .HasMaxLength(50);

                    b.Property<double>("Protein");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("TravelCalculator.Domain.Models.ProductDish", b =>
                {
                    b.Property<Guid>("ProductId");

                    b.Property<Guid>("DishId");

                    b.HasKey("ProductId", "DishId");

                    b.HasIndex("DishId");

                    b.ToTable("ProductDish");
                });

            modelBuilder.Entity("TravelCalculator.Domain.Models.ProductDish", b =>
                {
                    b.HasOne("TravelCalculator.Domain.Models.Dish", "Dish")
                        .WithMany("ProductDish")
                        .HasForeignKey("DishId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("TravelCalculator.Domain.Models.Product", "Product")
                        .WithMany("ProductDish")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
