import React from 'react';

interface MessageConfirmExitProps {
    onConfirm?: () => void; // Define onConfirm as a function that returns void
    noConfirm?: () => void;
}

function MessageConfirmExit(props: MessageConfirmExitProps) {
    const confirmationDialogStyle: React.CSSProperties = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
    };

    return (
        <div style={confirmationDialogStyle}>
            <span>Deseja Sair</span>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                <button onClick={props.onConfirm}>Sim</button>
                <button onClick={props.noConfirm}>Não</button>
            </div>
        </div>
    );
}

export default MessageConfirmExit;
