Boas práticas na escrita do código e variáveis

- Em inglês
  -Sem espaço ou acentuações especiais no nome da variável
  -Não inicie com número
- camelCase
- ponto e viírgula servem para finalizar uma expressão, e é facultativo

[] Tipos de dado: Number
[] Operador matemático
[] Manipulação de dados
(colocar um tipo de variável dentro do tipo que ela é por exemplo: somar(number))
[] type conversion (type casting)
()Number é uma função construtora que transforma um dado em número
()String é uma função construtora que transforma um dado em string(sequência de caracteres)
[] Ordem de precedência de operadores
[] Group operator

anotações de aula

alert('Iremos somar 2 números!!!!')
let numberOne = prompt('Digite um número: ')
let numberTwo = prompt('Digite outro número: ')
//manipulando o tipo de variável dentro do tipo de dado
alert('Resultado final é: ' + (Number(numberOne) + Number(numberTwo)))

//outro jeito

alert('Iremos somar 2 números!!!!')
let numberOne = prompt('Digite um número: ')
let numberTwo = prompt('Digite outro número: ')
//alocando a lógica dentro de outra variável assim se torna um código mais clean
let result = Number(numberOne) + Number(numberTwo)

alert('Resultado final: ' + result)
