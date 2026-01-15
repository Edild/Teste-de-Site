const perguntas = [ 
    {
        pergunta: "Qual é o ano da viagem feita para Bazaruto?",
        opcoes:["2024","2023","2022","2021"],
        correta:1
},

{
    pergunta: "Quem come mais escondido de noite?",
    opcoes:["Janu","Mama","Lulu","Juny"],
    correta:3
}

];

let indice = 0;

const perguntaEl = document.getElementById("pergunta");
const botoes = document.querySelectorAll(".opcao");

function carregarPergunta() {
    perguntaEl.textContent = perguntas[indice].pergunta;
    botoes.forEach((btn, i) => {
        btn.textContent = perguntas[indice].opcoes[i];
        btn.className = "opcao";
        btn.disabled = false;
    } ) 
}

    window.responder = function responder (escolha) {
    const correta = perguntas[indice].correta;

    if (escolha == correta) {
        botoes[escolha].classList.add("correta");
    } else {
        botoes[escolha].classList.add("errada");
        botoes[correta].classList.add("correta");
    }

    botoes.forEach(btn =>btn.disable = true);

    setTimeout(() => {
        indice++
        if (indice < perguntas.length) {
            carregarPergunta();
        } else {
            perguntaEl.textContent = "Quiz concluído";
            document.querySelector(".opcoes").innerHTML = "";

        } 
    }, 1000);
}

carregarPergunta();