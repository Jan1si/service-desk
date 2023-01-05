import React from 'react'
import styles from '../AuthPopup.module.scss';
import logo from '../../../assets/logo.svg';
import close from '../../../assets/close.svg';
import { useState, useEffect } from 'react';


export const RegisterPopup = ({showForm, setShowForm}) => {

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repitPassword, setRepitPassword] = useState('');

  const [userNameDirty, setUserNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [repitPasswordDirty, setRepitPasswordDirty] = useState(false);

  const [userNameError, setUserNameError] = useState('Поле должно быть заполнено');
  const [emailError, setEmailError] = useState('Поле должно быть заполнено');
  const [passwordError, setPasswordError] = useState('Поле должно быть заполнено');
  const [repitPasswordError, setRepitPasswordError] = useState('Поле должно быть заполнено');

  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (userNameError|| emailError || passwordError || repitPasswordError) {
      setValidForm(() => false);
    } else {
      setValidForm(() => true);
    }
  }, [userNameError, emailError, passwordError, repitPasswordError])

  const userNameHandler = (value) => {
    setUserName(() => value);
    if (value.length < 3) {
      setUserNameError(() => 'Слишком короткое значение');
      if (value.length === 0) {
        setUserNameError(() => 'Поле должно быть заполнено');
      }
    } else if (value.length > 50) {
      setUserNameError(() => 'Слишком длинное значение');
    } else {
      setUserNameError(() => '');
    }
  }

  const emailHandler = (value) => {
    setEmail(() => value);
    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
    if (value.length === 0) {
      setEmailError(() => 'Поле должно быть заполнено');
    } else {
      if (!regex.test(String(value).toLowerCase())) {
        setEmailError(() => 'Некорректный Email');
      } else if (value.length < 10) {
        setEmailError(() => 'Слишком короткое значение');
      } else {
        setEmailError(() => '');
      }
    }
    
  }

  const passwordHandler = (value) => {
    setPassword(() => value);
    if (value.length < 3) {
      setPasswordError(() => 'Слишком короткое значение');
      if (value.length === 0) {
        setPasswordError(() => 'Поле должно быть заполнено');
      }
    } else if (value.length > 50) {
        setPasswordError(() => 'Слишком длинное значение');
    } else {
        setPasswordError(() => '');
        if (value === repitPassword) {
          setRepitPasswordError(() => '');
        } else {
          setRepitPasswordError(() => 'Пароли не совпадают');
        }
    }
  }

  const repitPasswordHandler = (value) => {
    setRepitPassword(() => value);
    if (value.length === 0) {
      setRepitPasswordError(() => 'Поле должно быть заполнено');
    } else {
      if (value !== password) {
        setRepitPasswordError(() => 'Пароли не совпадают');
      } else {
        setRepitPasswordError(() => '');
      }
    }
    
  }

  const blurHandler = (name) => {
    switch (name){
      case 'user_name':
        setUserNameDirty(() => true);
        break;
      case 'email':
        setEmailDirty(() => true);
        break;
      case 'password':
        setPasswordDirty(() => true);
        break;
      case 'repit_password':
        setRepitPasswordDirty(() => true);
        break;
    }
      
  }

  showForm
  return (
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

          <div className={styles.popupForm}>
            <div className={styles.inputGroup}>
              {(userNameDirty && userNameError) && <div className={styles.validateError}>{userNameError}</div>}
              <label htmlFor="user_name">ФИО:</label>
              <input 
                type="text"
                name='user_name'
                value={userName}
                onChange={(e) => userNameHandler(e.target.value)}
                onBlur={(e) => blurHandler(e.target.name)}
                className={userNameError && userNameDirty ? styles.inputError : null}
                placeholder='Имя пользователя'/>
            </div>
            
            <div className={styles.inputGroup}>
              {(emailDirty && emailError) && <div className={styles.validateError}>{emailError}</div>}
              <label htmlFor="email">Почта:</label>
              <input 
                  type="email"
                  name='email'
                  placeholder='Почта'
                  className={emailError && emailDirty ? styles.inputError : null}
                  value={email}
                  onChange={(e) => emailHandler(e.target.value)}
                  onBlur={(e) => blurHandler(e.target.name)}/>
            </div>
    
            <div className={styles.inputGroup}>
              {(passwordDirty && passwordError) && <div className={styles.validateError}>{passwordError}</div>}
              <label htmlFor="password">Пароль:</label>
              <input 
                  type="password"
                  name='password'
                  placeholder='Пароль'
                  className={passwordError && passwordDirty ? styles.inputError : null}
                  value={password}
                  onChange={(event) => passwordHandler(event.target.value)}
                  onBlur={(e) => blurHandler(e.target.name)}/>
                  
            </div>

            <div className={styles.inputGroup}>
              {(repitPasswordDirty && repitPasswordError) && <div className={styles.validateError}>{repitPasswordError}</div>}
              <label htmlFor="repit_password">Повторите пароль:</label>
              <input 
                  type="password"
                  name='repit_password'
                  placeholder='Повторите пароль'
                  className={repitPasswordError && repitPasswordDirty ? styles.inputError : null}
                  value={repitPassword}
                  onChange={(event) => repitPasswordHandler(event.target.value)}
                  onBlur={(e) => blurHandler(e.target.name)}/>
                  
            </div>

          </div>
            <button 
              type="submit" 
              disabled={!validForm ? true : false}
              className={styles.btnSubmit}>
                Зарегистрироваться
            </button>
        </div>
    
      </div>
    </div>
  )
}
