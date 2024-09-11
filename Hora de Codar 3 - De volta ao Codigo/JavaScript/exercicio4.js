// 4) Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).

var soma = 0;
var total_de_num = 0;


for (var i = 15; i <= 100; i++){

    soma = soma + i; // vai somar todos os números de 15 até 100
    total_de_num++; // vai contar os números de 15 até 100
}

document.write("A média aritmética entre os numeros inteiros de 15 a 100 é: " + soma / total_de_num);