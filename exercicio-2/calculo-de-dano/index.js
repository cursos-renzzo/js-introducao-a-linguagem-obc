// Personagem 1 - Atacante

const nomeDoPersonagemAtacante = prompt(
  "Insira, por gentileza, o nome do atacante: "
);

const valorPoderAtacante = parseFloat(
  prompt("Insira, por gentileza, o valor de poder do atacante: ")
);

// Personagem 2 - Defensor

const nomeDoPersonagemDefensor = prompt(
  "Insira, por gentileza, o nome do defensor: "
);

let quantidadePontosDeVidaDefensor = parseFloat(
  prompt(
    "Insira, por gentileza, a quantidade de pontos de vida que o defensor possui: "
  )
);

const poderDeDefesaDefensor = parseFloat(
  prompt(
    "Insira, por gentileza, o valor do poder de defesa que o defensor possui: "
  )
);

const possuiEscudoDefensor = prompt(
  "Insira, por gentileza, se o defensor possui escudo ou não (Digite Verdadeiro ou Falso): "
);

// variáveis de condição para cálculos

let danoC1 = false;
let danoC2 = false;
let danoC3 = false;

let danoDiferencaC1;
let danoDiferencaC2;
let danoDiferencaC3;

// cálculos

if (
  valorPoderAtacante > poderDeDefesaDefensor &&
  possuiEscudoDefensor == "Falso"
) {
  danoC1 = true;
  danoDiferencaC1 = valorPoderAtacante - poderDeDefesaDefensor;
} else if (
  valorPoderAtacante > poderDeDefesaDefensor &&
  possuiEscudoDefensor == "Verdadeiro"
) {
  danoC2 = true;
  danoDiferencaC2 = (valorPoderAtacante - poderDeDefesaDefensor) / 2;
} else {
  danoC3 = true;
  danoDiferencaC3 = 0;
}

// informações finais

let atualizacaoVidaDefensorC1 =
  quantidadePontosDeVidaDefensor - danoDiferencaC1;

let atualizacaoVidaDefensorC2 =
  quantidadePontosDeVidaDefensor - danoDiferencaC2;

let atualizacaoVidaDefensorC3 =
  quantidadePontosDeVidaDefensor - danoDiferencaC3;

if (danoC1) {
  alert(
    "\nNome do Atacante: " +
      nomeDoPersonagemAtacante +
      "\nValor do Poder do Atacante: " +
      valorPoderAtacante +
      "\nNome do Defensor: " +
      nomeDoPersonagemDefensor +
      "\nPoder de Defesa do Defensor: " +
      poderDeDefesaDefensor +
      "\nVida do defensor (Antes Do Dano): " +
      quantidadePontosDeVidaDefensor +
      "\nVida do defensor (Depois Do Dano): " +
      atualizacaoVidaDefensorC1 +
      "\nDano Causado: " +
      danoDiferencaC1 +
      "\nPossui escudo?: " +
      possuiEscudoDefensor
  );
} else if (danoC2) {
  alert(
    "\nNome do Atacante: " +
      nomeDoPersonagemAtacante +
      "\nValor do Poder do Atacante: " +
      valorPoderAtacante +
      "\nNome do Defensor: " +
      nomeDoPersonagemDefensor +
      "\nPoder de Defesa do Defensor: " +
      poderDeDefesaDefensor +
      "\nVida do defensor (Antes Do Dano): " +
      quantidadePontosDeVidaDefensor +
      "\nVida do defensor (Depois Do Dano): " +
      atualizacaoVidaDefensorC2 +
      "\nDano Causado: " +
      danoDiferencaC2 +
      "\nPossui escudo?: " +
      possuiEscudoDefensor
  );
} else {
  alert(
    "\nNome do Atacante: " +
      nomeDoPersonagemAtacante +
      "\nValor do Poder do Atacante: " +
      valorPoderAtacante +
      "\nNome do Defensor: " +
      nomeDoPersonagemDefensor +
      "\nPoder de Defesa do Defensor: " +
      poderDeDefesaDefensor +
      "\nVida do defensor (Antes Do Dano): " +
      quantidadePontosDeVidaDefensor +
      "\nVida do defensor (Antes Do Dano): " +
      atualizacaoVidaDefensorC3 +
      "\nDano Causado: " +
      danoDiferencaC3 +
      "\nPossui escudo?: " +
      possuiEscudoDefensor
  );
}
