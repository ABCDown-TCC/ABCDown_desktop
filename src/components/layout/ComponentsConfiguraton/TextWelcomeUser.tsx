
interface PropsTextWelcomeUser {
    nameUser?:string
}

function TextWelcomeUser(props : PropsTextWelcomeUser){
return(
    <span style={{
        color:'white',
        fontSize:'2vw'
    }}>Olá, {props.nameUser}!</span>
)
}
export default TextWelcomeUser