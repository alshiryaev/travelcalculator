import React, { Component } from 'react';
import './Food.css';
import FoodService from '../../../services/foodService';
import Table from '../../Table/Table';
import { Button } from '../../shared/Button/Button';

class Food extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      openEditDialog: false,
      foods: [],
    };
  }

  foodService = new FoodService();

  async getFoods() {
    const { data: foods } = await this.foodService.getFoods();
    this.setState({
      foods: foods,
    });
  }

  componentDidMount() {
    this.getFoods();
  }

  render() {
    const { foods } = this.state;
    return (
      <div>
        <Button className="btn add-button" to={`/admin/addfood`}>
          {' '}
          Добавить{' '}
        </Button>
        <Table
          headers={[
            'Название',
            'Время приема',
            'Тип похода, г',
            'Рецепт',
            'Ингредиенты',
          ]}
          items={[
            'name',
            'dayTimeTypes',
            'travelTypes',
            'recipe',
            'ingredients',
          ]}
          isAdmin={true}
          converters={{
            dayTimeTypes: dayTimeTypes =>
              dayTimeTypes.map(dayTimeType => (
                <div key={dayTimeType.id}>{dayTimeType.name}</div>
              )),
            travelTypes: travelTypes =>
              travelTypes.map(travelType => (
                <div key={travelType.id}>{travelType.name}</div>
              )),
            ingredients: ingredients =>
              ingredients.map(ingredient => {
                const { product, quantity } = ingredient;
                return (
                  <div
                    key={ingredient.id}>{`${product.name} - ${quantity}`}</div>
                );
              }),
            recipe: recipe => recipe.description,
          }}
          source={foods}
        />
      </div>
    );
  }
}

export default Food;
