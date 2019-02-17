import React from 'react';
import './Filter.css';

export const Filter = ({ filter = '', queryChangeHandler = f => f, queryClearHandler = f => f, queryApplyHandler = f => f }) => {
    const onChangeHandler = event => queryChangeHandler(event.target.value);

    return <div className="filter">
        <input className="filter__input" value={filter} onChange={onChangeHandler} />
        {filter.length > 0 ?
            <div className="filter__control">
                <button disabled={filter.length ? false : true} className="filter__clear" onClick={queryClearHandler}>X</button>
                <button disabled={filter.length ? false : true} className="filter__apply" onClick={queryApplyHandler}>Искать</button>
            </div> : ''
        }
    </div>
}