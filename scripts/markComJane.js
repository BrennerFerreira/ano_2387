function textoFimDeJogoMarkComJaneOpcao1() {
  document.write(`
            <p class="resposta">
            Apesar daquele grupo por perto, será mais fácil lidar com alguém
            que está bêbado.
            </p>
            <p>
            Você se aproxima do bêbado e consegue imobilizá-lo por trás. Os
            amigos próximos estão distraídos, conversando e nem percebem sua
            movimentação. Você leva o homem para um beco e finaliza o serviço
            rapidamente. Pega os documentos e retorna ao carro.
            </p>
            <p>
            Você explica para Jane que pela manhã, já terá o documento
            necessário para que o filho dela seja registrado. Você deixa ela
            em casa e segue seu rumo, sentindo que contribuiu para um mundo
            melhor e renovado.
            </p>
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
}
function textoFimDeJogoMarkComJaneOpcao2() {
  document.write(`
            <p class="resposta">
            Ele está sozinho. Será mais fácil de lidar com ele sem chamar
            atenção.
            </p>
            <p>
            Você se dirige em direção ao homem. Você se aproxima por trás, com
            calma. Ao tentar imobilizá-lo, o homem reage. Ao se movimentar,
            vocês encostam em várias garrafas que estão jogadas no chão. O
            barulho chama atenção do grupo de amigos que estava do outro lado
            da rua. Eles correm em direção à confusão, fazendo com que você
            precise abortar o plano e fugir.
            </p>
            <p>
            Chegando no carro, você precisa explicar para Jane que o plano deu
            errado e que não será possível realizá-lo no momento. Você se sente
            mal consigo mesmo, mas precisa entender que há momentos nos quais
            arriscar é a pior escolha.
            </p>
            <button onclick="reiniciar()">Jogar novamente</button>
            `);
}

function finalizarMarkComJaneFase3() {
  avancarParaFase2(
    mostrarPrompt("Rapaz bêbado", "Homem sozinho"),
    textoFimDeJogoMarkComJaneOpcao1,
    textoFimDeJogoMarkComJaneOpcao2
  );
}

function textoMarkComJaneFase3() {
  var texto = `
        <p class="resposta">
        Ela parece desesperada para ter o filho. É arriscado, mas, vou ajudá-la.
        </p>
        <p>
        Você pede para que Jane entre no carro e explica seu plano para ela.
        A ideia é eliminar alguém, pegar seus documentos e forjar um atestado
        de óbito. Segundo a lei, se algum parente próximo morre perto da data
        de nascimento de uma criança, ela ganha prioridade na fila de registro.
        Dito isto, Jane, mesmo nervosa, concorda em dar sequência ao plano.
        </p>
        <p></p>
        Você ligar o carro e se dirige à Rua 108. Chegando lá, encosta o carro
        em um canto escuro, onde consegue observar a movimentação de forma
        discreta. Após algum tempo, você avista dois possíveis alvos: um rapaz,
        cambaleante, bêbado, que está encostado em uma parede próximo a um
        grupo de amigos que estão conversando e um homem, que está sozinho,
        porém, parece estar mais atento.
        </p>
        <p>
        Qual deles será seu alvo?
        </p>
        `;

  escreverTexto(texto, finalizarMarkComJaneFase3);
}

function textoFimDeJogoMarkComJaneFase2() {
  document.write(`
        <p class="resposta">
        Não posso arriscar a vida dela. Não consigo!
        </p>
        <p>
        Você não pode arriscar a vida dela desta forma. O medo de que algo
        aconteça com Jane fala mais alto do que a sua vontade de ajudá-la.
        Sem dar maiores explicações, você se despede e arranca em seu carro
        sem olhar para trás.
        </p>
        <button onclick="reiniciar()">Jogar novamente</button>
    `);
}

function finalizarMarkComJaneFase2() {
  avancarParaFase2(
    mostrarPrompt("Arriscar continuar com o plano", "Recusar o plano"),
    textoMarkComJaneFase3,
    textoFimDeJogoMarkComJaneFase2
  );
}

function textoMarkComJaneFase2() {
  var texto = `
    <p class="resposta">
    Vou mandar alguém ver o que há com esta senhora.
    </p>
    <p>
    Você decide chamar um colega e pedir para ele ver o que está acontecendo.
    Ao atender o telefone, ouve uma voz trêmula falando algo sobre conhecer
    uma colega sua. Você reconhece o nome Katherine, uma amiga que não vê há
    alguns anos. A moça ao telefone, que, aparentemente, se chama Jane, está
    visivelmente abalada. Nada que ela diz faz sentido. Porém, uma frase te
    desperta: "Preciso de uma encomenda da Rua 108". Neste mesmo instante,
    você sente a adrenalina tomando conta do seu corpo.
    </p>
    <p>
    Esta é a frase para indicar que a pessoa quer seus serviços. A Rua 108 é
    onde fica a maioria dos criminosos da cidade. Perfeita para eliminar
    alguém e não ser percebido. Você rapidamente pede o endereço de Jane e diz
    que vai passar na casa dela esta noite.
    </p>
    <p>
    Após algumas horas, você já tem tudo preparado. Sai da delegacia, pega seu
    carro e vai direto para o endereço fornecido por Jane. Chegando lá, você
    se depara com uma moça jovem, já em um estado de gestação avançado e fica
    em um dilema: como uma espécie de seguro, você sempre leva a pessoa que te
    contrata junto. E, nesses serviços, sempre há a possibilidade de algo dar
    errado para os dois. E você fica na dúvida: devo arriscar a vida desta
    mulher e do seu filho ou recusar este serviço?
    </p>
    `;

  escreverTexto(texto, finalizarMarkComJaneFase2);
}
