function avancarParaFimMark(number) {
  if (number == 1) {
    document.write(`
        <p>
        Mark pede para que você espere no carro. Os minutos se passam, você
        fica mais angustiada e teme que algo tenha dado errado. Após mais de
        uma hora, ele aparece. Em suas mãos, ele traz alguns documentos. Ele
        te leva para casa e te diz que, amanhã, enviará toda a papelada para
        assegurar o registro de seu filho.
        </p>
        <p>
        Você ainda está nervosa, mas, está aliviada que seu filho poderá ter
        uma vida normal, mesmo que limitada a apenas 100 anos.
        </p>
        `);
  } else if (number == 2) {
    document.write(`
        <p>
        Você não conseguiria viver com este peso na consciência. Você recusa a
        proposta de Mark e vai ter seu filho seguindo seus princípios, mesmo
        que ele nunca seja registrado e tenha uma vida normal.
        </p>
        `);
  } else {
    window.location = "/pages/game-over.html";
  }

  document.write(`
        <button onclick="reiniciar()">Jogar novamente</button>
        `);
}

function escolhaDaFase3Mark() {
  var opcaoEscolhidaFase3Mark = prompt(`
    Qual será a sua escolha?
    1 - Seguir com o plano
    2 - Desistir do plano
  `);

  while (true) {
    if (opcaoEscolhidaFase3Mark == 1 || opcaoEscolhidaFase3Mark == 2) {
      break;
    }
    opcaoEscolhidaFase3Mark = prompt(`
      Digite apenas o número da sua opção.
      1 - Seguir com o plano
      2 - Desistir do plano
    `);
  }
  return opcaoEscolhidaFase3Mark;
}

function finalizarFase3Mark() {
  avancarParaFimMark(escolhaDaFase3Mark());
}

function textoJaneFase3Mark() {
  document.write(`
    <p>
    Mesmo que isso limite a sua vida e de seu filho a apenas 100 anos, pelo
    menos, ele terá direito a ser um cidadão. Você aceita a proposta e Mark
    liga o carro e inicia seu trajeto.
    </p>
    <p>
    Chegando à Rua 108, Mark encosta o carro em um canto deserto e fica
    observando a movimentação. Após alguns minutos, o policial diz que já tem
    um alvo em potencial. Ele pede a sua confirmação final para dar
    continuidade ao plano. Você está aflita e nervosa. Será que é assim que
    você dar a vida a seu filho?
    </p>
    <p>
    Vale a pena tirar a vida de uma pessoa para dar uma oportunidade a outra?
    </p>
    `);

  return setTimeout(finalizarFase3Mark, 5000);
}

function avancarParaFase3Mark(number) {
  if (number == 1) {
    textoJaneFase3Mark();
  } else if (number == 2) {
    document.write(`
        <p>
          Infelizmente, seu instinto materno não te permite limitar a vida do
          seu filho. Você recusa a proposta de Mark e vai ter seu filho
          seguindo seus princípios, mesmo que ele nunca seja registrado e tenha
          uma vida normal.
        </p>
        <button onclick="reiniciar()">Jogar novamente</button>
        `);
  } else {
    window.location = "/pages/game-over.html";
  }
}

function escolhaDaFase2Mark() {
  var opcaoEscolhidaFase2Mark = prompt(`
    Qual será a sua escolha?
    1 - Aceitar a proposta de Mark
    2 - Recusar a proposta de Mark
  `);

  while (true) {
    if (opcaoEscolhidaFase2Mark == 1 || opcaoEscolhidaFase2Mark == 2) {
      break;
    }
    opcaoEscolhidaFase2Mark = prompt(`
      Digite apenas o número da sua opção.
      1 - Aceitar a proposta de Mark
      2 - Recusar a proposta de Mark
    `);
  }
  return opcaoEscolhidaFase2Mark;
}

function finalizarFase2Mark() {
  avancarParaFase3Mark(escolhaDaFase2Mark());
}

function textoJaneFase2Mark() {
  document.write(`
    <p>
    Você liga para o colega de sua amiga. Seu nome é Mark. Ela havia te dito que,
    para deixar claro o serviço que quer, bastava dizer que "precisava de uma
    encomenda da Rua 108". Você não entendia o motivo. Afinal, a Rua 108 é onde
    vivem a maioria dos criminosos conhecidos da cidade. Você queria distância
    de lá. Porém, após dizer estas palavras, você sente que a voz de Mark muda.
    Imediatamente, ele pede seu endereço e diz que é para vocẽ se arrumar porque
    ele irá te buscar em sua casa esta noite.
    </p>
    <p>
    Horas depois, Mark aparece em sua casa e pede para você entrar no carro.
    Quando você se senta, ele deixa claro a missão dele. O policial não acha
    justo que as pessoas vivam centenas de anos e não deixem o planeta se renovar
    com novos habitantes. Ele afirma que consegue eliminar uma pessoa e forjar o
    atestado de óbito, se aproveitando de uma brecha na lei que afirma que, caso
    algum parente próximo morra perto da data de nascimento de um bebê, ele pode
    ter prioridade no registro. Porém, há uma contrapartida: para o planeta
    continuar se renovando, os pais precisam se comprometer a não viver mais do
    que 100 anos e também garantir que o mesmo aconteça com o filho.
    </p>
    <p>
    Você fica em choque. Como assim meu filho não poderá viver mais do que 100
    anos? Apesar de ser a opção mais certa de ter seu filho sendo registrado,
    você fica na dúvida: aceitar a proposta de Mark e limitar a vida do seu
    filho ou recusar e ter o risco de seu filho nunca ser registrado?
    </p>
    `);

  return setTimeout(finalizarFase2Mark, 5000);
}

function avancarParaFase2(number) {
  if (number == 1) {
    textoJaneFase2Mark();
  } else if (number == 2) {
    document.write(`
        <h1 class="titulo-destacado">Fase 2 Jane e Diana</h1>
        `);
  } else {
    window.location = "/pages/game-over.html";
  }
}

function escolhaDaFase1() {
  var opcaoEscolhida = prompt(`
    Qual será a sua escolha?
    1 - Ligar para o colega da sua amiga
    2 - Se manter a seus princípios
  `);

  while (true) {
    if (opcaoEscolhida == 1 || opcaoEscolhida == 2) {
      break;
    }
    opcaoEscolhida = prompt(`
      Digite apenas o número da sua opção.
      1 - Ligar para o colega da sua amiga
      2 - Se manter a seus princípios
    `);
  }
  return opcaoEscolhida;
}

function finalizarFase1() {
  avancarParaFase2(escolhaDaFase1());
}

function textoJaneFase1() {
  document.body.innerHTML = "";

  document.write(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./scripts/index.js"></script>
    <script src="./scripts/gravida.js"></script>
    <script src="./scripts/policial.js"></script>
    <script src="./scripts/senhora.js"></script>
    <link rel="stylesheet" href="./styles/gravida.css" />
    <title>Jane</title>
    </head>
    <body>
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
    </body>
  </html>
    `);

  return setTimeout(finalizarFase1, 5000);
}
