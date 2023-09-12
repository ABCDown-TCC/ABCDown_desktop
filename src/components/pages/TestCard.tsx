import Card from "../layout/Cards";
import image1 from "../layout/ClassComponents/ImagesClass/imageClassContainer1.svg";
import image2 from "../layout/ClassComponents/ImagesClass/imageClassContainer2.svg";
import React, { useState, useEffect } from "react";
import ContainerInfoDeleteContainer from "../layout/ClassComponents/ContainerInfoDeleteContainer";

function TestCard() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [image1, image2];

  function onClickDelete() {
    console.log("DElete");
  }
  function onClickIfo() {
    console.log("Info");
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        gap: "30px",
      }}
    >
      <Card width="35%" height="35vh">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "80%",
            //   backgroundColor: "orange",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   alignItems: "center",
              //   backgroundColor: "red",
              justifyContent: "space-evenly", // Alinha horizontalmente com espaço uniforme
              marginLeft: "3vw",
              width: "50%",
            }}
          >
            <h2
              style={{
                fontSize: "1.7vw",
              }}
            >
              Título do Card
            </h2>
            <p
              style={{
                fontSize: "0.8vw",
              }}
            >
              Descrição dessa turma papsfcjdaovjodij
            </p>
          </div>
          <div
            style={{
              //   backgroundColor: "green",
              width: "50%",
              height: "100%",
              //  display:
            }}
          >
            <img src={image2} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            //   backgroundColor: "Pink",
            height: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "3vw",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "0.9vw" }}>
              Alunos
            </span>
            <span style={{ fontWeight: "bold", fontSize: "0.9vw" }}>5</span>
          </div>
          <div style={{ flex: "1", backgroundColor: "white" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "3vw", // Corrected typo
            }}
          >
            <ContainerInfoDeleteContainer
              onClickDelete={onClickDelete}
              onClickIfo={onClickIfo}
            />
          </div>
        </div>
      </Card>

      <Card width="35%" height="35vh">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "80%",
            //  backgroundColor: "orange",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   alignItems: "center",
              //  backgroundColor: "red",
              justifyContent: "space-evenly", // Alinha horizontalmente com espaço uniforme
              marginLeft: "3vw",
              width: "50%",
            }}
          >
            <h2>Título do Card</h2>
            <p>Descrição dessa turma papsfcjdaovjodij</p>
          </div>
          <div
            style={{
              //   backgroundColor: "green",
              width: "50%",
              height: "100%",
              //  display:
            }}
          >
            <img src={image1} alt="" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            // backgroundColor: "Pink",
            height: "20%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "3vw",
            }}
          >
            <span>Alunos</span>
            <span>5</span>
          </div>
          <div style={{ flex: "1", backgroundColor: "white" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              //   backgroundColor: "blue",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "3vw", // Corrected typo
            }}
          >
            <ContainerInfoDeleteContainer
              onClickDelete={onClickDelete}
              onClickIfo={onClickIfo}
            />
          </div>
        </div>
      </Card>

      <Card width="35%" height="35vh">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start", // Alinhar à esquerda
            gap: "2vw", // Espaçamento igual entre os elementos
            // backgroundColor: "Red",
            height: "80%",
          }}
        >
          <div
            style={{
              width: "130px", // Largura desejada
              height: "130px", // Altura desejada
              backgroundColor: "gray", // Cor de fundo cinza
              borderRadius: "50%", // Borda arredondada para torná-la redonda
              display: "flex",
              justifyContent: "center", // Centraliza horizontalmente
              alignItems: "center", // Centraliza verticalmente
            }}
          >
            <img src="" alt="" />
          </div>
          <span>Nome do aluno</span>
        </div>
        <div
          style={{
            display: "flex",
            // backgroundColor: "blue",
            justifyContent: "flex-end",
            marginRight: "3vw", // Corrected typo
            height: "20%",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              marginRight: "3vw", // Corrected typo
            }}
          >
            <ContainerInfoDeleteContainer
              onClickDelete={onClickDelete}
              onClickIfo={onClickIfo}
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default TestCard;
