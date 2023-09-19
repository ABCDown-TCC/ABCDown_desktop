// Função para operações CRUD
function Crud() {
  // Função para realizar operação de leitura (GET)
  async function get() {
    try {
      const accessToken = sessionStorage.getItem("accessToken");
      console.log(accessToken);

      if (!accessToken) {
        console.error("Token de acesso não encontrado");
        return;
      }

      const response = await fetch(`http://localhost:8181/professor/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        return responseData; // Retorna os dados da função
      } else {
        console.log("Solicitação não bem-sucedida");
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  }

  return { get }; // Retorna um objeto com o método 'get'
}

export default Crud;
