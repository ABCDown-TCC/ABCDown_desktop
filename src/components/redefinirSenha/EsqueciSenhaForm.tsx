import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { FiMail } from 'react-icons/fi'; // Importe o ícone de email do react-icons

const EsqueciSenhaForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const navigate = useNavigate();

  const handleEnviarSolicitacao = async () => {
    if (!email) {
      // Verifica se o email está em branco
      setMensagem('Por favor, digite um endereço de e-mail válido.');
      setModalVisible(true); // Mostra o modal de erro
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8181/redefinicao-senha/solicitar',
        { email: email } // Passa o email no corpo da solicitação
      );
      console.log(response.status);
      
      if (response.status === 201) {
        setMensagem('Solicitação enviada com sucesso. Verifique seu e-mail.');
        setModalVisible(true); // Mostra o modal de sucesso
      } else {
        setMensagem('Erro ao enviar a solicitação. Verifique seu e-mail.');
        setModalVisible(true); // Mostra o modal de erro
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setMensagem('Erro ao enviar a solicitação. Verifique seu e-mail.');
      setModalVisible(true); // Mostra o modal de erro
    }
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalVisible(false);
    if (mensagem.startsWith('Solicitação enviada com sucesso')) {
      navigate('/confirmar-senha/'); // Redireciona para outra página apenas se a solicitação for bem-sucedida
    }
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateAreas: 'form image',
      gridTemplateColumns: '62% 38%',
      height: '100vh',
      width: '100%',
      backgroundColor: '#fff'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '40px'
        }}>
          <h1 style={{
            color: '#000',
            fontWeight: '700',
            fontSize: '3.2rem',
          }}>
            Redefinir senha
          </h1>
          <p style={{
            fontWeight: '500',
            fontSize: '1rem',
            width: '50%',
            textAlign: 'center',
            marginTop: '-2%'
          }}>Por favor, digite o endereço de e-mail utilizado no cadastro</p>
          <div style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px'
          }}>
            <label style={{
              display: 'flex',
              width: '48%',
              fontSize: '0.9rem',
              fontWeight: '600',
            }} htmlFor="email">E-mail:</label>
            <input style={{
              width: '50%',
              padding: '2%',
              borderRadius: '50px',
              border: '1px solid'
            }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             <button style={{
            padding: '2%',
            width: '50%',
            borderRadius: '50px',
            border: 'none',
            backgroundColor: '#43B1B1',
            color: '#fff',
            fontSize: '1.2rem',
            marginTop:'10px'
          }}
          onClick={handleEnviarSolicitacao}>enviar</button>
          </div>
        </div>      
      </div>
      <div style={{
        backgroundImage: 'url(https://uxff.com.br/wp-content/uploads/2023/10/pintura-de-garota-sorridente-de-tiro-medio-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>

      </div>
      
      {/* Modal temporário */}
      {modalVisible && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '20px',
          width: '50%',
          height: '70%',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}>
            <div style={{
                display:'flex',
                flexDirection: 'column',
                alignItems:'center',
                justifyContent:'center',
                width:'100%',
                height:'100%',
                gap: '5%',
            }}>
                <FiMail style={{
                    fontSize: '10rem',
                    color:'#FABB16'
                }}></FiMail>
                <p>{mensagem}</p>
                <button style={{
                    padding:'2%',
                    width:'30%',
                    borderRadius:'50px',
                    border: 'none',
                    color:'#FFF',
                    fontWeight:'700',
                    fontSize:'1rem',
                    backgroundColor:'#43B1B1'
                }} onClick={handleCloseModal}>Continuar</button> 
            </div>
        </div>
      )}
    </div>
  );
};

export default EsqueciSenhaForm;