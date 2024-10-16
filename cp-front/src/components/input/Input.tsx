import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  type,
  id,
  name,
  label,
  onChange,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={id} className={styles.input_label}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        className={styles.input}
        {...rest}
      />
    </>
  );
};
