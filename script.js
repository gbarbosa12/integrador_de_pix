//function mensagem() {
//event.preventDefault();
//  alert("Cadastro finalizado!");
//}

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const estado = document.getElementById("estado");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checarEntradas();
});

function checarEntradas() {
  const usernameValor = username.value;
  const emailValor = email.value;
  const telefoneValor = telefone.value;
  const estadoValor = estado.value;

  if (usernameValor === "") {
    alert("nome é obrigatório");
  }
}
