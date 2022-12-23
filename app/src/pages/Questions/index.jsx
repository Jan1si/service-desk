import React from 'react';
import styles from './Questions.scss';
import search from '../../assets/search.svg';
import { Card } from '../../components/Card';
import { Bullet } from '../../components/Bullet';

export const Quiestions = () => {
  return (
    <>
        <div className={styles.headerContent}>
					<div className={styles.titleHeader}>
						<h3>Журнал заявок</h3>
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
					<div className={styles.listItems}>
						<Card />
						<Card />
						<Card />
						<Card />
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
