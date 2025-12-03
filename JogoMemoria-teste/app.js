/**
 * Jogo da Memória
 * @author Nathalia Alves Rosário
 */


// Variáveis do jogo
let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;
let paresFeitos = 0;
let frutas = [];

// -----------------------------------------------------------
// SORTEAR E CRIAR AS CARTAS
// -----------------------------------------------------------

function sortear() {

  // Lista de frutas (pares)
  frutas = ["🍓", "🍓", "🍎", "🍎", "🍇", "🍇", "🍌", "🍌"];

  // Mistura tudo
  frutas.sort(() => Math.random() - 0.5);

  // Pega a área das cartas
  let centro = document.getElementById("centro");

  // Limpa o tabuleiro
  centro.innerHTML = "";

  // Cria cada carta
  frutas.forEach(fruta => {

    let carta = document.createElement("div");
    carta.classList.add("carta");
    carta.innerHTML = ""; // começa virada para baixo

    // Guarda o emoji dentro da carta
    carta.dataset.fruta = fruta;

    // Clicar → virar
    carta.onclick = () => virar(carta);

    // Coloca na tela
    centro.appendChild(carta);
  });

  // Reinicia variáveis do jogo
  primeiraCarta = null;
  segundaCarta = null;
  bloqueio = false;
  paresFeitos = 0;
}

// -----------------------------------------------------------
// FUNÇÕES PARA VIRAR CARTA
// -----------------------------------------------------------

// Vira para cima
function virarParaCima(carta) {
  carta.innerHTML = carta.dataset.fruta;
  carta.classList.add("virada");
}

// Vira para baixo
function virarParaBaixo(carta) {
  carta.innerHTML = "";
  carta.classList.remove("virada");
}

// -----------------------------------------------------------
// FUNÇÃO PARA VIRAR TODAS (LIMPAR)
// -----------------------------------------------------------

function limparMesa() {
  document.querySelectorAll(".carta").forEach(carta => {
    virarParaBaixo(carta);
    carta.classList.remove("completa");
  });

  primeiraCarta = null;
  segundaCarta = null;
  bloqueio = false;
  paresFeitos = 0;
}

// -----------------------------------------------------------
// FUNÇÃO PRINCIPAL DO JOGO
// -----------------------------------------------------------

function virar(carta) {

  if (bloqueio) return;
  if (carta.classList.contains("virada")) return;
  if (carta.classList.contains("completa")) return;

  virarParaCima(carta);

  // Primeira carta
  if (!primeiraCarta) {
    primeiraCarta = carta;
    return;
  }

  // Segunda carta
  segundaCarta = carta;
  bloqueio = true;

  // Comparar frutas
  if (primeiraCarta.dataset.fruta === segundaCarta.dataset.fruta) {

    primeiraCarta.classList.add("completa");
    segundaCarta.classList.add("completa");

    resetarJogada();
    paresFeitos++;

    // Vitória
    if (paresFeitos === frutas.length / 2) {
      setTimeout(() => alert("Você ganhou! 🎉"), 300);
    }

  } else {

    // Se errou → fecha as duas
    setTimeout(() => {
      virarParaBaixo(primeiraCarta);
      virarParaBaixo(segundaCarta);
      resetarJogada();
    }, 700);
  }
}

// -----------------------------------------------------------
// RESETA APENAS A RODADA
// -----------------------------------------------------------

function resetarJogada() {
  primeiraCarta = null;
  segundaCarta = null;
  bloqueio = false;
}
