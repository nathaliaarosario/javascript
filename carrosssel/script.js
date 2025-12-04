/**
 * Estudo de Carrossel simples de imagens
 * @author Nathalia Alves Rosário
 */

//                         [0]          [1]          [2]
let slidesCarrossel = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //3000ms = 3s (efeito)
let indice = 0 //apoio a lógica

show() //executa uma vez

function show() {

    // Uso do jS para adicionar a classe fadeout no css
    // .className -> vai adicionar a classe fadeout que criamos no css aqui no JS
    document.getElementById('slides').className += 'fadeout'
    setTimeout(() => {
        // troca a imagem do slide
        document.getElementById('slides').src = (`./img/${slidesCarrossel[indice]}`)

        // renover a classe fadeout => .className = '' (vazio)
        document.getElementById('slides').className = ''

    }, 1000) //executa a cada 1s (em tempo real "a imagem fica 1 segundo parada")

    // soma mais um acada execução
    indice++

    // validação para retornar ao inicio
    if (indice === slidesCarrossel.length) {
        // retrona a imagem inicial
        indice = 0
    }

    // execulta a função a cada 3 segundos(intervalo)
    setTimeout(show, intervalo)



}