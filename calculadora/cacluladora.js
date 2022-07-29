'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');
const atualizarDisplay = (texto) => {
    display.textContent += texto;
}
const inserirNumero = (evento) => atualizarDisplay(evento.target.texrContent);

numeros.forEach (numero => 
    numero.addEventListener("click",inserirNumero)
);
operadores.forEach (operador => 
    operador.addEventListener("click",selecionarOperador)
);