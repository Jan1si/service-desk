import React from 'react';
import styles from "./Users.module.scss";
import search from '../../assets/search.svg';

export const Users = () => {
  return (
    <>
        <div class={styles.headerContent}>
            <div class={styles.titleHeader}>
                <h3>Пользователи</h3>
            </div>
            <div class={styles.filtersHeader}>
                <div class={styles.inputGroup}>
                    <input class={styles.searchInput} type="text" placeholder="Поиск..." />
                    <div class={styles.btnSearch}>
                        <img src={search} alt="search" />
                    </div>
                </div>
                <div class={styles.filtersGroup}>
                    <p>Фильтры</p>
                </div>
            </div>
        </div>
        <div class={styles.bodyContent}>
            <div class={styles.tableBlock}>
                <table class={styles.table}>
                    <tbody>
                        <tr>
                            <td>№ 1</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p class={styles.update}>Редактировать</p></td>
                            <td><p class={styles.delete}>Удалить</p></td>
                        </tr>
                        <tr>
                            <td>№ 2</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p class={styles.update}>Редактировать</p></td>
                            <td><p class={styles.delete}>Удалить</p></td>
                        </tr>
                        <tr>
                            <td>№ 3</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p class={styles.update}>Редактировать</p></td>
                            <td><p class={styles.delete}>Удалить</p></td>
                        </tr>
                        <tr>
                            <td>№ 4</td>
                            <td>ФИО</td>
                            <td>Пароль</td>
                            <td>Роль</td>
                            <td>Дата создания</td>
                            <td>Дата редактирования</td>
                            <td><p class={styles.update}>Редактировать</p></td>
                            <td><p class={styles.delete}>Удалить</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class={styles.paginations}>
                <ul class={styles.listBullet}>
                    <li class={styles.bullet}>1</li>
                    <li class={styles.bullet}>2</li>
                    <li class={styles.bullet}>3</li>
                    <li class={styles.bullet}>4</li>
                    <li class={styles.bullet}>5</li>
                </ul>
            </div>
        </div>
    </>
  )
}
