// carro um

const nomeCarroUm = prompt("Insira, por gentileza, o nome do primeiro carro: ");

const velocidadeCarroUm = parseFloat(
  prompt("Insira, por gentileza, a velocidade deste carro: ")
);

// carro dois

const nomeCarroDois = prompt(
  "Insira, por gentileza, o nome do segundo carro: "
);
const velocidadeCarroDois = parseFloat(
  prompt("Insira, por gentileza, a velocidade deste carro: ")
);

// condições

if (velocidadeCarroUm === velocidadeCarroDois) {
  alert("A velocidade do carro um é a mesma velocidade do carro dois.");
} else if (velocidadeCarroUm > velocidadeCarroDois) {
  alert("A velocidade do carro um é maior que a velocidade do carro dois.");
} else {
  alert("A velocidade do carro dois é maior que a velocidade do carro um.");
}
