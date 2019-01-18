import React from 'react';
import './Autorization.css';

const Autorization = () =>
  <div className="login-form-container">
    <form className="login-form" autoComplete="off">
      <input placeholder="Имя пользователя" className="login-form__login" name="login" type="text" />
      <br />
      <input placeholder="Пароль" className="login-form__password" name="password" type="password" />
      <br />
      <button className="login-form__submit" type="submit">Войти</button>
    </form>
  </div>

export default Autorization;
