import React, { Component } from 'react';
import './Recipes.css';
import FoodService from '../../services/foodService';
import Table from '../Table/Table';

class Recipes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recipes: []
    }
  }

  foodService = new FoodService();

  async getReceipes() {
    const { data } = await this.foodService.getRecipes();
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
        <Table
          headers={['Название', 'Рецепт']}
          items={['name', 'description']}
          isAdmin={false}
          source={recipes} />
      </div>
    );
  }
}

export default Recipes;
