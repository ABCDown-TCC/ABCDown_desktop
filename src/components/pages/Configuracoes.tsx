
import Header from '../layout/Header/Header' 
import UserDetails from '../layout/ConfigurationComponents/UserDetails'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

function Configuracoes() {

    return (
    <div style={{width:'100%', backgroundColor:'blue'}}>
      <Header title='Configuraçoes' color='#F0754E'/>
      <UserDetails/>
    </div>
    )
}


export default Configuracoes