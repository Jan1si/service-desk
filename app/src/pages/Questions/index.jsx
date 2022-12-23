import React from 'react';
import styles from './Questions.module.scss';
import { Card } from '../../components/Card';
import { Bullet } from '../../components/Bullet';
import { Filter } from '../../components/Filter';

export const Quiestions = () => {
  return (
    <>
        <div className={styles.headerContent}>
			<div className={styles.titleHeader}>
				<h3>Журнал заявок</h3>
			</div>
			<Filter />
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
