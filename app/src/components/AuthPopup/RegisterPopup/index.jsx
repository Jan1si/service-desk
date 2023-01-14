import React, { useEffect, useState } from 'react'
import styles from '../AuthPopup.module.scss';
import logo from '../../../assets/logo.svg';
import close from '../../../assets/close.svg';
import { useInput } from '../../../hooks/useInput';
import axios from 'axios';

export const RegisterPopup = ({showForm, setShowForm}) => {

  const userName = useInput('', {isEmpty: true, minLength: 3, maxLength: 50});
  const email = useInput('', {isEmpty: true, minLength: 3, maxLength: 50, validEmail: true});
  const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 50});
  const repitPassword = useInput('', {isEmpty: true, minLength: 3, maxLength: 50, checkPassword: true}, password.value);

  const handleSubmit =  (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users', {
      user_name: userName.value,
      email: email.value,
      password: password.value,
    }).then((res) => {
      console.log(res);
      setShowForm((prev) => !prev);
    }).catch(() => {
      alert("Произошла ошибка отправки формы");
    });
  }

  return (
    <>
      <a href="#" onClick={() => setShowForm((prev) => !prev)} className={`${styles.baseText} ${styles.authLink}`}>Регистрация</a>
      
      <div className={`${showForm ? styles.popupContainerActive : styles.popupContainer}`}>
      <div className={styles.popupBlock}>

        <div className={styles.headerBlock}>

          <div className={styles.logo}>
              <img src={logo} alt="logo" />
          </div>

          <div className={styles.close}>
              <img onClick={() => setShowForm((prev) => !prev)} src={close} alt="close" />
          </div>

        </div>

        <div className={styles.bodyBlock}>
          <div className={styles.title}>
            <h3>Регистрация</h3>
          </div>
          <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.popupForm}>
            <div className={styles.inputGroup}>
              {(userName.isDirty && userName.messageError) && <div className={styles.validateError}>{userName.messageError}</div>}
              <label htmlFor="user_name">ФИО:</label>
              <input 
                type="text"
                name='user_name'
                value={userName.value}
                onChange={(e) => userName.inputChange(e)}
                onBlur={(e) => userName.inputBlur(e)}
                className={userName.messageError && userName.isDirty ? styles.inputError : null}
                placeholder='Имя пользователя'/>
            </div>
            
            <div className={styles.inputGroup}>
              {(email.isDirty && email.messageError) && <div className={styles.validateError}>{email.messageError}</div>}
              <label htmlFor="email">Почта:</label>
              <input 
                  type="email"
                  name='email'
                  placeholder='Почта'
                  value={email.value}
                  onChange={(e) => email.inputChange(e)}
                  onBlur={(e) => email.inputBlur(e)}
                  className={email.messageError && email.isDirty ? styles.inputError : null} 
                  />
            </div>
    
            <div className={styles.inputGroup}>
              {(password.isDirty && password.messageError) && <div className={styles.validateError}>{password.messageError}</div>}
              <label htmlFor="password">Пароль:</label>
              <input 
                  type="password"
                  name='password'
                  placeholder='Пароль'
                  value={password.value}
                  onChange={(e) => password.inputChange(e)}
                  onBlur={(e) => password.inputBlur(e)}
                  className={password.messageError && password.isDirty ? styles.inputError : null}
                  /> 
            </div>

            <div className={styles.inputGroup}>
              {(repitPassword.isDirty && repitPassword.messageError) && <div className={styles.validateError}>{repitPassword.messageError}</div>}
              <label htmlFor="repit_password">Повторите пароль:</label>
              <input 
                  type="password"
                  name='repit_password'
                  placeholder='Повторите пароль'
                  value={repitPassword.value}
                  onChange={(e) => repitPassword.inputChange(e)}
                  onBlur={(e) => repitPassword.inputBlur(e)}
                  className={repitPassword.messageError && repitPassword.isDirty ? styles.inputError : null}
                  />
            </div>

          </div>
            <button 
              type="submit" 
              disabled={!userName.validForm || !email.validForm || !password.validForm || !repitPassword.validForm}
              className={styles.btnSubmit}>
                Зарегистрироваться
            </button>
          </form>
        </div>
    
      </div>
    </div>
    </>
    
  )
}
