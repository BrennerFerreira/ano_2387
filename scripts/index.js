function escolherPersonagem() {
  var personagemEscolhido = prompt(`
    Escolha seu personagem:
    1 - Jane
    2 - Mark
    3 - Diana
  `);

  while (true) {
    if (
      personagemEscolhido == 1 ||
      personagemEscolhido == 2 ||
      personagemEscolhido == 3
    ) {
      break;
    }
    personagemEscolhido = prompt(`
        Escolha seu personagem novamente:
        1 - Jane
        2 - Mark
        3 - Diana
    `);
  }
  return personagemEscolhido;
}

function irParaFaseDoPersonagem(number) {
  if (number == 1) {
    return textoJaneFase1();
  } else if (number == 2) {
    return textoMarkFase1();
  } else if (number == 3) {
    senhora1();
  } else {
    window.location = "/pages/game-over.html";
  }
}

function fazerEscolhaDoPersonagem() {
  irParaFaseDoPersonagem(escolherPersonagem());
}

function textoEscolhaDoPersonagem() {
  document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>

    </body>
    </html>
  `);

  document.head.innerHTML = `
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./scripts/index.js"></script>
    <script src="./scripts/jane.js"></script>
    <script src="./scripts/janeComMark.js"></script>
    <script src="./scripts/janeComDiana.js"></script>
    <script src="./scripts/mark.js"></script>
    <script src="./scripts/markComJane.js"></script>
    <script src="./scripts/markComDiana.js"></script>
    <script src="./scripts/diana.js"></script>
    <script src="./scripts/dianaComJane.js"></script>
    <script src="./scripts/dianaComMark.js"></script>
    <link rel="stylesheet" href="./styles/index.css" />
    <title>Escolha seu personagem</title>
  `;

  document.body.id = "content";

  var texto = `
  <p>
  Você pode decidir o futuro de uma dessas três pessoas. Quem você escolhe?
  </p>

  <p>
  1 - Jane, uma grávida que quer ter seu filho e busca as opções para fazê-lo,
  inclusive dando a própria vida para que isso aconteça, se for necessário.
  </p>

  <p>
  2 - Mark, um policial que caça e mata pessoas, pois acredita que estas estão
  tirando o direito de viver de quem poderia nascer.
  </p>

  <p>
  3 - Diana, uma senhora cansada de viver que busca encontrar alegria para
  continuar após perder seu marido.
  </p>
  `;

  document.write(texto);

  setTimeout(fazerEscolhaDoPersonagem, texto.length * 20);
}

function reiniciar() {
  location.reload();
}
