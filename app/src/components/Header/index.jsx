import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo  from '../../assets/logo.svg';
import arrow  from '../../assets/arrowOpen.svg';
import { useState, useEffect } from 'react';

export const Header = () => {

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


    const [isShowNav, setIsShowNav] = useState(true);

    useEffect(() => {
        setIsActive(() => JSON.parse(window.localStorage.getItem('isActive')));
    }, []);

    const linkClick = (idx) => {
        setIsActive(() => idx);
        window.localStorage.setItem('isActive', idx);
    }

    const [activeShadow, setActiveShadow] = useState(false);

    const openPopup = (isOpenPopup, setOpenPopup) => {
        if (isOpenPopup) {
            setActiveShadow((prev) => !prev);
            setOpenPopup((prev) => !prev);
        } else {
            setActiveShadow((prev) => !prev);
            setOpenPopup((prev) => !prev);
        }
    }

  return (
    
    <header className={styles.header}>
        <div className={styles.popupShadow}> </div>
        <div className={styles.navBlock}>
            <div className={styles.logo}>
                <Link to="/" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
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

            <div onClick={() => openPopup(isShowNav, setIsShowNav)} className={styles.btnOpenNav}>
                <span className={isShowNav ? styles.line_Active  : styles.line}></span>
            </div>
            <div className={`${isShowNav ? styles._active : styles.mobileNav}`}>

                <nav className={styles.navBarMobil}>
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
                <ul className={styles.authBar}>
                    <li className={styles.authItem}>
                            <a href="#" className={`${styles.baseText} ${styles.authLink}`}>Войти</a>
                    </li>
                    <li className={styles.authItem}>
                            <a href="#" className={`${styles.baseText} ${styles.authLink}`}>Регистрация</a>
                    </li>
                </ul>
            </div>

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
    </header>
  )
}
