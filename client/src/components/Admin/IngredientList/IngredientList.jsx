import React from 'react';
import './IngredientList.css';

const IngredientList = ({ingredients, deleteIngredient}) => <div>
    <ol className="ingredients">
        {ingredients.map((ingredient, index) =>
            <li className="ingredients__item" key={index}>
                <div className="ingredients__item-name">{ingredient.name}</div>
                <div>{ingredient.quantity} грамм</div>
                <button onClick={() => deleteIngredient(ingredient.id)} className="ingredients__item-delete">x</button>
            </li>
        )}
    </ol>
</div>

export default IngredientList;