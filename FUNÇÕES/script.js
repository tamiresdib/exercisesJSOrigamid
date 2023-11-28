// Crie uma função para verificar se um valor é Truthy

function isTrue(dado) {
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function periQuadr(quadrado) {
  perime = quadrado * 4;
  return perime;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeSobrenome(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
function numPar(num) {
  if (num % 2 === 0) {
    console.log("É Par");
  } else {
    console.log("É impar");
    return numPar;
  }

  // Crie uma função que retorne o tipo de
  // dado do argumento passado nela (typeof)

  function tipodeDado(dado) {
    return typeof dado;
  }

  // addEventListener é uma função nativa do JavaScript
  // o primeiro parâmetro é o evento que ocorre e o segundo o Callback
  // utilize essa função para mostrar no console o seu nome completo
  // quando o evento 'scroll' ocorrer.

  addEventListener("scroll", function () {
    console.log("Tamires de Souza Dib Rodrigues");
  });

  // Corrija o erro abaixo
  var totalPaises = 193;
  function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
}
