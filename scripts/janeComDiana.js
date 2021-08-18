function textoFimDeJogoJaneComDianaOpcao1() {
  document.write(`
            <p class="resposta">
            Meu filho vai crescer com todas as oportunidades que ele merece.
            </p>
            <p>
            Não tem jeito. Meu filho merece ter um futuro digno. Você pega um
            conjunto de remédios controlados que foram prescritos para a sua
            depressão e os toma. Quando está quase perdendo os sentidos, manda
            uma mensagem para Diana: "Obrigada por me dar alegria nesse último
            mês. Meu filho vai ser registrado e você será uma ótima mãe para
            ele. Adeus."
            </p>
            <p>
            Você vê seu olhar escurecendo, olhando para seu filho pela última
            vez: "Seu futuro será incrível." Este foi seu último pensamento.
            </p>
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
}
function textoFimDeJogoJaneComDianaOpcao2() {
  document.write(`
            <p class="resposta">
            Não posso fazer isso com o meu filho!
            </p>
            <p>
            Mesmo que ele não tenha acesso a nada, ele é meu filho. Preciso
            criá-lo o melhor que puder. Ele vai crescer sabendo que a mãe dele
            fez de tudo para que ele pudesse crescer bem.
            </p>
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
}

function finalizarJaneComDianaFase3() {
  avancarParaFase2(
    mostrarPrompt(
      "Criá-lo mesmo sem oportunidades",
      "Trocar a sua vida pelo futuro do seu filho"
    ),
    textoFimDeJogoJaneComDianaOpcao1,
    textoFimDeJogoJaneComDianaOpcao2
  );
}

function textoJaneComDianaFase3() {
  var texto = `
        <p class="resposta">
        Algo me diz que ela pode ser uma boa companhia para mim neste momento.
        </p>
        <p>
        Vocês vão a um café e continuam o papo do metrô. A senhora, finalmente,
        se apresenta. Seu nome é Diana. Quando percebem, já estão contando a
        vida uma para outra. Diana explica que foi casada por 60 anos e,
        recentemente, seu marido veio a falecer. Desde então, procura forças
        para continuar vivendo, mas, ainda não encontrou um motivo para viver
        por centenas de anos.
        </p>
        <p>
        Você explica seu desespero em conseguir registrar seu filho. Você não
        tem parentes próximos, então, se precisasse, você daria a sua própria
        vida para que ele tivesse um futuro digno. As duas parecem velhas
        amigas, conversando uma tarde inteira. E a conexão só aumenta.
        </p>
        <p>
        Nas próximas semanas, vocês duas se tornam inseparáveis, frequentando
        uma a casa da outra, ela acompanhando você nas visitas médicas, você a
        ajudando a se recuperar da perda do marido.
        </p>
        <p>
        Uma semana antes do nascimento previsto de seu filho, você se encontra
        novamente desesperada. Uma semana para ele nascer e você não tem nada
        para garantir que ele seja registrado. Você está com seus pensamentos a
        mil, um turbilhão de emoções.
        </p>
        <p>
        Então, você liga para a pessoa mais próxima que você tem nesse momento:
        Diana. Ela pede para você ficar calma, ela chegará em poucos minutos.
        </p>
        <p>
        Quando Diana chega, ela consegue te acalmar e retirar aqueles
        pensamentos confusos de sua cabeça. Mas, a ideia ainda está lá: para
        meu filho ter uma vida digna, vou tirar até a minha vida.
        </p>
        <p>
        Passam-se os dias e ele está aqui: seu filho nasceu! Você está alegre,
        mas, a tristeza toma conta de você. Você não consegue parar de pensar
        no futuro de seu filho. A dúvida ainda paira: devo trocar a minha vida
        pelo futuro do meu filho ou criá-lo, mesmo que ele não possa utilizar
        nada em sua vida?
        </p>
        `;

  document.write(texto);

  return setTimeout(finalizarJaneComDianaFase3, texto.length * 20);
}

function textoFimDeJogoJaneComDianaFase2() {
  document.write(`
            <p class="resposta">
            Que loucura! Seguir essa mulher? Jamais!
            </p>
            <p>
            Eu nunca seguiria alguém que acabei de conhecer. E se ela for uma
            criminosa? Nem pensar, melhor pegar o próximo metrô e ir para o
            mercado como eu tinha planejado.
            </p>
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
}

function finalizarJaneComDianaFase2() {
  avancarParaFase2(
    mostrarPrompt("Seguir a senhora", "Despistar a senhora"),
    textoJaneComDianaFase3,
    textoFimDeJogoJaneComDianaFase2
  );
}

function textoJaneComDianaFase2() {
  var texto = `
        <p class="resposta">Não posso nem pensar em fazer isso.</p>
        <p>
        Você não pode seguir este caminho! É contra tudo o que você acredita!
        Você deixa esses pensamentos de lados e procura seguir sua rotina. Você
        precisa ir ao mercado fazer compras. Seus pensamentos estão a mil, mas,
        a vida tem que continuar. Você pega o metrô e vai até o centro da
        cidade. São 25 minutos de trajeto. Na estação seguinte à sua, entra uma
        senhora que se senta ao seu lado.
        </p>
        <p>
        Ela esboça um sorriso ao ver a sua barriga. Pergunta quantos meses você
        está. Você responde: "Oito". Ela tenta dar outro sorriso. Pergunta se
        você já tem o registro garantido. Ao ouvir a pergunta, você sente um nó
        se formando na sua garganta. Você respira fundo e responde que não. O
        rosto dela muda. Fica com um expressão mais séria. Ela diz que não
        entende essas pessoas que querem viver centenas de anos. Vocês duas
        continuam conversando, ambas reclamando das pessoas que não dão
        oportunidades para outros nascerem.
        </p>
        <p>
        As duas se perdem naquela conversa. Há alguma conexão entre vocês duas.
        Quando percebem, as duas já passaram de suas estações de destino.
        "Venha comigo", diz a senhora. Seguir uma estranha? Por que você faria
        isso? Vocês conversaram por alguns minutos no metrô e você já vai
        acreditar nela?
        </p>
        `;

  escreverText(texto, finalizarJaneComDianaFase2);
}
