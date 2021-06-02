let input = document.getElementById('input');
let form = document.getElementById('form');

let card = document.querySelector(".card-main")
let imagem = document.getElementById('img-card');
let nome = document.getElementById('nome-usuario');
let nickname = document.getElementById('nickname');
let resumo = document.getElementById('resumo-usuario');
let numSeguidor = document.getElementById('num-seguidores');
let numRepositorio = document.getElementById('num-repositorios');
let divSpan1 = document.querySelector("#sub1-sub-div2");
let divSpan2 = document.querySelector("#sub2-sub-div2");
let span1 = document.getElementById('span1');
let span2 = document.getElementById('span2');

let div_erro = document.getElementById("div-erro")
let titulo_erro = document.getElementById("titulo-erro")
let paragrafro_erro = document.getElementById("paragrafo-erro")
let img_erro = document.getElementById("img-erro")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nomeUsuario = input.value.trim();

    if (nomeUsuario) {
        getUsuario(nomeUsuario)
    } else {
        alert('Informe o nome de usuário');
    }
})

const getUsuario = async (nomeUsuario) => {
    let nomeUsuarioModificado = nomeUsuario.toLocaleLowerCase();
    await fetch(`https://api.github.com/users/${nomeUsuarioModificado}`)
        .then((resposta) => resposta.json())
        .then((dados) => {
            if (dados.message === "Not Found") {
                throw new Error()
            } else {
                limparDivErro();
                let { avatar_url, name, login, bio, followers, public_repos } = dados;
                criarCard(avatar_url, name, login, bio, followers, public_repos)
            }
        })
        .catch(() => {
            limparCard()
            criarDivErro()
        })
}

let criarCard = (avatar_url, name, login, bio, followers, public_repos) => {
    card.setAttribute('style', 'width: 220px');
    imagem.src = avatar_url
    imagem.alt = "Foto perfil Github do usuário"
    nome.textContent = name
    nickname.textContent = login
    resumo.textContent = bio
    numSeguidor.textContent = followers
    numRepositorio.textContent = public_repos
    span1.innerText = 'group'
    span2.innerText = 'book'
    divSpan1.classList.add("sub-sub-div2")
    divSpan2.classList.add("sub-sub-div2")
    
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
    card.setAttribute('style', 'width: 0px');
}

const criarDivErro = () => {
    div_erro.classList.add("div-erro")
    titulo_erro.classList.add("titulo-erro")
    titulo_erro.innerText = "Usuário não encontrado :("
    paragrafro_erro.classList.add("paragrafo-erro")
    paragrafro_erro.innerText = "Pesquise novamente"
    img_erro.classList.add("img-erro")
    img_erro.src = "./img/notFound.jpeg"
    img_erro.alt = "imagem correspondnete ao erro de usuário não encontrado"

    form.reset()
}

const limparDivErro = () => {
    div_erro.classList.remove("div-erro")
    titulo_erro.classList.remove("titulo-erro")
    titulo_erro.innerText = ""
    paragrafro_erro.classList.remove("paragrafo-erro")
    paragrafro_erro.innerText = ""
    img_erro.classList.remove("img-erro")
    img_erro.src = ""
    img_erro.alt = ""
}