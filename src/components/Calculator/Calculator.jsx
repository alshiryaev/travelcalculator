import React from 'react';
import './Calculator.css';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

class Calculator extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home-block-title">
          <p className="home-section-title">Меню в поход</p>
          <p className="home-section-text">Рассчет необходимых в поход продукты, их вес и количество. Предложим меню на каждый день. </p>
        </div>
        <form>
          <TextField hintText="Количество дней" type="number" min="1" max="21" />
          <br />
          <TextField hintText="Количество участников" type="number" min="1" max="10" />
          <br />
          <div className="type-travel">Тип похода</div>
          <div className="type-travel__radio">

            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
              <RadioButton
                value="Mountain"
                label="Горный" />
              <RadioButton
                value="Walk"
                label="Пеший" />
              <RadioButton
                value="River"
                label="Сплав" />
            </RadioButtonGroup>
          </div>
          <br />
          <Checkbox label="Нужен ли аварийный запас на 1 дополнительный день?" />
          <br />
          <RaisedButton label="Рассчитать" />
        </form>
      </div>
    );
  }
}

export default Calculator;
