import React from 'react';
import styles from './Cards.module.css';
import ContainerInfoDeleteContainer from '../layout/ClassComponents/ContainerInfoDeleteContainer';

interface CardsProps {
  height: string;
  width: string;
  children?: React.ReactNode;
  onClick?:() => void
}

function Cards(props: CardsProps) {
  return (
    <div 
    className={styles.containerCard} style={{ height: props.height, width: props.width, display: 'flex', flexDirection: 'column' }}
    onClick={props.onClick}
    >
      <div className={styles.cardContent}>
        {props.children}
      </div>
 
    </div>
  );
}

export default Cards;
