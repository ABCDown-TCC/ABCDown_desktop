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
    width?:string,
    height?:string
  }
  
  function InputConfiguration({ label, type = 'text', required = false,  disabled,width,height }: InputProps) {
    return (
      <div className={styles.inputContainer} style={{
          width:width,
          height:height,
      }} >
        <label className={styles.textTitle}>{label}:</label>
        <input
        //   {...register(name, { required })}
          type={type}
          className={styles.inputField}
          disabled={disabled} // Usamos a propriedade 'disabled' passada
        />
      </div>
    );
  }

  export default InputConfiguration