const btn = document.getElementById("btn");
const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const resultado = document.getElementById("imc");

btn.addEventListener("click", function () {
  const altQuad = altura.value * altura.value;
  const imcFloat = peso.value / altQuad;
  const imc = imcFloat.toFixed(2);
  resultado.innerHTML = imc;

  let div = document.getElementById("status");

  if (imc < 18.5) {
    div.innerHTML = "peso baixo!";
  } else if (imc <= 24.9) {
    div.innerHTML = "peso saudavel!";
  } else if (imc <= 29.9) {
    div.innerHTML = "sobrepeso!";
  } else if (imc > 30.0) {
    div.innerHTML = "obesidade!";
  }
});
