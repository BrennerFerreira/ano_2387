function avancarParaFimDianaComMark(number) {
  if (number == 1) {
    document.write(`
            <p class="resposta">
            Não sei exatamente o motivo. Mas, aceito.
            </p>
            <p>
            A adrenalina e a vontade de ver uma família feliz falam mais alto.
            Mark sorri e pede para você se posicionar atrás do carro. Ele tira
            do porta-malas um rifle de longo alcance com um abafador. Ele pede
            para você esperar o sinal dele enquanto indica o alvo. Um homem já
            de idade que cambaleia na calçada há cerca de 300 metros de onde
            você está.
            </p>
            <p>
            Mark vai em direção ao homem. Quando ele está próximo do alvo, faz
            um sinal, indicando que está tudo pronto. Você respira, sente a
            adrenalina correndo por você, mira e aperta o gatilho. Nos próximos
            segundos, a única coisa que vê é o homem caindo ao chão e Mark
            rapidamente arrastando o corpo dele para um beco.
            </p>
            <p>
            Em pouco tempo, o policial chega no carro com os documentos do
            homem na mão. Você tem sentimentos mistos sobre o que ocorreu,
            ainda assimilando tudo o que fez.
            </p>
            <p>
            Na manhã seguinte, Mark te leva até a casa do casal que estava no
            carro na noite anterior. A felicidade deles ao saber que o filho
            poderá ser registrado já te diz tudo o que precisa saber: pelos
            próximos 15 anos, você tem um objetivo de vida. Depois, poderá
            encontrar John novamente.
            </p>
            `);
  } else if (number == 2) {
    document.write(`
            <p class="resposta">
            Matar uma pessoa? Jamais!
            </p>
            <p>
            Você não conseguiria matar uma pessoa. Mesmo que isso fosse a
            felicidade de alguém, não tem como você tirar uma vida pra gerar
            outra. Você recusa e volta para casa. O dia já foi diferente,
            quem sabe amanhã também não seja melhor.
            </p>
            `);
  } else {
    window.location = "/pages/game-over.html";
  }

  document.write(`
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
}

function escolhaDianaComMarkFase3() {
  var opcaoEscolhidaDianaComMarkFase3 = prompt(`
        Qual será a sua escolha?
        1 - Aceitar a missão de Mark
        2 - Rejeitar a missão de Mark
      `);

  while (true) {
    if (
      opcaoEscolhidaDianaComMarkFase3 == 1 ||
      opcaoEscolhidaDianaComMarkFase3 == 2
    ) {
      break;
    }
    opcaoEscolhidaDianaComMarkFase3 = prompt(`
          Digite apenas o número da sua opção.
          1 - Aceitar a missão de Mark
          2 - Rejeitar a missão de Mark
        `);
  }
  return opcaoEscolhidaDianaComMarkFase3;
}

function finalizarDianaComMarkFase3() {
  avancarParaFimDianaComMark(escolhaDianaComMarkFase3());
}

function textoDianaComMarkFase3() {
  var texto = `
        <p class="resposta">
        Você não tem nada a perder. No máximo, ele te tirará dessa vida que você
        já não aguenta mais.
        </p>
        <p>
        Mesmo desconfiada, você vai ao encontro de Mark. Ele disse para você
        encontrá-lo na esquina da Avenida 10 com a Rua 108. Você não gosta
        dessa rua. Muitos criminosos a frequentam. Mas, um policial deve te
        dar a devida segurança.
        </p>
        <p>
        Mark chega e pede para você entrar no carro. Ele entra na Rua 108, o
        que te deixa apreensiva. Enquanto ele estaciona em um canto afastado,
        você percebe que há um casal no banco de trás. Mark para o carro e pede
        para conversar com você do lado de fora.
        </p>
        <p>
        Quando vocês dois saem, ele te pergunta se você sabe atirar. Quando
        era mais jovem, você seus pais te ensinaram a caçar e, desde então,
        era um de seus hobbies. Você até adquiriu um óculos que te auxilia na
        mira. Quase nunca erra. Ao ouvir isso, Mark sorri e te diz que pode te
        dar um propósito para os próximos anos. Um objetivo.
        </p>
        <p>
        O policial começa a explicar: ele acha injusto as pessoas poderem
        viver para sempre e não permitirem novos nascimentos. O planeta
        precisa se renovar. Para isso, ele recebe contatos de pessoas que
        querem ter prioridade para o nascimento dos filhos. Então, ele mata
        uma pessoa e forja o atestado de óbito para parecer que a pessoa é um
        parente próximo de quem o contratou. Segundo a lei, se um parente
        próximo morre perto da data de nascimento de uma criança, ela tem
        direito a prioridade no registro.
        </p>
        <p>
        Mas, há uma troca: os pais precisam garantir que tanto eles quanto o
        filho viverão apenas 100 anos, permitindo que o ciclo de renovação
        continue. Ele mesmo só vai viver mais 20 anos, quando chega aos 100.
        </p>
        <p>
        No final, ele te pergunta se você gostaria de se juntar a ele nessa
        missão, dando alegria a mais pessoas. Aquilo te dá uma sensação de
        adrenalina e medo ao mesmo tempo. Você se sentiria completa, podendo
        alegrar novas pessoas, fazendo com que novas crianças nasçam. Mas...
        será que você é capaz de matar uma pessoa para isso? Você está
        dividida, sem saber o que fazer.
        </p>
        `;

  document.write(texto);

  return setTimeout(finalizarDianaComMarkFase3, texto.length * 20);
}

function avancarParaDianaComMarkFase3(number) {
  if (number == 1) {
    textoDianaComMarkFase3();
  } else if (number == 2) {
    document.write(`
            <p class="resposta">
            Não posso me encontrar com ele.
            </p>
            <p>
            Como você vai acreditar em alguém que acabou de conhecer? Não tem
            como você ir. O dia já foi diferente, quem sabe amanhã também não
            seja melhor.
            </p>
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
  } else {
    window.location = "/pages/game-over.html";
  }
}

