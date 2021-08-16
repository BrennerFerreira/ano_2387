function avancarParaFase2Mark(number) {
  if (number == 1) {
    textoMarkComDianaFase2();
  } else if (number == 2) {
    textoMarkComJaneFase2();
  } else {
    window.location = "/pages/game-over.html";
  }
}

function escolhaDaFase1Mark() {
  var opcaoEscolhidaMarkFase1 = prompt(`
    Qual será a sua escolha?
    1 - Ir até a senhora
    2 - Atender o telefone
  `);

  while (true) {
    if (opcaoEscolhidaMarkFase1 == 1 || opcaoEscolhidaMarkFase1 == 2) {
      break;
    }
    opcaoEscolhidaMarkFase1 = prompt(`
      Digite apenas o número da sua opção.
      1 - Ir até a senhora
      2 - Atender o telefone
    `);
  }
  return opcaoEscolhidaMarkFase1;
}

function finalizarFase1Mark() {
  avancarParaFase2Mark(escolhaDaFase1Mark());
}

function textoMarkFase1() {
  document.body.innerHTML = "";
  document.title = "Mark";
  document.getElementsByTagName("html")[0].id = "mark";

  texto = `
    <main>
    <h1>Mark</h1>

    <p>
    Mais um dia comum para você: acordar, tomar um café sem açucar, pegar seu
    carro, ir para a delegacia e sentar-se em frente a seus monitores para
    acompanhar a movimentação na cidade. Qualquer coisa suspeita, enviar um
    chamado para a viatura mais próxima.
    </p>

    <p>
    Tudo isso serve apenas para uma coisa: um disfarce perfeito para o que te faz
    sentir vivo. Desde sempre, você discorda com este sistema que possibilita as
    pessoas a viverem eternamente. As pessoas não deveriam ser privadas de nascer
    porque algum egoísta acha melhor viver para sempre.
    </p>

    <p>
    Então, há alguns anos, você se utiliza de uma brecha na lei e de seus
    contatos na polícia para permitir que novas crianças nasçam e renovem a
    população. Mas, sempre faz um acordo: os pais da criança têm que garantir
    que eles próprios e a própria criança vivam apenas 100 anos. Você mesmo faz
    parte do seu acordo. Mais 20 anos e você partirá, abrindo lugar para que
    uma nova vida surja.
    </p>

    <p>
    Enquanto você observa os monitores sem muito interesse, algo te chama a
    atenção: em uma rua próxima à delegacia, uma senhora, aparentemente,
    desnorteada, caminha perigosamente entre os carros. Você, normalmente,
    iria chamar alguma viatura de plantão para averiguar. Porém, há alguma
    coisa que prende a sua atenção e parece te chamar. Neste momento, seu
    telefone toca. O que você acha melhor fazer?
    </p>
    </main>
    `;
  document.write(texto);

  return setTimeout(finalizarFase1Mark, texto.length * 20);
}
