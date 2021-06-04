//API
const baseURL = "https://api.github.com";

const form = document.querySelector('form');
const input = document.querySelector('#nomePersonagem');

const imgUsuario = document.querySelector('#imagem');
const nomeUsuario = document.querySelector('#name');
const loginUsuario = document.querySelector('#login')
const bioUsuario = document.querySelector('#bio');
const seguidoresUsuario = document.querySelector('#followers');
const repUsuario = document.querySelector('#public_repos');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
const mensagemErro = document.querySelector('.mensagemErro');
const subdiv1 = document.querySelector('.sub-divisao1');
const subdiv2 = document.querySelector('.sub-divisao2');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = input.value.trim();
  if (nome) {
    getUsuario(nome)
  } else {
    alert('Informe o nome do usuário');
  }
})


function replaceNome(nome) {
  let nomeModificado = ''
  if (nome.includes(' ')) {
    nomeModificado = nome.replace(' ', '+')
  } else {
    nomeModificado = nome;
  }
  return nomeModificado.toLocaleLowerCase();
}


const getUsuario = async (nome) => {
  let nomeModificado = replaceNome(nome)
  await fetch(`${baseURL}/users/${nomeModificado}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
      if (dados.message == "Not Found") {
        throw new Error()
      } else {
        mensagemErro.textContent = '';
        const avatar_url = dados.avatar_url;
        const name = dados.name;
        const login = dados.login;
        const bio = dados.bio;
        const followers = dados.followers;
        const public_repos = dados.public_repos;
        criarCard(avatar_url, name, login, bio, followers, public_repos)
      }

    }).catch(() => {
      limparCard()
      mensagemErro.innerHTML = '<img src="https://raw.githubusercontent.com/Maridh/On10-TodasEmTech-Projeto3-DesafioES6/mariana_herreros/entrega-projeto/mariana_herreros/assets/img/erro.png">';
    })
}


const criarCard = (avatar_url, name, login, bio, followers, public_repos) => {
  imgUsuario.setAttribute('src', avatar_url);
  nomeUsuario.textContent = name;
  loginUsuario.textContent = `${login}`;
  bioUsuario.textContent = `${bio}`;
  seguidoresUsuario.textContent = `${followers}`;
  repUsuario.textContent = `${public_repos}`;
  span1.innerText = 'people_outline';
  span2.innerText = 'library_books';
  const cleanSolution = document.getElementById("cleanSolution");
  cleanSolution.style.display = cleanSolution.style.display === 'flex' ? '' : 'flex';
  subdiv1.style.backgroundColor = 'white';
  subdiv2.style.backgroundColor = 'white';

}

const limparCard = () => {
  imgUsuario.src = ' ';
  nomeUsuario.textContent = '';
  loginUsuario.textContent = '';
  bioUsuario.textContent = '';
  seguidoresUsuario.textContent = '';
  repUsuario.textContent = '';
  span1.style.display = 'none';
  span2.style.display = 'none';
  const cleanSolution = document.getElementById("cleanSolution");
  cleanSolution.style.display = cleanSolution.style.display === 'none' ? '' : 'none';
  subdiv1.style.backgroundColor = 'none';
  subdiv2.style.backgroundColor = 'none';
}