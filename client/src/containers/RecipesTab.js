import { connect } from 'react-redux';
import { getRecipes } from '../actions/recipes';
import Recipes from '../components/Recipes/Recipes';

const mapStateToProps = state => ({
  recipes: state.recipes,
  showLoader: state.showLoader,
});

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch(getRecipes()),
});

export const RecipesTab = connect(mapStateToProps, mapDispatchToProps)(Recipes);
