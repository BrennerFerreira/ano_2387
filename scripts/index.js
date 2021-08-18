/**Função para mostrar prompt para o usuário escolhar o personagem com o qual
 * quer jogar.
 */
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
      personagemEscolhido == 3 ||
      personagemEscolhido == 42
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

/**Função para personalizar a página e representar o personagem escolhido pelo
 * usuário. Recebe um número entre 1 e 3, personaliza o background e o título e
 * escreve o texto da primeira fase do personagem escolhido.
 */
function irParaFaseDoPersonagem(number) {
  if (number == 1) {
    personalizarPaginaPersonagem("Jane");
    return textoJaneFase1();
  } else if (number == 2) {
    personalizarPaginaPersonagem("Mark");
    return textoMarkFase1();
  } else if (number == 3) {
    personalizarPaginaPersonagem("Diana");
    return textoDianaFase1();
  } else if (number == 42) {
    location.href = "./easter-egg.html";
  } else {
    location.href = "./game-over.html";
  }
}

/** Esta função mostra o prompt de escolha do personagem para o usuário e, com
 * base nessa escolha, redireciona o usuário para mostrar o texto correto e
 * personalizar a página.
 */
function fazerEscolhaDoPersonagem() {
  irParaFaseDoPersonagem(escolherPersonagem());
}

/** Devido ao fato de a função document.write apagar toda o HTML da página
 * na primeira vez que é usado, esta função é usada como um artifício para
 * escrever uma página em branco e começar a escrever novamente o conteúdo
 * correto.
 */
function primeiroDocumentWrite() {
  document.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
  </head>
  <body>

  </body>
  </html>
`);
}

/** Função utilizada para reescrever a tag head após o primeiro document.write */
function reescreverHead() {
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
}

/** Mostra o texto inicial para a escolha do personagem. */
function textoEscolhaDoPersonagem() {
  primeiroDocumentWrite();
  reescreverHead();

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

  escreverTexto(texto, fazerEscolhaDoPersonagem);
}

/** Esta função recebe dois parâmetros:
 * [texto]: é o texto que será escrito na tela para o usuário.
 * [proximaFuncao]: é a função que deve ser chamada após o tempo estipulado
 * com base no tamanho do texto informado.
 */
function escreverTexto(texto, proximaFuncao) {
  document.write(texto);
  setTimeout(proximaFuncao, texto.length * 30);
}

/** Apaga o body atual da página e personaliza o título e o background com base
 * no personagem escolhido.
 */
function personalizarPaginaPersonagem(nomeDoPersonagem) {
  document.body.innerHTML = "";
  document.title = nomeDoPersonagem;
  document.getElementsByTagName("html")[0].id = nomeDoPersonagem.toLowerCase();
}

/** Esta função recebe duas strings como parâmetros e mostra um prompt para
 * o usuário para escolher entre as duas opções.
 * Retorna o número da opção escolhida.
 */
function mostrarPrompt(opcao1, opcao2) {
  var opcaoEscolhida = prompt(`
    Qual será a sua escolha?
    1 - ${opcao1}
    2 - ${opcao2}
  `);

  while (true) {
    if (opcaoEscolhida == 1 || opcaoEscolhida == 2) {
      break;
    }
    opcaoEscolhida = prompt(`
      Digite apenas o número da sua opção.
      1 - ${opcao1}
      2 - ${opcao2}
    `);
  }
  return opcaoEscolhida;
}

/** Esta função avança para a fase 2 de cada personagem com base na opção
 * que for informada. Recebe três parâmetros:
 * [escolha]: é a opção escolhida pelo usuário (deve ser 1 ou 2).
 * [funcãoOpcao1]: função chamada caso a escolha seja igual a 1.
 * [funcãoOpcao2]: função chamada caso a escolha seja igual a 2.
 * Caso [escolha] seja diferente de 1 ou 2, redireciona o personagem para a
 * página de game over.
 */
function avancarParaFase2(escolha, funcaoOpcao1, funcaoOpcao2) {
  if (escolha == 1) {
    funcaoOpcao1();
  } else if (escolha == 2) {
    funcaoOpcao2();
  } else {
    location.href = "./game-over.html";
  }
}

/** Esta função recarrega a página para que o usuário possa jogar novamente. */
function reiniciar() {
  location.reload();
}

/** Esta função redireciona o usuário para a página inicial do jogo. */
function voltarAoInicio() {
  location.href = "./index.html";
}
