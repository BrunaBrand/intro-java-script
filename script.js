/* Solicitar o nome do aluno e as 3 notas do bimestre, calcular a média daquele aluno.

A média positiva deverá ser maior que 6

Se o aluno passou no bimestre, dar os parabéns.

Se o aluno não passou no bimestre, motivar o aluno a dar seu melhor na prova de recuperação.

Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let student = prompt('Qual o nome do(a) aluno(a)? ')
let n1 = prompt('Qual a nota da primeira prova?')
let n2 = prompt('Qual a nota da segunda prova?')
let n3 = prompt('Qual a nota da terceira prova?')

/* Fazer a média
agrupando os valores dentro de parenteses devido a regra de precedência matemática.

(n1 + n2 + n3) / 3

*/

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

//fazendo o comparativo
let result = average > 6

//re-atribuição de valores da variável para boas práticas de programação, fica ótimo para questões de manutenção, arrumando em um lugar só para que todo o código receba a alteração.

average = average.toFixed(2)

if (result) {
  alert('Parabéns, ' + student + '! Sua média foi de: ' + average)
} else {
  alert(
    student +
      ' sinto muito, sua média foi ' +
      average +
      ' estude para sua recuperação! '
  )
}

/*pode se fazer o algoritmo de outra forma também
if (average > 6) { colocando a diferença dentro da propria condicional
  alert('Parabéns, ' + student + '! Sua média foi de: ' + average)
} else {
  alert(
    student +
      ' sinto muito, sua média foi ' +
      average +
      ' estude para sua recuperação! '
  )
}
*/
