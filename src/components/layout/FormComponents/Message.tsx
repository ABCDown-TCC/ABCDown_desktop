import React from "react";
import Btn from "./Btn";
import styles from "./Message.module.css";
import ImageClose from "./imageMessage/close.svg";

interface MessageProps {
  text?: string;
  description?: string;
  image?: string;
  heigthBtn?: string;
  widthBtn?: string;
  colorBtn?: string;
  textBtn?: string;
  onClick?: () => void; // Corrigido o nome da propriedade aqui
}

function Message(props: MessageProps) {
  const renderCloseButton = (
    <button
      className={styles.containerClose}
      onClick={props.onClick}
    >
      <img src={ImageClose} alt="close" />
    </button>
  );
  return (
    <div className={styles.contaienrMessage}>
      {props.widthBtn &&
      props.colorBtn &&
      props.textBtn &&
      props.image &&
      props.description &&
      props.text ? (
        <>
          <div
            style={{
              width: "100%", // Defina o valor de largura desejado aqui
              //backgroundColor:'red',
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "red",
            }}
          >
            <button
              className={styles.containerClose}
              onClick={props.onClick}
            >
              <img src={ImageClose} alt="close" />
            </button>
          </div>
          <div className={styles.containerTextMessage}>
            <h1>{props.text}</h1>
            <img src={props.image} alt="Message" className={styles.image} />
            <span className={styles.description}>{props.description}</span>
            <div className={styles.containerButton}>
              <Btn
                text={props.textBtn}
                color={props.colorBtn}
                width={props.widthBtn}
                height={props.heigthBtn}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              width: "100%", // Defina o valor de largura desejado aqui
              //backgroundColor:'red',
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              className={styles.containerClose}
              onClick={props.onClick}
            >
              <img src={ImageClose} alt="close" />
            </button>
          </div>
          <div className={styles.containerTextMessage}>
            <h1>{props.text}</h1>
            <img src={props.image} alt="Message" className={styles.image} />
            <span className={styles.description}>{props.description}</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Message;
