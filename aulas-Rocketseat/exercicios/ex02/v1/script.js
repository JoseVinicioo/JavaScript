let students = [
    {
        name: "João",
        firstNote: 8.5,
        secondNote: 10.0
    },
    {
        name: "Juliana",
        firstNote: 5.0,
        secondNote: 6.0
    },
    {
        name: "Pedro",
        firstNote: 9.5,
        secondNote: 6.0
    }
]
function calculateMedia(student){
    let media = (student.firstNote + student.secondNote) / 2
    let apresentarMedia = `A média do(a) aluno(a) ${student.name} é ${media}\n`
    if(media >= 7){
        alert(apresentarMedia + `Parabéns ${student.name} voce foi aprovado(a) no concurso!`)
    }else{
        alert(apresentarMedia + `Não foi dessa vez, ${student.name}! Tente novamente!`)
    }
}
for (let student of students) {
    calculateMedia(student)
}