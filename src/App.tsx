// import React from 'react';
// import logo from './logo.svg';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Navibar from './components/layout/Navibar/Navibar'
// import Home from './components/pages/Home';
// import Turmas from './components/pages/Turmas';
// import Comunidade from './components/pages/Comunidade';
// import Configuracoes from './components/pages/Configuracoes';
// import Login from './components/pages/Login';
// import Sidebar from './components/layout/Sidebar'

// function App() {
//   const divStyle: React.CSSProperties = {
//     margin: '0',
//     padding: '0',
//     boxSizing: 'border-box', // Correção aqui
//     backgroundColor: 'lightgray',
//     display: 'flex',
//     flexDirection: 'row',
//     width: '100%',
//      height: '100vh',
//   };

//   return (
//     <div style={divStyle}>
//       <Router>
//         <Sidebar/>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/turmas" element={<Turmas />} />
//           <Route path="/comunidade" element={<Comunidade />} />
//           <Route path="/configuracoes" element={<Configuracoes />} />
//           <Route path="/login" element={<Login/>} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/pages/Home';
import Turmas from './components/pages/Turmas';
import Comunidade from './components/pages/Comunidade';
import Configuracoes from './components/pages/Configuracoes';
import Login from './components/pages/Login';
import Sidebar from './components/layout/Sidebar';
import ResetPassword from './components/pages/ResetPassword';
import Test from './components/pages/Test'
import Test2 from './components/pages/Test2'
import CreateACount from './components/pages/CreateACount'
import CreateACountReactHook from './components/pages/CreateACountReactHook'
import MessageConfirmExit from './components/layout/Navibar/MessageConfirmExit'
import TestCard from './components/pages/TestCard'
import InputInfo from './components/pages/InputInfo'
import TesteInputConfiguration from './components/pages/TesteInputConfiguration'
import Students from './components/pages/Students'
import Student from './components/pages/Student'
import ConfirmarSenhaForm from './components/redefinirSenha/ConfirmarSenhaForm';
import EsqueciSenhaForm from './components/redefinirSenha/EsqueciSenhaForm';


function App() {
  const divStyle: React.CSSProperties = {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
   // backgroundColor: 'red',
    display: 'flex',
    // flexDirection: 'row',
    width: '100%',
    height:'100vh',
  //  justifyContent:'flex-end',
   backgroundColor: "#f2f2f2",


  
  };

  return (
    <div style={divStyle}>
<Router>
        <Routes>
          {/* Rota com Sidebar */}
          <Route
            path="/"
            element={
              <>
          {/* <div style={{ display: 'flex', height: '100%' }}> */}
          <Sidebar />
          {/* <div style={{ width: '80%' }}> */}
            <Outlet />
          {/* </div> */}
        {/* </div> */}
                {/* Renderiza rotas aninhadas */}
              </>
            }
          >
           

            <Route index element={<Home />} />
            <Route path="/turmas" element={<Turmas />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/turmas/alunos" element={<Students/>}/>
            <Route path="/turmas/alunos/aluno" element={<Student/>}/>


          </Route>
          {/* Rota sem Sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/redefinirsenha" element={<ResetPassword/>} />
          <Route path="/createacount" element={<CreateACount/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/test2" element={<Test2/>} />
          <Route path="/createacsountreacthook" element={<CreateACountReactHook/>} />
          <Route path="/testCard" element={<TestCard/>} />
          <Route path="/testeInputConfiguration" element={<TesteInputConfiguration/>}/>
          {/* <Route path="/turmas/alunos" element={<Students/>}/> */}
          <Route path="/confirmar-senha/" element={<ConfirmarSenhaForm />} />
          <Route path="/esqueci-minha-senha" element={<EsqueciSenhaForm />} />

      

          
        </Routes>
      </Router>
      </div>
  );
}
//npm install firebase
// npm install 
//node server.js
//node server.js
//npm install react-hook-form

//npmi
// npm prisma regenerate
//npm start:/dev

export default App;

