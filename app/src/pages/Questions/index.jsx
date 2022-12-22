import React from 'react';
import styles from './Questions.scss';
import search from '../../assets/search.svg';

export const Quiestions = () => {
  return (
    <>
        <div class={styles.headerContent}>
					<div class={styles.titleHeader}>
						<h3>Журнал заявок</h3>
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
					<div class={styles.listItems}>
						<div class={styles.card}>
							<div class={styles.containerCard}>
								<div class={styles.headerCard}>
								<div class={styles.titleCard}>
									<h3>Название заявки</h3>
								</div>
								<div class={styles.infoCard}>
									<ul class={styles.listInfo}>
										<li class={styles.iteminfo}>
											<p>Категория заявки</p>
										</li>
										<li class={styles.iteminfo}>
											<p>Фамиля Имя Отчество</p>
										</li>
										<li class={styles.iteminfo}>
											<p>Приоритет</p>
										</li>
										<li class={styles.iteminfo}>
											<p>Статус: ожидание</p>
										</li>
									</ul>
								</div>
							</div>
							<div class={styles.bodyCard}>
								<div class={styles.deskBlock}>
									<div class={styles.labelBlock}>
										<h4>Описание проблемы</h4>
									</div>
									<div class={styles.textBlock}>
										<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis alias quod, voluptatum perspiciatis vero laudantium earum molestiae, quos unde! Eligendi quia non, cum nam voluptatem laborum ad, eius nisi velit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis alias quod, voluptatum perspiciatis vero laudantium earum molestiae, quos unde! Eligendi quia non, cum nam voluptatem laborum ad, eius nisi velit!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis alias quod, voluptatum perspiciatis vero laudantium earum molestiae, quos unde! Eligendi quia non, cum nam voluptatem laborum ad, eius nisi velit!</p>
									</div>
									<div class={styles.shadow}></div>
								</div>
								<div class={styles.btnsBlock}>
									<button class={`${styles.moreInfo} ${styles.btnCard}`}>Подрбнее</button>
									<button class={`${styles.addedBtn} ${styles.btnCard}`}>Принять</button>
								</div>
							</div>
							</div>
						</div>
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
