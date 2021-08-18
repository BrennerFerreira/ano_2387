function finalizarFase1Jane() {
  avancarParaFase2(
    mostrarPrompt(
      "Ligar para o colega da sua amiga",
      "Se manter a seus princípios"
    ),
    textoJaneComMarkFase2,
    textoJaneComDianaFase2
  );
}

function textoJaneFase1() {
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

  escreverTexto(texto, finalizarFase1Jane);
}
