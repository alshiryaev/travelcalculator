import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FoodService from '../../../services/foodService';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export default class Food extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openAddDialog: false,
            openDeleteDialog: false,
            openEditDialog: false,
            newFood: {
                name: '',
                recipe: ''
            },
            foods: [],
            travelTypes: [],
            dayTimeTypes: [],
            selectedDayTimeType: null
        }
    }

    handleDayTypeTypesChange = event => {
        this.setState({
            selectedDayTimeType: event.target.value
        })
    }

    foodService = new FoodService();

    componentDidMount() {
        this.foodService.getDayTimeTypes().then(response => {
            console.log(response.data);
            this.setState({
                dayTimeTypes: response.data
            }, () => {
                this.setState({
                    selectedDayTimeType: this.state.dayTimeTypes[0]
                })
            })
        });
        this.setState({
            foods: [{
                name: 'Овсянка',
                dayTimeType: 'Утро',
                travelType: 'Пеший, сплав',
                recipe: 'Берем молоко и крупу, смешиваем, солим и варим до готовности'
            }]
        })
    }

    addNewFood = () => {
        this.addFoodDialogHandleOpenClose(false);
        this.setState(prevState => ({
            foods: prevState.foods.concat(this.state.newFood)
        }))
    }

    addFoodDialogHandleOpenClose = (val) => {
        this.setState({ openAddDialog: val })
    };

    addFoodPropertiesChanged = (event) => {
        let edit = Object.create(null);
        edit[event.target.name] = event.target.value;
        const newFood = { ...this.state.newFood, ...edit };
        this.setState({ newFood: newFood });
    };

    render() {
        const { foods, dayTimeTypes } = this.state;
        return (
            <div>
                <Button onClick={() => this.addFoodDialogHandleOpenClose(true)} color="secondary">
                    Добавить
                </Button>
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Время суток</th>
                            <th>Тип похода</th>
                            <th>Рецепт</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foods.map((food, index) =>
                            <tr key={index}>
                                <td>{food.name}</td>
                                <td>{food.dayTimeType}</td>
                                <td>{food.travelType}</td>
                                <td>{food.recipe}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Dialog open={this.state.openAddDialog}>
                    <form>
                        <FormControl>
                            <DialogTitle>Добавление нового продукта</DialogTitle>
                            <DialogContent>
                                <TextField
                                    name="name"
                                    onChange={this.addFoodPropertiesChanged}
                                    fullWidth
                                    placeholder="Название блюда" />
                                <br />
                                <TextField
                                    name="recipe"
                                    onChange={this.addFoodPropertiesChanged}
                                    fullWidth
                                    multiline={true}
                                    placeholder="Рецепт" />
                                <br />
                                <InputLabel htmlFor="dayTimeTypes">Age</InputLabel>
                                <Select
                                    value={this.state.selectedDayTimeType}
                                    onChange={this.handleDayTypeTypesChange}
                                    inputProps={{
                                        name: 'dayTimeTypes',
                                        id: 'dayTimeTypes',
                                    }}>
                                    {dayTimeTypes.map(dtt =>
                                        <MenuItem key={dtt.id} value={dtt.id} >{dtt.name}</MenuItem>
                                    )}
                                </Select>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => this.addFoodDialogHandleOpenClose(false)}>Отмена</Button>
                                <Button onClick={this.addNewFood} >Добавить</Button>
                            </DialogActions>
                        </FormControl>
                    </form>
                </Dialog>
            </div>)
    }
}