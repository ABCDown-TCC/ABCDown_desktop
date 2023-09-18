import Header from "../layout/Header/Header";
import CreateButton from "../layout/CreateButton";
import addClass from "../layout/imagesCreateButton/addClass.svg";
import SearchInput from '../layout/ClassComponents/SearchInput'
import CustomSelect from '../layout/ClassComponents/CustomSelect'
import ContainerLogo from '../layout/ContainerLogo'
import Card from "../layout/Cards";
import ContainerInfoDeleteContainer from "../layout/ClassComponents/ContainerInfoDeleteContainer";
import image1 from "../layout/ClassComponents/ImagesClass/imageClassContainer1.svg";
import image2 from "../layout/ClassComponents/ImagesClass/imageClassContainer2.svg";
import React, { useState } from 'react';
import MessageDelete from '../layout/ClassComponents/MessageDelete'
import ImageClose from '../layout//FormComponents//imageMessage/close.svg'


function Turmas() {
    const [infoVisible, setInfoVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [adicionarSalaVisible, setAdicionarSalaVisible] = useState(false);

    const [listaVisivel, setListaVisivel] = useState(false);

    const toggleLista = () => {
        setListaVisivel(!listaVisivel);
    };

    function onClickDelete() {
        console.log("DElete");
        setDeleteVisible(true)
    }
    function onClickIfo() {
        console.log("Info");
        setInfoVisible(true);

    }
    function onClickCloseMessageDelete() {
        console.log("close mensagem de apagar")
        setDeleteVisible(false)

    }

    function onClickCancelMessageDelete() {
        console.log("cancelar mensagem de apagar")
        setDeleteVisible(false)

    }
    function CloseWindownsInfo() {
        console.log('close janela info')
        setInfoVisible(false);


    }

    function onClickDEleteMessageDelete() {
        console.log("deletar o Container, da Mensagem Apagar")
    }
    function onClickCard() {
        console.log('cick no Card')
    }

    function createClass() {

        console.log('adicionar turma')
    }
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            alignItems: 'center'
        }}>

            <Header title="Turmas" />

            <div style={{
                // Esta propriedade flex faz com que esta div ocupe o espaço restante de altura
                width: '90%',
                // backgroundColor: 'red', 
                marginTop: '3%'

            }}>
                <SearchInput text="Buscar turma" />
            </div>
            <div
                style={{
                    marginTop: '2%',
                    //marginBottom: '2%',
                    // backgroundColor:'pink',
                    width: '100%',
                    height: 'max-content'
                }}
            >

                <ContainerLogo />
            </div>


            <div style={{
                // Esta propriedade flex faz com que esta div ocupe o espaço restante de altura
                width: '90%',
                // backgroundColor: 'green', 
                marginBottom: '3%'

            }}>
                <CustomSelect />

            </div>

            <CreateButton image={addClass} onclick={createClass} />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap', // Permite que as divs filhas sejam dispostas em linhas com 2 divs em cada linha
                justifyContent: 'space-between', // Espaço uniforme entre as divs filhas
                width: '90%',
                //backgroundColor:'red'


            }}>
                <Card width="45%" height="35vh" onClick={onClickCard}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            //   backgroundColor: "orange",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                //   alignItems: "center",
                                //   backgroundColor: "red",
                                justifyContent: "space-evenly", // Alinha horizontalmente com espaço uniforme
                                marginLeft: "3vw",
                                width: "50%",
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "1.7vw",
                                }}
                            >
                                Título do Card
                            </h2>
                            <p
                                style={{
                                    fontSize: "0.8vw",
                                }}
                            >
                                Descrição dessa turma papsfcjdaovjodij
                            </p>
                        </div>
                        <div
                            style={{
                                //   backgroundColor: "green",
                                width: "50%",
                                height: "100%",
                                //  display:
                            }}
                        >
                            <img src={image2} alt="" style={{
                                width: '10vw',
                                height: '20vh'
                            }} />
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            //   backgroundColor: "Pink",
                            height: "20%",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                //   backgroundColor: "green",
                                alignItems: "center",
                                justifyContent: "center",
                                marginLeft: "3vw",
                            }}
                        >
                            <span style={{ fontWeight: "bold", fontSize: "0.9vw" }}>Alunos</span>
                            <span style={{ fontWeight: "bold", fontSize: "0.9vw" }}>5</span>
                        </div>
                        <div style={{ flex: "1", backgroundColor: "white" }}></div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                //   backgroundColor: "blue",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "3vw", // Corrected typo
                            }}
                        >
                            <ContainerInfoDeleteContainer
                                onClickDelete={onClickDelete}
                                onClickIfo={onClickIfo}

                            />
                        </div>
                    </div>
                </Card>{deleteVisible && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <MessageDelete onClickClose={onClickCloseMessageDelete} onClickCancel={onClickCancelMessageDelete} onClickDelete={onClickDEleteMessageDelete} />

                    </div>
                )}

                {/* Modal de informações */}
                {infoVisible && (
                    <div
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            width: '100%',
                            height: '100%',
                            background: 'rgba(0, 0, 0, 0.5)', // Fundo escuro semi-transparente
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Card width="45%" height="90%">
                            <div style={{
                                display: 'flex',
                                // height: '10%',
                                width: '100%',
                                // backgroundColor: 'red',
                                justifyContent: 'flex-end'
                            }}>
                                {/* <button className={styles.containerClose} onClick={props.onClickClose}> */}

                                <button onClick={CloseWindownsInfo}>
                                    <img src={ImageClose} alt="close" />
                                </button>
                            </div>
                            <h1>Informações</h1>
                            <h1>1º A</h1>
                            <p>
                            Lorem ipsum dolor sit amet. Ut quidem necessitatibus At animi voluptas ut provident cumque ut necessitatibus laborum est quibusdam esse. Lorem ipsum dolor sit amet. Ut quidem necessitatibus At animi voluptas ut provident cumque ut necessitatibus laborum est quibusdam esse.

Lorem ipsum dolor sit amet. Ut quidem necessitatibus At animi voluptas ut provident cumque ut necessitatibus laborum est quibusdam esse.
                            </p>
                            <span onClick={toggleLista} style={{ cursor: "pointer", display: 'flex', flexDirection: 'row' }}>
        Aluno {listaVisivel ? "▼" : "▶"}
      </span>
      {listaVisivel && (
        <ul style={{ listStyle: "none" }}>
        <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )}
<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
    {/* Conteúdo da div principal */}
    <button style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#F5C74D', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: 'none' }}>
        {/* Conteúdo do primeiro botão */}
    </button>
    <button style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#F95926', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', border: 'none' }}>
        {/* Conteúdo do segundo botão */}
    </button>
</div>


                        </Card>
                    </div>
                )}
            </div>
        </div>


    );
}


export default Turmas