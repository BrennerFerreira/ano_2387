function avancarParaFimMarkComDiana(number) {
  if (number == 1) {
    document.write(`
        <p class="resposta">
        Ela tem experiência atirando. Melhor ela atuar de longe.
        </p>
        <p>
        Por ser uma ótima atiradora, faz sentido ela ficar de longe. Uma coisa
        é matar uma pessoa à distância. Outra, é vê-la de perto. Você tira seu
        rifle do porta-malas e entrega para Diana. O plano é você se aproximar
        do homem e fazer um sinal indicando para ela atirar. Então, basta você
        esconder o corpo dele e pegar os documentos.
        </p>
        <p>
        E, assim, acontece. Você se aproxima dele e, quando está bem perto,
        faz o sinal autorizando o disparo. Diana não hesita. Um tiro e o homem
        cai no chão. Rapidamente, você puxa o corpo do homem para um beco,
        esconde-o e pega seus documentos. Ao retornar para o carro, Diana está
        lá, com um rosto que parece meio alegre, meio assustada. Você a deixa
        em casa e diz que vai buscá-la pela manhã.
        </p>
        <p>
        De manhã, com os documentos forjados já em mãos, você busca Diana e a
        leva para a casa do casal que estava com vocês na noite anterior. Ao
        entregar os documentos, você percebe a alegria da senhora com a
        felicidade do casal em poder registrar os filhos e tem a certeza de que
        essa parceria ainda vai render bons frutos.
        </p>
      `);
  } else if (number == 2) {
    document.write(`
        <p class="resposta">
        É melhor ela estar perto de mim quando ele morrer. Posso controlá-la
        melhor caso algo saia do controle.
        </p>
        <p>
        Você pede para Diana te acompanhar. Vocês se aproximam cuidadosamente
        do homem e, quando estão próximos dele, em frente a um beco abandonado,
        você o agarra, enforcando-o. Diana te ajuda a segurá-lo enquanto o
        homem se debate. Aos poucos, a resistência dele vai diminuindo,
        diminuindo... até ele parar totalmente. Você o arrasta para o beco,
        mas, ao olhar para Diana, ela está em choque, parada, olhando para o
        homem. Até hoje, a única pessoa que ela havia visto morta era o próprio
        marido e a imagem daquele homem tão perto despertou diversas memórias
        na mente dela. Diana sai correndo.
        </p>
        <p>
        Você iria atrás dela, mas, precisa se livrar do corpo do homem. Você
        esconde o corpo dele no fim do beco, pega seus documentos e se dirige
        ao carro. Diana não está mais por perto. O serviço foi concluído, mas,
        será que foi o último? Será que ela vai te denunciar? Só o tempo pode
        responder a essas perguntas.
        </p>
      `);
  } else {
    location.href = "/game-over.html";
  }

  document.write(`
              <button onclick="reiniciar()">Jogar novamente</button>
              `);
}

function escolhaMarkComDianaFase3() {
  var opcaoEscolhidaMarkComDianaFase3 = prompt(`
          Qual será a sua escolha?
          1 - Pedir para Diana ficar no carro, como atiradora
          2 - Pedir para Diana ajudar no combate corpo a corpo
        `);

  while (true) {
    if (
      opcaoEscolhidaMarkComDianaFase3 == 1 ||
      opcaoEscolhidaMarkComDianaFase3 == 2
    ) {
      break;
    }
    opcaoEscolhidaMarkComDianaFase3 = prompt(`
        Digite apenas o número da sua opção.
        1 - Pedir para Diana ficar no carro, como atiradora
        2 - Pedir para Diana ajudar no combate corpo a corpo
      `);
  }
  return opcaoEscolhidaMarkComDianaFase3;
}

function finalizarMarkComDianaFase3() {
  avancarParaFimMarkComDiana(escolhaMarkComDianaFase3());
}

