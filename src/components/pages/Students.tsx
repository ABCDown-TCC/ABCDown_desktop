import Header from "../layout/Header/Header";
import ContainerLogo from '../layout/ContainerLogo'
import SearchInput from '../layout/ClassComponents/SearchInput'
import CustomSelect from '../layout/ClassComponents/CustomSelect'
import CreateButton from "../layout/CreateButton";
import addActivity from '../layout/img_containers_cards/imageCreateActivity.svg'
import { useState } from "react";
import Card from "../layout/Cards";
import ImageClose from '../layout/FormComponents/imageMessage/close.svg'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import GetImage from "../layout/FormComponents/imageGetImage/getImage.svg";
import CustomDivInpuMessageError from "../layout/FormComponents/CustomDivInpuMessageError";
import { NameInputField, DescriptionInputField } from "../layout/componentsModal/NameInputField";
import ImageUpload from '../layout/img_containers_cards/imageUpload.svg'
import Btn from "../layout/FormComponents/Btn";
import SeratchInput from '../layout/img_containers_cards/searchInput.svg'

interface DateSelectorProps {
    labelText?: string
}
function DateSelector(props: DateSelectorProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: '15px' }}>
            <label style={{}}>
                {props.labelText}:
            </label>
            <input
                type="date"
                style={{ border: "1px solid #B8B8B8", padding: "5px", outline: "none", width: '9vw', height: '3.4vh' }} // Define a cor da borda do input
            />
        </div>
    );
}


interface SelectableItemProps {
    label: string;
    selected: boolean;
    onSelect: () => void;
}
function SelectableItem(props: SelectableItemProps) {

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
            }}
            onClick={props.onSelect}
        >
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    background: props.selected ? "#3393C3" : "#D9D9D9",
                    marginRight: "10px",
                }}
            ></div>
            <span style={{ color: props.selected ? "black" : "#AEAEAE" }}>
                {props.label}
            </span>
        </div>
    );
}

