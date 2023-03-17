
/* 
  SCRIPTS PARA ENVIO DE FORMULÁRIO DO PROJETO DEV
*/


async function EnviaFormulario(){


    // Entradas

    const input_nome = document.querySelector("#nome").value
    const input_email = document.querySelector("#email").value
    const input_texto = document.querySelector("#texto").value
   
    // Chamada pra API
    const url = "https://target-api-simples.cyclic.app/generica"
    const fetchOptions = {
      method: "POST",
      body: JSON.stringify({
        nome: input_nome,
        email: input_email,
        texto: input_texto
      }),
      // body: `{"title": ${inputTitleValue}, "description": ${inputDescriptionValue}}`,
      headers: {"Content-type": "application/json"}
    }
    const response = await fetch(url, fetchOptions)
    const retornoApi = await response.json()

    // Elemento que vamos mostrar o retorno da api
    const nome_resp = document.querySelector("#nome_resp")
    const email_resp = document.querySelector("#email_resp")
    const texto_resp = document.querySelector("#texto_resp")
    const retorno = document.querySelector("#retorno")
    const aviso = document.querySelector("#aviso")
    
    //mostando divs de avisos
    aviso.style.display = 'inline-block'
    retorno.style.display = 'inline-block'

    //passando os valores enviados para os campos
    nome_resp.innerHTML = JSON.stringify(retornoApi.apiRecebeu.nome)
    email_resp.innerHTML = JSON.stringify(retornoApi.apiRecebeu.email)
    texto_resp.innerHTML = JSON.stringify(retornoApi.apiRecebeu.texto)
  }