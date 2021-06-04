const form = document.querySelector('form'); 
const input = document.querySelector('.input');
const profile = document.querySelector('.profile');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = input.value.trim();

    if(user) {
        getUser(user)
    } else {
        alert("Digite o usuário...")
    }
})

const getUser = async (user) => {

    try {
        const requisicao = await fetch(`https://api.github.com/users/${user}`);
        if (requisicao.ok === false) {
            throw new Error();
        }
        const userInfos = await requisicao.json();
        profile.innerHTML = createCard(userInfos);
        //console.log(createCard(userInfos));
    } catch {
        console.log("Usuário não encontrado");
    }

/* Alternativa usando o fetch:
    fetch(`https://api.github.com/users/${user}`)
    .then(resposta => resposta.json())
    .then(jsonBody)
*/
}

const createCard = (user) => {
    const { login, name, bio, followers, public_repos, avatar_url} = user;
    return `
    <picture>
        <img class="foto" src="${avatar_url}" alt="" />
    </picture>
    <div>
        <h2 class="nome">${name}</h2>
        <p>${login}</p>
        <p>${bio}</p>
        <ul class="">
            <li>
                <span class="material-icons icons">people_outline</span>
                <p>${followers}</p>
            </li>
            <li>
                <span class="material-icons icons">class</span>
                <p>${public_repos}</p>
            </li>
        </ul>
    </div>
    `
}























                  