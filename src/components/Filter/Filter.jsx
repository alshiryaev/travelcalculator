import React from 'react';
import './Filter.css';

export const Filter = ({ filter = '', queryChangeHandler = f => f, queryClearHandler = f => f, queryApplyHandler = f => f }) => {
    
    const onChangeHandler = event => queryChangeHandler(event.target.value);
    const onClickHandler = () => queryApplyHandler(filter);

    return <div className="form filter">
        <input className="form__input" value={filter} onChange={onChangeHandler} />
        {filter.length > 0 ?
            <div className="filter__control">
                <button className="filter__clear" onClick={queryClearHandler}>X</button>
                <button className="filter__apply" onClick={onClickHandler}>Искать</button>
            </div> : ''
        }
    </div>
}