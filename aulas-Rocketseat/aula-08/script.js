function CalcIMC(weight, height){
  return (weight / (height ** 2)).toFixed(2)
}
function printIMC(patient){
  return `Paciente ${patient.name} possui o IMC de: ${CalcIMC(patient.weight, patient.height)}`
}
let list = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 1.90,
  },
  {
    name: "Joao",
    age: 15,
    weight: 65,
    height: 1.75,
  }
]

for(let patient of list){
  let IMCmessage = printIMC(patient)
  alert(IMCmessage)
}