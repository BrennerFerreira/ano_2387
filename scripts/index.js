function escolherPersonagem() {
  var personagemEscolhido = prompt(`
    Escolha seu personagem:
    1 - Mulher grávida
    2 - Policial
    3 - Senhora
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
        1 - Mulher grávida
        2 - Policial
        3 - Senhora
        `);
  }
  return personagemEscolhido;
}

function irParaFaseDoPersonagem(number) {
  if (number == 1) {
    return gravida1();
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
