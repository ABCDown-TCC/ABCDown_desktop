import React, { useState, useEffect, ReactNode,ChangeEvent} from "react";
import Header from "../layout/Header/Header";
import UserDetails from "../layout/ConfigurationComponents/UserDetails";
import UserDetailsAndSavedItems from "../layout/ComponentsConfiguraton/UserDetailsAndSavedItems";
import TextWelcomeUser from "../layout/ComponentsConfiguraton/TextWelcomeUser";
import InfoDisplay from "../layout/ComponentsConfiguraton/InfoDisplay";
import InputConfiguration from "../layout/ComponentsConfiguraton/InputConfiguration";
import Crud from '../../Crud'
import Btn from "../layout/FormComponents/Btn";
import editImage from '../layout/icons/edit.svg'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
interface RepeatedDivProps {
  children: ReactNode;
}
function RepeatedDiv({ children }: RepeatedDivProps) {


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        //backgroundColor: "blue",
        justifyContent: 'space-between',
        width: "100%",
        height: 'max-content',
        gap: "2%",
        // alignItems: "center",
        //justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
interface ProfessorInfoProps {
  name: string;
  number: string
}
function ProfessorInfo(props: ProfessorInfoProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <span style={{
        color: '#3393C3',
        fontWeight: 'bold',
        fontSize: '1.5vw'
      }}>
        {props.number}
      </span>
      <span style={{
        color: '#3393C3',
        fontWeight: 'bold',
        fontSize: '0.8vw'

      }}>
        {props.name}
      </span>
    </div>
  );
}
function Configuracoes() {
  const [responseData, setResponseData] = useState<{
    professor: Array<{
      id: number;
      nome: string;
      foto: string;
      cep: string;
      cpf: string;
      data_nascimento: string;
      email: string;
      nome_genero: string;
      numero: string;
      numeroProfessor: string;
      senha: string;
    }>;
  } | null>(null);

  
  const [currentScreen, setCurrentScreen] = useState("screen1"); // use state para monitoraer pagian de meus dados e salvos
  const [form, setForm] = useState("noForm")
  const [inputValue, setInputValue] = useState('');
  const [alterarInput, setAlterarInput] = useState("doNotAlter");

  const [cpf, setCpf] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [changeImage,setChangeImage] = useState('noChanceImage')



  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    data_nascimento: '',
    foto: '', // Add other fields here
    email: '',
    senha: '',
    id_genero:null,
    numero: '',
    cep: '',
    numeroTelefone: '',
  });
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [isCepInvalid, setIsCepInvalid] = useState(false);
  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCep = e.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    setCpf(newCep);
    setFormData({
      ...formData,
      cep: newCep,
    });
  };
  

  useEffect(() => {
    // Validar o CEP e buscar dados do CEP quando o valor do CEP for um CEP completo (com 8 dígitos)
    if (cpf.length === 8) {
      validateCep();
    }
  }, [cpf]);
  
  const validateCep = async () => {
    try {
      const apiUrl = `http://localhost:3001/api/cep/${cpf}`;
      const response = await fetch(apiUrl);
  
      if (response.ok) {
        const data = await response.json();
        if (!data.erro) {
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setCidade(data.localidade);
          setEstado(data.uf);
          setIsCepInvalid(false); // CEP é válido
        } else {
          setIsCepInvalid(true); // CEP é inválido
        }
      } else {
        setIsCepInvalid(true); // Erro na requisição
      }
    } catch (error) {
      console.error("Erro ao buscar dados do CEP:", error);
      setIsCepInvalid(true); // Erro ao buscar dados do CEP
    }
  };
  // Define a function to handle changes in input fields
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    console.log("Dados enviados:", formData);
  
    // Adicione aqui a lógica para enviar os dados para o servidor ou fazer a postagem.
  };

const widthInputRigth = '35%'
  const widthInputLeft = '60%'


    const handleMyDataClick = () => {
      // Lógica para exibir e editar os dados do usuário
      console.log("Meus Dados clicado");
      setCurrentScreen("screen1"); // Set the current screen to "screen1"
    };
  
    const handleSavedClick = () => {
      // Lógica para exibir itens salvos
      console.log("Salvos clicado");
      setCurrentScreen("screen2"); // Set the current screen to "screen2"
    };
  
  
    const Edit = () => {
      console.log('clique');
      setAlterarInput("tAlter"); // Corrija para "tAlter" em vez de "tAlte"
      setForm("form");
      setChangeImage("chanceImage");
    }
    
    function cancelForm() {
      console.log('cancelar')
      setAlterarInput("doNotAlter")
      setForm("noForm")
      setChangeImage("noChanceImage");
      
    }
  
    const noAlterInput = (<>
          <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor:'red',
          width: '80%',
          height: '100%',
          gap: '2vh',
          paddingTop: '3%'

        }}>
