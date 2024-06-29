let numbers = [];
let boxvalues = document.querySelector("#valuesadd");
let resul = document.querySelector("#dados");

function adicionar() {
  let numElement = document.querySelector("#numberentr");
  let num = Number(numElement.value);
  let verif = false;
  for (let pos in numbers) {
    if (numbers[pos] == num) {
      verif = true;
    }
  }
  if (verif == true || num < 1 || num > 100) {
    alert("Numero repetido ou invalido!! [nao sera adicionado]");
  } else {
    numbers.push(num);
    let values = document.createElement("option");
    values.text = `Numero ${num} adicionado!`;
    boxvalues.appendChild(values);
    resul.innerHTML = ''
  }
  numElement.value = ''
  numElement.focus()
}
function analisar() {
  if (numbers.length == 0){
    alert('Adicione valores antes de finalizar!!')
  } else {
  let tam = numbers.length;
  let ma = (me = som = 0);
  resul.innerHTML = `Ao todo temos ${tam} números cadastrados. <br>`;
  for (let pos in numbers) {
    som += numbers[pos];
    if (pos == 0) {
      ma = me = numbers[pos];
    } else {
      if (numbers[pos] > ma) {
        ma = numbers[pos];
      }
      if (numbers[pos] < me) {
        me = numbers[pos];
      }
    }
  }
  resul.innerHTML += `<br>O maior valor informado foi ${ma}.<br>`;
  resul.innerHTML += `<br>O menor valor informado foi ${me}.<br>`;
  resul.innerHTML += `<br>Somando todos os valores, temos ${som}.<br>`;
  resul.innerHTML += `<br>A média dos valores digitados é ${som/tam}<br>`
}
}
