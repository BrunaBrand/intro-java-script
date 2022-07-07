/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

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
//quando se coloca um ponto, ele abre várias opções de métodos e propriedades
let patientsName = []

//para 1 paciente de pacientes faça um bloco de ação

for (let patient of patients) {
  patientsName.push(patient.name)
}

alert(patientsName)
