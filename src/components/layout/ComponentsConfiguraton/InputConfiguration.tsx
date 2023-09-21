import React, { useState,ChangeEvent  } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './InputConfiguration.module.css';


interface InputProps {
    label?: string;
    name?: string;
    type?: string;
    required?: boolean;
    // errors?: any;
    // register?: any;
    disabled?: boolean; // Tornamos 'disabled' obrigatório
    customWidth?:string,
    height?:string
    value?:string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void; 
    id?: string
  }
  
  function InputConfiguration({id, value,label, type = 'text', required = false,  disabled,customWidth,height,onChange,name }: InputProps) {
    return (
      <div className={styles.inputContainer} 
      style={{
        width:customWidth,}}
      >
        <label className={styles.textTitle}>{label}:</label>
        <input
        //   {...register(name, { required })}
        type={type}
        id={id}
        name={name}
        className={styles.inputField}
        disabled={disabled}
        value={value}
        onChange={onChange}
        style={{
          height: height,
      
        }}
        />
      </div>
    );
  }

  export default InputConfiguration