import React from "react";
import { Link } from 'react-router-dom';
import styles from './AuthenticationOptions.module.css';

interface AuthenticationOptionsProps {
    text?: string,
    color?: string
}

const linkStyle = {
    color: 'inherit',  // Herda a cor do pai
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '0.7vw'
};

function AuthenticationOptions(props: AuthenticationOptionsProps) {
    return (
        <div>
            {props.text === 'Esqueceu sua senha?' && (
                <Link to="/redefinirsenha" className={styles.customButton} style={{ ...linkStyle, color: props.color }}>
                   Esqueceu sua senha?
                </Link>
            )}
            {props.text === 'Voltar' && (
                <Link to="/login" className={styles.customButton} style={{ ...linkStyle, color: props.color }}>
                    Voltar
                </Link>
            )}
            {props.text === 'Crie uma conta' && (
                <Link to="/createacount " className={styles.customButton} style={{ ...linkStyle, color: props.color }}>
                    Criar uma conta
                </Link>
            )}
        </div>
    );
}

export default AuthenticationOptions;
