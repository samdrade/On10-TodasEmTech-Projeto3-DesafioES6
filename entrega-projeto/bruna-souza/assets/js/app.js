const form = document.querySelector('form'); 
const input = document.querySelector('.input');
const profile = document.querySelector('.profile');
const search_off = document.querySelector('.search_off')
const home = document.querySelector('.home');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const usuario = input.value.trim();

    if(usuario) {
       return getUsuario(usuario)
    }
       return alert("Digite o usuário...")
    })

const getUsuario = async (usuario) => {

    try {
        const requisicao = await fetch(`https://api.github.com/users/${usuario}`);
        if (requisicao.ok === false) {
            throw new Error();
        }
        const usuarioInfos = await requisicao.json();
        profile.innerHTML = createCard(usuarioInfos);
       
    } catch {
        profile.remove();
        search_off.innerHTML = notFound();
    }

    input.value = ''
}

const createCard = (usuario) => {
    const { login, name, bio, followers, public_repos, avatar_url} = usuario;
    return `
    <picture>
        <img class="foto" src="${avatar_url}" alt="" />
    </picture>
    <div>
        <h2 class="nome">${name}</h2>
        <p class="login">@${login}</p>
        <p class="bio">"${bio}"</p>
        <ul class="ul">
            <li class="li">
                <span class="material-icons icons">people_outline</span>
                <p>${followers}</p>
            </li>
            <li class="li">
                <span class="material-icons icons">class</span>
                <p>${public_repos}</p>
            </li>
        </ul>
    </div>
    `
}

const notFound = () => {
    return `
        <div>
            <h1 class="nome mensagem_erro"> Usuário não encontrado :( </h1>
            <h3 class="mensagem"> Por favor, pesquise novamente </h3>
        </div>
        <picture>
            <img class="imagem_notFound" src="./img/People search-amico.png"
        </picture>
    `
}
