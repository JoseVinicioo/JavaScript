function tabuada() {
  var number = Number(document.querySelector("#number").value);
  var resul = document.querySelector("#tabuada");
  if (number == 0) {
    alert("Digite um numero");
  } else {
    resul.innerHTML = ''
    for (var i = 1; i <= 10; i++) {
      resul.innerHTML += `${number} x ${i} = ${number*i} <br>`
      resul.style.height = '250px'
  }

}
}
