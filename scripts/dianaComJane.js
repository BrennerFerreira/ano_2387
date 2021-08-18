function avancarParaFimDianaComJane(number) {
  if (number == 1) {
    document.write(`
              <p class="resposta">
              A cabeça dela já está decidida.
              </p>
              <p>
              Você respira fundo e percebe que não tem mais jeito. Nada do que
              você fale iria mudar a mente dela. Você passa os próximos dias
              organizando tudo com Jane. Mas, ela não parece estar ali. Sua
              mente está em outro lugar. É como se ela fizesse tudo no modo
              automático.
              </p>
              <p>
              Os dias se passam e ele está aqui! O filho de Jane nasceu. Uma
              alegria toma conta do corpo dela. Será suficiente para ela mudar
              de ideia? Você a leva para casa e observa enquanto ela cuida do
              filho. Ela parece bem.
              </p>
              <p>
              À noite, você retorna para sua casa e vai tomar um banho para
              relaxar. Quando sai, pega seu telefone e vê uma mensagem de Jane:
              "Obrigada por me dar alegria nesse último mês. Meu filho vai ser
              registrado e você será uma ótima mãe para ele. Adeus."
              </p>
              <p>
              Seu coração dispara. Você sai de casa correndo e vai em direção à
              casa de Jane. Chegando lá, abre a porta e começa a procurar a
              amiga. Chegando ao quarto do bebê, o encontra deitado em seu
              berço dormindo e caída ao lado do berço está Jane. Você não
              chegou a tempo.
              </p>
              <p>
              Apesar da situação, você encontrou sua missão: cuidar e dar
              alegria a uma nova vida que chegou a esse mundo.
              </p>
              `);
  } else if (number == 2) {
    document.write(`
              <p class="resposta">
              Não posso deixar ela fazer isso!
              </p>
              <p>
              Você pede para ela tirar aqueles pensamentos da mente. Que você a
              ajudará em tudo. Não precisa chegar nesse ponto extremo. Jane se
              acalma e, em poucos minutos, exausta, já está dormindo.
              </p>
              <p>
              Os dias se passam e ele está aqui! O filho de Jane nasceu. Toda
              aquela tristeza que havia no rosto dela desaparece. Ela se enche
              de alegria vendo o rosto do bebê. Você sabe que não vai ser
              fácil, mas, ela será uma ótima mãe, mesmo que ele não possa ter
              acesso a tudo aquilo que seria necessário.
              </p>
              <p>
              E você tem um novo objetivo para a sua vida: ajudar essa família
              a ser a melhor que ela possa ser.
              </p>
              `);
  } else {
    location.href = "./game-over.html";
  }

  document.write(`
              <button onclick="reiniciar()">Jogar novamente</button>
              `);
}

function escolhaDianaComJaneFase3() {
  var opcaoEscolhidaDianaComJaneFase3 = prompt(`
          Qual será a sua escolha?
          1 - Concordar com Jane
          2 - Tentar convencê-la de mudar de ideia
        `);

  while (true) {
    if (
      opcaoEscolhidaDianaComJaneFase3 == 1 ||
      opcaoEscolhidaDianaComJaneFase3 == 2
    ) {
      break;
    }
    opcaoEscolhidaDianaComJaneFase3 = prompt(`
            Digite apenas o número da sua opção.
            1 - Concordar com Jane
            2 - Tentar convencê-la de mudar de ideia
          `);
  }
  return opcaoEscolhidaDianaComJaneFase3;
}

function finalizarDianaComJaneFase3() {
  avancarParaFimDianaComJane(escolhaDianaComJaneFase3());
}

