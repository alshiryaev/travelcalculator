import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => <header className="header">
    <div className="logo">
        <NavLink className="logo__link" to={"/"}>CALCULATOR</NavLink >
    </div>
    <div>
        <input className="hamburger__checkbox" type="checkbox" hidden id="__hamb__button" />
        <label className="hamburger hamburger_clickable" htmlFor="__hamb__button">
            <div className="hamburger__button"></div>
        </label>
        <ul className="nav-menu">
            <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/calculator"}>Калькулятор</NavLink ></li>
            <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/products"}>Продукты</NavLink ></li>
            <li className="nav-menu__item"><NavLink className="menu-link" activeClassName="menu-link_active" to={"/recipes"}>Рецепты</NavLink ></li>
        </ul>
    </div>
</header>