import React from 'react';
import styles from './icon.module.css';

export const Icon = ({children}) => {
  return <div className={styles.root}>
    {children}
  </div>
}