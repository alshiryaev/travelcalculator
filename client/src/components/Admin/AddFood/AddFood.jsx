import React, { Component } from 'react';
import './AddFood.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FoodService from '../../../services/foodService';
import { Link } from 'react-router-dom';
import AddIngredient from '../AddIngredient/AddIngredient';
import ProductService from '../../../services/productService';
import IngredientList from '../IngredientList/IngredientList';

export default class AddFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newFood: {
                name: '',
                recipe: ''
            },
            foods: [],
            products: [],
            travelTypes: [],
            ingredients: [],
            dayTimeTypes: [],
            selectedDayTimeTypes: [],
            selectedTravelTypes: [],
            selectedIngredient: '',
            quantityValue: 0,
            canAddIngredient: true,
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

    async getProducts() {
        const { data: products } = await this.productService.getAllProducts();
        console.log(products);
        this.setState({ products: products }, () => this.setState({ selectedIngredient: products[0] }));
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
        this.getProducts();
    }

    ingredientSelected = (event) => {
        console.log(event.target.value);
        this.setState({
            selectedIngredient: event.target.value
        })
    }

    quantityChanged = (event) => {
        const {quantityValue, selectedIngredient} = this.state;
        this.setState({
            quantityValue: event.target.value,
            canAddIngredient: quantityValue > 0 && selectedIngredient
        })
    }

    addIngredient = (event) => {
        event.stopPropagation();
        const { selectedIngredient, quantityValue } = this.state;
        this.setState((prevState => ({
            ingredients: prevState.ingredients.concat({
                id: selectedIngredient,
                name: this.getProductNameById(selectedIngredient),
                quantity: quantityValue
            })
        })), () => this.setState({
            selectedIngredient: '',
            quantityValue: 0
        }));
    }

    deleteIngredient = (id) => {
        this.setState((prevState) => ({
            ingredients: prevState.ingredients.filter(x => x.id !== id)
        }));
    }

    getProductNameById(id) {
        const { products } = this.state;
        const { name } = products.find(x => x.id === id);
        return name;
    }

    foodService = new FoodService();
    productService = new ProductService();

    render() {
        const { ingredients, products, dayTimeTypes, travelTypes, selectedIngredient, quantityValue, canAddIngredient } = this.state;
        return (
            <div className="form">
                <h1>Добавление нового блюда</h1>
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
                <br />
                <IngredientList deleteIngredient={this.deleteIngredient} ingredients={ingredients} />
                <div>
                    <AddIngredient
                        products={products}
                        ingredientSelected={this.ingredientSelected}
                        selectedIngredient={selectedIngredient}
                        quantityChanged={this.quantityChanged}
                        quantityValue={quantityValue}
                        canAddIngredient={canAddIngredient}
                        addIngredient={this.addIngredient}
                    />
                </div>
                <div className="form__action">
                    <Link to={`/admin/`} className="control-button">Назад </Link>
                    <button onClick={this.addNewFood} className="control-button" type="submit" >Добавить</button>
                </div>
            </div>
        )
    }
}
