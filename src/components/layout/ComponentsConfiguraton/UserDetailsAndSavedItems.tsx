import React from 'react';
import styles from './UserDetailsAndSavedItems.module.css'
function UserDetailsAndSavedItems() {
    const handleMyDataClick = () => {
        // Lógica para exibir e editar os dados do usuário
        console.log('Meus Dados clicado');
    };

    const handleSavedClick = () => {
        // Lógica para exibir itens salvos
        console.log('Salvos clicado');
    };

    return (
        <div className={styles.conatinerUserDetailsAndSavedItems}>
            <button className={styles.meuBotao} onClick={handleMyDataClick}>Meus Dados</button>
            <button className={styles.meuBotao} onClick={handleSavedClick}>Salvos</button>

        </div>
    );
}

export default UserDetailsAndSavedItems;
