import React, { Component } from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { login, password } = this.state;
    this.props.login(login, password);
  };

  handledChanged = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { error } = this.props;
    const { login, password } = this.state;
    return (
      <div className="login-form-container">
        <form
          className="login-form"
          autoComplete="off"
          onSubmit={this.onSubmit}>
          <input
            onChange={this.handledChanged}
            value={login}
            placeholder="Имя пользователя"
            className="login-form__login"
            name="login"
            type="text"
          />
          <br />
          <input
            onChange={this.handledChanged}
            value={password}
            placeholder="Пароль"
            className="login-form__password"
            name="password"
            type="password"
          />
          <br />
          {error ? <div className="error-login">{error}</div> : ''}
          <button className="login-form__submit" type="submit">
            Войти
          </button>
        </form>
      </div>
    );
  }
}

const LoginContainer = connect(
  state => ({
    error: state.auth.message,
  }),
  dispatch => ({
    login: (username, password) => dispatch(login(username, password)),
  })
)(Login);
export default LoginContainer;
