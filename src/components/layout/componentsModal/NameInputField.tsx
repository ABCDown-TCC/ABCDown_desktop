import React, { ChangeEvent } from 'react';
import styles from './NameInputField.module.css';

interface NameInputFieldProps {
  title?: string;
  name?: string;
  width?: string;
  height?: string;
  className?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

function NameInputField(props: NameInputFieldProps) {


  return (
    <div className={styles.containerInputField}>
      <span>{props.title}</span>
      <input
        className={styles.nameInputField}
        style={{
          width: props.width,
          height: props.height,
        }}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

function DescriptionInputField(props: NameInputFieldProps) {


  return (
    <div className={styles.containerInputField}>
      <span>{props.title}</span>
      <input
        className={styles.descriptionInputField}
        style={{
          width: props.width,
          height: props.height,
        }}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export { NameInputField, DescriptionInputField };
