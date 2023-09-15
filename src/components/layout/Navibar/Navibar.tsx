import React, { useState, useEffect } from "react";
import styles from "./Navibar.module.css"; // Importe o módulo CSS correto
import { Link, useNavigate } from "react-router-dom"; // Importe useHistory
import Class from "../icons/class.svg";
import Home from "../icons/home.svg";
import Settings from "../icons/settings.svg";
import Community from "../icons/community.svg";
import Exit from "../icons/_icons.png";
import NavItem from "./NavItem";
import ImageLogin from "../img_Crud/image_login.png";
import MessageConfirmExit from "./MessageConfirmExit";

function Navibar() {
  const [showLabels, setShowLabels] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false); // State to control the confirmation dialog
  const [responseData, setResponseData] = useState<{ professor: Array<{ id: number; nome: string ;foto:string}> } | null>(null);

  const navigate = useNavigate();
  async function fetchUserData() {
    const id = 16;
    const accessToken = sessionStorage.getItem("accessToken");
    console.log(accessToken);

    if (!accessToken) {
      console.error("Token de acesso não encontrado");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8181/professor/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        setResponseData(responseData); // Atualize o estado com os dados da função

      } else {
        console.log("Solicitação não bem-sucedida");
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  }

  useEffect(() => {
    fetchUserData(); // Chame a função fetchData quando o componente for montado
  }, []); 
     

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
       // icon={ImageLogin}
       icon={responseData?.professor[0]?.foto || ''}

        to=""
        //label={showLabels ? "Camila" : ""}
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
