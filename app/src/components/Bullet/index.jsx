import React from 'react';
import styles from './Bullet.module.scss';

export const Bullet = ({num}) => {
  return (
    <li className={styles.bullet}>{num}</li>
  )
}
