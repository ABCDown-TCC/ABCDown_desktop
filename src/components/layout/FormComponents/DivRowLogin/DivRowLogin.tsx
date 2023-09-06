    import React from 'react';
import styles from './DivRowLogin.module.css';
import HeaderLogin from '../HeaderLogin'

interface DivRowLoginProps {
    leftSideContent?: React.ReactNode;
    rightSideBackgroundImage?: string;
}

function DivRowLogin(props: DivRowLoginProps) {
    return (
        <div className={styles.loginRowContainer}>
             
            <div className={styles.leftSideContainer}>
                {props.leftSideContent}
            </div>
            <div
                className={styles.rightSideContainer}
                style={{ backgroundImage: `url(${props.rightSideBackgroundImage})` }}
            >
                {/* Conteúdo da parte direita */}
            </div>
        </div>
    );
}

export default DivRowLogin;
