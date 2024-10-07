let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];



atletas.forEach(function(aluno){

  console.log(`Atleta: ${aluno.nome}`);
  console.log(`Notas Obtidas: ${aluno.notas.sort()}`);

  let notasAlunos = aluno.notas.map(function(nota){
    return nota
  })

notasAlunos.sort(function(a, b){
    if (a < b) {
      return -1
    }
  })

  notasAlunos = notasAlunos.slice(1,4)

  let notasAComputar = notasAlunos.reduce(function(notaAntiga, notaAtual){
    return notaAtual + notaAntiga
  })

  let media = notasAComputar / notasAlunos.length


  console.log(`Média Válida: ${media}`);
  console.log('-------');
})