import Card from '../Cards';
import styles from './MessageDelete.module.css'
import ImageClose from '../FormComponents//imageMessage/close.svg'


interface MessageProps {

    onClick?: () => void
}


function MessageDelete(props: MessageProps) {

    return (
        <Card width="35%" height="35vh">
            <div className={styles.contaienrMessage}>
            <button className={styles.containerClose} onClick={props.onClick}>
            <img src={ImageClose} alt="close" />
        </button>

                <span>Tem certeza que deseja excluir essa turma?</span>

                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className={styles.custom_button_delete}>Excluir</button>
                    <button className={styles.custom_button_cancel}>Excluir</button>
                </div>

            </div>

        </Card>
    );
}

export default MessageDelete;
