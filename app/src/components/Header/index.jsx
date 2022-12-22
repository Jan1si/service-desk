import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header';
import logo  from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header class={styles.header}>
        <div class={styles.navBlock}>
            <div class={styles.logo}>
                <Link to="/" >
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <nav class={styles.navBar}>
                <li class={styles.navItem}>
                    <Link to="/" style={{"textDecoration": "none"}}>
                        <p class={`${styles.activeText} ${styles.navLink}`}>Составить заявку</p>
                    </Link>
                </li>
                <li class={styles.navItem}>
                    <Link to="/questions" style={{"textDecoration": "none"}}>
                        <p class={`${styles.baseText} ${styles.navLink}`}>Журнал заявок</p>
                    </Link>
                </li>
                <li class={styles.navItem}>
                    <Link to="/lists/users" style={{"textDecoration": "none"}}>
                        <p class={`${styles.baseText} ${styles.navLink}`}>Справочник</p>
                    </Link>
                </li>

            </nav>
        </div>
        <div class={styles.authBlock}>
            <ul class={styles.authBar}>
                <li class={styles.authItem}>
                    <a href="#" class={`${styles.activeText} ${styles.authLink}`}>Войти</a>
                </li>
                <li class={styles.authItem}>
                    <a href="#" class={`${styles.baseText} ${styles.authLink}`}>Регистрация</a>
                </li>
            </ul>
        </div>
    </header>
  )
}
