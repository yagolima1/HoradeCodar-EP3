// 6) Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

var aprovados = 0;

function notas() {
    var nota1 = parseFloat(prompt("Insira a 1° Nota do Aluno: "));
    var nota2 = parseFloat(prompt("Agora insira a 2° Nota do Aluno: "));

    var media = (nota1 + nota2) / 2;

    if (media >= 9.5) {
        alert("Aluno Aprovado!");
        aprovados++;
    } else {
        alert("Aluno Reprovado!");
    }
}

function rep() {
    notas();

    var continuar = prompt("Gostaria de calcular a média de outro aluno? Sim/Não").toLowerCase(); // a lowercase vai transformar a string em letras minúsculas

    if (continuar === "sim" || continuar === "s") {
        rep(); 
    } else {
        alert("O número de alunos aprovados foi " + aprovados);
    }
}

rep(); 