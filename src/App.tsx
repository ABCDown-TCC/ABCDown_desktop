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

function App() {
  const divStyle: React.CSSProperties = {
    margin: '0',
    padding: '0',
    boxSizing: 'border-box',
    backgroundColor: 'lightgray',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100vh',
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
                <Sidebar />
                <Outlet /> {/* Renderiza rotas aninhadas */}
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="/turmas" element={<Turmas />} />
            <Route path="/comunidade" element={<Comunidade />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Route>
          {/* Rota sem Sidebar */}
          <Route path="/login" element={<Login />} />
          <Route path="/redefinirsenha" element={<ResetPassword/>} />
          <Route path="/createacount" element={<CreateACount/>} />
          <Route path="/test" element={<Test/>} />
          <Route path="/test2" element={<Test2/>} />
          <Route path="/createacsountreacthook" element={<CreateACountReactHook/>} />

          
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



export default App;

