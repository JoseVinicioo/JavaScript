function contar() {
  var inicio = Number(document.querySelector("#inicio").value);
  var fim = Number(document.querySelector("#fim").value);
  var passo = Number(document.querySelector("#passo").value);
  var resul = document.querySelector("#resu");
  if (inicio == 0 || fim == 0) {
    alert('[ERRO] Faltam dados!!')
  } else {
    if (passo == 0) {
      alert("Passo invalido!! Considerando passo 1");
      var passo = 1;
    }
    resul.innerHTML = `Contando: <br>`;
    //contagem crescente
    if (fim > inicio) {
      for (var i = inicio; i <= fim; i += passo) {
        resul.innerHTML += `${i} \u{1F449} `;
      }
    //contagem decrescente
    } else {
      for (var i = inicio; i >= fim; i -= passo) {
        resul.innerHTML += `${i} \u{1F449} `;
      }
    }
    resul.innerHTML += `🏁`;
  }
}
