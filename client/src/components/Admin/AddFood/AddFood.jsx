import React, { Component } from 'react';
import './AddFood.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FoodService from '../../../services/foodService';
import { Link } from 'react-router-dom';

export default class AddFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFood: {
                name: '',
                recipe: ''
            },
            foods: [],
            travelTypes: [],
            dayTimeTypes: [],
            selectedDayTimeTypes: [],
            selectedTravelTypes: [],
            isLoaded: false
        }
    }

    handleDayTypeTypesChange = event => {
        this.setState({
            selectedDayTimeTypes: event.target.value
        })
    }

    handleTravelTypesChange = event => {
        this.setState({
            selectedTravelTypes: event.target.value
        })
    }

    async getDayTimeTypes() {
        const { data: dayTimeTypes } = await this.foodService.getDayTimeTypes();
        this.setState({
            dayTimeTypes: dayTimeTypes,
            selectedDayTimeTypes: []
        });
    }

    async getTravelTypes() {
        const { data: travelTypes } = await this.foodService.getTravelTypes();
        this.setState({
            travelTypes: travelTypes,
            selectedTravelTypes: [],
            isLoaded: true
        })
    }

    addNewFood = (event) => {
        event.stopPropagation();
        const newFood = {
            ...this.state.newFood,
            travelTypes: this.state.selectedTravelTypes,
            dayTimeTypes: this.state.selectedDayTimeTypes
        }
        this.foodService.addFood(newFood).then(() => {
            this.addFoodDialogHandleOpenClose(false);
            this.setState(prevState => ({
                foods: prevState.foods.concat(newFood)
            }))
        })
    }

    addFoodPropertiesChanged = (event) => {
        let edit = Object.create(null);
        edit[event.target.name] = event.target.value;
        const newFood = { ...this.state.newFood, ...edit };
        this.setState({ newFood: newFood });
    };

    componentDidMount() {
        this.getDayTimeTypes();
        this.getTravelTypes();
    }

    foodService = new FoodService();

    render() {
        const { dayTimeTypes, travelTypes } = this.state;
        return (
            <div className="form">
                <h1>Добавление нового продукта</h1>
                <form onSubmit={this.addNewFood}>
                    <input
                        className="form__input"
                        name="name"
                        onChange={this.addFoodPropertiesChanged}
                        placeholder="Название блюда" />
                    <br />
                    <textarea
                        className="form__multiline"
                        cols="40"
                        rows="5"
                        name="recipe"
                        onChange={this.addFoodPropertiesChanged}
                        placeholder="Рецепт" />
                    <br />
                    <div className="form__select-container">
                        <InputLabel className="form__label" htmlFor="dayTimeTypes">Время приема</InputLabel>
                        <Select
                            className="form__select"
                            multiple
                            value={this.state.selectedDayTimeTypes}
                            onChange={this.handleDayTypeTypesChange}
                            input={<Input name="dayTimeTypes" id="dayTimeTypes" />}>
                            {dayTimeTypes.map(dtt =>
                                <MenuItem key={dtt.id} value={dtt.id} >{dtt.name}</MenuItem>
                            )}
                        </Select>
                    </div>
                    <div className="form__select-container">
                        <InputLabel className="form__label" htmlFor="travelTypes">Тип похода</InputLabel>
                        <Select
                            className="form__select"
                            multiple
                            value={this.state.selectedTravelTypes}
                            onChange={this.handleTravelTypesChange}
                            input={<Input name="travelTypes" id="travelTypes" />}>
                            {travelTypes.map(dtt =>
                                <MenuItem key={dtt.id} value={dtt.id} >{dtt.name}</MenuItem>
                            )}
                        </Select>
                    </div>
                    <div className="form__action">
                        <Link to={`/admin/`} className="control-button">Назад </Link>
                        <button className="control-button" type="submit" >Добавить</button>
                    </div>
                </form>
            </div>
        )
    }
}
