 // 8) Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

 var n = parseInt(prompt("Insira um número: "))

 if (n > 0){

 for (var i = 1; i <= n ; i++){

     document.write("<p> Os números inteiros entre 1 e " + n + " são: " + i)
     }
 }

 else {

     alert("Seu número precisa ser maior que 0!")

 }