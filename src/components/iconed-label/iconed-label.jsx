import React from 'react';
import styles from './iconed-label.module.css';

export const IconedLabel = ({icon, text}) => {
  return <div className={styles.root}>
    <div className={styles.icon}>
      {icon}
    </div>
    <div className={styles.text}>
      {text}
    </div>
  </div>
}