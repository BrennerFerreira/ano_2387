function avancarFase1(number) {
  document.write(`
    <h2>Você escolheu a opção ${number}</h2>
    `);
  if (number == 1) {
    document.write(`
        <h1 class="titulo-destacado">Fase 2 vindo da opção 1</h1>
        `);
  } else if (number == 2) {
    document.write(`
        <h1 class="titulo-destacado">Fase 2 vindo da opção 2</h1>
        `);
  } else {
    window.location = "/pages/game-over.html";
  }
  document.write(`
      <p>Início da fase 2</p>
  `);
}

function escolhaDaFase1() {
  var opcaoEscolhida = prompt(`
    Escolha seu destino:
    1 - Opção 1
    2 - Opção 2
    3 - Opção 3
    `);

  while (true) {
    if (opcaoEscolhida == 1 || opcaoEscolhida == 2 || opcaoEscolhida == 3) {
      break;
    }
    opcaoEscolhida = prompt(`
        Escolha seu destino novamente:
        1 - Opção 1
        2 - Opção 2
        3 - Opção 3
        `);
  }
  return opcaoEscolhida;
}

function finalizarFase1() {
  avancarFase1(escolhaDaFase1());
}

function fase1() {
  document.write(`
        <h1>Fase 1</h1>
        <p>Aqui, entra o texto da fase 1</p>
    `);

  return setTimeout(finalizarFase1, 1000);
}

function gravida1() {
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
    <title>Grávida</title>
    </head>
    <body>
      <p>Você escolheu jogar com a mulher grávida.</p>
    </body>
  </html>
    `);

  return setTimeout(fase1, 1000);
}
