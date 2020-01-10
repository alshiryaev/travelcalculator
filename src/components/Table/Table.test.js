import React from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

const products = [
  {
    id: '1111',
    name: 'Молоко',
    protein: 2.8,
    fat: 3.2,
    carbohydrates: 4.7,
    calories: 58,
  },
  {
    id: '1212',
    name: 'Крупа гречневая',
    protein: 12.6,
    fat: 2.6,
    carbohydrates: 68.0,
    calories: 345,
  },
];

it('it render', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Table
      headers={[
        'Название продукта',
        'Белки, г',
        'Жиры, г',
        'Углеводы, г',
        'Калорийность, ккал',
      ]}
      items={['name', 'protein', 'fat', 'carbohydrates', 'calories']}
      isAdmin={false}
      source={products}
    />,
    div
  );
});
