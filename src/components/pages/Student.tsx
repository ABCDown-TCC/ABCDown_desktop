import Header from "../layout/Header/Header";
import UserDetails from "../layout/ConfigurationComponents/UserDetails";
import { useState } from "react";
import React, { ReactNode } from 'react';
import imageLupa from '../layout/ClassComponents/ImagesClass/lupa.svg'

interface CustomDivProps {
    children: ReactNode;
}


function Matter() {
    const containerStyle = {
      border: '2px solid #F0754E',
      padding: '10px',
      width: '300px',
    };
  
    const titleStyle = {
      fontWeight: 'bold',
    };
  
    const starsStyle = {
      fontSize: '24px',
      color: 'gold',
    };
  
    return (
      <div style={containerStyle}>
        <span style={titleStyle}>Atividade de Português</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div style={starsStyle}>
          <span>★★★★★</span>
        </div>
      </div>
    );
  }
const CustomDiv: React.FC<CustomDivProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row',  alignItems: 'center', 
        //backgroundColor:'blue', 
        gap:'10%'}}>
            {children}
        </div>
    );
};

const CustomDivColumn: React.FC<CustomDivProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {children}
        </div>
    );
};

interface SearchInputProps {
    searchTerm?: string;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    text?: string;
  }
  
  function SearchInput(props: SearchInputProps) {
    return (
        <div
        style={{
          backgroundColor: '#D9D9D9',
          width: '40%',
          height: '3vh',
          display: 'flex',          // Adicione display flex
          justifyContent: 'space-between', // Coloque os itens nos extremos
          alignItems: 'center',     // Alinhe verticalmente no centro
          borderRadius:'50px'
        }}
      >
       
        <input style={{ marginLeft:'5%', border: 'none',outline: 'none',backgroundColor:'#D9D9D9',height:'100%',width:'100%'}}
        
          type="text"
          placeholder={props.text}
          value={props.searchTerm}
          onChange={props.handleChange}
    
        />
<img src={imageLupa} alt="Lupa" style={{ marginRight: '5%' }} />
        {/* <span className="user-input">{props.text}</span> */}
      </div>
    )
  }
  

function CustomSelect() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: '#D9D9D9',
                justifyContent: 'space-between',
                width: '10vw',
                height: '5vh',
                border: '3px solid #DDDDDD',
                alignItems: 'center',
                borderRadius: '50px',
                padding: '0 1%',

                fontSize: '1.5rem'
                // padding: '0.5rem',

            }}
        >
            <label htmlFor="ordenar">Pendente</label>
            <select id="ordenar" style={{
                border: 'none',
                outline: 'none',
                width: '100%',
                backgroundColor: '#D9D9D9'


            }}>
                <option value=""></option>
                <option key="1" value="1">Opção 1</option>
                <option key="2" value="2">Opção 2</option>
                <option key="3" value="3">Opção 3</option>
                {/* Adicione mais opções conforme necessário */}
            </select>
        </div>
    );
}

const imageStudent = (
    <div
        style={{
            width: "60%",
            height: "100%",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "white",
            border: "2px solid white",
        }}
    >
        <img
            src="img/test" // Certifique-se de que o caminho da imagem esteja correto
            style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "center center", // Ajuste este valor conforme necessário
            }}
        />
    </div>
);



interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void; // Especificando o tipo da propriedade onClick
}

function Tab({ label, active, onClick }: TabProps) {
    return (
        <span
            onClick={onClick}
            style={{
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                color: active ? '#43B1B1' : '#000',
                borderBottom: active ? '2px solid #43B1B1' : '#000',
                paddingBottom: '10px',
                width: 'max-content',
                fontSize: '1.5rem',
            }}
        >
            {label}
        </span>
    );
}




