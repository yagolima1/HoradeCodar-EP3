 // 5) Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.


 var num1 = parseInt(prompt("Insira o 1° Número: "));
 var num2 = parseInt(prompt("Insira o 2° Número: "));

 var soma = 0;
 var total_de_num = 0;

 for (var i = num1; i <= num2; i++) {

     soma = soma + i // vai somar todos os números entre o primeiro e o segundo número, informados pelo usuário. Onde i é o número 1
     total_de_num++ // vai contar todos os números entre o número 1 e 2, inclusive eles

 }

 var calculo = soma / total_de_num // cálculo da média, da adição de todos os números dividido pelo total deles

 alert("A média é: " + calculo);