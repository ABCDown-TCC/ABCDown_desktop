import { deflate } from "zlib";
import ImageEmail from '../layout/FormComponents/imageMessage/imageMessageEmail.svg'
import ImagePassword from '../layout/FormComponents/imageMessage/imageMessagePassword.svg'
import Message from '../layout/FormComponents/Message'


function Test2() {
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
    
<Message text="Senha redefinida com sucesso" image={ImagePassword} description="Sua senha foi redefinida com sucesso. Agora você já pode acessar sua conta:" heigthBtn="5vh" widthBtn="10vw" colorBtn="#43B1B1"  textBtn="Continuar Log In"/>
    </div>
)
}
export default Test2