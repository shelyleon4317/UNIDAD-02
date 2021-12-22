/* Se crean las variables let para conectar el DOM con nuestra página HTML */
let string = document.getElementById('mensaje');
let offset = document.getElementById('desplazar');
let msjCode = document.getElementById('cifrado');
let msjDecode = document.getElementById('descifrador');
let resultadoCode = document.getElementById('buttonA');
let resultadoDecode = document.getElementById('buttonB');
let resultadoClear = document.getElementById('limpiar');
let offsetHackerEdition = 33;

 src="practicasesion33.html"

/* Se crea el evento para el botón de clickeo de cifrado */
resultadoCode.addEventListener('click', codifiction);

function codifiction() {
  msjCode.innerHTML = window.cipher.encode(offset.value, string.value);
};