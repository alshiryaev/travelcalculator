import FoodService from '../services/foodService';

export const REQUEST_RECIPES = 'REQUEST_RECIPES';
export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
export const ERROR_RECEIVE_RECIPES = 'ERROR_RECEIVE_RECIPES';

export const requestRecipes = () => ({
  type: REQUEST_RECIPES,
});

export const receiveRecipes = recipes => ({
  type: RECEIVE_RECIPES,
  payload: recipes,
});

function shouldLoadRecipes(state) {
  return state.recipes.length > 0;
}

export const getRecipes = () => async (dispatch, getState) => {
  if (shouldLoadRecipes(getState())) {
    const { recipes } = getState();
    return dispatch(receiveRecipes(recipes));
  } else {
    dispatch(requestRecipes());
    const foodService = new FoodService();
    const { data: recipes } = await foodService.getRecipes();
    return dispatch(receiveRecipes(recipes));
  }
};
