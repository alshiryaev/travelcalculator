import React from 'react';
import './AddIngredient.css';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const AddIngredient = ({ products, selectedIngredientChanged, selectedIngredient, quantityValue, quantityValueChanged, canAddIngredient, addIngredientHandler }) =>
    <div className="form__select-container">
        <InputLabel className="form__label" htmlFor="ingredient">Добавить ингредиент</InputLabel>
        <Select
            className="form__select"
            value={selectedIngredient}
            onChange={selectedIngredientChanged}
            input={<Input name="ingredient" id="ingredient" />}>
            {products.map(dtt =>
                <MenuItem key={dtt.id} value={dtt.id} >{dtt.name}</MenuItem>
            )}
        </Select>
        <input onChange={quantityValueChanged} value={quantityValue} className="form__input" placeholder="Грамм/на человека" type="number" />
        <button onClick={addIngredientHandler} disabled={!canAddIngredient} className="canAddIngredient">+</button>
    </div>


export default AddIngredient;