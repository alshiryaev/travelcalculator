import React, { Component } from 'react';
import './Recipes.css';
import FoodService from '../../services/foodService';

class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  foodService = new FoodService();

  async getReceipes() {
    const {data} = await this.foodService.getRecipes();   
    this.setState({
      recipes: data
    })
  }

  componentDidMount() {
    this.getReceipes();
  }

  render() {
    const { recipes } = this.state;
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <td>Название</td>
              <td>Рецепт</td>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) =>
              <tr key={index}>
                <td>{recipe.name}</td>
                <td>{recipe.description}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Recipes;