function textoMarkComDianaFase3() {
  var texto = `
    <p class="resposta">
      Algo me diz que ela é a pessoa certa para atuar em equipe comigo.
    </p>
    <p>
      Você hesita, mas, não consegue segurar. Você diz para Diana que tem algo
      que pode servir de motivação para ela, mas que não pode contar no momento.
      Você pede para encontrá-la hoje à noite, na esquina da Avenida 10 com a
      Rua 108, seu local preferido. Um casal havia entrado em contato precisando
      dos seus serviços. Aquela seria a oportunidade perfeita para apresentá-la
      ao seu mundo. Diana parece mais confusa do que já estava. Mesmo assim,
      parece acenar com a cabeça positivamente. Ela não dá nenhuma pista clara
      se aceitou ou não.
    </p>
    <p>
      As horas se passam e você fica cada vez mais agitado. "Será que isso é
      correto? Será que estou fazendo a coisa certa?" Você sai da delegacia,
      passa na casa do casal que te contatou e segue para a Rua 108. Você não
      sabe se Diana estará lá. Não sabe se ela aceitou. Para a sua surpresa,
      quando chega na entrada da rua, vê uma pessoa familiar parada, esperando.
      É Diana. Você para o carro e permite que ela entre. Dirige até um canto
      isolado e a pede para descer.
    </p>
    <p>
      Do lado de fora, você respira fundo e começa a contar a história de seus
      serviços. Porque o faz, para quem... Ela parece nervosa. No fim, você
      pergunta se ela sabe atirar. Um atirador seria um bom aliado em alguns
      momentos. Diana diz que seus pais lhe ensinaram a caçar e isso havia
      virado um de seus hobbies. Os óculos que ela usa servem de auxílio para
      a mira, fazendo com que quase nunca erre. "Perfeito!", você pensa. Ela
      também concorda em participar. Com 85 anos, ela já não quer viver
      eternamente, então, os próximos 15 anos serviriam para ajudar outras
      pessoas a serem felizes e renovar o mundo.
    </p>
    <p>
      Você já avistou um alvo em potencial. Um homem a uma certa distância de
      vocês um alvo fácil tanto corpo a corpo quanto à distância. Você pode
      pedir para Diana ficar perto do carro e utilizar um rifle que você carrega
      consigo enquanto você se aproxima para pegar os documentos do homem ou
      pedir para ela te acompanhar para imobilizar o homem no corpo a corpo.
      Qual é a melhor estratégia?
    </p>
    `;

  document.write(texto);

  return setTimeout(finalizarMarkComDianaFase3, texto.length * 20);
}

function avancarParaMarkComDianaFase3(number) {
  if (number == 1) {
    textoMarkComDianaFase3();
  } else if (number == 2) {
    document.write(`
        <p class="resposta">
        Nem pensar em chamar outra pessoa para fazer esses serviços.
        </p>
        <p>
        Não faz sentido chamar uma senhora para participar desse tipo de coisa.
        Vou continuar sozinho. Está dando tudo certo até agora, por que mudar?
        </p>
        <p>
        Você respira profundamente e chama um colega para levar Diana para
        casa. Após ela sair, você fica se perguntando o motivo daqueles
        pensamentos. Será que vou precisar de alguém para continuar o meu
        legado depois que eu partir?
        </p>
        <button onclick="reiniciar()">Jogar novamente</button>
      `);
  } else {
    location.href = "/game-over.html";
  }
}

function escolhaMarkComDianaFase2() {
  var opcaoEscolhidaMarkComDianaFase2 = prompt(`
          Qual será a sua escolha?
          1 - Tentar convidar Diana para participar dos seus serviços
          2 - Esquecer isso e continuar fazendo tudo sozinho
        `);

  while (true) {
    if (
      opcaoEscolhidaMarkComDianaFase2 == 1 ||
      opcaoEscolhidaMarkComDianaFase2 == 2
    ) {
      break;
    }
    opcaoEscolhidaMarkComDianaFase2 = prompt(`
          Digite apenas o número da sua opção.
          1 - Tentar convidar Diana para participar dos seus serviços
          2 - Esquecer isso e continuar fazendo tudo sozinho
      `);
  }
  return opcaoEscolhidaMarkComDianaFase2;
}

function finalizarMarkComDianaFase2() {
  avancarParaMarkComDianaFase3(escolhaMarkComDianaFase2());
}

function textoMarkComDianaFase2() {
  var texto = `
        <p class="resposta">
        Tenho que ver o que há com aquela senhora.
        </p>
        <p>
        Você não dá atenção ao telefone tocando e vai ao encontro da senhora
        que está no meio dos carros. Você se aproxima, fazendo sinais para os
        carros pararem e chama pela senhora. Ela não dá atenção. Então, você
        chega mais perto e a segura cuidadosamente pelo braço. Ela parece
        despertar e te olha, ainda confusa. Você leva a senhora para a calçada
        e pergunta seu nome. Diana, ela diz. Você, então, a leva para a sua
        sala na delegacia, para entender melhor o que estava acontecendo.
        Normalmente, você não faria isso, mas, há alguma coisa nela que te
        chama a atenção. Você não sabe o que é, mas, existe algo.
        </p>
        <p>
        Chegando em sua sala, você a pergunta se ela está bem. A senhora
        suspira, pensa um pouco e começa a contar toda a sua história. Ela era
        casada há 60 anos e o marido havia morrido há um mês. Ela não tinha
        mais alegria de viver, só queria acabar tudo logo. Não via sentido em
        ter que viver centenas de anos sem ele. Na verdade, ela não via
        sentido em ninguém viver tanto tempo assim sem alguém por perto.
        </p>
        <p>
        Era isso! Você sabia que alguma coisa te ligava àquela senhora. Ela
        não via sentido em alguém viver tanto tempo e precisa de um objetivo
        de vida. Ela pode ser uma parceira para seus serviços!
        </p>
        <p>
        Não... calma. Por que uma senhora iria querer entrar nessa com você?
        Não faz sentido nenhum! Ou faz?
        </p>
      `;

  document.write(texto);

  return setTimeout(finalizarMarkComDianaFase2, texto.length * 20);
}
