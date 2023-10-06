import React, { useState } from "react";
import imageLupa from "../layout/ClassComponents/ImagesClass/lupa.svg";
import Card from "../layout/Cards";
import addClass from "../layout/imagesCreateButton/addClass.svg";
import CreateButton from "../layout/CreateButton";
import ImageMyActivity from '../layout/img_containers_cards/imageMyActivity.svg'
interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function Tab({ label, active, onClick }: TabProps) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        color: active ? "#43B1B1" : "#000",
        borderBottom: active ? "2px solid #43B1B1" : "#000",
        paddingBottom: "10px",
        width: "max-content",
        fontSize: "1.5rem",
        height: "max-content",
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}

interface SearchInputProps {
  searchTerm?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
}

function SearchInput(props: SearchInputProps) {
  return (
    <div
      style={{
        backgroundColor: "#E6E6E6",
        width: "50%",
        height: "4vh",
        display: "flex", // Adicione display flex
        justifyContent: "space-between", // Coloque os itens nos extremos
        alignItems: "center", // Alinhe verticalmente no centro
        borderRadius: "10px",
      }}
    >
      <input
        style={{
          marginLeft: "5%",
          border: "none",
          outline: "none",
          backgroundColor: "#E6E6E6",
          height: "100%",
          width: "100%",
        }}
        type="text"
        placeholder={props.text}
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <img src={imageLupa} alt="Lupa" style={{ marginRight: "5%" }} />
      {/* <span className="user-input">{props.text}</span> */}
    </div>
  );
}

function MyActivicts() {
  return (
    <>
      <div
        style={{
          width: "17vw",
          height: "25vh",
          borderRadius: "20px",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ width: "100%", height: "40%", backgroundColor: "green" }}>
          <img
            src={ImageMyActivity}
            alt="image"
            style={{ display: "flex", width: "100%", height: "100%" }}
          />
        </div>
        <div style={{ display:'flex', flexDirection:'column', width:'100%', height:'60%'}}>
<span>Titulo atividade</span>
<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ler mais...</p>
<span>professor:</span>
<div style={{ display:'flex', flexDirection:'row', width:'100%',}}></div>


        </div>
      </div>
    </>
  );
}
function MinhasAtividades() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          height: "100%",
          background: "red",
          justifyContent: "flex-end",
          gap: "40px",
        }}
      >
        <MyActivicts />
      </div>
    </>
  );
}

function OutraCoisa() {
  // Implemente o componente de Desempenho aqui
  return (
    <div>
      <p>Desempenho</p>
    </div>
  );
}

function Comunidade() {
  const [activeTab, setActiveTab] = useState("Minhas atividades");
  const [isCreateClass, setIsCreateClass] = useState(false);

  function toggleTab(tabName: string) {
    setActiveTab(tabName);
  }
  function createClass() {
    setIsCreateClass(true);
    console.log("adicionar turma");
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#F2F2F2",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15%",
            //backgroundColor: 'pink'
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              //backgroundColor: '#f2f2f2'
            }}
          >
            <SearchInput text="Pesquisar atividades" />
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              borderBottom: "3px solid #e6e6e6",
            }}
          >
            <div
              style={{
                width: "30%",
                height: "100%",
                justifyContent: "space-evenly",
                //backgroundColor: 'red' ,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Tab
                label="Tarefas de Casa"
                active={activeTab === "Minhas atividades"}
                onClick={() => toggleTab("Minhas atividades")}
              />

              <Tab
                label="Outra Coisa"
                active={activeTab === "Outra Coisa"}
                onClick={() => toggleTab("Outra Coisa")}
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "85%", backgroundColor: "blue" }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F2F2F2",
              maxHeight: "100%",
              overflowY: "auto",
            }}
          >
            {activeTab === "Minhas atividades" && <MinhasAtividades />}
            {activeTab === "Outra Coisa" && <OutraCoisa />}
          </div>
        </div>

        <CreateButton image={addClass} onclick={createClass} />

        {isCreateClass && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Fundo escuro semi-transparente
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card width="35%" height="80%"></Card>
          </div>
        )}
      </div>
    </>
  );
}

export default Comunidade;
