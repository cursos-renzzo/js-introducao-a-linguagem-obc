const prompt = require("prompt-sync")({ sigint: true });

const valorEmMetros = parseFloat(
  prompt(
    "Informe, por gentileza, o valor que você deseja converter (em metros): "
  )
);

const opcao = prompt(
  "Informe, por gentileza, para qual unidade de medida você deseja converter: \na) milímetro \nb) centímetro \nc) decímetro \nd) decâmetro \ne) hectômetro \nf) quilômetro\n"
);

switch (opcao) {
  case "a":
    let milimetro = valorEmMetros * 1000;
    console.log('Resultado da conversão: ' + valorEmMetros + ' m' + '-> ' + milimetro + ' mm.');
    break;

  case "b":
    let centimetro = valorEmMetros * 100;
    console.log('Resultado da conversão: ' + valorEmMetros + ' m' + '-> ' + centimetro + ' cm.');
    break;

  case "c":
    let decimetro = valorEmMetros * 10;
    console.log('Resultado da conversão: ' + valorEmMetros + ' m' + '-> ' + decimetro + ' dm.');
    break;

  case "d":
    let decametro = valorEmMetros / 10;
    console.log('Resultado da conversão: ' + valorEmMetros + ' m' + '-> ' + decametro + ' dam.');
    break;

  case "e":
    let hectometro = valorEmMetros / 100;
    console.log(hectometro);
    break;

  case "f":
    let quilometro = valorEmMetros / 1000;
    console.log(quilometro);
    break;
}
