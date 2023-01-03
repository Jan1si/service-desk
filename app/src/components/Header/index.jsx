import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo  from '../../assets/logo.svg';
import arrow  from '../../assets/arrowOpen.svg';
import { useState, useEffect } from 'react';
import { NavMobile } from '../NavMobile';
import { RegisterPopup } from '../AuthPopup/RegisterPopup';
import { LoginPopup } from '../AuthPopup/LoginPopup';

export const Header = () => {

    // Состояния ссылок
    const [isActive, setIsActive] = useState(0);
    const links = [
        {
            'id': 0,
            'title': "Составить заявку",
            'uri': '/'
        },
        {
            'id': 1,
            'title': "Журнал заявок",
            'uri': '/questions'
        },
        
    ];


    // Состояния выпадающего меню
    const [isOpen, setIsOpen] = useState(false);

    const dropLinks = [
        {   'id': 2,
            'title': "Журнал пользователей",
            'uri': '/lists/users'
        },
        {
            'id': 3,
            'title': "Журнал ролей",
            'uri': '/lists/roles'
        },
        {
            'id': 4,
            'title': "Журнал категорий",
            'uri': '/lists/categories'
        },
    ];
    
    // Получение последней ссылки из localstorage
    useEffect(() => {
        setIsActive(() => JSON.parse(window.localStorage.getItem('isActive')));
    }, []);

    // Занесение активной ссылки в localstorage
    const linkClick = (idx) => {
        setIsActive(() => idx);
        window.localStorage.setItem('isActive', idx);
    }

    // Состояния мобильного меню
    const [isShowNav, setIsShowNav] = useState(false);

    // Состояние затемнения при активации popup меню
    const [activeShadow, setActiveShadow] = useState(false);

    // Отслеживаем popup окна 
    useEffect(() => {
        setActiveShadow((prev) => !prev);
    }, [isShowNav]);

    console.log("Мобильное меню", isShowNav);
    console.log("Тень", activeShadow);

  return (
    
    <header className={styles.header}>
        <div className={`${activeShadow ? styles.showShadow: styles.hiddenShadow} ${styles.popupShadow}`}> </div> 
        <div className={styles.navBlock}>
            <div className={styles.logo}>
                <Link to="/" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            {/* Обычное навигационное меню */}
            <nav className={styles.navBar}>
                {
                    links.map((item, idx) => (
                        <li key={idx} className={styles.navItem}>
                            <Link to={item.uri} style={{"textDecoration": "none"}}>
                                <p 
                                onClick={() => linkClick(item.id)} 
                                className={
                                    ` ${isActive === item.id ? styles.activeText : null}
                                      ${styles.navLink} ${styles.baseText}`}>
                                {item.title}
                                </p>
                            </Link>
                        </li>
                    ))
                }
                <li  className={styles.navDropItem}>
                    <div onClick={() => setIsOpen((prev) => !prev)} className={styles.headerDropItem}>
                        <p className={
                            `${isActive > 1 ? styles.activeText : null}
                            ${styles.navLink} ${styles.baseText}`}>
                             Справочник
                        </p>
                        <img className={isOpen ? styles.rotateArrow : ''} src={arrow} alt="" />
                    </div>
                    <div className={isOpen ? styles.bodyDropItem: styles.dropHidden}>
                        <ul className={styles.listDropItems}>
                            {dropLinks.map((item) => (
                                <li onClick={() => linkClick(item.id)} key={item.title} className={styles.dropItem}>
                                    <Link to={item.uri} style={{textDecoration: "none"}}>
                                        <p className={`${isActive === item.id ? styles.activeText : null} ${styles.baseText} ${styles.navLink}`}>
                                            {item.title}
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        
                        </ul>
                    </div>
                 </li>
            </nav>
            {/* Мобильное навигационное меню */}
            <NavMobile showNav={isShowNav} openNav={setIsShowNav}/>
        </div>
        <div className={styles.authBlock}>
            <ul className={styles.authBar}>
                <li className={styles.authItem}>
                    <a href="#" className={`${styles.activeText} ${styles.baseText} ${styles.authLink}`}>Войти</a>
                </li>
                <li className={styles.authItem}>
                    <a href="#" className={`${styles.baseText} ${styles.authLink}`}>Регистрация</a>
                </li>
            </ul>
        </div>
        {/* <RegisterPopup /> */}
        <LoginPopup />
    </header>
  )
}
