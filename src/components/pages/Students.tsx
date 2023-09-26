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

interface DateSelectorProps {
    labelText?: string
}
function DateSelector(props: DateSelectorProps) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label style={{}}>
                {props.labelText}:
            </label>
            <input
                type="date"
                style={{ border: "1px solid #B8B8B8", padding: "5px", outline: "none", }} // Define a cor da borda do input
            />
        </div>
    );
}

function AlunosContent() {
    // Coloque o conteúdo da guia "Alunos" aqui
    return (
      <div>
        {/* Adicione o conteúdo específico da guia "Alunos" aqui */}
        <h2>Conteúdo dos Alunos</h2>
        {/* Outros elementos relacionados aos alunos */}
      </div>
    );
  }
function Students() {
    const [isCreateActivity, setIsCreateActivity] = useState(false);
    const [activeTab, setActiveTab] = useState("atividade"); // Estado inicial para a aba Atividade
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
                                backgroundColor: 'red',
                                justifyContent: 'flex-end'
                            }}>

                                <button onClick={closeWindowsCreateActivity}>
                                    <img src={ImageClose} alt="close" />
                                </button>
                            </div>
                            <div>
                                <span style={{
                                    color: '#939393',
                                    paddingLeft: '10%',
                                    fontSize: '1.8rem'
                                }}>
                                    Postagem de tarefa de casa
                                </span>
                            </div>
                            <div
                                style={{
                                    flex: 1,
                                    display: 'flex', // Adicione display: flex para que alignItems funcione
                                    justifyContent: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '90%',
                                        //   backgroundColor:'pink',
                                        justifyContent: 'center',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        //  backgroundColor: 'green',
                                        width: '90%',
                                        justifyContent: 'center',
                                        gap: '20%',
                                        borderBottom: '1px solid #D3D3D3'
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
                                                fontSize: '1.2rem'


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
                                                fontSize: '1.2rem'

                                            }}
                                        >
                                            Alunos
                                        </span>
                                    </div>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: '100%',
                                            //   backgroundColor: 'red',
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: 'flex',
                                                width: '50%',
                                                //  background: 'green'
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
                                                {/* {selectedPhotoVazio && (
    <span style={{ color: "red" }}>Campo Foto Obrigatório</span>
   )} */}
                                            </CustomDivInpuMessageError>

                                        </div>

                                        <div
                                            style={{
                                                display: 'flex',
                                                width: '50%',
                                                //   background: 'red'

                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'space-evenly'
                                                }}
                                            >
                                                <NameInputField title="Título" placeholder="Adicione um título" width='100%' />
                                                <NameInputField title="Matéria" placeholder="Adicione uma matéria" width='160%' />
                                            </div>
                                        </div>

                                    </div>
                                    <DescriptionInputField title="Descrição" placeholder="Adicione uma descrição" width='100%' height="10vh" />
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }} >
                                        <DateSelector labelText="Data de envio" />
                                        <DateSelector labelText="Entrega" />
                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
    {/* ... Outro conteúdo do seu componente principal ... */}
    


                        </Card>
                    </div>
                )}
            </div>
        </>
    );
}

export default Students;


