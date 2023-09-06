import React from 'react';
import styles from './Input.module.css';

interface InputProps {
    text?: string;
    width?: string;
    height?: string;
    type?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    messageError?: string;
    disabled?: boolean; // Adicione a propriedade disabled
}

function Input(props: InputProps) {
    const inputStyle = {
        width: props.width,
        height: props.height
    };

    return (
        <div className={styles.inputContainer}>
            <span className={styles.textTitle}>{props.text}</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>          
                <input
                    className={`${styles.inputField} ${styles.inputWithImage}`}
                    type={props.type}
                    style={{
                        ...inputStyle,
                    }}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled} // Use a propriedade disabled para bloquear a digitação
                />
                <span className={styles.messageError}>{props.messageError}</span>
            </div>
        </div>
    );
}


export default Input;
