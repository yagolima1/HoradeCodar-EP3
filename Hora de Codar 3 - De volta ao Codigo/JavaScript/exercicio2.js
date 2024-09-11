// 2) Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO".

var inicio = 30;
var final = 0;

 while (inicio > final){

     document.write ("<p> Restam " + inicio + " segundos para a EXPLOSÃO!!");
     inicio --;
 }

 document.write ("<h1> KABUM!!! </h1>")