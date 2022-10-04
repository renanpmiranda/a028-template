function insereItem(event){
    const itemNovo = document.createElement("li")

    const conteudoInput = document.getElementById("meu-input").value

    const conteudoItemNovo = document.createTextNode(conteudoInput)

    itemNovo.appendChild(conteudoItemNovo)

    const elementoReferencia = document.getElementById("lista")
    
    if(event){
        elementoReferencia.insertAdjacentElement("beforeend", itemNovo)
    }
}