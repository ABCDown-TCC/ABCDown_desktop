import Header from "../layout/Header/Header";
import UserDetails from "../layout/ConfigurationComponents/UserDetails";
import { useState } from "react";
import React, { ReactNode } from 'react';
import imageLupa from '../layout/ClassComponents/ImagesClass/lupa.svg'
import Matter from '../layout/componentStudent/Matter'
import imageGame from '../layout/img_containers_cards/imageGame.svg'
import imageHomeWork from '../layout/img_containers_cards/imageHomeWork.svg'

interface CustomDivProps {
    children: ReactNode;
}



interface CustomRowProps {
    onClick?: () => void;
    imageSrc?: string; // Adicione a prop imageSrc
    nome?: string;
    descricao?: string
}

function CustomRow(props: CustomRowProps) {
    return (
        <div
            style={{
                display: 'flex',
                border: '1px solid black', // Borda preta
                borderRadius: '10px',
                cursor: 'pointer', // Adicione um cursor de ponteiro para indicar que o card é clicável
                width: '30%',
                height: '30%',
            }}
            onClick={props.onClick} // Adicione o evento onClick para chamar a função handleClick
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '50%',
                   // backgroundColor: 'red',

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '80%',
                        width: '90%',
                       // backgroundColor: 'green',

                    }}
                >
                    <span style={{ fontWeight: 'bold', fontSize: '2rem' }}>{props.nome}</span>
                    <span style={{ fontSize: '1rem',width:'90%' }}>{props.descricao}</span>
                </div>

            </div>

            {/* Div de imagem */}
            <div
                style={{
                    width: '50%', // Largura da div de imagem
                    height: '100%', // Altura da div de imagem
                  //  backgroundColor: 'lightblue', // Cor de fundo da div de imagem
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        width: '70%',
                       // backgroundColor: 'green',
                        alignItems: 'flex-end'
                    }}
                >
                    <img
                        src={props.imageSrc} // Use a prop imageSrc como src da imagem
                        alt="Imagem"
                        style={{
                            display: 'flex',
                            width: '50%',
                            height: '100%',

                            //backgroundColor: 'blue',
                        }}
                    />
                </div>

            </div>
        </div>
    );
}





const CustomDiv: React.FC<CustomDivProps> = ({ children }) => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            //backgroundColor:'blue', 
            gap: '10%'
        }}>
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
                backgroundColor: '#EEEEEE',
                width: '50%',
                height: '4vh',
                display: 'flex',          // Adicione display flex
                justifyContent: 'space-between', // Coloque os itens nos extremos
                alignItems: 'center',     // Alinhe verticalmente no centro
                borderRadius: '50px'
            }}
        >

            <input style={{ marginLeft: '5%', border: 'none', outline: 'none', backgroundColor: '#EEEEEE', height: '100%', width: '100%' }}

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
                backgroundColor: '#EEEEEE',
                justifyContent: 'space-between',
                width: '17%',
                height: '4vh',
                border: '3px solid #EEEEEE',
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
                backgroundColor: '#EEEEEE'


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
    const showMore = () => {
        console.log('Ver mais clicado');
    };
    return (
        <>
            <div
                style={{
                    width: '100%', height: '100%',
                    //  backgroundColor: 'red', 
                    alignItems: 'center', display: 'flex', justifyContent: 'center'
                }}>

                <div style={{
                    width: '80%', height: '100%',
                    //backgroundColor: 'blue', 
                    display: 'flex', flexDirection: 'column'
                }}>
                    <div style={{
                        width: '100%', height: '25%',
                        //  backgroundColor: 'pink',
                        display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                    }}>
                        <CustomSelect />
                        <SearchInput text="Pesquisar atividades" />

                    </div>
                    <div style={{
                        width: '100%', height: '75%', //backgroundColor: 'green',

                        gap: '30px',
                        alignItems: 'center',
                        padding: '0 0 4% 0',
                        display: 'flex',
                        flexWrap: 'wrap', // Permite que as divs filhas sejam dispostas em linhas com 2 divs em cada linha
                        justifyContent: 'space-evenly', // Espaço uniforme entre as divs filhas
                        overflow: "auto",
                    }}>
                        <Matter
                            activityName="Atividade de Português"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                            onClick={showMore}
                        />



                    </div>

                </div>
            </div>
        </>
    );
}



