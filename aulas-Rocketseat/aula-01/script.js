/* var nameUser = document.querySelector('#name')
var button = document.querySelector('#enviar')

button.addEventListener('click', function(){
    alert(`Ola ${nameUser.value}`)
    console.log(nameUser)
})
 */

/* let numberOne = Number(prompt("Digite o primeiro número: "))
let numberTwo = Number(prompt("Digite o segundo número: "))
const sum = numberOne +  numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo


alert(`Temos as seguintes operações matematicas:
    soma = ${sum}
    subtração = ${sub}
    multiplicação = ${mult}
    divisão = ${div}
    resto da divisão = ${restDiv}`)
 */

    const student = prompt("Nome do aluno: ")
    let n1 = Number(prompt("Primeira nota: "))
    let n2 = Number(prompt("Segunda nota: "))
    let n3 = Number(prompt("Terceira nota: "))
    let average = (n1+n2+n3)/3
    average = average.toFixed(2)
    
    if (average > 6){
        alert(`Parabéns ${student}! Sua média foi de ${average}`)
    }
    else{
        alert(`${student} estude para sua prova de recuperação!! Sua média foi de: ${average}`)
    }
    
    