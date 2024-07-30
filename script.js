const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O nome da personagem principal é Lola?",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "errado"
            },
            {
                texto:  "Falso",
                afirmacao: "correto"
            }
        ]
    },
    {
        enunciado: "Lily e Ryle usavam a frase "verdade nua e crua" para confessar algo?",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "correto"
            },
            {
                texto: "Falso",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Ryle é nutricionista?",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "errado"
            },
            {
                texto: "falso",
                afirmacao: "certo"
            }
        ]
    },
    {
        enunciado: "Foi Atlas quem disse: "Você pode parar de nadar agora, Lily,finalmente alcançamos a costa.?",
?",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "certo"
            },
            {
                texto: "falso",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "O nome da coléga de quarto da Lily é Alyssa? ",
        alternativas: [
            {
                texto: "verdadeiro",
                afirmacao: "errado"
            },
            {
                texto: "falso",
                afirmacao: "certo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seus resultados...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();