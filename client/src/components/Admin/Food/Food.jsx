import React, { Component } from 'react';
import './Food.css';
import FoodService from '../../../services/foodService';
import { Link } from 'react-router-dom';

class Food extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            openEditDialog: false,
            foods: []
        }
    }

    foodService = new FoodService();

    async getFoods() {
        const { data: foods } = await this.foodService.getFoods();
        this.setState({
            foods: foods
        });
    }

    componentDidMount() {
        this.getFoods();
    }

    render() {
        const { foods } = this.state;
        return (
            <div>
                <Link className="control-button" to={`/admin/addfood`} > Добавить </Link>
                <table>
                    <thead>
                        <tr>
                            <td className="admin-dish-table__name">Название</td>
                            <td className="admin-dish-table__time">Время приема пищи</td>
                            <td className="admin-dish-table__type-trevel">Тип похода</td>
                            <td className="admin-dish-table__recipe">Рецепт</td>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food, index) =>
                            <tr key={index}>
                                <td>{food.name}</td>
                                <td>{food.dayTimeTypes.map(d => d.name).join(',')}</td>
                                <td>{food.travelTypes.map(d => d.name).join(',')}</td>
                                <td>{food.recipe.description}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>)
    }
}

export default Food;