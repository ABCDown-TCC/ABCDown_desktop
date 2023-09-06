import Logo from './imageHeaderLogin/headerLogin.svg'
import styles from './HeaderLogin.module.css'
function HeaderLogin() {
    return(

        <>
        <header>
            <img className={styles.Img} src={Logo} alt="logo"/>

        </header>
        </>
    ) 
}

export default HeaderLogin