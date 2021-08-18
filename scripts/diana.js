function finalizarFase1Diana() {
  avancarParaFase2(
    mostrarPrompt("Desistir de tudo", "Tentar viver mais um dia"),
    textoDianaComMarkFase2,
    textoDianaComJaneFase2
  );
}

function textoDianaFase1() {
  texto = `
    <h1>Diana</h1>

    <p>
    Mais um dia começa.
    </p>
    <p>
    Mais um dia que você não quer terminar.
    </p>
    <p>
    John se foi há um mês e você ainda não sabe como vai ser viver sem ele.
    Você tem vivido os dias no modo automático, só esperando a noite vir para
    dormir umas duas ou três horas. Vocês se casaram muito jovens. Foram 60
    anos juntos. Agora, aos 85, você não quer viver centenas de anos sem ele
    a seu lado.
    </p>
    <p>
    Você não quer mais continuar, mas, tem uma voz bem baixinha dentro de
    você te chamando para viver mais um dia. Sua mente parece querer desistir.
    O que você vai querer?
    </p>
    `;

  escreverTexto(texto, finalizarFase1Diana);
}
