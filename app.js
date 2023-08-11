'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')
const forma8 = document.getElementById('forma8')

function mudarCor(){
forma1.classList.toggle('vermelho')
}
function mudarForma(){
forma2.classList.toggle('circulo')
}
function mudarFoto(){
    forma3.classList.toggle('foto')
}
function mudarDirecao(){
    forma4.classList.toggle('girar')
}
function mudarGiro(){
    forma5.classList.toggle('rotacao')
}
function mudarMover(){
    forma6.classList.toggle('mover')
}
function mudarTransparencia(){
    forma7.classList.toggle('sumir')
}
function mudarMovimento(){
    forma8.classList.toggle('mexer')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', mudarFoto)
forma4.addEventListener('click', mudarDirecao)
forma5.addEventListener('click', mudarGiro)
forma6.addEventListener('click', mudarMover)
forma7.addEventListener('click', mudarTransparencia)
forma8.addEventListener('click', mudarMovimento)