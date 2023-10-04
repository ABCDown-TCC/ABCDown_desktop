import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate, useParams } from 'react-router-dom';
import { FiMail } from 'react-icons/fi'; // Importe o ícone de email do react-icons

const ConfirmarSenhaForm: React.FC = () => {
  const { token } = useParams<{ token: string }>();
  const [email, setEmail] = useState('');
  const [tokenInput, setTokenInput] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal
  const [confirmacaoModalVisible, setConfirmacaoModalVisible] = useState(false); // Estado para controlar a visibilidade do modal de confirmação
  const navigate = useNavigate();

  const handleRedefinirSenha = async () => {
    if (!email || !tokenInput || !novaSenha) {
      // Verifica se todos os campos estão preenchidos
      setMensagem('Por favor, preencha todos os campos.');
      setModalVisible(true); // Mostra o modal de erro
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8181/redefinicao-senha/confirmar',
        { email, token: tokenInput, novaSenha }
      );

      if (response.status === 201) {
        setMensagem('Senha redefinida com sucesso!');
        setModalVisible(false); // Fecha o modal de erro, se estiver aberto
        setConfirmacaoModalVisible(true); // Mostra o modal de confirmação
        // Redirecionar para a página de login ou outra página apropriada após a confirmação bem-sucedida
        // navigate('/'); // Substitua '/login' pelo caminho desejado
      } else {
        setMensagem('Erro ao redefinir a senha. Verifique seu e-mail e o token.');
        setModalVisible(true); // Mostra o modal de erro
      }
    } catch (error) {
      console.error('Erro ao fazer a solicitação:', error);
      setMensagem('Erro ao redefinir a senha. Verifique seu e-mail e o token.');
      setModalVisible(true); // Mostra o modal de erro
    }
  };

  // Função para fechar o modal de erro
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // Função para fechar o modal de confirmação e redirecionar para a página inicial
  const handleCloseConfirmacaoModal = () => {
    setConfirmacaoModalVisible(false);
    navigate('/'); // Redireciona para a página inicial após a confirmação
  };

  // Função para cancelar a solicitação e ir para a página inicial
  const handleCancelar = () => {
    navigate('/'); // Redireciona para a página inicial ao cancelar
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
            <label style={{
              display: 'flex',
              width: '48%',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginTop: '10px' // Espaço superior
            }} htmlFor="token">Token:</label>
            <input style={{
              width: '50%',
              padding: '2%',
              borderRadius: '50px',
              border: '1px solid'
            }}
              type="password"
              value={tokenInput}
              onChange={(e) => setTokenInput(e.target.value)}
            />
            <label style={{
              display: 'flex',
              width: '48%',
              fontSize: '0.9rem',
              fontWeight: '600',
              marginTop: '10px' // Espaço superior
            }} htmlFor="novaSenha">Nova Senha:</label>
            <input required style={{
              width: '50%',
              padding: '2%',
              borderRadius: '50px',
              border: '1px solid'
            }}
              type="password"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />
            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
              <button style={{
                padding: '2%',
                width: '40%',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: '#F0754E',
                color: '#fff',
                fontSize: '1.2rem',
                marginTop: '10px' // Espaço superior
              }}
                onClick={handleCancelar}>Cancelar</button>
              <button style={{
                padding: '2%',
                width: '55%',
                borderRadius: '50px',
                border: 'none',
                backgroundColor: '#43B1B1',
                color: '#fff',
                fontSize: '1.2rem',
                marginTop: '10px' // Espaço superior
              }}
                onClick={handleRedefinirSenha}>Redefinir Senha</button>
            </div>
          </div>
        </div>      
      </div>
      <div style={{
        backgroundImage: 'url(https://uxff.com.br/wp-content/uploads/2023/10/pintura-de-garota-sorridente-de-tiro-medio-1.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>

      </div>

      {/* Modal temporário de erro */}
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
            }} onClick={handleCloseModal}>Fechar</button> 
          </div>
        </div>
      )}

      {/* Modal temporário de confirmação */}
      {confirmacaoModalVisible && (
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
            <p>Sua senha foi redefinida com sucesso!</p>
            <button style={{
              padding:'2%',
              width:'30%',
              borderRadius:'50px',
              border: 'none',
              color:'#FFF',
              fontWeight:'700',
              fontSize:'1rem',
              backgroundColor:'#43B1B1'
            }} onClick={handleCloseConfirmacaoModal}>Fechar</button> 
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmarSenhaForm;