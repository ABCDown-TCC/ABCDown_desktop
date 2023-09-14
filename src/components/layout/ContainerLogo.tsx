import Logo from "./ClassComponents/ImagesClass/Logo.svg";
function ContainerLogo() {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          // backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
        }}
      >
        <div
          style={{
            height: "3px", // Defina a altura da linha como 1 pixel
            width: "100%", // Faça a linha ocupar 100% da largura do elemento pai
            backgroundColor: "#C9C9C9", // Defina a cor de fundo como #C9C9C9
          }}
        ></div>
        <div
          style={{
            width: "max-content", // Defina a largura desejada
            height: "max-content", // Defina a altura desejada
          }}
        >
          <img src={Logo} alt=""        
           style={{
            width: "3vw", // Defina a largura desejada
            height: "6vh", // Defina a altura desejada
          }}/>
        </div>
        <div
          style={{
            height: "3px", // Defina a altura da linha como 1 pixel
            width: "100%", // Faça a linha ocupar 100% da largura do elemento pai
            backgroundColor: "#C9C9C9", // Defina a cor de fundo como #C9C9C9
          }}
        ></div>
      </div>
    </>
  );
}

export default ContainerLogo;
