function abrirPagina(pagina) {
    window.location.href = pagina;
}

function mostrarMensagem() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.style.transform = 'scale(0.9)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';  }, 300);
    });

    alert("JavaScript em ação 🚀");
}

function voltar() {
    window.location.href = "index.html";
}