/* Ejercicio 1 Cuadrados */
const body = document.querySelector("body");
const rojo = document.getElementById("rojo");
const verde = document.getElementById("verde");
const amarillo = document.getElementById("amarillo");
const resetear = document.getElementById("reset");

rojo.addEventListener("click", fondo);
verde.addEventListener("click", fondo2);
amarillo.addEventListener("click", fondo3);
resetear.addEventListener("click", reset);

function fondo() {
  body.style.backgroundColor = "red";
  rojo.style.visibility = "hidden";
  verde.style.visibility = "";
  amarillo.style.visibility = "";
  console.log(fondo);
}
function fondo2() {
  body.style.backgroundColor = "green";
  rojo.style.visibility = "";
  amarillo.style.visibility = "";
  verde.style.visibility = "hidden";
  console.log(fondo2);
}

function fondo3() {
  body.style.backgroundColor = "yellow";
  rojo.style.visibility = "";
  amarillo.style.visibility = "hidden";
  verde.style.visibility = "";
  console.log(fondo3);
}

function reset() {
  body.style.backgroundColor = "white";
  rojo.style.visibility = "";
  amarillo.style.visibility = "";
  verde.style.visibility = "";
  console.log(reset);
}

/*------------------------------------------*/
