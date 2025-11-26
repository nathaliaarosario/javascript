/**
 * JoKenPOW
 * @author Nathalia Alves Rosário
 */

function jogar() {

    // Validação
    if (document.getElementById('pedra').checked === false && document.getElementById('papel').checked === false && document.getElementById('tesoura').checked === false) {
        alert("Selecione uma opção")
    }
    else {
        // lógica principal
        let sorteio = Math.floor(Math.random() * 3)
        switch (sorteio) {
            case 0:
                document.getElementById('pc').src = "./img/pcpedra.png"
                break
            case 1:
                document.getElementById('pc').src = "./img/pcpapel.png"
                break
            case 2:
                document.getElementById('pc').src = "./img/pctesoura.png"
                break
        }
        // verificar o vencedor ou declarar empate
        if ((document.getElementById('pedra').checked === true && sorteio === 0) || (document.getElementById('papel').checked === true && sorteio === 1) || (document.getElementById('tesoura').checked === true && sorteio === 2)) {
            document.getElementById('resultado').innerText = "EMPATE"
        }
        else if ((document.getElementById('pedra').checked === true && sorteio === 2) || (document.getElementById('papel').checked === true && sorteio === 0) || (document.getElementById('tesoura').checked === true && sorteio === 1)) {
            document.getElementById('resultado').innerText = "JOGADOR VENCEU"
        }
        else {
            document.getElementById('resultado').innerText = "COMPUTADOR VENCEU"
        }



    }
}

function resetar() {
    document.getElementById('pc').src = "./img/pc.png"
    // .innerText (vai inserir um texto)
    // .innerHTML (Vai inserir uma tag html -> h2 exemplo)
    document.getElementById('resultado').innerText = ""
}


