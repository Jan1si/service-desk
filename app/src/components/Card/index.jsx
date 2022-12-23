import React from 'react'
import styles from "./Card.module.scss";


export const Card = () => {
  return (
    <div className={styles.card}>
        <div className={styles.containerCard}>
            <div className={styles.headerCard}>
            <div className={styles.titleCard}>
                <h3>Название заявки</h3>
            </div>
            <div className={styles.infoCard}>
                <ul className={styles.listInfo}>
                    <li className={styles.itemInfo}>
                        <p>Категория заявки</p>
                    </li>
                    <li className={styles.iteminfo}>
                        <p>Фамиля Имя Отчество</p>
                    </li>
                    <li className={styles.iteminfo}>
                        <p>Приоритет</p>
                    </li>
                    <li className={styles.iteminfo}>
                        <p>Статус: ожидание</p>
                    </li>
                </ul>
            </div>
        </div>
        <div className={styles.bodyCard}>
            <div className={styles.deskBlock}>
                <div className={styles.labelBlock}>
                    <h3>Описание проблемы</h3>
                </div>
                <div className={styles.textBlock}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis alias quod, voluptatum perspiciatis vero laudantium earum molestiae, quos unde! Eligendi quia non, cum nam voluptatem laborum ad, eius nisi velit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis alias quod, voluptatum perspiciatis vero laudantium earum molestiae, quos unde! Eligendi quia non, cum nam voluptatem laborum ad, eius nisi velit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis alias quod, voluptatum perspiciatis vero laudantium earum molestiae, quos unde! Eligendi quia non, cum nam voluptatem laborum ad, eius nisi velit!</p>
                </div>
                <div className={styles.shadow}></div>
            </div>
            <div className={styles.btnsBlock}>
                <button className={`${styles.moreInfo} ${styles.btnCard}`}>Подрбнее</button>
                <button className={`${styles.addedBtn} ${styles.btnCard}`}>Принять</button>
            </div>
        </div>
        </div>
    </div>
  )
}
