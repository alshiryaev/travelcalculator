import React from 'react';
import './Table.css';
import {v4} from 'uuid';

const Table = props => {
  const {headers, isAdmin, items, source, editHandle = f => f, deleteHandle = f => f, converters = {} } = props;
  

  
  function createCellView(item, entity){
      if (entity in converters){
          const converter = converters[entity];
          return converter(item[entity]);
      }
      return <span>{item[entity]}</span>
  }  

  return (
    <table>
      <thead>
        <tr>
          {headers.map(header => <td key={v4()}>{header}</td>)}
          <td style={isAdmin ? { display: 'table-cell' } : { display: 'none' }}>Управление</td>
        </tr>
      </thead>
      <tbody>
        {source.map(item => <tr key={v4()}>
          {items.map(entity => <td key={v4()}>{createCellView(item, entity)}</td>)}
          <td style={isAdmin ? { display: 'block' } : { display: 'none' }}>
            <button className="delete-button" onClick={() => deleteHandle(item)}>X</button>
            <button className="edit-button" onClick={() => editHandle(item)}>E</button>
          </td>
        </tr>)}
      </tbody>
    </table>
  )
}
export default Table;