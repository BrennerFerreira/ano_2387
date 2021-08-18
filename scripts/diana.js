function avancarParaFase2Diana(number) {
  if (number == 1) {
    textoDianaComMarkFase2();
  } else if (number == 2) {
    textoDianaComJaneFase2();
  } else {
    location.href = "./game-over.html";
  }
}

function escolhaDaFase1Diana() {
  var opcaoEscolhidaDianaFase1 = prompt(`
    Qual será a sua escolha?
    1 - Desistir de tudo
    2 - Tentar viver mais um dia
  `);

  while (true) {
    if (opcaoEscolhidaDianaFase1 == 1 || opcaoEscolhidaDianaFase1 == 2) {
      break;
    }
    opcaoEscolhidaDianaFase1 = prompt(`
      Digite apenas o número da sua opção.
      1 - Desistir de tudo
      2 - Tentar viver mais um dia
    `);
  }
  return opcaoEscolhidaDianaFase1;
}

function finalizarFase1Diana() {
  avancarParaFase2Diana(escolhaDaFase1Diana());
}

function textoDianaFase1() {
  document.body.innerHTML = "";
  document.title = "Diana";
  document.getElementsByTagName("html")[0].id = "diana";

  texto = `
    <main>
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
    </main>
    `;
  document.write(texto);

  return setTimeout(finalizarFase1Diana, texto.length * 20);
}
