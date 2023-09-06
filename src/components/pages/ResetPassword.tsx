
import React, { useState, useEffect } from 'react';
import BackgroundImageResetPassword from '../layout/loginImages/resetPassword.png';
import BackgroundImageResetPassword2 from '../layout/loginImages/resetPassword2.png';
import DivRowLogin from '../layout/FormComponents/DivRowLogin/DivRowLogin';
import HeaderLogin from '../layout/FormComponents/HeaderLogin';
import Input from '../layout/FormComponents/Input';
import Btn from '../layout/FormComponents/Btn';
import RegistrationInstructions from '../layout/FormComponents/RegistrationInstructions';
import UserDecisionHandler from '../layout/FormComponents/UserDecisionHandler'
import AuthenticationOptions from '../layout/FormComponents/AuthenticationOptions'

function ResetPassword() {
  const heightInput: string = '5vh';
  const heightButton: string = '6.5vh';
  const widthInput: string = '35vw';

  const [currentStep, setCurrentStep] = useState('emailInput');

  const handleLoginButtonClick = () => {
    // Altera o estado para a próxima etapa após o clique no botão
    setCurrentStep('nextStep'); // Substitua 'nextStep' pelo valor que represente a próxima etapa


  };

  const renderRightContent = () => {
    let backgroundImage: string = BackgroundImageResetPassword;
    let backgroundImage2: string = BackgroundImageResetPassword2;

    if (currentStep === 'emailInput') {
      return backgroundImage;
    } else if (currentStep === 'nextStep') {
      return backgroundImage2;
    }
    return '';
  };
  const renderLeftSideContent = () => {
    if (currentStep === 'emailInput') {
      return (
        <>
          {/* Conteúdo para a etapa de entrada de email */}
          <>
            <HeaderLogin />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '10% ',
                gap: '8vh',
                height: '100%',

              }}
            >
              <RegistrationInstructions
                textTitulo="Redefinir senha"
                textDescription="Por favor, digite o endereço de e-mail utilizado no cadastro"
              />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5vh',
                //  backgroundColor:'red'
              }}>
                <Input
                  text="Email"
                  width={widthInput}
                  height={heightInput}

                />


                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '3vh',
                }}>
                  <Btn onClick={handleLoginButtonClick} text="entrar" color="#43B1B1" width={widthInput} height={heightButton} />
                  <div style={{
                    //backgroundColor: 'tomato',
                    display: 'flex',
                    flexDirection: 'row',
                    width: widthInput, // Correção: 'with' para 'width'
                    height: heightButton,
                    justifyContent: 'space-between'
                  }}>
                    <AuthenticationOptions text='Crie uma conta' color='#F0754E' />
                    <AuthenticationOptions text='Voltar' color='#000000' />
                  </div>
                </div>
              </div>

            </div>
          </>
        </>
      );
    } else if (currentStep === 'nextStep') {
      return (
        <>
          <HeaderLogin />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '10% ',
              gap: '8vh',
              height: '100%',
            }}
          >
            <RegistrationInstructions
              textTitulo="Redefinir senha"
              textDescription="Por favor, insira uma senha válida. Ela deve conter 8 caracteres e uma letra"
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3vh',
              //  backgroundColor:'red'
            }}>
              <Input text="Nova senha:" width={widthInput} height={heightInput} type="password" />
              <Input text="Confirmar senha:" width={widthInput} height={heightInput} type="password" />
              <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                // backgroundColor:'red',
                gap: '1vw',
                width: '100%',
                marginTop: '10%'
              }}>
                <Btn text="Cancelar" color="#F0754E" width='12vw' height={heightButton} />
                <Btn text="Enviar" color="#43B1B1" width='22vw' height={heightButton} />

              </div>
            </div>
          </div>
        </>
      );
    }
    return null; // Caso contrário, não há conteúdo a ser exibido
  };
  return (
    <>
      <DivRowLogin
        leftSideContent={renderLeftSideContent()} // Chama a função para renderizar o conteúdo do lado esquerdo
        rightSideBackgroundImage={renderRightContent()}
      />
    </>
  );
}

export default ResetPassword;