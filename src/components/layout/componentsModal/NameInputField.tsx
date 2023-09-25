import styles from './NameInputField.module.css'

interface NameInputFieldProps{
    title?: string,
    name?: string,
    width?: string,
    height?: string,
    className?: string,
    placeholder?: string


}

function NameInputField (props: NameInputFieldProps){
    
    return (
        <>
           < div className = {styles.containerInputField}>
            <span>{props.title}</span>
            <input placeholder={props.placeholder} className={props.className}></input>
            
            </div>
            </>
    )
    

}

export default NameInputField;