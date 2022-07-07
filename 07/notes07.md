# Aperfeiçoando a resolução de problemas

Perguntas a serem feitas:

1. Quais os dados de entrada que terei? (inputs)
2. Quais as variáveis?
3. Qual o caminho ideal? (fluxo ideal ou alternativos)
4. Quais os caminhos alternativos? (fluxo alternativo)
5. Quais os tratamentos de dados preciso fazer? (estrutura de dados, funções)
6. Qual é a saída, ou quais os dados de saída, esperada (outputs)

# Ferramenta da linguagem que abordaremos

[]loop while
[] arrays e funções de arrays (.push por exemplo)
[]condicional switch e if/else
[]template literals (strings)

`essa opção pode fazer com que o código possa quebrar linha`

//eliminando o uso da variável de controle com o push, basicamente ele coloca os dados dentro de cada espaço de memória na variável.
if (option == 1) {
let item = prompt('Digite o nome do item')
itens.push(item)
} else if (option == 2) {
if (itens.length == 0) {
alert('Não existem itens cadastrados')
} else {
alert(itens)
}
} else {
alert('Goodbye')
}

console.log(option, itens)
}
