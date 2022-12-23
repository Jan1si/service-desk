import React from 'react';
import styles from "./Users.module.scss";
import search from '../../assets/search.svg';

export const Users = () => {
  return (
    <>
        <div className={styles.headerContent}>
            <div className={styles.titleHeader}>
                <h3>Пользователи</h3>
            </div>
            <div className={styles.filtersHeader}>
                <div className={styles.inputGroup}>
                    <input className={styles.searchInput} type="text" placeholder="Поиск..." />
                    <div className={styles.btnSearch}>
                        <img src={search} alt="search" />
                    </div>
                </div>
                <div className={styles.filtersGroup}>
                    <p>Фильтры</p>
                </div>
            </div>
        </div>
        <div className={styles.bodyContent}>
            <div className={styles.tableBlock}>
                <table className={styles.table}>
                    <tbody>
                        <tr>
                            <td>№ 1</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p className={styles.update}>Редактировать</p></td>
                            <td><p className={styles.delete}>Удалить</p></td>
                        </tr>
                        <tr>
                            <td>№ 2</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p className={styles.update}>Редактировать</p></td>
                            <td><p className={styles.delete}>Удалить</p></td>
                        </tr>
                        <tr>
                            <td>№ 3</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p className={styles.update}>Редактировать</p></td>
                            <td><p className={styles.delete}>Удалить</p></td>
                        </tr>
                        <tr>
                            <td>№ 4</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p className={styles.update}>Редактировать</p></td>
                            <td><p className={styles.delete}>Удалить</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.paginations}>
                <ul className={styles.listBullet}>
                    <li className={styles.bullet}>1</li>
                    <li className={styles.bullet}>2</li>
                    <li className={styles.bullet}>3</li>
                    <li className={styles.bullet}>4</li>
                    <li className={styles.bullet}>5</li>
                </ul>
            </div>
        </div>
    </>
  )
}
