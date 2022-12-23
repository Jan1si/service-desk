import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header';
import logo  from '../../assets/logo.svg';
import { useState, useEffect } from 'react';

export const Header = () => {

    const [isActive, setIsActive] = useState(0);
    const links = ["Составить заявку", "Журнал заявок", "Справочник"];

    useEffect(() => {
        setIsActive(() => JSON.parse(window.localStorage.getItem('isActive')));
    }, []);

    // const linkClick = (idx) => {
    //     setIsActive(() => idx);
    //     window.localStorage.setItem('isActive', isActive);
    // }

    useEffect(() => {
        window.localStorage.setItem('isActive', isActive);
    }, [isActive]);

  return (
    <header className={styles.header}>
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
                                <Link to="/" style={{"textDecoration": "none"}}>
                                    <p onClick={() => setIsActive(() => idx)} className={` ${isActive === idx ? styles.activeText : null} ${styles.navLink} ${styles.baseText}`}>{item}</p>
                                </Link>
                            </li>
                        ))
                    }
                
                {/* <li className={styles.navItem}>
                    <Link to="/questions" style={{"textDecoration": "none"}}>
                        <p class={`${styles.baseText} ${styles.navLink}`}>Журнал заявок</p>
                    </Link>
                </li>
                <li class={styles.navItem}>
                    <Link to="/lists/users" style={{"textDecoration": "none"}}>
                        <p class={`${styles.baseText} ${styles.navLink}`}>Справочник</p>
                    </Link>
                </li> */}

            </nav>
        </div>
        <div className={styles.authBlock}>
            <ul className={styles.authBar}>
                <li className={styles.authItem}>
                    <a href="#" className={`${styles.activeText} ${styles.authLink}`}>Войти</a>
                </li>
                <li className={styles.authItem}>
                    <a href="#" className={`${styles.baseText} ${styles.authLink}`}>Регистрация</a>
                </li>
            </ul>
        </div>
    </header>
  )
}
