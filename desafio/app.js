/**
 * Jogo da memória
 * Exemplo de uso de array para otimizar o código
 * @author Nathalia Alves Rosário  
 */

function sortear() {
    // Criando vetores(array)
    let frutas = ["🍓","🍎","🍇"]
    

    
    let fruta = frutas[Math.floor(Math.random() * 3)]
    


    // Renderização do canto centro da carta 
    document.getElementById('centroCarta').innerHTML = `<div>${fruta}</div>`
}

