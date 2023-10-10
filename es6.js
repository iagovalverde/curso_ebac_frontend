// array de objetos com atributos: nome e nota, de alunos
const alunos = [
    {nome: 'Pedro', nota: 4},
    {nome: 'Ana', nota: 7},
    {nome: 'José', nota: 6},
    {nome: 'Juan', nota: 5},
    {nome: 'Gabriela', nota: 9},
    {nome: 'Lucas', nota: 0},
    {nome: 'Matheus', nota: 3},
    {nome: 'Rafaela', nota: 6}
]

// constante que recebe o método filter realizado no array alunos, retornando apenas os alunos com nota maior ou igual a 6

// const alunosComNotaMaiorQue6 = alunos.filter(aluno => {
//     if(aluno.nota >= 6) {
//         return aluno.nome;
//     }
// })

const alunosComNotaMaiorQue6 = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosComNotaMaiorQue6);

