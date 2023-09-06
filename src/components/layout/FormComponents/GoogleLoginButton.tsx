import React from 'react';
import styles from './GoogleLoginButton.module.css';

interface GoogleLoginButtonProps {
    text?: string;
    imageSrc?: string;
    width?: string;
    height?: string;
}

function GoogleLoginButton(props: GoogleLoginButtonProps) {
    const containerStyle = {
        width: props.width,
        height: props.height
    };

    return (
        <div className={styles.inputContainer} style={containerStyle}>
        
                <img src={props.imageSrc} alt='' className={styles.image} />
                <span className={styles.textTitle}>Log in with Google</span>
            
        </div>
    );
}

export default GoogleLoginButton;
