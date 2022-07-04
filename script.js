/* 
  Capture 10 itens para compor a lista de um supermercado.

  Após capturar os 10 itens, imprima-os, separando por vírgula.
*/

let itemName
//variáveis criadas dentro do laço não são visíveis para os comandos que estão fora
for (let item = 0; item < 10; item++) {
  itemName = prompt('Digite o item' + (item + 1))
}
