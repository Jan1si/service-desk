import React from 'react';
import { Bullet } from '../../components/Bullet';
import { Filter } from '../../components/Filter';
import styles from "./Users.module.scss";

export const Users = () => {
  return (
    <>
        <div className={styles.headerContent}>
            <div className={styles.titleHeader}>
                <h3>Пользователи</h3>
            </div>
            <Filter />
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
                    <Bullet num={1}/>
					<Bullet num={2}/>
					<Bullet num={3}/>
					<Bullet num={4}/>
					<Bullet num={5}/> 
                </ul>
            </div>
        </div>
    </>
  )
}
