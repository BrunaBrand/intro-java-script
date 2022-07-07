/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

//criando objetos no js, ele não pode ficar solto assim na pag, precisa de uma variável para pertencer
//essa maneira de criar se chama de object literal, colocando na mão cada uma das propriedades do objeto smartp

const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180
  }
]

//criação da função
// function printPatientIMC(patients) {
//   return `
//   Paciente ${patients.name} possui o IMC de ${(
//     patients.weight /
//     (patients.height / 100) ** 2
//   ).toFixed(2)}
// `
// }

//executando a função

//outra maneira
function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2)
}

function printPatientIMC(patients) {
  return `
  Paciente ${patients.name} possui o IMC de ${IMC(
    patients.weight,
    patients.height
  )}
    `
}
//o for é usado nas duas maneiras para continuar executando o programa.
for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}
