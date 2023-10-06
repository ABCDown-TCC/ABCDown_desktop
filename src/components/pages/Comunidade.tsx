import React, { useState } from "react";
import imageLupa from "../layout/ClassComponents/ImagesClass/lupa.svg";
import Card from "../layout/Cards";
import addClass from "../layout/imagesCreateButton/addClass.svg";
import CreateButton from "../layout/CreateButton";
import ImageMyActivity from '../layout/img_containers_cards/imageMyActivity.svg'
import imageDowload from '../layout/img_containers_cards/imageDowload.svg'
import ImageClose from '../layout//FormComponents//imageMessage/close.svg'

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function Tab({ label, active, onClick }: TabProps) {
  return (
    <span
      onClick={onClick}
      style={{
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        color: active ? "#43B1B1" : "#000",
        borderBottom: active ? "2px solid #43B1B1" : "#000",
        paddingBottom: "10px",
        width: "max-content",
        fontSize: "1.5rem",
        height: "max-content",
        fontWeight: 600,
      }}
    >
      {label}
    </span>
  );
}

interface SearchInputProps {
  searchTerm?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text?: string;
}

function SearchInput(props: SearchInputProps) {
  return (
    <div
      style={{
        backgroundColor: "#E6E6E6",
        width: "50%",
        height: "4vh",
        display: "flex", // Adicione display flex
        justifyContent: "space-between", // Coloque os itens nos extremos
        alignItems: "center", // Alinhe verticalmente no centro
        borderRadius: "10px",
      }}
    >
      <input
        style={{
          marginLeft: "5%",
          border: "none",
          outline: "none",
          backgroundColor: "#E6E6E6",
          height: "100%",
          width: "100%",
        }}
        type="text"
        placeholder={props.text}
        value={props.searchTerm}
        onChange={props.handleChange}
      />
      <img src={imageLupa} alt="Lupa" style={{ marginRight: "5%", }} />
      {/* <span className="user-input">{props.text}</span> */}
    </div>
  );
}

interface MyActivictsProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  onButtonClick: () => void;
  onClickCard?: () => void; // Correção: deve ser onClickCard

}

interface MyActivictsProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  onButtonClick: () => void;
  onClickCard?: () => void;
}

function MyActivicts(props: MyActivictsProps) {
  const [showModal, setShowModal] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };
  function CloseWindownsInfo() {
    console.log('close janela info')
    setInfoVisible(false);
    setShowModal(false);


  }
  return (
    <>
      <div
        style={{
          width: '17vw',
          height: '30vh',
          borderRadius: '20px',
          backgroundColor: 'white',
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={props.onClickCard}
      >
        <div style={{
          display: 'flex', width: '100%',
          //backgroundColor: 'green'
        }}>
          <img
            src={props.imageUrl}
            alt="image"
            style={{ display: 'flex', width: '100%' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '60%',
            //backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '90%',
              height: '100%',
              // backgroundColor: 'purple',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
                width: '100%',
                //backgroundColor: 'white',
                height: '20%',
              }}
            >
              {props.title}
            </span>
            <div>
              <p
                style={{
                  fontSize: '0.9rem',
                  maxHeight: '60px', // Altura máxima em pixels
                  overflow: 'hidden',//backgroundColor:'red'
                }}
              >
                {props.description}
              </p>
              {props.description && props.description.length > 50 && (
                <button
                  onClick={openModal}
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  Ler mais ...
                </button>
              )}
            </div>
            <span style={{ fontSize: '0.9rem' }}>professor:</span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                //backgroundColor: 'pink',
                height: '20%',
                alignItems: 'flex-end',

              }}
            >
              <span role="img" aria-label="Avaliação">
                ⭐️⭐️⭐️⭐️⭐️
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.onButtonClick();
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  height: '90%'
                }}
              >
                <img
                  src={imageDowload}
                  alt="Download"
                  style={{ width: '100%', height: '100%' }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
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
          <Card width="45%" height="80%">
            <div style={{
              width: '100%', height: '50%', backgroundColor: 'red', backgroundImage: `url(${ImageMyActivity})`, // Substitua pelo caminho da sua imagem
              backgroundSize: "cover",
            }}>
              <div style={{
                display: 'flex',
                // height: '10%',
                width: '100%',
                //backgroundColor: 'blue',
                justifyContent: 'flex-end'
              }}>
                {/* <button className={styles.containerClose} onClick={props.onClickClose}> */}

                <button onClick={CloseWindownsInfo}>
                  <img src={ImageClose} alt="close" />
                </button>
              </div>
            </div>
            <div style={{ width: '100%', flex: 1, backgroundColor: 'green', flexDirection: 'column' }}>
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  width: '100%',
                  //backgroundColor: 'white',
                  height: '20%',
                }}
              >
                {props.title}
              </span>

              <p style={{fontSize:'1.3rem'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's b akjdfbawkjfbklwabfjkwbfkbwafkwbfkjb wkfjbwkjfbwkjf bkjwbf kwjbfkjwbfkjwbfkjwabfkjwbfkjbwakjfbwkjbfkwajbfkjwabfkjw
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's b akjdfbawkjfbklwabfjkwbfkbwafkwbfkjb wkfjbwkjfbwkjf bkjwbf kwjbfkjwbfkjwbfkjwabfkjwbfkjbwakjfbwkjbfkwajbfkjwabfkjw </p>
                <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                backgroundColor: 'pink',
                
                alignItems: 'flex-end',

              }}
            >
              <span role="img" aria-label="Avaliação">
                ⭐️⭐️⭐️⭐️⭐️
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  props.onButtonClick();
                }}
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  height: '5rem'
                }}
              >
                <img
                  src={imageDowload}
                  alt="Download"
                  style={{ width: '100%', height: '100%' }}
                />
              </button>
            </div>

            </div>


          </Card>


        </div>
      )}
    </>
  );
}





