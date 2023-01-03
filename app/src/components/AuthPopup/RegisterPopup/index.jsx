import React from 'react'
import styles from '../AuthPopup.module.scss';
import logo from '../../../assets/logo.svg';
import close from '../../../assets/close.svg';
import { useState } from 'react';


export const RegisterPopup = () => {

  const [validPassword, setValidPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [repitPassword, setRepitPassword] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  const onDetectedFocus = () => {
    console.log("Инпут в фокусе");
    setFocusInput(() => true);
  };

  const onLeaveFocus = () => {
    console.log("Инпут вне фокусе");
    setFocusInput(() => false);
    if (password.replace(/\s/g, '') === repitPassword.replace(/\s/g, '') 
        && password !== '' && repitPassword !== '') {
      setValidPassword(() => false);
    } else {
      setValidPassword(() => true);
    }
  };

  console.log(focusInput);

  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupBlock}>

        <div className={styles.headerBlock}>

          <div className={styles.logo}>
              <img src={logo} alt="logo" />
          </div>

          <div className={styles.close}>
              <img src={close} alt="close" />
          </div>

        </div>

        <div className={styles.bodyBlock}>
          <div className={styles.title}>
            <h3>Регистрация</h3>
          </div>

          <div className={styles.popupForm}>

            <div className={styles.inputGroup}>
              <label htmlFor="user_name">ФИО:</label>
              <input type="text" name='user_name' placeholder='Имя пользователя'/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Почта:</label>
              <input type="email" name='email' placeholder='Почта'/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password">Пароль:</label>
              <input 
                  type="password"
                  name='password'
                  placeholder='Пароль'
                  onFocus={() => onDetectedFocus()}
                  onBlur={() => onLeaveFocus()}
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}/>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password_check">Повторите пароль:</label>
              <input 
                  type="password"
                  name='password_check'
                  placeholder='Повторите пароль'
                  onFocus={() => onDetectedFocus()}
                  onBlur={() => onLeaveFocus()}
                  onChange={(event) => setRepitPassword(event.target.value)}
                  value={repitPassword}/>
            </div>

          </div>
            <button 
              type="submit" 
              disabled={validPassword ? true : false} 
              className={styles.btnSubmit}>Зарегистрироваться</button>
        </div>
    
      </div>
    </div>
  )
}