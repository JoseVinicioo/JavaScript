const numberOne = Number(prompt('Primeiro número: '))
const numberTwo = Number(prompt('Segundo número: '))

alert(`A soma dos dois números é ${numberOne + numberTwo}`)
alert(`A subtração dos dois números é ${numberOne - numberTwo}`)
alert(`A multiplicação dos dois números é ${numberOne * numberTwo}`)
alert(`A divisão  dos dois números é ${numberOne / numberTwo}`)
alert(`A resto da divisão  dos dois números é ${numberOne % numberTwo}`)

const sumParity = ((numberOne + numberTwo) % 2 === 0) ? "par" : "ímpar";
alert(`A soma dos dois números é ${sumParity}`);

const numberComparison = (numberOne === numberTwo) ? "iguais" : "diferentes";
alert(`Os números inseridos são ${numberComparison}`);
10