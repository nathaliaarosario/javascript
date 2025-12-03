/**
 * Jogo caça-níquel
 * @author Nathalia Alves Rosário  
 */


// Lista de símbolos do caça-níquel
let simbolos = ["🍒", "⭐", "🍋", "🍉", "🔔", "7️⃣"];

// Função para sortear 1 símbolo aleatório
function sortearSimbolo() {

    // cria uma variável
    // joga o reultado do calculo dentro de numero
    let numero = Math.floor(Math.random() * simbolos.length);

    // pega o símbolo que está naquela posição do array e devolve
    return simbolos[numero];
}

// Função principal — sorteia as 3 cartas
function sortear() {

    // Pega as 3 cartas do HTML e joga nas variaveis que criamos
    let carta1 = document.getElementById("carta1");
    let carta2 = document.getElementById("carta2");
    let carta3 = document.getElementById("carta3");

    // Sorteia os símbolos
    let sorteio1 = sortearSimbolo();
    let sorteio2 = sortearSimbolo();
    let sorteio3 = sortearSimbolo();

    // Exibe os resultados nas cartas
    carta1.innerHTML = sorteio1;
    carta2.innerHTML = sorteio2;
    carta3.innerHTML = sorteio3;



    // SE os 3 forem iguais 
    if (sorteio1 === sorteio2 && sorteio2 === sorteio3 && sorteio1 === sorteio3) {
        setTimeout(() => {
            alert("🎉 VOCÊ GANHOU!");
        }, 290); // tempo em milissegundos
    }



}



