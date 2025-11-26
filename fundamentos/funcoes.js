/**
 * 
 * Estudos das funções 
 * @author Nathalia Alves Rosário
 * 
 */

// Função SIMPLES>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function hello(){
    console.log("Hello function")
}

console.log(typeof(hello))
hello()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Função anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// para criar uma função anônima pode usar o "const" ou "let"
// a vantagem de criar funções dessa forma é a armazenar o 
// resultado da execução da função

const hello2 = function (){
    console.log("Hello função anônima")
}

console.log(typeof(hello2))
hello2()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Simplificação da função anônima (arrow function)>>>>>>>>>>>
// só da para fazer essa simplificação na função anônima
// *function () {}*  é a mesma coisa que:  *() => {}*

const hello3 = () => {
    console.log("Hello função anônima simplificada")
}

console.log(typeof(hello3))
hello3()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// simplificação 2 da função anônima>>>>>>>>>>>>>>>>>>>>>>>>>>
// neste caso só uma linha de código é processada
// simplificação: ( _ no lugar dos parenteses) e omissão de chaves
const hello4 =_=> console.log("Hello função anônima simplificada 2")

console.log(typeof(hello4))
hello4()
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// Função com parâmetros (receber valores, variáveis...) e 
// retorna um resultado
// Essa função pega dois números e soma eles
function somar (num1, num2){
    // Ela mostra a soma na tela
    return console.log(num1 + num2)
}

// Aqui eu tô perguntando: "Que tipo de coisa é 'somar'?" 
// E ele responde: é uma função!
console.log(typeof(somar))
// Aqui eu chamo a função somar e peço pra somar 2 + 2
somar(2, 2)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// funçoes anônimas com parâmetros e retorno simplificada>>>>>
// const ultilizado pra formar função
const somarA = (num1, num2) => {
     return console.log(num1 + num2)
}

console.log(typeof(somarA))
somarA(3, 4)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// funçoes anônimas com parâmetros e retorno simplificada 2>>>>>>
// Neste caso omitimos chaves e o retorno é implicito
// CUIDADO!!! Não é uma função simplesa dica são os parâmetros
const somarAS = (num1, num2) => console.log(num1 + num2)
     

console.log(typeof(somarAS))
somarAS(5, 10)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
