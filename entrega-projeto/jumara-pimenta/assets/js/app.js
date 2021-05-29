const img = document.getElementById("fotoDoPerfil");

const usuario = document.getElementById("usuario");

const botao = document.querySelector("#input");

const form = document.getElementById("form");

const nomePessoa = document.getElementById("nomeDaPessoa");

const nomeUsuario = document.getElementById("nomeDeUsuario");

const descricaoPerfil = document.getElementById("descricaoDoPerfil");

const seguidores = document.getElementById("seguidores");

const repositorio = document.getElementById("repositorios");

const main = document.getElementById("main");

botao.addEventListener("click", function(e) {
    e.preventDefault();
})
    const getApi = async () => {
        if (usuario.value == "") {
        alert("Insira o nome do usuário");
    }else {      
        const url = `https://api.github.com/users/${usuario.value}`;
        const data = await fetch(url);
        const usuarioData = await data.json();
        if (usuarioData.message == "Not Found") {
            alert ("Usuário não encontrado");
        }else {
            main.setAttribute("style", "display: block;");
            descricaoPerfil.textContent = usuarioData.bio;
            img.setAttribute("src", `${usuarioData.avatar_url}`);
            nomePessoa.textContent = `${usuarioData.name}`;
            nomeUsuario.textContent = `${usuarioData.login}`;
            seguidores.textContent = `${usuarioData.followers}`;
            repositorios.textContent = `${usuarioData.public_repos}`;
        }

        form.reset();
    }
}




