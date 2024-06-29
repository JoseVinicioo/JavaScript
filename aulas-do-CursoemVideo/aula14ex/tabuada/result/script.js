function tabuada() {
  var number = Number(document.querySelector("#number").value);
  var resul = document.querySelector("#seltab");
  if (number == 0) {
    alert("Digite um numero");
  } else {
    resul.innerHTML = ''
    for (var i = 1; i <= 10; i++) {
      let item = document.createElement('option')
      item.text = `${number} x ${i} = ${number*i}`
      item.value = `resul${i}`
      resul.appendChild(item)
    }
  }
}
