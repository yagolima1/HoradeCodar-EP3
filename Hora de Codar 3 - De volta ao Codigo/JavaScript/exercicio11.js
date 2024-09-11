// 11) Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

var DentrodoIntervalo = 0;
var ForadoIntervalo = 0;


function valores(valor) {

    var numero = parseInt(prompt("Insira seu " + valor + "° Valor"))


    if (numero >= 24 && numero <= 42) {

        DentrodoIntervalo++
        
    }

    else {

        ForadoIntervalo++

    }

}

var num1 = valores(1);
var num2 = valores(2);
var num3 = valores(3);
var num4 = valores(4);
var num5 = valores(5);
var num6 = valores(6);
var num7 = valores(7);
var num8 = valores(8);
var num9 = valores(9);
var num10 = valores(10);


alert(DentrodoIntervalo + " números estão no intervalo")

alert(ForadoIntervalo + " números estão fora do intervalo")