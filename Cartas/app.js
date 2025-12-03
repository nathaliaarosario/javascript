/**
 * Sorteio de uma carta
 * Exemplo de uso de array para otimizar o código
 * @author Nathalia Alves Rosário  
 */

function sortear() {
    // Criando vetores(array)
    let nipes = ["♥", "♦", "♣", "♠"]
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // Apoio a lógica
    // console.log(faces[10])
    // console.log(nipes[3])
    //_________________________________

    // Sorteio de uma carta
    // Math.floor - tranforma em números
    // Math.random - sorteia as variaveis
    let nipe = nipes[Math.floor(Math.random() * 4)]
    let face = faces[Math.floor(Math.random() * 13)]

    //_________________________________

    // Apoio a lógica
    // limap a tela do console
    // console.clear()
    // console.log(nipe)
    // console.log(face)
    // _________________________________

    // Determinar a cor com base no naipe sorteado
    let cor
    if (nipe === "♥" || nipe === "♦") {
        cor = "#ff0000"
    } else {
        cor = "#000"
    }

    // Renderização do canto superior esquerdo da carta
    // .innerHTML - Insere uma tag no documento HTML 
    // `` - concatenação
    // *document.getElementById('supEsq').innerHTML* - vai inserir dentro de (supEsq) uma `<div>${face}</div> <div>${nipe}</div>`(que é o sorteio das faces e nipes)
    document.getElementById('supEsq').innerHTML = `<div>${face}</div> <div>${nipe}</div>`
    // Mudar a cor (O JacvaScript consegue manipular o css usando .style)
    document.getElementById('supEsq').style.color = cor

    // Renderização do canto centro da carta 
    // document.getElementById('centroCarta').innerHTML = `<div>${nipe}</div>`

    let cc = document.getElementById
        ('centroCarta')
    if (face === 'J') {
        cc.innerHTML = `<img src="./img/valete.png">`

    } if (face === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png">`

    }
    if (face === 'K') {
        cc.innerHTML = `<img src="./img/rei.png">`

    }
    else {
        cc.innerHTML = nipe
        cc.style.color = cor
    }

    // Renderização do canto inferior da carta 
    document.getElementById('infDir').innerHTML = `<div>${face}</div> <div>${nipe}</div>`

    document.getElementById('infDir').style.color = cor



}

