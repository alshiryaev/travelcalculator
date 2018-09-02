import React from 'react';
import './Calculator.css';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class Calculator extends React.Component {

  state = {
    value: 'Mountain'
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="home-block-title">
          <p className="home-section-title">Меню в поход</p>
          <p className="home-section-text">Рассчет необходимых в поход продукты, их вес и количество. Предложим меню на каждый день. </p>
        </div>
        <FormGroup>
          <TextField placeholder="Количество дней" type="number" min="1" max="21" />
          <br />
          <TextField placeholder="Количество участников" type="number" min="1" max="10" />
          <br />
          <div className="type-travel">Тип похода</div>
          <div className="type-travel__radio">

            <RadioGroup value={this.state.value}>

              <FormControlLabel
                value="Mountain"
                control={<Radio color="primary" />}
                onChange={this.handleChange}
                label="Горный" />
              <FormControlLabel
                value="Walk"
                control={<Radio color="primary" />}
                onChange={this.handleChange}
                label="Пеший" />
              <FormControlLabel
                value="River"
                control={<Radio color="primary" />}
                onChange={this.handleChange}
                label="Сплав" />
            </RadioGroup>
          </div>
          <br />
          <FormControlLabel control={
            <Checkbox />
          } label="Нужен ли аварийный запас на 1 дополнительный день?" />
          <Button color="primary" >Рассчитать</Button>
        </FormGroup>
      </div>
    );
  }
}

export default Calculator;
