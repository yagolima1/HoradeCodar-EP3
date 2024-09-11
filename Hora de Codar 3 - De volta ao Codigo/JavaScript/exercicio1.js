// 1) Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário.


function numero2() {
    var num2 = parseFloat(prompt("Insira o 2° Número: "));


    var divisao;

    if (num2 > 0) {

        divisao = num1 / num2
        alert("O resultado de sua divisão é: " + divisao.toFixed(2)) // coloquei um toFixed caso ocorra uma divisão que não tem um número inteiro como resultado
    }

    else {

        alert("Você inseriu 0 ou um número negativo! Por favor insira um número maior que 0.")

        numero2();
    }
}

var num1 = parseFloat(prompt("Insira o 1° Número: "));

numero2();