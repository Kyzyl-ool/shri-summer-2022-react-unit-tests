import React from 'react';
import styles from './icon.module.css';

export const Icon = ({children, ...rest}) => {
  return <div className={styles.root} {...rest}>
    {children}
  </div>
}