function escolhaDianaComMarkFase2() {
  var opcaoEscolhidaDianaComMarkFase2 = prompt(`
        Qual será a sua escolha?
        1 - Encontrar com Mark
        2 - Não se encontrar com Mark
      `);

  while (true) {
    if (
      opcaoEscolhidaDianaComMarkFase2 == 1 ||
      opcaoEscolhidaDianaComMarkFase2 == 2
    ) {
      break;
    }
    opcaoEscolhidaDianaComMarkFase2 = prompt(`
          Digite apenas o número da sua opção.
          1 - Encontrar com Mark
          2 - Não se encontrar com Mark
        `);
  }
  return opcaoEscolhidaDianaComMarkFase2;
}

function finalizarDianaComMarkFase2() {
  avancarParaDianaComMarkFase3(escolhaDianaComMarkFase2());
}

function textoDianaComMarkFase2() {
  var texto = `
        <p class="resposta">Não consigo mais aguentar tudo isso.</p>
        <p>
        Para quê ficar tentando mais? Você sai de casa sem rumo, sem ter noção
        de onde anda. Simplesmente, vai. Você se lembra de quando conheceu
        John, quando se casaram, suas férias na praia...
        </p>
        <p>
        De repente, alguém te puxa, você sai do transe. É um policial. Você
        está no meio de uma avenida movimentada, vários carros passando. O
        policial te leva para a calçada e pergunta seu nome. Você responde e
        ele se apresenta. Seu nome é Mark. Ele te leva para a delegacia e te
        pergunta se está bem. Estão apenas vocês dois na sala. Você já está
        cansada das pessoas te perguntando se está bem. É sempre a mesma
        resposta: "Sim, obrigada." Mas, você não está. Nunca esteve desde que
        John se foi.
        </p>
        <p>
        Há algo que te chama a atenção no olhar de Mark. Ele também parece ter
        suas marcas do passado. Quando percebe, você já está contando a sua
        história, suas dores, como chegou até aquele ponto. Mark, espera
        alguns segundos, começa a falar algo e hesita. Finalmente, ele diz
        que tem algo que pode dar um novo objetivo para a sua vida. Porém,
        ele afirma que não pode comentar no momento. Ele pede que você o
        encontre hoje à noite, quando ele poderá te explicar melhor.
        </p>
        <p>
        Chegando em casa, você continua se fazendo a mesma pergunta que se fez
        durante o trajeto: devo acreditar em Mark? O que será que ele pode me
        oferecer para continuar seguindo a vida? Afinal, devo me encontrar com
        ele?
        </p>
        `;
  document.write(texto);

  return setTimeout(finalizarDianaComMarkFase2, texto.length * 20);
}
