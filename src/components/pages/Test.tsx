import { deflate } from "zlib";
import ImageEmail from '../layout/FormComponents/imageMessage/imageMessageEmail.svg'
import ImagePassword from '../layout/FormComponents/imageMessage/imageMessagePassword.svg'
import Message from '../layout/FormComponents/Message'



function Test() {
    const onClickCloseWindowsMessage =() => {
        console.log("test")
    }
return(
          <div
            style={{
                display: 'flex',
                alignItems: 'center', // Centraliza verticalmente
                justifyContent: 'center', // Centraliza horizontalmente
                height: '100vh', // 100% da altura da viewport
                width: '100vw', // 100% da largura da viewport
            }}
        >
    
    <Message text="Confira seu e-mail" image={ImageEmail} description="Se você não receber o e-mail em até 10 minutos, refaça a solicitação." onClick={onClickCloseWindowsMessage} />
    </div>
)
}
export default Test