
import Header from '../layout/Header/Header'
import UserDetails from '../layout/ConfigurationComponents/UserDetails'
import UserDetailsAndSavedItems from '../layout/ComponentsConfiguraton/UserDetailsAndSavedItems'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import TextWelcomeUser from '../layout/ComponentsConfiguraton/TextWelcomeUser'
function Configuracoes() {

  return (
    <div style={{ width: '100%', backgroundColor: 'blue', height: '100' }}>
      <Header title='Configuraçoes' color='#F0754E' />
      <UserDetails>
 <TextWelcomeUser  nameUser='Guilherme'/>
      </UserDetails>
    
      <UserDetailsAndSavedItems />
      <div style={{ flex: 1, width: '100%', backgroundColor: 'white' }}></div>
    </div>
  )
}


export default Configuracoes