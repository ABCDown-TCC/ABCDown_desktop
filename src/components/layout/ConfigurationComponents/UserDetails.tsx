import styles from './UserDetails.module.css'

interface CardsProps {

    children?: React.ReactNode;
  }
function UserDetails(props: CardsProps) {
    return (
        <>
            <div className={styles.ContainerUserDetails}>
            {props.children}
            </div>

        </>
    )

}
export default UserDetails 