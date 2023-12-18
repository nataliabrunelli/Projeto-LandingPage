var SetaEsquerda = window.document.getElementById("Seta-esquerda")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var SetaDireita = window.document.getElementById("Seta-direita")

function RolarParaDireita(){
    Bruna.style = "display: none"
    Samantha.style = "display: flex"
    SetaDireita.style = "display: none"
    SetaEsquerda.style = "display: flex; margin-top: 120px; margin-right: 15px"
}
function RolarParaEsquerda(){
    Bruna.style = "display: flex"
    Samantha.style = "display: none"
    SetaDireita.style = "display: flex"
    SetaEsquerda.style = "display: none"
}