function Desempenho() {
    return (
        <div style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
  
            {/* Div com 25% de altura */}
            <div style={{ display:'flex', width:'100%', height: '25%', 
            //backgroundColor: 'red',
            justifyContent:'center', alignItems:'center' }}>
            <span style={{fontSize:'1.3rem'}}>Por favor, selecione a opção que você deseja visualizar:</span>

            </div>

            {/* Div com 75% de altura */}
            <div style={{ display:'flex', width:'100%', height: '75%',
             //backgroundColor: 'blue',
             flexDirection:'column',  alignItems:'center',gap:'5%'}}>
            <CustomRow imageSrc={imageGame} nome="Jogo" descricao="Acompanhe o desempenho nos jogos" />
            <CustomRow imageSrc={imageHomeWork} nome="Tarefas de casa" descricao="Acompanhe o desenvolvimento nas tarefas de casa" />

            </div>
        </div>


    );
}



function Responsavel() {
    return (
        <>

            <div
                style={{
                    width: '100%', height: '100%',
                    //backgroundColor: 'red',
                    alignItems: 'center', display: 'flex', justifyContent: 'center'
                }}>


                <div style={{
                    border: '5px solid #EEEEEE',
                    padding: '10px',
                    width: '30%',
                    borderRadius: '10px',
                    height: '25vh',
                    //backgroundColor: 'pink',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        height: '50%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10%',
                        // backgroundColor: 'red' 
                    }}>
                        <div style={{
                            display: 'flex', flexDirection: 'row', alignItems: 'center',
                            // backgroundColor: 'green', 
                            width: '100%', justifyContent: 'center', gap: '3%'
                        }}>
                            <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#EAEAEA', }}>
                                <img src="caminho_da_imagem.jpg" alt="Imagem" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ fontWeight: 'bold' }}>Nome</span>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex', flexDirection: 'column', width: '100%', height: '50%', paddingLeft: '5%', justifyContent: 'space-evenly',
                        //backgroundColor: 'green' 
                    }}>
                        <div style={{
                            display: 'flex', flexDirection: 'row',
                            //backgroundColor:'white',
                            gap: '3%'
                        }}>
                            <span >Telefone:</span>
                            <span>(11)99998-9999</span>
                        </div>
                        <div style={{
                            display: 'flex', flexDirection: 'row',
                            // backgroundColor:'white',
                            gap: '3%'
                        }}>
                            <span >E-mail:</span>
                            <span >mariana@gmail.com</span>
                        </div>
                    </div>


                </div>



            </div>
        </>
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
                            <span style={{ color: 'white', fontSize: '3rem', fontWeight: 'bold' }}>Natan Gonçalves</span>
                            <CustomDiv>
                                <>
                                    <CustomDivColumn>
                                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>Idade</span>
                                        <span style={{ color: 'white' }}>4 anos</span>
                                    </CustomDivColumn>

                                    <CustomDivColumn>
                                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>Genêro</span>
                                        <span style={{ color: 'white' }} >Masculino</span>
                                    </CustomDivColumn>


                                </>
                            </CustomDiv>
                            <CustomDiv>
                                <>
                                    <CustomDivColumn>
                                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>Escola</span>
                                        <span style={{ color: 'white' }}>  E.E. Professora Iracema Rauen Maciel</span>
                                    </CustomDivColumn>

                                    <CustomDivColumn>
                                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>Turma</span>
                                        <span style={{ color: 'white' }}>1º A - Manhã</span>
                                    </CustomDivColumn>


                                </>
                            </CustomDiv>

                        </div>
                    </div>
                </UserDetails>

                <div
                    style={{
                        width: "100%",
                        height: "75%", display: 'flex', flexDirection: 'column'
                        // backgroundColor: "#43B1B1",

                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "10%",
                            backgroundColor: "white",
                            display: 'flex',
                            flexDirection: 'row',
                            borderTopLeftRadius: "50px",
                            borderTopRightRadius: "50px",
                            alignItems: 'flex-end',
                            justifyContent: 'center',
                            borderBottom: '3px solid #EEEEEE'


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
                    <div style={{ width: '100%', height: '90%', backgroundColor: 'white' }}>
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