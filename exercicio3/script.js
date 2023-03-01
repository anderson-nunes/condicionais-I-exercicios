// function suaNacionalidade() {
//   const nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase();

//   if (nacionalidade === "brasileira") {
//     console.log(`A sua nacionalidade é do Brasil`);
//   } else if (nacionalidade === "argentina") {
//     console.log(`A sua nacionalidade é da Argentina`);
//   } else if (nacionalidade === "uruguaia") {
//     console.log(`A sua nacionalidade é Uruguai`);
//   } else if (nacionalidade === "chilena") {
//     console.log(`A sua nacionalidade é do Chile`);
//   } else if (nacionalidade === "colombiana") {
//     console.log(`A sua nacionalidade é da Colombia`);
//   } else {
//     console.log(`A sua nacionalidade não foi encontrada no sistema`);
//   }
// }

// suaNacionalidade();

// function verificarNacionalidade() {
//   const nacionalidade2 = prompt("Escreva a sua nacionalidade:");

//   const resultado2 =
//     nacionalidade2 === "brasileira"
//       ? "Você é do Brasil"
//       : nacionalidade2 === "argentina"
//       ? "Você é da Argentina"
//       : nacionalidade2 === "uruguaia"
//       ? "Você é do Uruguai"
//       : nacionalidade2 === "chilena"
//       ? "Você é do Chile"
//       : nacionalidade2 === "colombiana"
//       ? "Você é da Colombia"
//       : "Nacionalidade não encontrada";

//   console.log(resultado2);
// }

// verificarNacionalidade();

//EXERCÍCIO COM ARRAY

const nacionalidades = [
  "brasileira",
  "argentina",
  "uruguaia",
  "chilena",
  "colombiana",
];

// const nacionalidade = prompt(`Escreva a sua nacionalidade`);

console.log(nacionalidades.includes("brasileira"));
console.log(nacionalidades.includes("equatoriana"));

// EXERCÍCIO FEITO COM SWITCH

// let nacionalidade;

// const paises = prompt(`Escreva a sua nacionalidade`);

// switch (paises) {
//   case "brasileira":
//     nacionalidade;
//     console.log(`Você é do Brasil`);
//     break;
//   case "argentina":
//     nacionalidade;
//     console.log(`Você é da Argentina`);
//     break;
//   case "uruguaia":
//     nacionalidade;
//     console.log(`Você é do Uruguai`);
//     break;
//   default:
//     console.log(`Nacionalidade não encontrada`);
// }
