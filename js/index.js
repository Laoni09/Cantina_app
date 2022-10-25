var valor = 0
var paes = 0
var toddys = 0
var trentos = 0
var cliquespao = 0
var cliquestrento = 0
var cliquestoddy = 0
function subtrairpao(){
    if (paes >= 1){
        paes -= 1
        document.getElementById('pao_de_queijo').innerHTML = ''
    }
    if (valor >= 3.50 && paes >= 1){
        valor -= 3.50
        document.querySelector('.resultado').innerHTML = valor
        document.getElementById('pao_de_queijo').innerHTML = `PÃO DE QUEIJO ---------- ${paes}x`
    }
    if (valor > 3.50 && paes < 1){
        document.getElementById('pao_de_queijo').innerHTML = ''
        if (cliquespao >= 0){
            valor -= 3.50
            cliquespao -= 1
        }
        document.querySelector('.resultado').innerHTML = valor
    }
    if (valor <= 3.50 && paes < 1) {
        valor = 0
        document.querySelector('.resultado').innerHTML = valor
    }
}

function somarpao(){
    valor += 3.50
    document.querySelector('.resultado').innerHTML = valor
    paes += 1
    document.getElementById('pao_de_queijo').innerHTML = ''
    document.getElementById('pao_de_queijo').innerHTML = `PÃO DE QUEIJO ---------- ${paes}x`
    cliquespao += 1
}

function subtrairtoddy(){
    if (toddys >= 1){
        toddys -= 1
    }
    if (valor >= 2.50 && toddys >= 1){
        valor -= 2.50
        document.querySelector('.resultado').innerHTML = valor
        document.getElementById('toddynho').innerHTML = ''
        document.getElementById('toddynho').innerHTML = `TODDYNHO ---------- ${toddys}x`
    }
    if (valor >= 2.50 && toddys < 1){
        document.getElementById('toddynho').innerHTML = ''
        if (cliquestoddy >= 0){
            valor -= 2.50
            cliquestoddy -= 1
        }
        document.querySelector('.resultado').innerHTML = valor
    }
    if (valor < 2.50 && toddys < 1) {
        valor = 0
        document.querySelector('.resultado').innerHTML = valor
    }
}

function somartoddy(){
    valor += 2.50
    document.querySelector('.resultado').innerHTML = valor
    toddys += 1
    document.getElementById('toddynho').innerHTML = ''
    document.getElementById('toddynho').innerHTML = `TODDYNHO ---------- ${toddys}x`
    cliquestoddy += 1
}

function subtrairtrento(){
    if (trentos >= 1){
        trentos -= 1
    }
    if (valor >= 1.50 && trentos >= 1){
        valor -= 1.50
        document.querySelector('.resultado').innerHTML = valor
        document.getElementById('trento').innerHTML = ''
        document.getElementById('trento').innerHTML = `TRENTO ---------- ${trentos}x`
    }
    if (valor >= 1.50 && trentos < 1){
        document.getElementById('trento').innerHTML = ''
        if (cliquestrento >= 0){
            valor -= 1.50
            cliquestrento -= 1
        }
        document.querySelector('.resultado').innerHTML = valor
    }
    if (valor < 1.50 && trentos < 1) {
        valor = 0
        document.querySelector('.resultado').innerHTML = valor
    }
}

function somartrento(){
    valor += 1.50
    document.querySelector('.resultado').innerHTML = valor
    trentos += 1
    document.getElementById('trento').innerHTML = ''
    document.getElementById('trento').innerHTML = `TRENTO ---------- ${trentos}x`
    cliquestrento += 1
}

function reset(){
    valor = 0
    document.querySelector('.resultado').innerHTML = valor
    document.getElementById('trento').innerHTML = ''
    trentos = 0
    cliquestrento = 0
    document.getElementById('toddynho').innerHTML = ''
    toddys = 0
    cliquestoddy = 0
    document.getElementById('pao_de_queijo').innerHTML = ''
    paes = 0
    cliquespao = 0
}