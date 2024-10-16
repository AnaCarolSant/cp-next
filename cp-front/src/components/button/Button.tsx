import React from 'react';
import styles from './Button.module.css';



interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, type, onClick }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
