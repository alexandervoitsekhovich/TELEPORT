import React from 'react';
import logo from '../img/logo.svg';


const Sidebar = () => {
    return(
        <div className = 'aside__container'>
            <img className = 'aside__logo' src = {logo} alt = 'Not Found'/>
            <a className = 'aside__myPages' href = '' alt = ' '>Мои страницы</a>
            <a className = 'aside__balance' href = '' alt = ' '>Баланс</a>
            <a className = 'aside__domens' href = '' alt = ' '>Домены</a>
            <a className = 'aside__partnership' href = '' alt = ' '>Партенрская программа</a>
            <a className = 'aside__learning' href = '' alt = ' '>Обучающие материалы</a>
            <a className = 'aside__settings' href = '' alt = ' '>Настройки</a>
        </div>
    );
};

export default Sidebar;