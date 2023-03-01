function verificarNumeroPar() {
  const numero = Number(prompt("Digite um número:"));
  if (numero % 2 === 0) {
    console.log(`Este ${numero} é par`);
  } else {
    console.log(`Este ${numero} é ímpar`);
  }
}

verificarNumeroPar();
