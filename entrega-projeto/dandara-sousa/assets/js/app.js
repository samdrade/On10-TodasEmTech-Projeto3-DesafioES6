const baseURL = "https://api.github.com/users/";

const form = document.querySelector('form');
const input = document.querySelector('#search');

const imgUsuario = document.querySelector('#avatar_url')
const tagNameUsuario = document.querySelector('.name')
const tagLoginUsuario = document.querySelector('.login')
const tagBioUsuario = document.querySelector('.bio')
const tagImgSeguidores = document.querySelector('#people')
const tagNumeroSeguidores = document.querySelector('#followers')
const tagImgRepositorios = document.querySelector('#class')
const tagNumeroRepositorios = document.querySelector('#public_repos')

const tituloUserNotFound = document.querySelector('.title_not_found')
const subtituloUserNotFound = document.querySelector('.subtitle_not_found')
const imgUserNoteFound = document.querySelector('.img_not_found')

const cardUsuarioEncontrado = document.querySelector('.off')




form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const usuario = input.value.trim();

    if (usuario){
        clearCard()
        getUsuario(usuario)
    } else {
        alert('Digite o nome do Usuário');
    }
})

const getUsuario = (usuario) => {
    const parseLogin = usuario.toLowerCase();
    
    fetch(baseURL + parseLogin)
    .then(response => response.json())
    .then(dados=>{
        const dadosUsuario = dados;
        if (dadosUsuario.message){
            throw new Error();
        } else {
            console.log(dadosUsuario)
            const {bio, name, login, avatar_url, followers, public_repos} = dadosUsuario;
            cardUsuario(bio, name, login, avatar_url, followers, public_repos);
        }

 })
    .catch(error =>{
      console.log(error)
      userNotFound();
    })

}



const cardUsuario = (bio, login, name, avatar_url, followers, public_repos) =>{
    cardUsuarioEncontrado.classList.replace('off', 'card');
    imgUsuario.src = avatar_url;
    tagNameUsuario.innerHTML = name;
    tagLoginUsuario.innerHTML = login;
    tagBioUsuario.innerHTML = bio;
    tagImgSeguidores.src = "../../../images/people_outline.png";
    tagNumeroSeguidores.innerHTML = followers;
    tagImgRepositorios.src ="../../../images/Vector.png";
    tagNumeroRepositorios.innerHTML = public_repos;

}

const clearCard = () => {
    imgUsuario.src = "";
    tagNameUsuario.innerHTML = "";
    tagLoginUsuario.innerHTML = "";
    tagBioUsuario.innerHTML =  "";
    tagImgSeguidores.src = "";
    tagNumeroSeguidores.innerHTML = "";
    tagImgRepositorios.src ="";
    tagNumeroRepositorios.innerHTML = "";
    tituloUserNotFound.innerHTML = "";
    subtituloUserNotFound.innerHTML = "";
    imgUserNoteFound.src= "";
}



const userNotFound = () => {
    cardUsuarioEncontrado.classList.replace('card', 'off');
    tituloUserNotFound.innerHTML = 'Usuário não Encontrado. :(';
    subtituloUserNotFound.innerHTML = "Pesquisar novamente.";
    imgUserNoteFound.src="../../../images/not-found.svg";

}



