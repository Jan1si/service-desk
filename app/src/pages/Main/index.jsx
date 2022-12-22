import React from 'react'
import  arrowOpen  from '../../assets/arrowOpen.svg';
import  empty  from '../../assets/empty.svg';
import styles from './Main.scss';

export const Main = () => {
  return (
    <div class={styles.row}>
        <div class={styles.leftSideBlock}>
            <div class={styles.headerBlock}>
                <h3>Составление заявки</h3>
            </div>
            <div class={styles.bodyBlock}>
                <form action="" method="POST">
                    <div class={styles.inputGroup}>
                        <input placeholder="Выберите категорию проблемы...." type="text" class={styles.selectInput} disabled />
                        <div class={styles.btnSelect}>
                            <img src={arrowOpen} alt="open" />
                        </div>
                    </div>
                    <input type="text" value="Значение из useState" hidden />
                    <div class={styles.inputGroup}>
                        <textarea class={styles.textDesc} placeholder="Опишите вашу проблему..."></textarea>
                    </div>

                    <button class={styles.btnSend}>Отправить</button>
                </form>
            </div>
        </div>
        <div class={styles.rightSideBlock}>
            <div class={styles.headerBlock}>
                <h3>Все ваши заявки</h3>
            </div>
            <div class={styles.bodyBlock}>
                <div class={styles.listRequest}>
                    <div class={styles.emptyBlock}>
                        <img class={styles.emptyImg} src={empty} alt="empty" />
                        <p class={styles.emptyP}>Список ваших заявок пуст!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
