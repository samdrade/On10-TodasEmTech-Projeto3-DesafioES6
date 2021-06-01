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

console.log("oi")
// function replaceNome(nome){
//   let nomeModificado = ''

//   if(nome.includes(' ')){
//    nomeModificado = nome.replace(' ', '+')
//   } else {
//    nomeModificado = nome;
//   }

//   return nomeModificado.toLocaleLowerCase();
// }



// const getUsuario = (nome) => {

//   const nomeModificado = replaceNome(nome)

//   fetch(`${baseURL}/characters?name=${nomeModificado}`)
//   .then((resposta) => resposta.json())
//   .then((dados) => {
//     mensagemErro.textContent = '';
//     if(dados.length > 0){

//     const personagem = dados[0];
//     const { img, nickname, birthday, name } = personagem;
//     criarCard(img, nickname, birthday, name)
//     } else {
//       throw new Error()
//     }
//   }).catch(() => {
//     limparCard();
//     mensagemErro.textContent = 'Personagem não encontrado';
//   })

// }

// const criarCard = (img, nome, apelido, niver) => {
//  imgPersonagem.setAttribute('src', img);
//  // imgPersonagem.src = img
//  nomePersonagem.textContent = nome;
//  // nomePersonagem.innerText = nome;

//  apelidPersonagem.textContent = `Apelido: ${apelido}`;
//  niverPersonagem.textContent = `Aniversário: ${niver}`;
// }

// const limparCard = () => {
//   imgPersonagem.src = ' ';
//  nomePersonagem.textContent = '';
//  apelidPersonagem.textContent = '';
//  niverPersonagem.textContent = '';
// }
