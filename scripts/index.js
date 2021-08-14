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
    return policial1();
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
  document.body.innerHTML = "";
  document.write(`
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
  `);

  setTimeout(fazerEscolhaDoPersonagem, 5000);
}

function reiniciar() {
  location.reload();
}
