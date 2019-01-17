import { RECEIVE_RECIPES, REQUEST_RECIPES } from '../actions/recipes';

export const recipes = (state = [], action) => {
    switch (action.type) {
        case REQUEST_RECIPES:
            return state;
        case RECEIVE_RECIPES:
            return action.recipes;
        default:
            return state;
    }
}