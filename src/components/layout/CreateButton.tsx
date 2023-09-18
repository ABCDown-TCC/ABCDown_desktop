import React from "react";
import styles from './CreateButton.module.css'

interface CreateButtonProps {
  image?: string;
  text?: string;
  className?: string; // Adicione uma propriedade className opcional
  onclick?: () => void
}

function CreateButton(props: CreateButtonProps) {
  // Combine as classes existentes com a classe fornecida em props.className
  const combinedClassName = `${styles.Bnt} ${props.className || ''}`;

  return (
    <button className={styles.Bnt} onClick={props.onclick}>
      <img src={props.image} className={styles.item} />
    </button>
  );
}

export default CreateButton;