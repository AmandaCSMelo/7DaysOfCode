
var numeroSecreto = Math.floor(Math.random() * (10 - 0 + 1) + 0); //função Math.random() ela sortei um número aleatório
let chute = '';
var acertou = false;

for(let i = 0; i < 3; i++ ){
  chute = prompt("Ajude o Rick a encontrar o número certo para salvar o Morty! Temos  3 tentativas! Digite entre 0 à 10: ");
  if(chute == numeroSecreto){
    alert(`Missão concluída com sucesso!`);
    acertou = true;
    break;
  }
alert ('Errou! Já imaginei que essa missão não era para você, Terráqueo!')
}
if(!acertou){
  alert(`Eu disse que esse Terráqueo não era capaz! ADEUS MORTY!!!! CABUMMMM... O número secreto era: ${numeroSecreto}!`);
}
