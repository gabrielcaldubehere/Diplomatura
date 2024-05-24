/* EJERCICIO 1 */
var metros = parseInt(prompt("¿Cuantos metros recorrió?:"));

if (metros <= 1000) {
  console.log("Los metros recorridos son", "", +metros);
  console.log("Se recomienda ir a pie");
  document.write("<h1>Se recomienda ir a pie</h1>");
} else if (metros > 1000 && metros <= 10000) {
  document.write("<h1>Se recomienda usar bicicleta</h1>");
  console.log("Los metros recorridos son:", "", +metros);
  console.log("Se recomienda usar bicicleta");
} else if (metros > 10000 && metros <= 30000) {
  document.write("Se recomienda usar colectivo</h1>");
  console.log("Los metros recorridos son:", "", +metros);
  console.log("Se recomienda usar colectivo");
} else if (metros > 30000 && metros <= 100000) {
  document.write("<h1>Se recomienda usar tren</h1>");
  console.log("Los metros recorridos son:", "", +metros);
  console.log("Se recomienda usar tren");
} else {
  document.write("<h1>Se recomienda usar avión</h1>");
  console.log("Los metros recorridos son:", "", +metros);
  console.log("Se recomienda usar avión");
}

/* EJERCICIO 2 */

var num1 = parseInt(prompt("Ejercicio2 Ingrese un Numero:"));
var num2 = parseInt(prompt("Ejercicio2 Ingrese otro Numero:"));
var num3 = parseInt(prompt("Ejercicio2 Ingrese otro Numero:"));
var num4 = parseInt(prompt("Ejercicio2 Ingrese otro Numero:"));
var num5 = parseInt(prompt("Ejercicio2 Ingrese el otro Numero:"));
var num6 = parseInt(prompt("Ejercicio2 Ingrese el último Numero:"));
const numeros = [num1, num2, num3, num4, num5, num6];
console.log(numeros);

let maxnum = Math.max(...numeros);
console.log("El numero maximo en el array es", "", +maxnum);

document.write("<h2>El numero maximo en el array es:</h2>", "", +maxnum);
