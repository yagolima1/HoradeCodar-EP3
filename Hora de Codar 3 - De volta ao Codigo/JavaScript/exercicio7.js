 // 7) Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 



 function NotaValida(numero_da_nota) {

    var nota;

    do { // a variavel nota vai ser executada pelo menos uma vez, e irá continuar caso o while seja true, oque irá fazer o usuário digitar novamente até ser uma nota válida

        nota = parseFloat(prompt("Insira sua " + numero_da_nota + "° Nota: "));

        if (nota < 0 || nota > 10) {
            alert("Você inseriu uma nota inválida! Por favor digite uma nota de 0 a 10");
        }
    }

    while (nota < 0 || nota > 10);

    return nota;

}

var nota1 = NotaValida(1);
var nota2 = NotaValida(2);
var nota3 = NotaValida(3);
var nota4 = NotaValida(4);
var nota5 = NotaValida(5);
var nota6 = NotaValida(6);

var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6

alert("A média deste aluno é: " + media.toFixed(2));