function TarefasDeCasa() {
    return (
        <>
            <div
                style={{ width: '100%', height: '100%', backgroundColor: 'red', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>

                <div style={{ width: '90%', height: '100%', backgroundColor: 'blue', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ width: '100%', height: '20%', backgroundColor: 'pink',display:'flex', flexDirection:'row',justifyContent: 'space-between' }}>
                        <CustomSelect />
                        <SearchInput text="Pesquisar atividades" />

                    </div>
                    <div style={{ width: '100%', height: '80%', backgroundColor: 'green' }}>

                        < Matter/>
                    </div>

                </div>
            </div>
        </>
    );
}



function Desempenho() {
    return (
        <div>
            <h1>Desempenho</h1>
            {/* Conteúdo da tela de Desempenho */}
        </div>
    );
}



function Responsavel() {
    return (
        <div>
            <h1>Responsável</h1>
            {/* Conteúdo da tela de Responsável */}
        </div>
    );
}





function Student() {
    const [activeTab, setActiveTab] = useState("Tarefas de casa");

    function toggleTab(tabName: string) {
        // Adicione o tipo 'string' aqui
        setActiveTab(tabName);
    }
    return (
        <>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100vh",
                    flexDirection: "column",
                    backgroundColor: '#43B1B1'

                }}
            >
                <Header title="" color="#43B1B1" />
                <UserDetails height="25%" color="#43B1B1">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "30px",
                            // marginLeft: "3%",
                            width: "50%",
                           // background: 'red',
                            height: '100%',
                        }}
                    >
                        <div style={{
                            width: '40%',
                            height: '100%',
                            //backgroundColor: 'pink',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}> {imageStudent}</div>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: '60%',
                                height: '100%',
                                //backgroundColor: 'pink',
                                justifyContent: 'space-around'
                            }}
                        >
                            <span style={{color:'white', fontSize:'3rem',  fontWeight: 'bold'}}>Natan Gonçalves</span>
                            <CustomDiv>
                                <>
                                    <CustomDivColumn>
                                        <span style={{color:'white' ,fontWeight: 'bold', fontSize:'1.5rem'}}>Idade</span>
                                        <span style={{color:'white'}}>4 anos</span>
                                    </CustomDivColumn>

                                    <CustomDivColumn>
                                        <span style={{color:'white' ,fontWeight: 'bold',fontSize:'1.5rem'}}>Genêro</span>
                                        <span style={{color:'white'}} >Masculino</span>
                                    </CustomDivColumn>


                                </>
                            </CustomDiv>
                            <CustomDiv>
                                <>
                                    <CustomDivColumn>
                                        <span style={{color:'white' ,fontWeight: 'bold',fontSize:'1.5rem'}}>Escola</span>
                                        <span style={{color:'white'}}>  E.E. Professora Iracema Rauen Maciel</span>
                                    </CustomDivColumn>

                                    <CustomDivColumn>
                                        <span style={{color:'white' ,fontWeight: 'bold',fontSize:'1.5rem'}}>Turma</span>
                                        <span style={{color:'white'}}>1º A - Manhã</span>
                                    </CustomDivColumn>


                                </>
                            </CustomDiv>

                        </div>
                    </div>
                </UserDetails>

                <div
                    style={{
                        width: "100%",
                        height: "80%", display: 'flex', flexDirection: 'column'
                        // backgroundColor: "#43B1B1",

                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "15%",
                            backgroundColor: "white",
                            display: 'flex',
                            flexDirection: 'row',
                            borderTopLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            alignItems: 'flex-end',
                            justifyContent: 'center',


                        }}
                    >

                        <div style={{ width: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Tab
                                label="Tarefas de Casa"
                                active={activeTab === "Tarefas de Casa"}
                                onClick={() => toggleTab("Tarefas de Casa")}
                            />

                            <Tab
                                label="Desempenho"
                                active={activeTab === "Desempenho"}
                                onClick={() => toggleTab("Desempenho")}
                            />

                            <Tab
                                label="Responsável"
                                active={activeTab === "Responsável"}
                                onClick={() => toggleTab("Responsável")}
                            />

                        </div>
                    </div>
                    <div style={{ width: '100%', height: '85%', backgroundColor: 'white' }}>
                        {activeTab === 'Tarefas de Casa' && <TarefasDeCasa />}
                        {activeTab === 'Desempenho' && <Desempenho />}
                        {activeTab === 'Responsável' && <Responsavel />}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Student;
