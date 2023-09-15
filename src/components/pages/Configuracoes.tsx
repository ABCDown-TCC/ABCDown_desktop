import Header from "../layout/Header/Header";
import UserDetails from "../layout/ConfigurationComponents/UserDetails";
import UserDetailsAndSavedItems from "../layout/ComponentsConfiguraton/UserDetailsAndSavedItems";

import TextWelcomeUser from "../layout/ComponentsConfiguraton/TextWelcomeUser";
import InfoDisplay from "../layout/ComponentsConfiguraton/InfoDisplay";
import React, { ReactNode } from "react";

import InputConfiguration from "../layout/ComponentsConfiguraton/InputConfiguration";

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
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextWelcomeUser nameUser="Guilherme" />
            <InfoDisplay title="E-mail" information="camila@gmail.com" />
            <InfoDisplay title="CPF" information="0908834993" />
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
