import React from 'react'
import  arrowOpen  from '../../assets/arrowOpen.svg';
import  empty  from '../../assets/empty.svg';
import styles from './Main.module.scss';

export const Main = () => {
  return (
    <div className={styles.row}>
        <div className={styles.leftSideBlock}>
            <div className={styles.headerBlock}>
                <h3>Составление заявки</h3>
            </div>
            <div className={styles.bodyBlock}>
                <form action="" method="POST">
                    <div className={styles.inputGroup}>
                        <input placeholder="Выберите категорию проблемы...." type="text" className={styles.selectInput} disabled />
                        <div className={styles.btnSelect}>
                            <img src={arrowOpen} alt="open" />
                        </div>
                    </div>
                    <input type="text" value="Значение из useState" hidden />
                    <div className={styles.inputGroup}>
                        <textarea className={styles.textDesc} placeholder="Опишите вашу проблему..."></textarea>
                    </div>

                    <button className={styles.btnSend}>Отправить</button>
                </form>
            </div>
        </div>
        <div className={styles.rightSideBlock}>
            <div className={styles.headerBlock}>
                <h3>Все ваши заявки</h3>
            </div>
            <div className={styles.bodyBlock}>
                <div className={styles.listRequest}>
                    <div className={styles.emptyBlock}>
                        <img className={styles.emptyImg} src={empty} alt="empty" />
                        <p className={styles.emptyP}>Список ваших заявок пуст!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
