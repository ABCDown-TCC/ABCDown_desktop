import React, { useState,ChangeEvent  } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './InputConfiguration.module.css';


interface InputProps {
    label?: string;
    name?: keyof FormData;
    type?: string;
    required?: boolean;
    // errors?: any;
    // register?: any;
    disabled?: boolean; // Tornamos 'disabled' obrigatório
    customWidth?:string,
    height?:string
    value?:string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void; 
  }
  
  function InputConfiguration({ value,label, type = 'text', required = false,  disabled,customWidth,height,onChange }: InputProps) {
    return (
      <div className={styles.inputContainer} 
      style={{
        width:customWidth,}}
      >
        <label className={styles.textTitle}>{label}:</label>
        <input
        //   {...register(name, { required })}
          type={type}
          className={styles.inputField}
          disabled={disabled} // Usamos a propriedade 'disabled' passada
          value={value}
          onChange={onChange}
          style={{
           
            height:height,
        }}
        />
      </div>
    );
  }

  export default InputConfiguration