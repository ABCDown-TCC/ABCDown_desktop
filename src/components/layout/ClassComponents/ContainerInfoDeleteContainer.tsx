// import React from "react";
// import styles from './ContainerInfoDeleteContainer.module.css'

// interface PropsContainerInfoDeleteContainer {
//   onClickIfo?:() => void
//   onClickDelete?:() => void
// }

// function ContainerInfoDeleteContainer(props: PropsContainerInfoDeleteContainer) {
//   return (
//     <div style={{ width: "max-content", height: "max-content" }}>
//       <div style={{ display: "flex", flexDirection: "row" ,justifyContent: 'space-between', alignItems: 'center', gap:'0.8vw'}}>
//         <button className={styles.info} onClick={props.onClickIfo} >Info</button>
//         <button className={styles.delete} onClick={props.onClickDelete}></button>
//       </div>
//     </div>
//   );
// }

// export default ContainerInfoDeleteContainer;
import React from "react";
import styles from './ContainerInfoDeleteContainer.module.css'

interface PropsContainerInfoDeleteContainer {
  onClickIfo?: () => void
  onClickDelete?: () => void
}

function ContainerInfoDeleteContainer(props: PropsContainerInfoDeleteContainer) {
  const handleInfoClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (props.onClickIfo) {
      props.onClickIfo();
    }
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    if (props.onClickDelete) {
      props.onClickDelete();
    }
  };

  return (
    <div style={{ width: "max-content", height: "max-content" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', gap: '0.8vw' }}>
        <button className={styles.info} onClick={handleInfoClick}>Info</button>
        <button className={styles.delete} onClick={handleDeleteClick}></button>
      </div>
    </div>
  );
}

export default ContainerInfoDeleteContainer;
