import React from 'react';
import styles from './button.module.css';
import classnames from "classnames";

export const Button = ({children, type = 'primary', disabled, ...rest}) => {
  return (
    <button className={classnames(styles.root, styles[type], {
      [styles.disabled]: disabled
    })} {...rest}>{children}</button>
  );
};