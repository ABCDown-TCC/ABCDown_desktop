import React from "react";
import styles from "./UserDetailsAndSavedItems.module.css";
import imageSave from './ImageConfiguration/save.svg'

interface UserDetailsAndSavedItemsProps{
  handleMyDataClick?: () => void
  handleSavedClick?: () => void
}
function UserDetailsAndSavedItems(props: UserDetailsAndSavedItemsProps) {


  return (
    <div className={styles.conatinerUserDetailsAndSavedItems}>
      <button className={styles.meuBotao} onClick={props.handleMyDataClick}>
        Meus Dados
      </button>
      <button className={styles.meuBotao} onClick={props.handleSavedClick} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <img src={imageSave} alt=""/>
        Salvos
      </button>
    </div>
  );
}

export default UserDetailsAndSavedItems;
