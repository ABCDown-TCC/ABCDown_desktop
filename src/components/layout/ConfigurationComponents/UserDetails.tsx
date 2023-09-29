import styles from './UserDetails.module.css';

interface CardsProps {
  color?: string; // Renomeei backgroundColor para color
  children?: React.ReactNode;
  height?: string
}

function UserDetails(props: CardsProps) {
  const containerStyle = {
    backgroundColor: props.color || '', // Use a cor de fundo fornecida ou vazia se não fornecida
    height: props.height || 'max-content'
  };


  return (
    <div className={styles.ContainerUserDetails} style={containerStyle}>
      {props.children}
    </div>
  );
}

export default UserDetails;
