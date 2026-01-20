console.log("JS carregado");

// Funções do site
function abrirPagina(pagina) {
    window.location.href = pagina;
}

function mostrarMensagem() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 300);
    });

    alert("JavaScript em ação 🚀");
}

function voltar() {
    window.location.href = "index.html";
}

// Funções de login/cadastro
if (document.getElementById("nome") && document.getElementById("senha")) {


    function login() {
        const nome = document.getElementById("nome").value.trim();
        const senha = document.getElementById("senha").value.trim();

        const USER = "admin";
        const PASS = "Sucesso2018";

        if (nome === USER && senha === PASS) {
            localStorage.setItem("logado", "true");
            alert("Login bem-sucedido!");
            window.location.href = "index.html";
        } else {
            alert("Nome ou senha incorretos");
        }
    }

  /*  function logout() {
    localStorage.removeItem("logado");
    window.location.href = "index.html";
}*/

}