import React, { Component } from 'react';
import './Recipes.css';
import Table from '../Table/Table';

class Recipes extends Component { 
  
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { recipes } = this.props;
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
