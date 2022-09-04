import React from 'react';
import userAvatar from '../img/userAvatar.jpg';

const Header = () => {
    return(
        <header>
            <div className = 'header__container'>
                <span className = 'header__selectLanguage'>RU</span>
                <span className = 'header__username'>Александр Войцехович</span>
                <img className = 'header__userIcon' src = {userAvatar} alt = 'Not Found'/>
            </div>
        </header>
    );
};

export default Header;