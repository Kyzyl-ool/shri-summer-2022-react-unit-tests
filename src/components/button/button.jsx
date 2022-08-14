import React from 'react';
import styles from './button.module.css';
import classnames from "classnames";

export const Button = ({children, type = 'primary'}) => {
  return (
    <button className={classnames(styles.root, styles[type])}>{children}</button>
  );
};