<RepeatedDiv>
  <InputConfiguration
    label="Nome"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={responseData?.professor[0]?.nome}
  />
  <InputConfiguration
    label="Sexo"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputRigth}
    value={responseData?.professor[0]?.nome_genero}
  />
</RepeatedDiv>
<RepeatedDiv>
  <InputConfiguration
    label="E-mail"
    required
    
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={responseData?.professor[0]?.email}
  />
  <InputConfiguration
    label="CPF"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputRigth}
    value={responseData?.professor[0]?.cpf}
  />
  
</RepeatedDiv>

{/* data nascimento */}
<div
  style={{
    width: '100%',
  }}
>
  <InputConfiguration
    label="Data Nascimento"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={responseData?.professor[0].data_nascimento}
  />
</div>
<RepeatedDiv>
  <InputConfiguration
    label="CEP"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputRigth}
    value={responseData?.professor[0].cep}
    onChange={(e) => setInputValue(e.target.value)}
  />
  <InputConfiguration
    label="Logradouro"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={logradouro}
  />
</RepeatedDiv>

<RepeatedDiv>
  <InputConfiguration
    label="Bairro"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={bairro}
  />
  <InputConfiguration
    label="Número"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputRigth}
    value={responseData?.professor[0]?.numero}
  />
</RepeatedDiv>

<RepeatedDiv>
  <InputConfiguration
    label="Cidade"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={cidade}
  />
  <InputConfiguration
    label="Estado"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputRigth}
    value={estado}
  />
</RepeatedDiv>

      </div>
    </>)

const AlterInput = (<>
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          // backgroundColor:'red',
          width: '80%',
          height: '100%',
          gap: '2vh',
          paddingTop: '3%'

        }}>
<RepeatedDiv>
<InputConfiguration

label="Nome"
type="text"
required
customWidth={widthInputLeft}
name="nome"
id="nome"
value={formData.nome}
onChange={handleChange} 
       
      />
      <InputConfiguration
    label="Sexo"
    required
    customWidth={widthInputRigth}
  />
</RepeatedDiv>
<RepeatedDiv>
  <InputConfiguration
    label="E-mail"
    required
    customWidth={widthInputLeft}
    type="email"
    name="email"
id="email"
value={formData.email}
onChange={handleChange} 
  />
  <InputConfiguration
    label="CPF"
    required
    customWidth={widthInputRigth}
    name="cpf"
    id="cpf"
value={formData.cpf}
onChange={handleChange} 
  />
</RepeatedDiv>

{/* data nascimento */}
<div
  style={{
    width: '100%',
    display:'flex',
    flexDirection:'row',

justifyContent: 'space-between',
  }}
>
  <InputConfiguration
    label="Data Nascimento"
    required
    customWidth="30%"
    type="date"
    name="data_nascimento" 
    id="data_nascimento" 
    value={formData.data_nascimento} 
    onChange={handleChange} 
    
  />

<InputConfiguration
  label="Número telefone"
  required
  customWidth="30%"
  name="numeroTelefone" 
  id="snumeroTelefone" 
  value={formData.numeroTelefone} 
  onChange={handleChange} 
/>

<InputConfiguration
    label="Senha"
    required
    customWidth="30%"
    type="password"
    name="senha" 
    id="senha" 
    value={formData.senha} 
    onChange={handleChange} 
  />
</div>
<RepeatedDiv>
<InputConfiguration
  label="CEP"
  required
  customWidth={widthInputRigth}
  name="cpf"
  id="cpf"
  value={formData.cpf}
  onChange={(e) => {
    handleCepChange(e);
    // Chame outras funções aqui, se necessário
   
  }}
/>


  <InputConfiguration
    label="Logradouro"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={logradouro}
  />
</RepeatedDiv>

<RepeatedDiv>
  <InputConfiguration
    label="Bairro"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={bairro}
  />
  <InputConfiguration
    label="Número"
    required
    customWidth={widthInputRigth}
    name="numero" 
    id="numero" 
    value={formData.numero} 
    onChange={handleChange} 
  />
