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

  constructor(props) {
    super(props);

    this.state = {
      type: 'Mountain',
      peopleCount: 0,
      daysCount: 0
    }
  }

  handleChange = event => {
    this.setState({ type: event.target.value });
  };

  handleSubmit = event => {
    console.log('submitted');
    event.preventDefault();
  };

  handlePeopleCountChanged = event => {
    const newValue = +event.target.value;
    if (newValue >= 1 && newValue <= 10)
      this.setState({ peopleCount: newValue });
  }

  handleDaysCountChanged = event => {
    const newValue = +event.target.value;
    if (newValue >= 1 && newValue <= 21)
      this.setState({ daysCount: newValue });
  }

  render() {
    return (
      <form autoComplete="off" onSubmit={this.handleSubmit}>
        <div className="wrapper">
          <div className="home-block-title">
            <p className="home-section-title">Меню в поход</p>
            <p className="home-section-text">Рассчет необходимых в поход продуктов, их вес и количество. Предложим меню на каждый день. </p>
          </div>
          <FormGroup>
            <TextField
              required
              placeholder="Количество дней"
              helperText="Не более 21 дня"
              type="number"
              onChange={this.handleDaysCountChanged}
              value={this.state.daysCount} />
            <br />

            <TextField
              required
              helperText="Не более 10 участников"
              placeholder="Количество участников"
              type="number" 
              onChange={this.handlePeopleCountChanged}
              value={this.state.peopleCount} />
            <br />

            <div className="type-travel">Тип похода</div>
            <div className="type-travel__radio">

              <RadioGroup value={this.state.type}>

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
            <Button type="submit" color="primary" >Рассчитать</Button>
          </FormGroup>
        </div>
      </form>
    );
  }
}

export default Calculator;
