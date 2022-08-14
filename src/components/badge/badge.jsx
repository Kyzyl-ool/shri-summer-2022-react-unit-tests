import React from 'react';
import styles from './badge.module.css';
import classnames from 'classnames';

export const Badge = ({children, type = 'hit', ...rest}) => {
  return <div className={classnames(styles.root, styles[type])} {...rest}>
    {children}
  </div>
}