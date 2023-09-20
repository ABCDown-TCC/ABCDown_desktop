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
  const [edit, setEdit] = useState(true)
  const [form, setForm] = useState("noForm")
  const [inputValue, setInputValue] = useState('');

  
function teste() {
  console.log(inputValue)
}
teste()
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
    console.log('clcik')
    setEdit(false)
    setForm("form")
  }
  function cancelForm() {
    console.log('cancelar')
    setForm("noForm")
    setEdit(true)
  }
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

  const widthInputRigth = '35%'
  const widthInputLeft = '60%'


  const screen1Content = (<>
    <div style={{
      flex: 1,
      width: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center'
    }}>
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
        < RepeatedDiv>
          <InputConfiguration label="Nome" required disabled={edit} customWidth={widthInputLeft} value={responseData?.professor[0]?.nome} />
          <InputConfiguration label="Sexo" required disabled={false} customWidth={widthInputRigth} value={responseData?.professor[0]?.nome_genero} />
        </RepeatedDiv>
        <RepeatedDiv>
          <InputConfiguration label="E-mail" required disabled={edit} customWidth={widthInputLeft} value={responseData?.professor[0]?.email} />
          <InputConfiguration label="CPF" required disabled={edit} customWidth={widthInputRigth} value={responseData?.professor[0]?.cpf} />
        </RepeatedDiv>

        {/* data nascimento */}
        <div
          style={{
            width: '100%',
          }}
        >
          <InputConfiguration label="Data Nascimento" required disabled={edit} customWidth={widthInputLeft} value={responseData?.professor[0].data_nascimento} />
        </div>
        <RepeatedDiv>
          <InputConfiguration label="CEP" required disabled={edit} customWidth={widthInputRigth} value={responseData?.professor[0].cep}  onChange={(e) => {setInputValue(e.target.value);}}/>
          <InputConfiguration label="Logradouro" required disabled={true} customWidth={widthInputLeft} />
        </RepeatedDiv>

        <RepeatedDiv>
          <InputConfiguration label="Bairro" required disabled={true} customWidth={widthInputLeft} />
          <InputConfiguration label="Número" required disabled={edit} customWidth={widthInputRigth} value={responseData?.professor[0]?.numero} />
        </RepeatedDiv>

        <RepeatedDiv>
          <InputConfiguration label="Cidade" required disabled={true} customWidth={widthInputLeft} />
          <InputConfiguration label="Estado" required disabled={true} customWidth={widthInputRigth} />
        </RepeatedDiv>
      </div>

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
