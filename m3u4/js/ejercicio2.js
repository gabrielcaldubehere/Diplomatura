const textarea = document.getElementById("miTextarea");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
  const longitudActual = textarea.value.length;
  contador.textContent = `Caracteres: ${longitudActual}`;
});
