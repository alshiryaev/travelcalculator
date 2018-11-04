import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export default class Food extends Component {

    addNewFoodItem() {
        console.log('add new food...');
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.addNewFoodItem()} color="secondary">
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
                        <tr>
                            <td>Овсянка</td>
                            <td>Утро</td>
                            <td>Пеший, сплав</td>
                            <td>Берем молоко и крупу, смешиваем, солим и варим до готовности</td>
                        </tr>
                    </tbody>
                </table>
            </div>)
    }
}