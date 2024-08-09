let list = new Array();
let option;
while (option !== 3) {
  option = Number(
    prompt(`Olá usuário! Digite o número da opção desejada
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do prgrama.`)
  );

  switch (option) {
    case 1:
      let item = prompt(`Qual item deseja adicionar a lista? `);
      list.push(item);
      break;
    case 2:
        if (list.length == 0) {
            alert("Não existem itens cadastrados!");
          } else {
            let ListaAtual = "Sua lista atual é \n";
            for (let i = 0; i < list.length; i++) {
              ListaAtual += "- " + list[i] + "\n";
            }
            alert(ListaAtual);
          }
      break;
    case 3:
        alert("Tchau")
        break;
    default:
        alert("Digite um valor valido")
  }
}
