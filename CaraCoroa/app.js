/**
 * Cara ou Coroa
 * @author Nathalia Alves Rosario
 */

function jogar() {

    // Pega a escolha do usuário
    // .toLowerCase() → transforma todas as letras em minúsculas.
    let escolha = document.getElementById("escolha").value.toLowerCase();

    // Verifica se a pessoa digitou uma escolha válida
    // !== significa “diferente de”
    // A condição com && só é verdadeira se todas as partes forem verdadeiras.
    if (escolha !== "cara" && escolha !== "coroa") {
        alert("Digite corretamente: cara ou coroa");
        // “Para tudo e sai da função.”
        return;
    }

    // Sorteia CARA (0) ou COROA (1)
    let sorteio = Math.floor(Math.random() * 2);

    // Esconde os dois lados (limpar)
    document.getElementById("cara").style.display = "none";
    document.getElementById("coroa").style.display = "none";

    let resultado;

    // mostrar figura sorteada
    if (sorteio === 0) {
        document.getElementById("cara").style.display = "block";
        resultado = "cara";
    } else {
        document.getElementById("coroa").style.display = "block";
        resultado = "coroa";
    }

    // Verifica vitória
    if (escolha === resultado) {
        setTimeout(() => {
            alert("🎉 VOCÊ GANHOU!");
        }, 290); // tempo em milissegundos
    } else {
        setTimeout(() => {
            alert("VOCÊ PERDEU!");
        }, 290); // tempo em milissegundos
    }
}

function limpar() {
    // Esconder os lados
    //document.getElementById("cara").-> pega o elemento HTML que tem id="cara".
    //.style.display = "none"; -> não apaga o elemento, só o esconde da tela.
    document.getElementById("cara").style.display = "none"; 
    document.getElementById("coroa").style.display = "none";
}