function AlunosContent() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);
    const [lookForStudents, setLookForStudents] = useState(false)


    function setSelectedItemAll() {
        setSelectedItem("Todos");
        console.log("todos")
    }

    function setSelectedItemSelect() {
        setSelectedItem("Selecionar");
        console.log("Selecionar")
        // setLookForStudents(true)

    }
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                //  backgroundColor: 'black'

            }}>
            <div style={{
                width: '100%',
                height: '20%',
                // backgroundColor: 'pink',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                {/* Adicione o conteúdo específico da guia "Alunos" aqui */}
                <span>Postar ativodade para</span>

                <div style={{
                    width: '100%',
                    height: '40%',
                    //backgroundColor: 'red',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly'

                }}>
                    <SelectableItem
                        label="Todos"
                        selected={selectedItem === "Todos"}
                        onSelect={() => setSelectedItemAll()}

                    />
                    <SelectableItem
                        label="Selecionar"
                        selected={selectedItem === "Selecionar"}
                        onSelect={() => setSelectedItemSelect()}
                    />

                </div>

            </div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    //  backgroundColor:'black',
                    //justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    height: '70%',
                    //  backgroundColor: 'green'
                }}

            >
                {selectedItem === "Todos" && (
                    <>
                        <div style={{
                            width: '100%',
                            height: '20%',
                            backgroundColor: 'purple'
                        }}>


                            <span
                                style={{
                                    fontSize: '0.76w'
                                }}
                            >
                                *Todos os alunos da turma 1º A receberão essa atividade. Para mudar isso, basta selecionar a opção
                                <button
                                    onClick={setSelectedItemSelect}
                                    style={{
                                        backgroundColor: 'transparent', // Define a cor de fundo como transparente
                                        cursor: 'pointer',
                                        border: 'none', // Remove a borda padrão
                                        color: '#3393C3', // Define a cor de fundo

                                    }}
                                >
                                    Personalizar
                                </button>
                            </span>
                        </div>

                    </>
                )}

                {selectedItem === "Selecionar" && (

                    <>


                        <div style={{
                            width: '100%',
                            height: '15%',
                            // backgroundColor: 'purple',
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            flexDirection: 'column'
                        }}>
                            <span>Busque os que receberão a tarefa!</span>
                            <div style={{
                                display: 'flex', flexDirection: 'row', width: '100%', height: '3vh',
                                //  backgroundColor: 'blue', 
                                justifyContent: 'space-between'
                            }}>

                                <div style={{

                                    border: '1px solid #D3D3D3',
                                    //borderRadius: '5px',
                                    width: '60%',
                                    //backgroundColor: 'white',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '5%'
                                }}>
                                    <img
                                        src={SeratchInput}

                                    />
                                    <input
                                        type="text"
                                        placeholder="Digite algo"
                                        style={{
                                            width: '100%', height: '90%', border: 'none', outline: 'none'

                                        }}
                                    />

                                </div>
                                <button
                                    style={{
                                        //padding: "10px 20px",
                                        width: '30%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        // textAlign: "center",
                                        cursor: "pointer",
                                        backgroundColor: '#3393C3',
                                        color: 'white',
                                        borderRadius: '5px',
                                        fontWeight: '600',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        // gap: '20px',
                                        border: 'none', // Removendo a borda
                                        outline: 'none', // Removendo o contorno de foco
                                    }}

                                >
                                    Adicionar
                                </button>


                            </div>
                        </div>

                        <div style={{
                            width: '100%',
                            height: 'max-content',
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            //border:'1px solid black',
                            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
                        }}>

                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems:'center'


                                }}
                            >
                                <div style={{ width: '90%' }}>
                                    <div
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between ',
                                            backgroundColor: 'red'


                                        }}
                                    >
                                        <div style={{
                                            display: 'flex', flexDirection: 'row', alignItems: 'center',
                                            //backgroundColor:'blue'

                                        }}>
                                            <span style={{ marginRight: '8px' }}>Total</span>
                                            <span style={{
                                                width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#D3D3D3',

                                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                                            }}>1</span>
                                        </div>

                                        <button style={{
                                            backgroundColor: '#D3D3D3',
                                            color: '#000', padding: '10px 20px', border: 'none', cursor: 'pointer'
                                        }}>Excluir</button>



                                    </div>
                                    <span>nome</span>
                                </div>
                            </div>


                        </div>


                    </>
                )}
            </div>
            <div
                style={{
                    width: '100%',
                    height: '10%',
                    backgroundColor: 'red'
                }}
            >
                <Btn
                    text="Postarr"
                    color="#43B1B1"
                    width="15vw"
                    height="3.5vh"
                />
            </div>


        </div>
    );
}
function Students() {
    const [isCreateActivity, setIsCreateActivity] = useState(false);
    const [activeTab, setActiveTab] = useState("atividade");
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    function createActivity() {
        console.log('criar Atividade clicada');
        setIsCreateActivity(true);
    }
    function closeWindowsCreateActivity() {
        console.log('fechar janela closeWindowsCreateActivity')
        setIsCreateActivity(false)
    }
    // ...
    function toggleTab(tabName: string) { // Adicione o tipo 'string' aqui
        setActiveTab(tabName);
    }
    const handleDivClick = () => {
        const fileInput = document.getElementById(
            "hiddenFileInput"
        ) as HTMLInputElement;
        if (fileInput) {
            // checkEmptyInput()
            fileInput.click();
        }
    };
    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const storageRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    // setProgress(progress);
                },
                (error) => {
                    alert(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                        // Add type annotation here
                        setSelectedPhoto(url); // Assuming setSelectedPhoto is a function to set the selected photo URL

                    });
                }
            );
        }
    };
    function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFile = event.target.files[0];
            // Faça algo com o arquivo selecionado, como fazer upload para o servidor ou processar localmente
            console.log("Arquivo selecionado:", selectedFile);
        }
    }
    function AtividadeContent() {
        return (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    //  backgroundColor:'black',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    height: '100%'
                }}>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: 'max-content',
                        // backgroundColor: 'green',
                        //margin: '5% 0'
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            width: 'auto',
                            //  background: 'green',
                            paddingRight: '2vw'
                        }}
                    >
                        <CustomDivInpuMessageError>
                            <div>
                                {/* ... Rest of your code ... */}
                                <div
                                    style={{
                                        height: "17vh",
                                        width: "12vw",
                                        borderRadius: "30px",
                                        border: "3px solid #EAEAEA",
                                        backgroundColor: "#F5F5F5",
                                        cursor: "pointer",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                    onClick={handleDivClick}
                                >
                                    {selectedPhoto ? (
                                        <img
                                            src={selectedPhoto}
                                            alt="Selected"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                    ) : (
                                        <img
                                            src={GetImage}
                                            alt="Descrição da imagem"
                                            style={{ width: "30%", height: "30%" }}
                                        />
                                    )}
                                </div>

                                <input
                                    type="file"
                                    id="hiddenFileInput"
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={handlePhotoChange}
                                />
                                {/* Rest of your code... */}
                            </div>

                            <input
                                type="file"
                                id="hiddenFileInput"
                                accept="image/*"
                                style={{ display: "none" }}
                                onChange={handlePhotoChange}
                            />

                        </CustomDivInpuMessageError>

                    </div>

                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            //background: 'red'

                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-evenly',
                                //backgroundColor:'red',
                                width: '100%'

                            }}
                        >
                            <NameInputField title="Título" placeholder="Adicione um título" width='auto' />
                            <NameInputField title="Matéria" placeholder="Adicione uma matéria" width='auto' />
                        </div>
                    </div>

                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    //  backgroundColor: 'blue',
                    width: '100%',
                    height: '50%',
                }}>
                    <div style={{
                        // backgroundColor: 'blue',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '90%',
                        //    width: '100%',
                        justifyContent: 'space-between'

                        // gap: '45px'

                    }}>
                        <DescriptionInputField title="Descrição" placeholder="Adicione uma descrição" width='100%' height="15vh" />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            //  backgroundColor: 'red',
                            gap: '5%'
                        }} >
                            <DateSelector labelText="Data de envio" />
                            <DateSelector labelText="Entrega" />
                        </div>
                        <div style={{
                            //  backgroundColor: 'red',
                            width: 'max-content'
                        }}>
                            <input
                                type="file"
                                id="fileInput"
                                onChange={handleFileUpload}
                                style={{ display: "none" }}
                            />
                            <div
                                style={{

                                    padding: "10px 20px 10px 20px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                    backgroundColor: '#3393C3',
                                    color: 'white',
                                    borderRadius: '10px',
                                    fontWeight: '600',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    gap: '20px'
                                }}
                                onClick={() => document.getElementById("fileInput")?.click()}
                            >
                                <img src={ImageUpload} alt="" />
                                Arquivo da atividade
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                backgroundColor: '#f2f2f2'
            }}>
                <Header title="Turmas" />

                <div style={{
                    width: '90%',
                    marginTop: '3%'
                }}>
                    <SearchInput text="Buscar turma" />
                </div>

                <div style={{
                    marginTop: '2%',
                    width: '100%',
                    height: 'max-content'
                }}>
                    <ContainerLogo />
                </div>

                <div style={{
                    width: '90%',
                    marginBottom: '3%'
                }}>
                    <CustomSelect />
                </div>

                <CreateButton image={addActivity} onclick={createActivity} />

                {isCreateActivity && (
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
                        <Card width="40%" height="90%">
                            <div style={{
                                display: 'flex',
                                // height: '10%',
                                width: '100%',
                                // backgroundColor: 'red',
                                justifyContent: 'flex-end'
                            }}>

                                <button onClick={closeWindowsCreateActivity}>
                                    <img src={ImageClose} alt="close" />
                                </button>
                            </div>
                            <div>

                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    display: 'flex', // Adicione display: flex para que alignItems funcione
                                    justifyContent: 'center',
                                    height: '100%'
                                }}
                            >

                                <div
                                    style={{
                                        display: 'flex',
                                        width: '90%',
                                        //  backgroundColor:'blue',
                                        // justifyContent: 'center',
                                        flexDirection: 'column',
                                        height: '100%'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        width: '100%',
                                        height: 'auto',
                                        // backgroundColor: 'pink',
                                        flexDirection: 'column'
                                    }}>                                   <span style={{ color: '#939393', fontSize: '1.8rem' }}>Postagem de tarefa de casa</span>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            //   backgroundColor: 'green',
                                            width: '100%',
                                            justifyContent: 'center',
                                            gap: '20%',
                                            borderBottom: '1px solid #D3D3D3',
                                            marginTop: '5%'
                                        }}>
                                            <span
                                                onClick={() => {
                                                    toggleTab("atividade")
                                                }}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    color: activeTab === "atividade" ? " #43B1B1" : "#000",
                                                    borderBottom: activeTab === 'atividade' ? '2px solid #43B1B1' : '#000',
                                                    paddingBottom: '10px',
                                                    width: '10%',
                                                    fontSize: '1.5rem'


                                                }}
                                            >
                                                Atividade
                                            </span>
                                            <span
                                                onClick={() => toggleTab("alunos")}
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    cursor: 'pointer',
                                                    color: activeTab === "alunos" ? " #43B1B1" : "#000",
                                                    borderBottom: activeTab === 'alunos' ? '2px solid #43B1B1' : '#000',
                                                    paddingBottom: '10px',
                                                    width: '10%',
                                                    fontSize: '1.5rem'

                                                }}
                                            >
                                                Alunos
                                            </span>
                                        </div></div>

                                    {/* ... Outro conteúdo do seu componente principal ... */}

                                    {activeTab === "atividade" && (
                                        <AtividadeContent />
                                    )}

                                    {activeTab === "alunos" && (
                                        <AlunosContent />
                                    )}


                                </div>

                            </div>




                        </Card>
                    </div>
                )}
            </div>
        </>
    );
}

export default Students;


//</div>


