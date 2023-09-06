import React from 'react';
import styles from './RegistrationInstructions.module.css'; // Importe o arquivo CSS

interface RegistrationInstructionsProps {
  textTitulo?: string;
  textDescription?: string;
}

function RegistrationInstructions(props: RegistrationInstructionsProps) {
  return (
    <div className={styles.containerTexts}>
      <h1 className={styles.title}>{props.textTitulo}</h1>
      <span className={styles.description}>{props.textDescription}</span>
    </div>
  );
}

export default RegistrationInstructions;
