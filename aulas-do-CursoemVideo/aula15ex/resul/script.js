let numbers = [];
let lista = document.querySelector("#flista");
let resul = document.querySelector("#dados");

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  let numElement = document.querySelector("#fnum");
  let num = Number(numElement.value);
  if (isNumero(num) && !inLista(num, numbers)) {
    numbers.push(num)
    let item = document.createElement("option");
    item.text = `Valor ${num} foi adicionado`;
    lista.appendChild(item);
    resul.innerHTML = ''
  } else {
    alert("Valor inválido ou já encontrado na lista.");
  }
  numElement.value = ' '
  numElement.focus();

}

function analisar(){
  if (numbers.length == 0){
    alert('Adicione valores antes de finalizar!!')
  } else {
    let tot = numbers.length
    resul.innerHTML = `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    let ma = (me = som = 0);
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
    resul.innerHTML += `O maior valor informado foi ${ma}.<br>`;
    resul.innerHTML += `<br>O menor valor informado foi ${me}.<br>`;
    resul.innerHTML += `<br>Somando todos os valores, temos ${som}.<br>`;
    resul.innerHTML += `<br>A média dos valores digitados é ${som/tot}<br>`
}}
