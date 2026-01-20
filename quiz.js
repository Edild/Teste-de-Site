
const perguntas = [ 
    {
        pergunta: "Qual é o ano da viagem feita para Bazaruto?",
        opcoes:["2024","2023","2022","2021"],
        correta:1
},

{
    pergunta: "Quem come mais escondido de noite?",
    opcoes:["Janu","Mama","Lulu","Juny"],
    correta:2

},

{
    pergunta: "Quem manda desligar TV?",
    opcoes: ["Janu", "Mama", "Papa", "Juny"],
    correta:2
},

{
    pergunta: "Quem costuma acordar mais cedo em casa?",
    opcoes: ["Janu", "Mama", "Papa", "Lulu"],
    correta:3

},

{
    pergunta: "Qual é o prato que mais cozinha-se aqui em casa?",
    opcoes: ["Massa", "Peixe", "Galinha cafrial", "Frango"],
    correta:2
},

{
    pergunta: "Quem rebentou chinelo na viagem para China?",
    opcoes: ["Juny", "Lulu", "Janu", "Papa"],
    correta:3

}

];

let indice = 0;
let pontuacao = 0;

const perguntaEl = document.getElementById("pergunta");
const botoes = document.querySelectorAll(".opcao");
const resultadoEl = document.getElementById("resultado");

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
        pontuacao++;
    } else {
        botoes[escolha].classList.add("errada");
        botoes[correta].classList.add("correta");
    }

    botoes.forEach(btn =>btn.disabled = true);

    setTimeout(() => {
        indice++
        if (indice < perguntas.length) {
            carregarPergunta();
        } else {
            mostrarResultado();
            perguntaEl.textContent = "Quiz concluído";
            document.querySelector(".opcoes").innerHTML = "";

        } 
    }, 1000);
}


    function mostrarResultado() {
        perguntaEl.textContent = "Quiz concluído 🎉";
        document.querySelector(".opcoes").style.display = "none";
        resultadoEl.innerHTML= `
        <h3>Sua pontuação:</h3>
        <p><strong>${pontuacao}</strong> de ${perguntas.length}</p>
        <button onclick="voltar()">Voltar ao início</button>
    `;

}

carregarPergunta();