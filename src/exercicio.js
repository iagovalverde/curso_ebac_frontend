"use strict";
// Utilizando o TypeScript e a tipagem escreva duas funções: uma função de multiplicação que deverá receber como argumentos dois números e retornar a multiplicação deles, e uma função de saudação que deverá receber um nome e retornar a concatenação “Olá “ + nome;
const multiplicaDoisNumeros = (a, b) => a * b;
console.log(multiplicaDoisNumeros(2, 4));
function saudacao(nome) {
    return `Olá, ${nome}.`;
}
console.log(saudacao('Iago'));
