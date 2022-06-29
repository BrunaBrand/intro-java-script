/* 

Capturar 2 num
e fazer as operações matematicas de soma,
subtração, multiplicação, divisão e resto da divisão

e para cada operação, mostrar um alerta com o resultado

*/
let firstNumber = prompt('Digite o primeiro número: ')
let secondNumber = prompt('Digite o segundo número: ')

//convetendo string em number, acredito que seja uma maneira de já declarar que tipo de dado essa variável é pois ela vai ser repetida outras vezes durante o código
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

//basicamente é um tipo de declaração de variável que se torna constante
const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
