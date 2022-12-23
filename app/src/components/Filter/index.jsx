import React from 'react'
import styles from './Filter.module.scss';
import search from '../../assets/search.svg';


export const Filter = () => {
  return (
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
  )
}
