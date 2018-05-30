let textoE = document.getElementById('textoEntrada');
let textoS = document.getElementById('textoSalida');

let bCifrar = document.getElementById('botonCifrado');
let bDecifrar = document.getElementById('botonDescifrado');

let texto = bCifrar.addEventListener('click', cipher.encode(33, textoE.value))
let carta = bDecifrar.addEventListener('click', cipher.decode(33, textoE.value))

textoS.value = texto
textoS.value = carta