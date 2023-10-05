// Função para operações CRUD
function Crud() {
  // Função para realizar operação de leitura (GET)
  async function get() {
    try {
      const accessToken = localStorage.getItem("accessToken");
      console.log(accessToken, 'token Crud');

      if (!accessToken) {
        
        console.error("Token de acesso não encontrado");
        return;
      }

      const response = await fetch(`http://localhost:8181/professor/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${accessToken}`,
        },
      });
      console.log(accessToken);
      
      
      if (response.ok) {
        const responseData = await response.json();
        console.log('get',responseData);
        return responseData; // Retorna os dados da função
      } else {
        console.log("Solicitação não bem-sucedida do get Crud",response);
      }
    } catch (error) {
      console.error("Erro ao fazer a solicitação:", error);
    }
  }



  interface idUser{
    id: number
  }

  async function put(formData: {
    nome: string;
    cpf: string;
    data_nascimento: string;
    foto: string;
    email: string;
    senha: string;
    id_genero: number;
    numero: string;
    cep: string;
    numeroTelefone: string;
  }, id: idUser) {

    const jsonData = {
      nome: formData.nome,
      cpf: formData.cpf,
      data_nascimento: formData.data_nascimento,
      foto: formData.foto,
      email: formData.email,
      senha: formData.senha,
      id_genero: formData.id_genero,
      numero: formData.numero,
      cep: formData.cep,
      numeroTelefone: formData.numeroTelefone,
    };
    try {
      const accessToken = sessionStorage.getItem("accessToken");

      const response = await fetch (`http://localhost:8181/professor/${id.id}`,{
        method:'PUT',
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(jsonData )
      })
      if(response.ok) {
        const dataResponse = await response.json();

        console.log('dados atualizados', dataResponse)
        return dataResponse;
      }else {
        console.error("Erro ao atualizar o registro");
       
    }
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
      console.log(jsonData)
  }
  }

  return { get , put}; // Retorna um objeto com o método 'get'
}

export default Crud;
