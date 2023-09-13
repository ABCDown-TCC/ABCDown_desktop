
interface PropsTextWelcomeUser {
    nameUser?:string
}

function TextWelcomeUser(props : PropsTextWelcomeUser){
return(
    <span> Olá, {props.nameUser}</span>
)
}
export default TextWelcomeUser