import React from 'react';
import styles from '../AuthPopup.module.scss';
import logo from '../../../assets/logo.svg';
import close from '../../../assets/close.svg';
import { useInput } from '../../../hooks/useInput';

export const LoginPopup = ({showForm, setShowForm}) => {
    
    const email = useInput('', {isEmpty: true, minLength: 3, maxLength: 50, validEmail: true});
    const password = useInput('', {isEmpty: true, minLength: 3, maxLength: 50});
  
    return (
      <>
        <a href="#" onClick={() => setShowForm((prev) => !prev)} className={`${styles.baseText} ${styles.authLink}`}>Войти</a>
      
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
              <h3>Вход</h3>
            </div>
  
            <div className={styles.popupForm}>
  
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
  
            </div>
              <button 
                type="submit"
                disabled={!email.validForm || !password.validForm}
                className={styles.btnSubmit}>Войти</button>
          </div>
      
        </div>
      </div>
      </>
      
    )
}
