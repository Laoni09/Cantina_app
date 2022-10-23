var valor = 0
var paes = 0
var toddys = 0
var trentos = 0
function subtrairpao(){
    if (paes > 0){
        paes -= 1
    }
    if (valor >= 3.50 && paes > 0){
        valor -= 3.50
        document.querySelector('.resultado').innerHTML = valor
    }if (valor >= 3.50 && paes < 1){
        document.querySelector('.resultado').innerHTML = valor
    }else{
        valor = 0
        document.querySelector('.resultado').innerHTML = valor
    }
    if (paes >= 1) {
        document.getElementById('pao_de_queijo').innerHTML = ''
        document.getElementById('pao_de_queijo').innerHTML = `PÃO DE QUEIJO ---------- ${paes}x`
    }else{
        document.getElementById('pao_de_queijo').innerHTML = ''
        valor -= 3.50
        document.querySelector('.resultado').innerHTML = valor
    }
}

function somarpao(){
    valor += 3.50
    document.querySelector('.resultado').innerHTML = valor
    paes += 1
    document.getElementById('pao_de_queijo').innerHTML = ''
    document.getElementById('pao_de_queijo').innerHTML = `PÃO DE QUEIJO ---------- ${paes}x`
}

function subtrairtoddy(){
    if (toddys > 0){
        toddys -= 1
    }
    if (valor >= 2.50 && toddys > 0){
        valor -= 2.50
        document.querySelector('.resultado').innerHTML = valor
    }if (valor >= 2.50 && toddys < 1){
        document.querySelector('.resultado').innerHTML = valor
    }else{
        valor = 0
        document.querySelector('.resultado').innerHTML = valor
    }
    if (toddys >= 1) {
        document.getElementById('toddynho').innerHTML = ''
        document.getElementById('toddynho').innerHTML = `TODDYNHO ---------- ${toddys}x`
    }else{
        document.getElementById('toddynho').innerHTML = ''
    }
}

function somartoddy(){
    valor += 2.50
    document.querySelector('.resultado').innerHTML = valor
    toddys += 1
    document.getElementById('toddynho').innerHTML = ''
    document.getElementById('toddynho').innerHTML = `TODDYNHO ---------- ${toddys}x`
}

function subtrairtrento(){
    if (trentos > 0){
        trentos -= 1
    }
    if (valor >= 1.50 && trentos > 0){
        valor -= 1.50
        document.querySelector('.resultado').innerHTML = valor
    }if (valor >= 1.50 && trentos < 1){
        document.querySelector('.resultado').innerHTML = valor
    }else{
        valor = 0
        document.querySelector('.resultado').innerHTML = valor
    }
    if (trentos >= 1) {
        document.getElementById('trento').innerHTML = ''
        document.getElementById('trento').innerHTML = `TRENTO ---------- ${trentos}x`
    }else{
        document.getElementById('trento').innerHTML = ''
    }
}

function somartrento(){
    valor += 1.50
    document.querySelector('.resultado').innerHTML = valor
    trentos += 1
    document.getElementById('trento').innerHTML = ''
    document.getElementById('trento').innerHTML = `TRENTO ---------- ${trentos}x`
}

function reset(){
    valor = 0
    document.querySelector('.resultado').innerHTML = valor
    document.getElementById('trento').innerHTML = ''
    trentos = 0
    document.getElementById('toddynho').innerHTML = ''
    toddys = 0
    document.getElementById('pao_de_queijo').innerHTML = ''
    paes = 0
}