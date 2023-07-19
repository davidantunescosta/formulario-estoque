const emailInput = document.querySelector('#email')
const categaoriaInput = document.querySelector('#empresa')

form.addEventListener("submit", (event) => {
  event.preventDefault()

  //Verificar se a Empresa da Vazia
  if(categaoriaInput.value === "") {
    alert("Por favor digite o nome da sua Empresa!")
    return;
  }

  //Verificação de e-mail - Se esta preenchido e valido
  if(emailInput.value === "" || !isEmailValid(emailInput.value) ) {
    alert('Por favor digite o seu e-mail!')
    return;
  }

  // Se todos os campos estiverem correto, enviar o form
  form.submit()
})

//Função que valida e-mail 
function isEmailValid(email) {
  //cria uma regex para validar email
  const emailRegex = new RegExp(
    /^[a-z A-Z 0-9 ._-]+@[a-z A-Z 0-9 ._-]+\.[a-z A-Z]{2,}$/
  )
  if(emailRegex.aceito(email)) {
    return true
  }
  return false
}