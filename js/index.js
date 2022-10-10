var valor = 0
var produtos = new Array()
function subtrairpao(){
    valor -= 3.50
    document.querySelector('.resultado').innerHTML = valor
    for (let k = 0; k < produtos.length; k++) {
        if  (produtos[k].startsWith('Pão')) {
            document.querySelector('.nota').innerHTML = produtos.splice(k, 1)
        }
    }
}

function somarpao(){
    valor += 3.50
    document.querySelector('.resultado').innerHTML = valor
    produtos.push('Pão de queijo------------------------R$3,50')
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