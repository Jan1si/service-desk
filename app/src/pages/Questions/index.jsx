import React from 'react';
import styles from './Questions.scss';
import search from '../../assets/search.svg';

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
						<div className={styles.card}>
							<div className={styles.containerCard}>
								<div className={styles.headerCard}>
								<div className={styles.titleCard}>
									<h3>Название заявки</h3>
								</div>
								<div className={styles.infoCard}>
									<ul className={styles.listInfo}>
										<li className={styles.iteminfo}>
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
										<h4>Описание проблемы</h4>
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
