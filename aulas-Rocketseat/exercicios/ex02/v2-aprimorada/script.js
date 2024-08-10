function calculateMedia(student){
    let media = ((student.firstNote + student.secondNote) / 2).toFixed(2)
    let apresentarMedia = `A média do(a) aluno(a) ${student.name} é ${media}\n`
    if(media >= 7){
        alert(apresentarMedia + `Parabéns ${student.name} voce foi aprovado(a) no concurso!`)
    }else{
        alert(apresentarMedia + `Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}

let students = []

while(true){
    let student = {}
    student.name = prompt("Nome: ")
    student.firstNote = Number(prompt("Primeira nota: "))
    student.secondNote = Number(prompt("Segunda nota: "))
    students.push(student);
    let option =  prompt('Quer adicionar um novo aluno? ').toUpperCase()
    if (option == 'N')
        break
}
for (let Unicstudent of students) {
    calculateMedia(Unicstudent) 
}