import React from 'react';
import Btn from './Btn';
import styles from './Message.module.css';
import ImageClose from './imageMessage/close.svg'

interface MessageProps {
    text?: string;
    description?: string;
    image?: string;
    heigthBtn?: string;
    widthBtn?: string;
    colorBtn?: string;
    textBtn?: string;
}

function Message(props: MessageProps) {
    const renderCloseButton = (
        <div className={styles.containerClose}>
            <img src={ImageClose} alt="close" />
        </div>
    );
    return (
        <div className={styles.contaienrMessage}>
            {props.widthBtn && props.colorBtn && props.textBtn && props.image && props.description && props.text ? (
                <>
                    {renderCloseButton}
                    <div className={styles.containerTextMessage}>
                        <h1>{props.text}</h1>
                        <img src={props.image} alt="Message" />
                        <span className= {styles.description}>{props.description}</span>
                        <div className={styles.containerButton}>
                            <Btn text={props.textBtn} color={props.colorBtn} width={props.widthBtn} height={props.heigthBtn} />
                        </div>
                    </div>


                </>
            ) : (
                    <>
                        {renderCloseButton}
                        <div className={styles.containerTextMessage}>
                            <h1>{props.text}</h1>
                            <img src={props.image} alt="Message" />
                            <span className= {styles.description}>{props.description}</span>
                        </div>

                    </>
                )}
        </div>
    );
}

export default Message;
