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
 
 let nomeDosAtletas = 0 //novas variaves
 let notasDosAtletas = 0
 let mediaDosAtletas = 0

 for (let i = 0; i < atletas.length; i++){
   nomeDosAtletas = atletas.map(function(nome){
  return nome.nome // retornar o nome primeiro
 })
 notasDosAtletas = atletas.map(function(notas){
   let total = notas.notas
   total.sort(function(a, b){
     return a - b
   })
   return total // retornar todas as notas
 })
}
for(let i = 0; i < atletas.length; i++){
  switch(i){
    case i:
      console.log(`Atleta: ${nomeDosAtletas[i]}`)// interpolação
      console.log(`Notas obtidas: ${notasDosAtletas[i]}`)
      let notasValidas = notasDosAtletas[i].slice(1, notasDosAtletas[i].length - 1)
      let soma = notasValidas.reduce(function(total, atual)
      {
        return (total + atual)
      })
      let media = soma / notasValidas.length
      console.log(`media valida: ${media}`)
      break;
  }
}
 