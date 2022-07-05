/* 
** Jogo da advinhaçao **

Apresente a mensagem ao usuário:

"Advinhe o número que estou pensando? Está entre 0 e 10"

Crie uma lógica para gerar um número aleatório e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

Enquanto o usuário não advinhar o número, mostrar a mensagem: "Erro, tente novamente!"

Caso o usuário acerte o número, apresentar a mensagem: "Parabéns! Você advinhou o número em x tentativas"

Substitua o "x" da mensagem, pelo número de tentativas"
*/

let result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10')

//Math conjuto de diversas funcionalidades matemáticas
//ao colocar um ponto no final de cada declaração, ele abre um menu funcionalidades para trabalhar.
//random é uma função
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while (Number(result) != randomNumber) {
  result = prompt('Erro, tente novamente!')
  xAttempts++
}
//interpolação de variável e string | template strings

if (xAttempts > 1) {
  alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativas`)
} else {
  alert(`Parabéns! Você advinhou o número em ${xAttempts} tentativa`)
}
