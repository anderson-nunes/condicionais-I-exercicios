function infoEstudante(idade, ensinoMedio, faculdade) {
  if (idade >= 18) {
    console.log(`Você é maior de idade`);
  } else {
    console.log(`Você é menor de idade`);
  }
  if (ensinoMedio === true) {
    console.log(`Você terminou o ensino médio`);
  } else {
    console.log(`Você não terminou o ensino médio`);
  }
  if (faculdade === true) {
    console.log(`Você não esta cursando alguma faculdade`);
  } else {
    console.log(`Você está cursando alguma faculdade`);
  }
}

infoEstudante(18, true, false);
