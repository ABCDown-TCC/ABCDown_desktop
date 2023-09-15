import React, { useState } from 'react';
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
  }
  
  function InputConfiguration({ label, type = 'text', required = false,  disabled,customWidth,height }: InputProps) {
    return (
      <div className={styles.inputContainer} >
        <label className={styles.textTitle}>{label}:</label>
        <input
        //   {...register(name, { required })}
          type={type}
          className={styles.inputField}
          disabled={disabled} // Usamos a propriedade 'disabled' passada
          style={{
            width:customWidth,
            height:height,
        }}
        />
      </div>
    );
  }

  export default InputConfiguration