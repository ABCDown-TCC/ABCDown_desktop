import React, { useState, useEffect } from "react";
import styles from "./Navibar.module.css"; // Importe o módulo CSS correto
import { Link, useNavigate } from "react-router-dom"; // Importe useHistory
import Class from "../icons/class.svg";
import Home from "../icons/home.svg";
import Settings from "../icons/settings.svg";
import Community from "../icons/community.svg";
import Exit from "../icons/_icons.svg";
import NavItem from "./NavItem";
import ImageLogin from "../img_Crud/image_login.png";
import MessageConfirmExit from "./MessageConfirmExit";
import Crud from '../../../Crud'
function Navibar() {
  const [showLabels, setShowLabels] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false); // State to control the confirmation dialog
  const [responseData, setResponseData] = useState<{ professor: Array<{ id: number; nome: string ;foto:string}> } | null>(null);
  

  const navigate = useNavigate();
  function MeuComponente() {
    useEffect(() => {
      // Dentro de useEffect para chamada assíncrona
      const fetchData = async () => {
        // Chame a função 'get' do módulo Crud
        const data = await Crud().get();
        setResponseData(data); // Atualize o estado com os dados obtidos

        // Faça algo com os dados obtidos, por exemplo, imprima no console
        console.log(data);
      };
  
      fetchData(); // Chame a função fetchData para buscar os dados
    }, []);}

    MeuComponente()

 
     

  const toggleLabels = () => {
    setShowLabels(!showLabels);
  };

  const toggleConfirmation = () => {
    console.log("sim called");
    // Quando o usuário confirma, redirecione-o para a página de login
    navigate("/login");
  };

  const toggleNoConfirmation = () => {
    console.log("NO clicado");
    setShowConfirmation(!showConfirmation);
  };

  return (
    <>
<NavItem
  onClick={toggleLabels}
  icon={responseData?.professor[0]?.foto || ''}
  style={{
    border: 'solid 2px #F0754E',
    borderRadius: '50%',
    objectFit: 'contain',
    height: '110px',
    width: '120px',
    /* max-width e max-height não precisam ser definidos aqui */
  }}
  to=""
  label={showLabels && responseData?.professor[0].nome || ""}
/>


      <nav className={styles.container_nav}>
        <ul className={showLabels ? "" : styles.hiden}>
          <NavItem
            icon={Home}
            to="/"
            label={showLabels ? "Home" : ""}
            classNameImg="navigation_img"
          />
          {/* Outros fitens do menu */}
        </ul>
        <ul className={showLabels ? "" : styles.hiden}>
          <NavItem
            icon={Community}
            to="/comunidade"
            label={showLabels ? "Comunidade" : ""}
            classNameImg="navigation_img"
          />
          {/* Outros itens do menu */}
        </ul>
        <ul className={showLabels ? "" : styles.hiden}>
          <NavItem
            icon={Class}
            to="/turmas"
            label={showLabels ? "Sala" : ""}
            classNameImg="navigation_img"
          />
          {/* Outros itens do menu */}
        </ul>
        <ul className={showLabels ? "" : styles.hiden}>
          <NavItem
            icon={Settings}
            to="/configuracoes"
            label={showLabels ? "Configuracoes" : ""}
            classNameImg="navigation_img"
          />
          {/* Outros itens do menu */}
        </ul>
      </nav>

      {/* <NavItem icon={Exit} to="/login" label={showLabels ?  "Sair" : ""} classNameImg="exit_img" className="text_exit" /> */}
      <NavItem
        icon={Exit}
        onClick={() => setShowConfirmation(true)} // Quando o usuário clicar em "Sair", mostre a confirmação
        label={showLabels ? "Sair" : ""}
        classNameImg="exit_img"
        className="text_exit"
      />

      {showConfirmation && (
        <MessageConfirmExit
          onConfirm={toggleConfirmation} // Pass the toggleConfirmation function
          noConfirm={toggleNoConfirmation} // Você também pode lidar com cancelamento alternando a confirmação
        />
      )}
    </>
  );
}

export default Navibar;
