var valor = 0
function somarpao(){
    valor += 3.50
    document.querySelector('.resultado').innerHTML = valor
}
function somartoddy(){
    valor += 2.50
    document.querySelector('.resultado').innerHTML = valor
}
function somartrento(){
    valor += 1.50
    document.querySelector('.resultado').innerHTML = valor
}
function reset(){
    valor = 0
    document.querySelector('.resultado').innerHTML = valor
}