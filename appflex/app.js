/**
 * Calculadora FLEX
 * @author Nathalia Alves Rosário
 * @version 1.0
 */

// A linha abixo captura o valor da caixa de entrada
function Calcular() {
    let etanol = formFlex.inputEtanol.value
    console.log(etanol) // Test

    let gasolina = formFlex.inputGasolina.value
    console.log(gasolina) // Test

    // Lógica principal: se o valor do etanol custar até 70% do valor do litro da gasolina vale mais a pena abastecer com Etanol

    if (etanol < 0.7 * gasolina) {
        console.log("Abasteça com Etanol")
        // a linha abaxio identifica o tag e muda a proporcionalidade src
        document.getElementById('status').src = "./img/etanol.png"

    }


    else {
        console.log("Abasteça com Gasolina")
        document.getElementById('status').src = "./img/gasolina.png"
    }
}

function Limpar() {
    document.getElementById('status').src = "./img/neutro.png"
}



