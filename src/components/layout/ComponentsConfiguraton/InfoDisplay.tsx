
import styles from './InfoDisplay.module.css'
interface InfoDisplayProps {
  title?: string;
  information?: string
}

function InfoDisplay(props:InfoDisplayProps ) {
  return (
    <div className={styles.containerInfoDisplay}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles.description}>{props.information}</div>
    </div>
  );
};

export default InfoDisplay
