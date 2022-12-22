import React from 'react';
import styles from './Header';
import logo  from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header class={styles.header}>
        <div class={styles.navBlock}>
            <div class={styles.logo}>
                <a href="#" class={styles.logoSvg}>
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <nav class={styles.navBar}>
                <li class={styles.navItem}>
                    <a href="./index.html" class={`${styles.activeText} ${styles.navLink}`}>Составить заявку</a>
                </li>
                <li class={styles.navItem}>
                    <a href="../list_questions/index.html" class={`${styles.baseText} ${styles.navLink}`}>Журнал заявок</a>
                </li>
                <li class={styles.navItem}>
                    <a href="#" class={`${styles.baseText} ${styles.navLink}`}>Справочник</a>				    
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
