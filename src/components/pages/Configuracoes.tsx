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
  return (
<div style={{ display: "flex", flexDirection: "row", backgroundColor: "RED",width:'100%', gap:'2%',alignItems:'center',justifyContent:'center'}}>
      {children}
    </div>
  );
}




function Configuracoes() {
  return (
    <div style={{ display:'flex', width: "100%", height: "100%" ,flexDirection: "column" }}>
      <Header title="Configuraçoes" color="#F0754E" />
      <UserDetails>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            backgroundColor:'blue',
            gap:'30px',
            marginLeft:'3%',
           
          }}
        >
          <div
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              overflow: "hidden",
              backgroundColor:'white'
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
      <div style={{ flex: 1, width: "100%", backgroundColor: "white"}}>

      <RepeatedDiv>
      <InputConfiguration label="Nome" required disabled={false} />
      <InputConfiguration label="Sexo" required disabled={false} />
      </RepeatedDiv>

      <RepeatedDiv>
      <InputConfiguration label="E-mail" required disabled={false} />
      <InputConfiguration label="Senha" required disabled={false} />
      </RepeatedDiv>
      </div>
    </div>
  );
}

export default Configuracoes;
