import React, { useState, useEffect, ReactNode } from "react";

import Header from "../layout/Header/Header";
import UserDetails from "../layout/ConfigurationComponents/UserDetails";
import UserDetailsAndSavedItems from "../layout/ComponentsConfiguraton/UserDetailsAndSavedItems";
import TextWelcomeUser from "../layout/ComponentsConfiguraton/TextWelcomeUser";
import InfoDisplay from "../layout/ComponentsConfiguraton/InfoDisplay";
import InputConfiguration from "../layout/ComponentsConfiguraton/InputConfiguration";
import Crud from '../../Crud'
interface RepeatedDivProps {
  children: ReactNode;
}


function RepeatedDiv({ children }: RepeatedDivProps) {

  const height = '50%';
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "RED",
        width: "max-content",
        gap: "2%",
        // alignItems: "center",
        //justifyContent: "center",
      }}
    >
      {children}
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
  const width = '90%'
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <Header title="Configuraçoes" color="#F0754E" />
      <UserDetails>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor: "blue",
            gap: "30px",
            marginLeft: "3%",
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            {responseData?.professor[0] && (<img
              src={responseData.professor[0].foto}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
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
      </UserDetails>
      <UserDetailsAndSavedItems />
      <div style={{
        flex: 1, width: "100%", backgroundColor: "pink", display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <div
          style={{
            width: '90%',
            height: 'max-content',
            backgroundColor: 'blue'
          }}
        >
          <RepeatedDiv>
            <InputConfiguration label="Nome" required disabled={false} customWidth={width} />
            <InputConfiguration label="Sexo" required disabled={false} />
          </RepeatedDiv>

          <RepeatedDiv>
            <InputConfiguration label="E-mail" required disabled={false} />
            <InputConfiguration label="CPF" required disabled={false} />
          </RepeatedDiv>

          <div
            style={{
              backgroundColor: 'yellow', // Correção: estava 'yelow'
              width: '100%',
            }}
          >
            <InputConfiguration
              label="Data Nascimento"
              required
              disabled={false}
              customWidth='100px'
            />
          </div>


          <RepeatedDiv>
            <InputConfiguration label="CEE" required disabled={false} />
            <InputConfiguration label="Logradouro" required disabled={false} />
          </RepeatedDiv>

          <RepeatedDiv>
            <InputConfiguration label="Bairro" required disabled={false} />
            <InputConfiguration label="Número" required disabled={false} />
          </RepeatedDiv>

          <RepeatedDiv>
            <InputConfiguration label="Cidade" required disabled={false} />
            <InputConfiguration label="Estado" required disabled={false} />
          </RepeatedDiv>

        </div>
      </div>
    </div>
  );
}

export default Configuracoes;
