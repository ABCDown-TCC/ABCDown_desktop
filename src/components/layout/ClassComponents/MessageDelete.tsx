import Card from '../Cards';
import styles from './MessageDelete.module.css'
import ImageClose from '../FormComponents//imageMessage/close.svg'


interface MessageProps {

    onClickDelete?: () => void
    onClickCancel?: () => void
    onClickClose?: () => void
}


function MessageDelete(props: MessageProps) {

    return (
        <Card width="25%" height="40vh">
            <div className={styles.contaienrMessage}
                style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'blue',

                }}>
                <div style={{
                    display: 'flex',
                    // height: '10%',
                    width: '100%',
                    // backgroundColor: 'red',
                    justifyContent: 'flex-end'
                }}>

                    <button className={styles.containerClose} onClick={props.onClickClose}>
                        <img src={ImageClose} alt="close" />
                    </button>
                </div>
                <div style={{
                    display: 'flex',
                    height: '100%',
                    width: '100%',
                    // backgroundColor: 'pink',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly', // Use 'space-evenly' para distribuir espaços uniformemente
                    alignItems: 'center'
                }}>
                    <h1
                        style={{
                            fontSize: '1.5vw'
                        }}
                    >Excluir Turma</h1>
                    <div
                        style={{
                            width: '3.5vw',
                            height: '6vh',
                            backgroundColor: '#F95926',
                            borderRadius: '50%'
                        }}
                    ></div>
                    <span
                        style={{
                            fontSize: '0.7vw'
                        }}
                    >Tem certeza que deseja excluir essa turma?</span>

                    <div style={{ display: 'flex', gap: '10%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <button className={styles.custom_button_cancel} onClick={props.onClickCancel}>Cancelar</button>
                        <button className={styles.custom_button_delete} onClick={props.onClickDelete}>Excluir</button>
                    </div>

                </div>

            </div>

        </Card>
    );
}

export default MessageDelete;
