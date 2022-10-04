function checaCaps(event){
    // const inputTexto = document.getElementById("textoInput")
    const paragrafo = document.getElementById("mensagem")
    if(event.shiftKey){
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    }else{
        paragrafo.innerHTML = ""
    }
}