/**
 * Jogo da Memória
 * @author Nathalia Alves Rosário
 */




// Frutas com pares
let frutas = ["🍓","🍎","🍇","🍌","🍒","🍉"];

// Duplicar para criar os pares
let cartas = [...frutas, ...frutas];

// Embaralhar
cartas.sort(() => Math.random() - 0.5);

const board = document.getElementById("board");

let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;
let paresFeitos = 0;

// Criar as cartas na tela
cartas.forEach(fruta => {

  const card = document.createElement("div");
  card.classList.add("carta");
  card.innerHTML = fruta;

  card.onclick = () => virar(card);

  board.appendChild(card);
});

// Função de virar
function virar(card){

  if(bloqueio) return;
  if(card.classList.contains("virada")) return;
  if(card.classList.contains("completa")) return;

  card.classList.add("virada");

  if(!primeiraCarta){
    primeiraCarta = card;
    return;
  }

  segundaCarta = card;
  bloqueio = true;

  // Comparar cartas
  if(primeiraCarta.innerHTML === segundaCarta.innerHTML){

    primeiraCarta.classList.add("completa");
    segundaCarta.classList.add("completa");

    resetar();
    paresFeitos++;

    // Vitória
    if(paresFeitos === frutas.length){
      setTimeout(() => {
        alert("Você ganhou! 🎉");
      }, 300);
    }

  } else {

    // Errou → fechar
    setTimeout(() => {
      primeiraCarta.classList.remove("virada");
      segundaCarta.classList.remove("virada");
      resetar();
    }, 800);

  }
}

// Resetar jogada
function resetar(){
  primeiraCarta = null;
  segundaCarta = null;
  bloqueio = false;
}
