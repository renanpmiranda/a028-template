const itemNovo = document.createElement("li")
// console.log(itemNovo)

const conteudoItemNovo = document.createTextNode("Item 0")
// console.log(conteudoItemNovo)

itemNovo.appendChild(conteudoItemNovo)
// console.log(itemNovo)

const elementoReferencia = document.getElementById("lista")

elementoReferencia.insertAdjacentElement("afterbegin", itemNovo)

const itemNovo1 = document.createElement("li")
const conteudoItemNovo1 = document.createTextNode("Item 5")

itemNovo1.appendChild(conteudoItemNovo1)

elementoReferencia.insertAdjacentElement("beforeend", itemNovo1)