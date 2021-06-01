let input = document.getElementById('input');
let form = document.getElementById('form');
let imagem = document.getElementById('img-card');
let nome = document.getElementById('nome-usuario');
let nickname = document.getElementById('nickname');
let resumo = document.getElementById('resumo-usuario');
let numSeguidor = document.getElementById('num-seguidores');
let numRepositorio = document.getElementById('num-repositorios');
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');
let mensagemErro = document.querySelector('.messagemErro');


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nomeUsuario = input.value.trim();

    if (nomeUsuario) {
        getUsuario(nomeUsuario)
    } else {
        alert('Informe o nome de usuário');
    }
})

const getUsuario = (nomeUsuario) => {

    let nomeUsuarioModificado = nomeUsuario.toLocaleLowerCase();
  
    fetch(`https://api.github.com/users/${nomeUsuarioModificado}`)
    .then((resposta) => resposta.json())
    .then((dados) => {
      mensagemErro.textContent = '';
     
        let { avatar_url, name, login, bio, followers, public_repos } = dados;
        criarCard(avatar_url, name, login, bio, followers, public_repos)
    })
  }

let criarCard = (avatar_url, name, login, bio, followers, public_repos) => {
            imagem.src = avatar_url
            imagem.alt = "Foto perfil Github do usuário"
            nome.textContent = name
            nickname.textContent = login
            resumo.textContent = bio
            numSeguidor.textContent = followers
            numRepositorio.textContent = public_repos
            span1.innerText = 'group'
            span2.innerText = 'book'
            form.reset()
        }

const limparCard = () => {
        imagem.src = ''
        imagem.alt = ''
        nome.textContent = ''
        nickname.textContent = ''
        resumo.textContent = ''
        numSeguidor.textContent = ''
        numRepositorio.textContent = ''
        span1.innerText = ''
        span2.innerText = ''
        form.reset()
    }