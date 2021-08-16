function avancarParaFase2Jane(number) {
  if (number == 1) {
    textoJaneComMarkFase2();
  } else if (number == 2) {
    document.write(`
        <h1 class="titulo-destacado">Fase 2 Jane e Diana</h1>
        `);
  } else {
    window.location = "/pages/game-over.html";
  }
}

function escolhaDaFase1Jane() {
  var opcaoEscolhidaJaneFase1 = prompt(`
    Qual será a sua escolha?
    1 - Ligar para o colega da sua amiga
    2 - Se manter a seus princípios
  `);

  while (true) {
    if (opcaoEscolhidaJaneFase1 == 1 || opcaoEscolhidaJaneFase1 == 2) {
      break;
    }
    opcaoEscolhidaJaneFase1 = prompt(`
      Digite apenas o número da sua opção.
      1 - Ligar para o colega da sua amiga
      2 - Se manter a seus princípios
    `);
  }
  return opcaoEscolhidaJaneFase1;
}

function finalizarFase1Jane() {
  avancarParaFase2Jane(escolhaDaFase1Jane());
}

function textoJaneFase1() {
  document.body.innerHTML = "";
  document.title = "Jane";
  document.getElementsByTagName("html")[0].id = "jane";

  texto = `
    <main>
    <h1>Jane</h1>
    <p>
    Você se encontra sozinha, chorando em seu banheiro, pensando que tem apenas
    mais um mês de gestação e que precisa encontrar um jeito de encontrar uma
    vaga para registrar o seu filho.
    </p>

    <p>
    Desesperada, você lembra de um colega distante de sua amiga Katherine, que,
    segundo ela, adora fazer um trabalho sujo para disponibilizar uma vaga nova
    para quem está nascendo.
    </p>

    <p>
    O problema é que você não é uma pessoa violenta e nunca apoiou quem se
    utilizava desse caminho para ter alguma vantagem pessoal.
    </p>

    <p>
    E, então? O que você faz? Segue seus princípios morais ou coloca seu filho
    que irá nascer à frente de tudo?
    </p>
    </main>
    `;
  document.write(texto);

  return setTimeout(finalizarFase1Jane, texto.length * 20);
}
