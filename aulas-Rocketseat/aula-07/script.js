let list = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Joao",
    age: 15,
    weight: 65,
    height: 175,
  }
]

for(let patient of list){
  alert(`Nome: ${patient.name}
    Idade: ${patient.age}
    Peso: ${patient.weight}
    Altura: ${patient.height}
    `)

}