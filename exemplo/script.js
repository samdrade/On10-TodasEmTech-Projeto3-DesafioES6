
const baseURL = "https://api.github.com";

const form = document.querySelector('form');
const input = document.querySelector('#nomePersonagem');

const imgPersonagem = document.querySelector('#imagem');
const nomePersonagem = document.querySelector('#name');
const apelidPersonagem = document.querySelector('#apelido');
const niverPersonagem = document.querySelector('#niver');
const mensagemErro = document.querySelector('.messagemErro');


form.addEventListener('submit', (event) => {
event.preventDefault();
const nome = input.value.trim();

if(nome){
getPersonagem(nome)
} else {
alert('Informe o nome do personagem');
}
})

function replaceNome(nome){
let nomeModificado = ''

if(nome.includes(' ')){
nomeModificado = nome.replace(' ', '+')
} else {
nomeModificado = nome;
}

return nomeModificado.toLocaleLowerCase();
}



const getPersonagem = (nome) => {

const nomeModificado = replaceNome(nome)

fetch(`${baseURL}/users/${nomeModificado}`)
.then((resposta) => resposta.json())
.then((dados) => {

  if(dados.message == "Not Found") {
    throw new Error()
  }

  else {
  mensagemErro.textContent = '';

  const avatar_url = dados.avatar_url;

  const name = dados.name;

  const followers = dados.followers;

  const bio = dados.bio;

  criarCard(avatar_url, name, followers, bio)
};

//name login followers bio

}).catch(() => {
limparCard();
mensagemErro.textContent = 'Usuário não encontrado';
})

}


const criarCard = (avatar_url, name, followers, bio) => {
imgPersonagem.setAttribute('src', avatar_url);
// imgPersonagem.src = img
nomePersonagem.textContent = name;
// nomePersonagem.innerText = nome;

apelidPersonagem.textContent = `Nome: ${name}`;
niverPersonagem.textContent = `Bio: ${bio}`;
}

const limparCard = () => {
imgPersonagem.src = ' ';
nomePersonagem.textContent = '';
apelidPersonagem.textContent = '';
niverPersonagem.textContent = '';
}
