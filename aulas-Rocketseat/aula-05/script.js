let result = Number(prompt("Advinhe o número que estou pensando entre 0 e 10 :D"))
const randomNumber = Math.round(Math.random() * 10)
let count = 1

while(result != randomNumber){
    result = prompt("Erro, tente novamente!")
    count++
}
alert(`Parabens! O numero que eu pensei foi ${randomNumber} e voce advinhou o numero em ${count} ` + (count == 1 ? "tentativa" : "tentativas"))