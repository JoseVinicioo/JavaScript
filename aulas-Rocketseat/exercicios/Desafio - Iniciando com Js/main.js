/* Questão 01 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */

alert("Hello World!") 


/* Questão 02 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas. */

const numberOne2 = 20
const numberTwo2 = 65
alert(`O resultado da soma entre ${numberOne2} e ${numberTwo2} é: ${numberOne2 + numberTwo2}`) 


/* Questão 03 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/

let testNumber = 15;
if (typeof testNumber == 'number'){
    alert("É um número")
}else{
    alert("Não é um número")
} 


/* Questão 04 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */

let testString = "Eu amo programar"
if (typeof testString == 'string'){
    alert("É uma string")
}else{
    alert("Não é uma string")
} 


/* Questão 05 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */

let testBoolean = false
if (typeof testBoolean == 'boolean'){
    alert("É um booleano")
}else{
    alert("Não é um booleano")
} 


/* Questão 06 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.*/

const numberOne6 = 70
const numberTwo6 = 43
alert(`O resultado da subtração entre ${numberOne6} e ${numberTwo6} é: ${numberOne6 - numberTwo6}`)  


/* Questão 07 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. */

const numberOne7 = 10
const numberTwo7 = 6
alert(`O resultado da multiplicação entre ${numberOne7} e ${numberTwo7} é: ${numberOne7 * numberTwo7}`) 


/* Questão 08 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. */

const numberOne8 = 50
const numberTwo8 = 3
alert(`O resultado da divisão entre ${numberOne8} e ${numberTwo8} é: ${(numberOne8 / numberTwo8).toFixed(2)}`) 


/* Questão 09 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */

const testePar = 4
if(testePar % 2 == 0){
    alert(`${testePar} É um número par`)
}else{
    alert(`${testePar} Não é um número par`)
}


/* Questão 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */

const testeImpar = 7
if(testeImpar % 2 == 1){
    alert(`${testeImpar} É um número ímpar`)
}else{
    alert(`${testeImpar} Não é um número ímpar`)
} 
