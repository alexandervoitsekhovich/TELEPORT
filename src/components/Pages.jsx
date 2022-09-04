import React from 'react';
import userAvatar from './img/userAvatar';
import move from '../img/move.svg';
import link from '../img/link.svg';
import add from '../img/add.svg';
import stats from '../img/stats.svg';
import trash from '../img/trash.svg';


const Pages = () => {
    return(
        <div className = 'pages__container'>
            <div className = 'info__container'>
                <h2 className = 'info__heading'>Получи 15 материалов бесплатно</h2>
                <span className = 'info__overallPages'>Всего 12 старниц</span>
                <button className = 'info__button'>+ Создать страницу</button>
            </div>
            <div className = 'myPages__container'>
                <div className = 'page__container'>
                    <span className = 'page__heading'>Моя страница</span>
                    <img className = 'page__avatar' src = {userAvatar} alt = 'Not Found'/>
                    <h3 className = 'page__nickname'>Nickname</h3>
                    <ul className = 'page__list'>
                        <li className = 'page__id'>id: /id/</li>
                        <li className = 'Page__domain'>domain: /domain/</li>
                    </ul>
                    <span className = 'page__subs'>Подписчики</span>
                    <span className = 'page__subsAmount'>/кол-во подписчиков/</span>
                    <span className = 'page__ctr'>CTR</span>
                    <span className = 'page__ctrPercent'>/CTR percentage/</span>
                    <span className = 'page__views'>Просмотры</span>
                    <span className = 'page__viewsAmount'>/кол-во просмотров/</span>
                    <button className = 'page__change'>Изменить</button>
                    <button className = 'page__open'>Открыть</button>
                    <img className = 'page__move' src = {move} alt = 'Not Found'/>
                    <img className = 'page__link' src = {link} alt = 'Not Found'/>
                    <img className = 'page__add' src = {add} alt = 'Not Found'/>
                    <img className = 'page__stats' src = {stats} alt = 'Not Found'/>
                    <img className = 'page__trash' src = {trash} alt = 'Not Found'/>
                </div>
                <div className = 'page__container'>
                    <span className = 'page__heading'>Моя страница</span>
                    <img className = 'page__avatar' src = {userAvatar} alt = 'Not Found'/>
                    <h3 className = 'page__nickname'>Nickname</h3>
                    <ul className = 'page__list'>
                        <li className = 'page__id'>id: /id/</li>
                        <li className = 'Page__domain'>domain: /domain/</li>
                    </ul>
                    <span className = 'page__subs'>Подписчики</span>
                    <span className = 'page__subsAmount'>/кол-во подписчиков/</span>
                    <span className = 'page__ctr'>CTR</span>
                    <span className = 'page__ctrPercent'>/CTR percentage/</span>
                    <span className = 'page__views'>Просмотры</span>
                    <span className = 'page__viewsAmount'>/кол-во просмотров/</span>
                    <button className = 'page__change'>Изменить</button>
                    <button className = 'page__open'>Открыть</button>
                    <img className = 'page__move' src = {move} alt = 'Not Found'/>
                    <img className = 'page__link' src = {link} alt = 'Not Found'/>
                    <img className = 'page__add' src = {add} alt = 'Not Found'/>
                    <img className = 'page__stats' src = {stats} alt = 'Not Found'/>
                    <img className = 'page__trash' src = {trash} alt = 'Not Found'/>
                </div>
            </div>
        </div>
    );
};


export default Pages;