function MinhasAtividades() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          height: "100%",
          //background: "red",
          // justifyContent: "center",
          paddingLeft: '5%',
          paddingTop: '5%',
          gap: "40px",
        }}
      >
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />
        <MyActivicts
          imageUrl={ImageMyActivity}
          title="Titulo atividade"
          description="Texto é uma produção, verbal ou não verbal, que se constitui com algum código, no intuito de comunicar algo a alguém, em determinado tempo e espaço. Sua definição ampla se deve ao fato de também abranger diversos formatos.

          Pode-se compreender o texto verbal, oral e escrito, como uma prática social que utiliza estruturas verbais, organizadas e caracterizadas por suas estruturas linguísticas e sua função social, com vistas a cumprir um papel pessoal ou coletivo na vida humana. O mesmo se aplica aos textos não verbais, também compreendidos como uma ação social, diferenciando-se somente em função das estruturas e códigos utilizados.
          
          Leia também: Gêneros textuais — textos que exercem uma função social específica
          
          O que é texto?
          O conceito de texto pode variar a depender da perspectiva teórica adotada para estudá-lo. A palavra texto, ao longo da história, foi ganhando diferentes sentidos, de modo que novas construções foram compreendidas como tal.
          
          De acordo com o percusso de investigações sobre o texto, nas mais diversas correntes teóricas que se debruçam sobre esse objeto, o conceito foi se modificando e se ampliando. Hoje o texto não é considerado uma estrutura pronta, com unidade de sentido completa, pois consideram-se també"
          onButtonClick={() => {
            console.log('click no botao');
            // Adicione aqui a lógica para o botão
          }}
          onClickCard={() => {
            console.log('click no CArd');
            // Adicione aqui a lógica para o botão
          }}

        />


      </div>
    </>
  );
}

function OutraCoisa() {
  // Implemente o componente de Desempenho aqui
  return (
    <div>
      <p>Desempenho</p>
    </div>
  );
}

function Comunidade() {
  const [activeTab, setActiveTab] = useState("Minhas atividades");
  const [isCreateClass, setIsCreateClass] = useState(false);

  function toggleTab(tabName: string) {
    setActiveTab(tabName);
  }
  function createClass() {
    setIsCreateClass(true);
    console.log("adicionar turma");
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#F2F2F2",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "15%",
            //backgroundColor: 'pink'
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50%",
              display: "flex",
              alignItems: "center",
              //backgroundColor: '#f2f2f2'
            }}
          >
            <SearchInput text="Pesquisar atividades" />
          </div>
          <div
            style={{
              width: "100%",
              height: "50%",
              borderBottom: "3px solid #e6e6e6",
            }}
          >
            <div
              style={{
                width: "30%",
                height: "100%",
                justifyContent: "space-evenly",
                //backgroundColor: 'red' ,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
              }}
            >
              <Tab
                label="Tarefas de Casa"
                active={activeTab === "Minhas atividades"}
                onClick={() => toggleTab("Minhas atividades")}
              />

              <Tab
                label="Outra Coisa"
                active={activeTab === "Outra Coisa"}
                onClick={() => toggleTab("Outra Coisa")}
              />
            </div>
          </div>
        </div>
        <div style={{ width: "100%", height: "85%", backgroundColor: "blue" }}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#F2F2F2",
              maxHeight: "100%",
              overflowY: "auto",
            }}
          >
            {activeTab === "Minhas atividades" && <MinhasAtividades />}
            {activeTab === "Outra Coisa" && <OutraCoisa />}
          </div>
        </div>

        <CreateButton image={addClass} onclick={createClass} />

        {isCreateClass && (
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Fundo escuro semi-transparente
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Card width="35%" height="80%"></Card>
          </div>
        )}
      </div>
    </>
  );
}

export default Comunidade;
