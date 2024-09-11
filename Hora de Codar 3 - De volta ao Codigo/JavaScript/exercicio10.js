// 10) Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

var n = parseInt(prompt("Insira um número: "))

for (var i = 1; i <= n; i++) {

    document.write("A Tabuada do " + i + "<p>");

    for (var m = 1; m <= 10; m++) {


        document.write(i + " x " + m + " = " + (i * m) + "<p>")
    }

}