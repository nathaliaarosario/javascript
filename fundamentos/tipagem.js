/**
* Tuturial de JavaScript
Estudo da Tipagem dinâmica
* @author Nathalia Alves Rosário
*/

// Mostra no console uma mensagem para avisar que estamos falando de "Strings"
console.log("Strings >>>>>>>>>>>>>>>>>>>")

// Cria uma variável chamada "nome" e guarda dentro dela o texto "Nathalia".
// Qualquer texto entre aspas é chamado de STRING.
let nome = "Nathalia"

// Mostra no console o tipo de dado que está dentro da variável "nome".
// Como é um texto, o resultado será "string".
console.log(typeof (nome))


// Mostra no console o valor que está dentro da variável "nome".
// Nesse caso, vai aparecer "Nathalia"
console.log(nome)


// Aqui estamos mostrando no console uma versão alterada da variável "nome".
// O comando replace("Nathalia", "Nath") troca a palavra "Nathalia" por "Nath".
// Ou seja, ele substitui um texto por outro.
console.log(nome.replace("Nathalia", "Nath"))

// Concatenação (união)

// console.log (mostra na tela)
// ele vai escrever o texto "Aluno" e vai adicionar e mostrar tbm a variavel que esta no "nome"
// vai aparecer "Aluno: Nathalia"


// Isso funciona, mas às vezes o + pode confundir o JavaScript.
// O + pode tentar somar em vez de juntar, dependendo do que tiver na variável.
console.log("Aluno: " + nome) //Não usar dessa forma pois da erro 


// `` (Crase tbm usado para concatenar)
console.log(`Professora: ${nome}`) // forma mais segura para concatenar, pois ele adicona e não soma 

console.log("Números >>>>>>>>>>>>>>>>>>>>>")
let peso = 63
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
//.toFixed(2) formatar em 2 casas decimais 
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))

// Exemplo: Cálculo do imc
let imc
imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)

// ATENÇÃO
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3X" - 2)
console.log("3" * 2)
console.log("3" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)


console.log("Booleanos >>>>>>>>>>>>>>>>>>>>>>>>>>>")
let led = false
typeof (led)
console.log("Comparadores especiais")
console.log("2" == 2)
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)

console.log("Problemas no uso do var >>>>>>>>>>>>>>>>>>>>>>")
console.log("Var permite redeclarar uma variável !!!")
var media = 9
console.log(typeof (media))
console.log(media)
var media = 8
console.log(typeof (media))
console.log(media)


// Uso de chaves na linguagem JS
let mediaFinal = 3

console.log(`MÉDIA: ${mediaFinal}`)

if (mediaFinal < 5)
    console.log("REPROVADO")
else
    console.log("APROVADO")
console.log("Emitir Certificado") //Não processado na estrutura


for (let i = 1; i <= 10; i++)
    console.log(i)
console.log("Não processado na estrutura for")

