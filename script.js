/* 
  Capture 10 itens para compor a lista de um supermercado.

  Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

//variáveis criadas dentro do laço não são visíveis para os comandos que estão fora

let itens = []
//sempre que quiser acessar um array, comece pela posição 0, 1, 2 ......
//arrays precisam começar da posição 0

/*estrutura de repetição*/ /*variável de controle ja inicia com 0*/ /*enquanto*/ /*pegue o item e adc +1*/
for (let item = 0; item < 10; item++) {
  let itemName = prompt('Digite o item' + (item + 1))
  itens[item] = itemName
}
alert(itens)
