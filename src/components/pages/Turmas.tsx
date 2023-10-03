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
import React, { useState, useEffect } from 'react';
import MessageDelete from '../layout/ClassComponents/MessageDelete'
import ImageClose from '../layout//FormComponents//imageMessage/close.svg'
import imageCreateClass from '../layout/img_containers_cards/imageCreateClass.svg'
import { NameInputField, DescriptionInputField } from "../layout/componentsModal/NameInputField";
import Btn from "../layout/FormComponents/Btn";
import { useNavigate, Link } from 'react-router-dom';
import Crud from '../../Crud'
import styles from './Turmas.module.css'

function Turmas() {
    const [infoVisible, setInfoVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const [adicionarSalaVisible, setAdicionarSalaVisible] = useState(false);
    const [isCreateClass, setIsCreateClass] = useState(false);
    const [listaVisivel, setListaVisivel] = useState(false);
    const [turmaNome, setTurmaNome] = useState(''); // Estado para o nome da turma
    const [descricao, setDescricao] = useState(''); // Estado para a descrição da turma
    const [turmaCodigo, setTurmaCodigo] = useState('')
    const navigate = useNavigate();
    const [idProfessor, setIdProfessor] = useState<number | null>(null);

    function MeuComponente() {
        useEffect(() => {
            // Dentro de useEffect para chamada assíncrona
            const fetchData = async () => {
                // Chame a função 'get' do módulo Crud
                const data = await Crud().get();

                // Verifique se a resposta contém um array de professores
                if (data && data.professor && data.professor.length > 0) {
                    // Vamos assumir que estamos pegando o ID do primeiro professor no array
                    const primeiroProfessor = data.professor[0];
                    const professorId = primeiroProfessor.id;

                    // Defina o ID do professor no estado
                    setIdProfessor(professorId);

                    // Faça algo com os dados obtidos, por exemplo, imprima no console
                    console.log(data);
                    console.log('ID do Professor:', professorId);
                } else {
                    console.error('Nenhum professor encontrado na resposta.');
                }
            };

            fetchData(); // Chame a função fetchData para buscar os dados
        }, []);
    }

    MeuComponente()


    const handleCreateClass = async () => {
        // Verifica se ambos os campos estão preenchidos
        if (turmaNome && descricao && turmaCodigo && idProfessor !== null) {
            const turmaData = {
                nome: turmaNome,
                descricao: descricao,
                id_professor: idProfessor,
                codigoTurma: turmaCodigo,
            };

            // Defina a URL do endpoint onde você deseja fazer a solicitação POST
            const url = 'http://localhost:8181/turma/'; // Substitua pela URL correta

            try {
                const accessToken = sessionStorage.getItem("accessToken");

                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Defina o tipo de conteúdo como JSON, se aplicável
                        Authorization: `Bearer ${accessToken}`,

                    },
                    body: JSON.stringify(turmaData), // Converte os dados em formato JSON
                });

                if (response.ok) {
                    // Se a resposta do servidor for bem-sucedida (código de status 200-299)
                    console.log('Solicitação POST bem-sucedida!');
                    // Você pode adicionar código aqui para lidar com a resposta do servidor, se necessário
                } else {
                    // Se a resposta do servidor não for bem-sucedida
                    console.error('Erro na solicitação POST:', response.status);
                }
            } catch (error) {
                console.error('Erro na solicitação POST:', error);
            }

            // Limpa os campos após a criação
            setTurmaNome('');
            setDescricao('');
            setTurmaCodigo('');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
        // ... Outras ações que você deseja realizar ...
    };


    const toggleLista = () => {
        setListaVisivel(!listaVisivel);
    };
    function cancelCreateAClass() {
        console.log('cancel Create a class')
        setIsCreateClass(false)
    }
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
        navigate('/turmas/alunos');
    }

    function createClass() {
        setIsCreateClass(true)
        console.log('adicionar turma')
    }
    return (

        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            // height: '100vh',
            height: '',
            alignItems: 'center',
            backgroundColor: '#f2f2f2'
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

            {isCreateClass && (
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
                    <Card width="35%" height="80%">
                        <div style={{
                            display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', height: '100%',
                            //  backgroundColor:'red'
                            //  gap: '5%' 
                        }}>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '40%',
                                // backgroundColor:'blue',
                                width: '90%',
                                alignItems: 'center',
                                justifyContent: 'space-evenly'

                            }}>
                                <h1 style={{
                                    //marginTop: '10%'
                                }}>Adicione uma turma</h1>
                                <img src={imageCreateClass} alt="" width='45%' />
                            </div>
                            <div style={{
                                display: 'flex', flexDirection: 'column', width: '90%', height: '40%',
                                //  backgroundColor: 'green',
                                //justifyContent: 'space-between'
                                gap: '10%'
                            }}>


                                <NameInputField title="Nome da turma" placeholder="Adicione um nome a sua turma" width='60%' onChange={(e) => setTurmaNome(e.target.value)} // Atualize o estado com o valor digitado
                                />


                                <NameInputField title="Codigo turma" placeholder="Adicione o codigo a sua turma" width='60%' onChange={(e) => setTurmaCodigo(e.target.value)} // Atualize o estado com o valor digitado
                                />
                                <DescriptionInputField title="Descrição" placeholder="Adicione uma descrição" width='100%' height="10vh" onChange={(e) => setDescricao(e.target.value)} />


                            </div>

                            <div style={{

                                height: '20%',
                                //  backgroundColor:'pink',
                                width: '90%',


                            }}>

                                <div style={{
                                    display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between',
                                    //backgroundColor: 'red',
                                    //marginTop:''
                                    // marginTop: '5%'
                                }}>
                                    <Btn text="Cancelat" color="#F0754E" width="10vw" height="3.5vh" onClick={cancelCreateAClass} />
                                    <Btn
                                        text="Criar"
                                        color="#43B1B1"
                                        width="15vw"
                                        height="3.5vh"
                                        onClick={handleCreateClass}
                                    />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap', // Permite que as divs filhas sejam dispostas em linhas com 2 divs em cada linha
                justifyContent: 'space-evenly', // Espaço uniforme entre as divs filhas
                overflow: "auto",
                width: '90%',
                // backgroundColor: 'red',
                gap: '30px',
                alignItems: 'center',
                padding: '0 0 4% 0',


            }}>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>
                <Card width="40%" height="35vh" onClick={onClickCard}>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            height: "80%",
                            // backgroundColor:'red'
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
                                marginLeft: "1vw",
                                width: "50%",
                                //  backgroundColor:'green'
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

                </Card>




                {deleteVisible && (
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
                        <Card width="40%" height="max-content">
                            <div style={{
                                display: 'flex',
                                // height: '10%',
                                width: '100%',
                                /// backgroundColor: 'red',
                                justifyContent: 'flex-end'
                            }}>
                                {/* <button className={styles.containerClose} onClick={props.onClickClose}> */}

                                <button onClick={CloseWindownsInfo}>
                                    <img src={ImageClose} alt="close" />
                                </button>
                            </div>

                            <div className={styles.containerPrincipal}>

                                <div className={styles.estruturaConteudo}>


                                    <div className={styles.textTree}>

                                        <div className={styles.teste}>
                            

                                            <p className={styles.informacoes}>Informações</p>

                                            <h1 className={styles.serie}>1-A</h1>

                                            <p className={styles.containerCodigo}>Código de turma</p>

                                            <button className={styles.button}>
                                                1JDGSFKJESU
                                            </button>

                                        </div>

                                        <div className={styles.teste2}>

                                            <img src={image2} alt="" className={styles.img} />

                                        </div>



                                    </div>







                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', padding: '10px' }}>

                                    </div>





                                    <div className={styles.text}>
                                        <p >
                                            Lorem ipsum dolor sit amet. Ut quidem necessitatibus At animi voluptas ut provident cumque ut necessitatibus laborum est quibusdam esse. Lorem ipsum dolor sit amet. Ut quidem necessitatibus At animi voluptas ut provident cumque ut necessitatibus laborum est quibusdam esse.

                                            Lorem ipsum dolor sit amet. Ut quidem necessitatibus At animi voluptas ut provident cumque ut necessitatibus laborum est quibusdam esse.
                                        </p>





                                    </div>

                                    <div className={styles.aluno}

                                    >
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
                                    </div>
                                </div>




                                {/*div footer */}
                                <div style={{

                                    width: '100%',
                                    display: 'flex',
                                    //height: '5%', 
                                    alignItems: 'center',

                                }}>

                                    <div style={{
                                        width: '100%',
                                        //  height: '100%',
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-end',
                                        // backgroundColor:'red'

                                    }}>

                                        <button style={{

                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: '#F5C74D',
                                            color: '#fff',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            border: 'none',
                                            marginRight: 10
                                        }}>

                                            {/* Conteúdo do primeiro botão */}
                                        </button>
                                        <button style={{

                                            width: '30px',
                                            height: '30px',
                                            borderRadius: '50%',
                                            backgroundColor: '#F95926',
                                            color: '#fff',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                            border: 'none'
                                        }}>

                                            {/* Conteúdo do segundo botão */}
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </Card>
                    </div>
                )}








            </div>
        </div>


    );
}


export default Turmas