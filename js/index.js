var valor = 0
var produtos = new Array()
function subtrairpao(){
    valor -= 3.50
    document.querySelector('.resultado').innerHTML = valor
    document.querySelector('.nota').innerHTML -= 'Pão de queijo------------------------R$3,50'
}

function somarpao(){
    valor += 3.50
    document.querySelector('.resultado').innerHTML = valor
    produtos.splice(1, 0, 'Pão de queijo------------------------R$3,50')
    document.querySelector('.nota').innerHTML += produtos
}

function subtrairtoddy(){
    valor -= 2.50
    document.querySelector('.resultado').innerHTML = valor
    document.querySelector('.nota').innerHTML -= 'Toddynho------------------------R$2,50'
}

function somartoddy(){
    valor += 2.50
    document.querySelector('.resultado').innerHTML = valor
    document.querySelector('.nota').innerHTML += 'Toddynho------------------------R$2,50'
}

function subtrairtrento(){
    valor -= 1.50
    document.querySelector('.resultado').innerHTML = valor
    document.querySelector('.nota').innerHTML -= 'Trento------------------------R$1,50'
}

function somartrento(){
    valor += 1.50
    document.querySelector('.resultado').innerHTML = valor
    document.querySelector('.nota').innerHTML += 'Trento------------------------R$1,50'
}

function reset(){
    valor = 0
    document.querySelector('.resultado').innerHTML = valor
    document.querySelector('.nota').innerHTML += ''
}