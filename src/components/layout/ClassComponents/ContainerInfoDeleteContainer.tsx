import React from "react";
import styles from './ContainerInfoDeleteContainer.module.css'

function ContainerInfoDeleteContainer() {
  return (
    <div style={{ width: "max-content", height: "max-content" }}>
      <div style={{ display: "flex", flexDirection: "row" ,justifyContent: 'space-between', alignItems: 'center', gap:'0.8vw'}}>
        <button className={styles.info}>Info</button>
        <button className={styles.delete}></button>
      </div>
    </div>
  );
}

export default ContainerInfoDeleteContainer;
