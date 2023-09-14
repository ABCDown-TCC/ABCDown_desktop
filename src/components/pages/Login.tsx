import React from "react";
import DivRowLogin from "../layout/FormComponents/DivRowLogin/DivRowLogin";
import RegistrationInstructions from "../layout/FormComponents/RegistrationInstructions";
import Btn from "../layout/FormComponents/Btn";
import Input from "../layout/FormComponents/Input";
import BackgroundImageLogin from "../layout/loginImages/loginBackground.png";
import HeaderLogin from "../layout/FormComponents/HeaderLogin";
import GoogleLoginButton from "../layout/FormComponents/GoogleLoginButton";
import ImageGoogle from "../layout/loginImages/Google.png";
import { useState, useEffect } from "react";
import AuthenticationOptions from "../layout/FormComponents/AuthenticationOptions";
import UserDecisionHandler from "../layout/FormComponents/UserDecisionHandler";

function Login() {
  const heightInput: string = "5vh";
  const heightButton: string = "6.5vh";
  const widthInput: string = "35vw";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let accessToken = ""; // Variável no escopo superior
  const [data, setData] = useState(null);

  const handleLogin = async () => {
    console.log("Login Clicado");
    const data = {
      email,
      password,
    };
    console.log(data);

    try {
      const response = await fetch("http://localhost:8181/login/professor/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Login bem-sucedido");
        const responseData = await response.json(); // Converte a resposta para JSON, se aplicável
        console.log(responseData); // Exibe os dados da resposta JSON
        //localStorage.setItem('accessToken', responseData.access_token);
        sessionStorage.setItem("accessToken", responseData.access_token);

      } else {
        console.log("Login não bem-sucedido");
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  };
  async function fetchUserData() {
    const id = 10;
    const accessToken = sessionStorage.getItem("accessToken");
  
    if (!accessToken) {
      console.error("Token de acesso não encontrado");
      return;
    }
    try {
      const response = await fetch(`http://localhost:8181/professor/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
      } else {
        console.log("Solicitação não bem-sucedida");
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  }

  // Função para fazer uma solicitação GET protegida pelo token
  // Função para fazer uma solicitação GET protegida pelo token

  // Chame a função para obter dados protegidos

  const leftSideContent = (
    <>
      <HeaderLogin />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          // backgroundColor: 'red'
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: 'green',
            height: "max-content",
            width: "max-content",

            gap: "30px",
          }}
        >
          <RegistrationInstructions
            textTitulo="Login"
            textDescription="is simply dummy text of the printing and typesetting industry."
          />
          <GoogleLoginButton
            text="Entrar com o Google"
            imageSrc={ImageGoogle}
            width={widthInput}
            height={heightInput}
          />
        </div>

        <UserDecisionHandler
          width={widthInput}
          height={heightButton}
          lineExtent="100%"
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            //  backgroundColor: 'yellow',
            height: "max-content",
            width: "max-content",
            gap: "5vh",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'black',
              height: "max-content",
              width: "max-content",
              gap: "2vh",
            }}
          >
            <Input
              text="Email"
              width={widthInput}
              height={heightInput}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              text="Senha:"
              width={widthInput}
              height={heightInput}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: 'yellow',
              height: "max-content",
              width: "max-content",
              gap: "2vh",
            }}
          >
            <Btn
              text="entrar"
              color="#43B1B1"
              width={widthInput}
              height={heightButton}
              onClick={handleLogin}
            />

            <div
              style={{
                //backgroundColor: 'tomato',
                display: "flex",
                flexDirection: "row",
                width: widthInput, // Correção: 'with' para 'width'
                height: heightButton,
                justifyContent: "space-between",
              }}
            >
              <AuthenticationOptions text="Crie uma conta" color="#F0754E" />
              <AuthenticationOptions
                text="Esqueceu sua senha?"
                color="#000000"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <DivRowLogin
        leftSideContent={leftSideContent}
        rightSideBackgroundImage={BackgroundImageLogin}
      />
    </>
  );
}

export default Login;
