import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Table from '../Table/Table';
import { ProductFilterContainer } from '../../containers/ProductFilterContainer';

export default class Products extends Component {

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { showLoader, products, isError } = this.props;
        return <div>
            {showLoader ?
                <div className="progress-bar">
                    <CircularProgress size={80} thickness={5} />
                </div> :
                <div>
                    <ProductFilterContainer />
                    <Table
                        headers={['Название продукта', 'Белки, г', 'Жиры, г', 'Углеводы, г', 'Калорийность, ккал']}
                        items={['name', 'proteins', 'fats', 'carbohydrates', 'calories']}
                        isAdmin={false}
                        source={products} />
                </div>
            }
            <div> {isError ?
                <p className="error-text">Нет соединения с БД.</p> : <p></p>}
            </div>
        </div>
    }
}