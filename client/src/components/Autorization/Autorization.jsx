import React from "react";
import "./Autorization.css";
import AuthService from '../../services/authService';

const authService = new AuthService();

const Autorization = () => {
  let inputLogin = '', inputPassword = '';
  const onSubmit = async event => {
    console.log(inputLogin.value, inputPassword.value);
    event.preventDefault();
    await authService.login(inputLogin.value, inputPassword.value);
    console.log('logged');
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

export default Autorization;
