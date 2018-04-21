using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TravelCalculator.Domain;
using TravelCalculator.Domain.Models;
using TravelCalculator.Domain.Repositories;

namespace TravelCalculator.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ProductRepository _productRepository;

        public ProductsController(ProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productRepository.GetProducts());
        }

        [HttpPost]
        public IActionResult Post([FromBody]Product product)
        {
            _productRepository.AddNewProduct(product);
            return Ok();
        }

        [HttpDelete]        
        public IActionResult Delete(Guid id)
        {
            _productRepository.DeleteProduct(id);
            return Ok();
        }

        [HttpPut]
        public IActionResult Put([FromBody]Product product)
        {
            _productRepository.ChangeProduct(product);
            return Ok();
        }
    }
}
