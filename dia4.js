document.getElementById("valor").focus;
var numeroSecreto = parseInt(Math.random() * 11); //função Math.random() ela sortei um número aleatório
console.log(numeroSecreto);
var tentativas = 0;

function Chutar() {
  if (tentativas < 3) {
    var chute = parseInt(document.getElementById("valor").value); //quando queremos pegar somente o valor do input
    var elementoResultado = document.getElementById("resultado");
    var palpiteUsuario = document.getElementById("palpites");

    if (chute == numeroSecreto) {
      elementoResultado.innerHTML = "Missão concluída com sucesso!";
    } else {
      if (chute < numeroSecreto || chute > numeroSecreto) {
        document.getElementById("resultado").innerHTML =
          "Errou! Já imaginei que essa missão não era para você, Terráqueo! Resta(m) " +
          (2 - tentativas) +
          " tentativa(s)!";
      }
      if (tentativas == 2) {
        tentativa = 0;
        document.getElementById("resultado").innerHTML =
          "Eu disse que esse Terráqueo não era capaz! ADEUS MORTY!!!! CABUMMMM... O código secreto era: " +
          numeroSecreto;
        return 0;
      }
      tentativas++;
    }
    if (chute > 10 || chute < 0) {
      elementoResultado.innerHTML =
        "Terráqueo, você não leu a mensagem? Digite de 0 a 10! " +
        "N° digitado:  " +
        chute;
    }
  }
}
