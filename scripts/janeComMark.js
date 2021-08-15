function avancarParaFimJaneComMark(number) {
  if (number == 1) {
    document.write(`
          <p class="resposta">Eu só quero ter meu filho. Continue com o plano.</p>
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
          <p class="resposta">Eu não posso viver a minha vida sabendo que tirei a
          de alguém para isso!</p>
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

function escolhaJaneComMarkFase3() {
  var opcaoEscolhidaJaneComMarkFase3 = prompt(`
      Qual será a sua escolha?
      1 - Seguir com o plano
      2 - Desistir do plano
    `);

  while (true) {
    if (
      opcaoEscolhidaJaneComMarkFase3 == 1 ||
      opcaoEscolhidaJaneComMarkFase3 == 2
    ) {
      break;
    }
    opcaoEscolhidaJaneComMarkFase3 = prompt(`
        Digite apenas o número da sua opção.
        1 - Seguir com o plano
        2 - Desistir do plano
      `);
  }
  return opcaoEscolhidaJaneComMarkFase3;
}

function finalizarJaneComMarkFase3() {
  avancarParaFimJaneComMark(escolhaJaneComMarkFase3());
}

function textoJaneComMarkFase3() {
  var texto = `
      <p class="resposta">Tudo bem. Mesmo que ele não viva muitos anos, ele terá
      uma vida com todos os direitos.</p>
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
      `;

  document.write(texto);

  return setTimeout(finalizarJaneComMarkFase3, texto.length * 20);
}

function avancarParaJaneComMarkFase3(number) {
  if (number == 1) {
    textoJaneComMarkFase3();
  } else if (number == 2) {
    document.write(`
          <p class="resposta">Não consigo! Meu filho não vai nascer para viver apenas 100 anos.</p>
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

function escolhaJaneComMarkFase2() {
  var opcaoEscolhidaJaneComMarkFase2 = prompt(`
      Qual será a sua escolha?
      1 - Aceitar a proposta de Mark
      2 - Recusar a proposta de Mark
    `);

  while (true) {
    if (
      opcaoEscolhidaJaneComMarkFase2 == 1 ||
      opcaoEscolhidaJaneComMarkFase2 == 2
    ) {
      break;
    }
    opcaoEscolhidaJaneComMarkFase2 = prompt(`
        Digite apenas o número da sua opção.
        1 - Aceitar a proposta de Mark
        2 - Recusar a proposta de Mark
      `);
  }
  return opcaoEscolhidaJaneComMarkFase2;
}

function finalizarJaneComMarkFase2() {
  avancarParaJaneComMarkFase3(escolhaJaneComMarkFase2());
}

function textoJaneComMarkFase2() {
  var texto = `
      <p class="resposta">Acho melhor ligar para ele.</p>
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
      `;
  document.write(texto);

  return setTimeout(finalizarJaneComMarkFase2, texto.length * 20);
}
