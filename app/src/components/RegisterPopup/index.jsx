import React from 'react'
import styles from './RegisterPopup.module.scss';
import logo from '../../assets/logo.svg';


export const RegisterPopup = () => {
  return (
    <div className={styles.popupShadow}>
      <div className={styles.registerForm}>
        <div className={styles.headerForm}>
          <div className={styles.logo}>
            <img src={logo} alt="Логотип" />
          </div>
          <div className={styles.title}>
            <h3>Регистрация</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
