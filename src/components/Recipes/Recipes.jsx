import React, { Component } from 'react';
import './Recipes.css';
import Table from '../Table/Table';
import CircularProgress from '@material-ui/core/CircularProgress';

class Recipes extends Component {

  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    const { recipes, showLoader } = this.props;
    return (
      <div>
        {showLoader ?
          <div className="progress-bar">
            <CircularProgress size={80} thickness={5} />
          </div> :
          <div>
            <Table
              headers={['Название', 'Рецепт']}
              items={['name', 'description']}
              isAdmin={false}
              source={recipes} />
          </div>
        }
      </div>
    );
  }
}

export default Recipes;
