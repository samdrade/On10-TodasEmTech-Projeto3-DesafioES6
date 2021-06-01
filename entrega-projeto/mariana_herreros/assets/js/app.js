const baseURL = "https://api.github.com";

const form = document.querySelector('form');
const input = document.querySelector('#usuario');

const imgAvatar = document.querySelector('#imagem');
const nomeUsuario = document.querySelector('#nome');
const usarname = document.querySelector('#username');
const bio = document.querySelector('#bio');
const totalSeguidores = document.querySelector('#totalSeguidores');
const totalRepositorios = document.querySelector('#totalRepositorios');
const mensagemErro = document.querySelector('.messagemErro');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = input.value.trim();

  if(nome){
    getUsuario(nome)
  } else {
    alert('Informe o nome do usuário');
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

// avatar_url, login, name, bio, followers, public_repos

const getUsuario = (nome) => {

  const nomeModificado = replaceNome(nome)

  fetch(`${baseURL}/users/${nomeModificado}`)
  .then((resposta) => resposta.json())
  .then((dados) => {console.log(dados)
    mensagemErro.textContent = '';
  
    const avatar_url = dados.avatar_url;
    const login = dados.login;
    const name = dados.name;
    const bio = dados.bio;
    const followers = dados.followers;
    const public_repos = dados.public_repos;

    criarCard(avatar_url, login, name, bio, followers, public_repos)
   
  }).catch(() => {
    limparCard();
    mensagemErro.textContent = 'Personagem não encontrado';
  })

}

const criarCard = (avatar_url, login, name, bio, followers, public_repos) => {
 imgPersonagem.setAttribute('src', img);
 // imgPersonagem.src = img
 nomeUsuario.textContent = name;
 // nomePersonagem.innerText = nome;

 apelidPersonagem.textContent = `Nome: ${name}`;
 niverPersonagem.textContent = `Nome usuário: ${login}`;
}

const limparCard = () => {
  imgPersonagem.src = ' ';
 nomePersonagem.textContent = '';
 apelidPersonagem.textContent = '';
 niverPersonagem.textContent = '';
}