</RepeatedDiv>

<RepeatedDiv>
  <InputConfiguration
    label="Cidade"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputLeft}
    value={cidade}
  />
  <InputConfiguration
    label="Estado"
    required
    disabled={true} // Defina como true para desabilitar o input
    customWidth={widthInputRigth}
    value={estado}
  />
</RepeatedDiv>

      {/* Botão ou ícone para limpar o campo */}

</div>
  </>)


  const noForm = (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '10%',
          backgroundColor: 'white',
          alignItems: 'center',
          gap: '3%'

        }}
      >
        <ProfessorInfo number='10' name="Professor 1" />
        <ProfessorInfo number='20' name="Professor 2" />
        <ProfessorInfo number='30' name="Professor 3" />
      </div>
    </>
  )

  const forms = (
    <>
      <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'center', height: '10%', gap: '12%' }}>
        <Btn
          text="Cancelar"
          color="#F0754E"
          onClick={cancelForm}
          width='10vw'

        />
        <Btn
          text="Salvar mudanças"
          color="#43B1B1"
          width='20vw'
          onClick={() => handleSubmit()} 
        />
      </div>
    </>
  )

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
    }, []);
  }

  MeuComponente()
  const screen1Content = (<>
    <div style={{
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center'
    }}>
{alterarInput === "doNotAlter" && noAlterInput}
{alterarInput === "tAlter" && AlterInput}
    </div>
    {form === "form" && forms}
    {form === "noForm" && noForm}

  </>
  )

  const screen2Content = (<>
    <div style={{
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <span>test</span>
    </div>

  </>)


const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];
  if (file) {
    const storageRef = ref(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
          setSelectedPhoto(url); // Define a imagem selecionada
          setFormData({
            ...formData,
            foto: url,
          });
        });
      }
    );
  }
};

const handleDivClick = () => {
  // Aqui você pode adicionar a lógica para abrir o seletor de arquivo
  const fileInput = document.getElementById("hiddenFileInput");
  if (fileInput) {
    fileInput.click();
  }
};
const noChanceImage = (<>
  <div
    style={{
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      overflow: "hidden",
      backgroundColor: "white",
      border: '2px solid white'
    }}
  >
    {responseData?.professor[0] && (<img
      src={responseData.professor[0].foto}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        objectPosition: "center center", // Adjust this value as needed
      }}
    />)}
  </div>
</>)

const ChanceImage = (<>
<div>
{/* ... Rest of your code ... */}
<div
style={{
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: "white",
  border: "2px solid white",
}}
onClick={handleDivClick}
>
{selectedPhoto ? (
  <img
    src={selectedPhoto}
    alt="Selected"
             style={{
      width: "100%", // Defina a largura como 100% da div pai
      height: "100%", // Defina a altura como 100% da div pai
      objectFit: "cover",
      objectPosition: "center center",
    }}
  />
) : (
  <img
    src={responseData?.professor[0]?.foto}
    alt="Descrição da imagem"
    style={{
      width: "100%", // Defina a largura como 100% da div pai
      height: "100%", // Defina a altura como 100% da div pai
    
  
    }}
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
</>)
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: '#F0754E'
      }}
    >
      <Header title="" color="#F0754E" />
      <UserDetails>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "blue",
            gap: "30px",
            marginLeft: "3%",
            width: 'max-content'
          }}
        >

    {changeImage === "noChanceImage" && noChanceImage}
{changeImage === "chanceImage" && ChanceImage}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {responseData?.professor[0] && (
              <>
                <TextWelcomeUser nameUser={responseData.professor[0].nome} />
                <InfoDisplay title="E-mail" information={responseData.professor[0].email} />
                <InfoDisplay title="CPF" information={responseData.professor[0].cpf} />
              </>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: '', marginRight: '3%' }}>


          <button
            onClick={() => {
              Edit();
            }}
            style={{
              backgroundColor: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 20px',
              cursor: 'pointer',
              color: '#333',
              width: 'max-content',
              display: 'flex',
              flexDirection: 'row',
              gap: '10px'
            }}
          >
            <img src={editImage} alt="" />
            Editar
          </button>
        </div>
      </UserDetails>
      <UserDetailsAndSavedItems
        handleMyDataClick={handleMyDataClick}
        handleSavedClick={handleSavedClick}
      />
      {currentScreen === "screen1" && screen1Content}
      {currentScreen === "screen2" && screen2Content}
    </div>
  );
}
export default Configuracoes;