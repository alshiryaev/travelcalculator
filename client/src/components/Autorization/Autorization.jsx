import React from 'react';
import './Autorization.css';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';


const Autorization = ({login, history}) => {
  let inputLogin = '', inputPassword = '';
  const onSubmit = async event => {
    event.preventDefault();
    login(inputLogin.value, inputPassword.value, history.push('/admin'));
  }
  return (
    <div className="login-form-container">
      <form className="login-form" autoComplete="off" onSubmit={onSubmit}>
        <input
          ref={val => inputLogin = val}
          placeholder="Имя пользователя"
          className="login-form__login"
          name="login"
          type="text"
        />
        <br />
        <input
          ref={val => inputPassword = val}
          placeholder="Пароль"
          className="login-form__password"
          name="password"
          type="password"
        />
        <br />
        <button className="login-form__submit" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

const LoginContainer = connect(null, dispatch => ({
  login: (username, password, callback) => dispatch(login(username, password, callback))
}))(Autorization);
export default LoginContainer;