function textoDianaComJaneFase3() {
  var texto = `
          <p class="resposta">
          A gente pode se tornar ótimas amigas. Eu sinto isso.
          </p>
          <p>
          Vocês vão a um café e continuam o papo do metrô. Você se apresenta e
          ela diz que se chama Jane. Você conta a sua história, sobre seu
          marido, sobre a sua vontade de ter algum objetivo para a sua vida.
          Jane conta sobre o desespero dela em relação ao filho que vai nascer.
          Como não tem parentes próximos, se fosse preciso, ela daria a própria
          vida para que seu filho pudesse ser registrado e tivesse um futuro
          digno. A conversa flui naturalmente entre vocês duas. A conexão
          também. Vocês ficam ali a tarde inteira.
          </p>
          <p>
          Nas próximas semanas, vocês duas se tornam inseparáveis. Frequentam a
          casa uma da outra, você a acompanha nas visitas médicas, ela te ajuda
          no processo de luto da perda de seu marido. Um vínculo que parece de
          anos.
          </p>
          <p>
          Uma semana antes do nascimento do filho de Jane, ela te liga no meio
          da madrugada. Chorando, confusa. Você não entende quase nada do que
          ela diz. Você pede para Jane ficar calma e diz que você chegará em
          poucos minutos. Você se arruma rapidamente e parte em direção à casa
          dela. Ela mora em um quarteirão próximo ao seu. Logo, você chega lá.
          </p>
          <p>
          Você encontra a sua amiga sentada no chão, chorando, dizendo que o
          único jeito de seu filho ter um futuro digno é ela tirando a própria
          vida. Que não tem outro jeito. Ela diz que, assim, tudo se
          encaixaria: o filho dela teria acesso a tudo, teria uma vida digna e
          você poderia ter um novo objetivo de vida. Você não consegue entender
          o que está sentindo nesse momento. O que ela diz faz sentido, seria o
          único jeito do filho poder estudar, trabalhar, ter uma vida completa.
          Você poderia focar em criá-lo e superar a perda de John. Mas, para
          isso, sua amiga teria que partir. O que seria mais um duro golpe para
          você. O que fazer nesse momento?
          </p>
          `;

  document.write(texto);

  return setTimeout(finalizarDianaComJaneFase3, texto.length * 20);
}

function avancarParaDianaComJaneFase3(number) {
  if (number == 1) {
    textoDianaComJaneFase3();
  } else if (number == 2) {
    document.write(`
              <p class="resposta">
              Não vou mais atrapalhar o dia dela.
              </p>
              <p>
              Eu já importunei muito essa mulher. Melhor deixar ela seguir a
              vida dela. Você se despede da moça, pensando que vocês duas
              poderiam ser ótimas amigas caso se encontrassem em outras
              circunstâncias.
              </p>
              <button onclick="reiniciar()">Jogar novamente</button>
              `);
  } else {
    location.href = "./game-over.html";
  }
}

function escolhaDianaComJaneFase2() {
  var opcaoEscolhidaDianaComJaneFase2 = prompt(`
          Qual será a sua escolha?
          1 - Chamar a jovem para continuar a conversa
          2 - Se despedir da jovem
        `);

  while (true) {
    if (
      opcaoEscolhidaDianaComJaneFase2 == 1 ||
      opcaoEscolhidaDianaComJaneFase2 == 2
    ) {
      break;
    }
    opcaoEscolhidaDianaComJaneFase2 = prompt(`
            Digite apenas o número da sua opção.
            1 - Chamar a jovem para continuar a conversa
            2 - Se despedir da jovem
          `);
  }
  return opcaoEscolhidaDianaComJaneFase2;
}

function finalizarDianaComJaneFase2() {
  avancarParaDianaComJaneFase3(escolhaDianaComJaneFase2());
}

function textoDianaComJaneFase2() {
  var texto = `
          <p class="resposta">
          Tenho que deixar esses pensamentos de lado.
          </p>
          <p>
          "Mais um dia. Só mais um dia. Quem sabe hoje não seja diferente? Vou
          arrumar a casa. Melhor para distrair." Você passa algum tempo ali,
          organizando a casa e percebe que tem algumas coisas faltando. É
          melhor ir no mercado. Você sai de casa, vai até a estação de metrô e
          rapidamente ele chega. Ao entrar, você vê uma moça, grávida,
          parecendo muito triste sentada próximo à porta. Você nem percebe e,
          quando vê, já está se sentando ao lado dela e perguntando quantos
          meses de gestação ela tem. Ela, ainda meio confusa, responde que
          está no oitavo mês. Você pergunta se ela já garantiu o registro,
          mas, na mesma hora, vê que essa foi uma pergunta muito indelicada.
          Os olhos da moça se enchem de lágrimas e ela responde que não.
          </p>
          <p>
          Você respira profundamente. "Não deveria ter feito essa pergunta".
          Você sente um sentimento de raiva tomando conta de você. Como essas
          pessoas podem querer viver tanto tempo e proibir que outras crianças
          nasçam? Você, então, começa a falar sobre esse assunto e a conversa
          começa a render. O papo continua e, quando as duas percebem, já
          passaram do destino que estava programado.
          </p>
          <p>
          Na estação seguinte, você se levanta e pensa em chamá-la para
          continuarem conversando. Espera! Por que essa jovem que acabou de te
          conhecer iria sair com você para conversar? Ela deve ter outras
          coisas para fazer! Mas, a conexão entre vocês foi tão boa. Precisa
          continuar. E agora?
          </p>
          `;
  document.write(texto);

  return setTimeout(finalizarDianaComJaneFase2, texto.length * 20);
}
