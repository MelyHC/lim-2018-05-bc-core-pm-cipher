let textoE = document.getElementById('textoEntrada');
let textoS = document.getElementById('textoSalida');

const bCifrar = document.getElementById('botonCifrado');
const bDecifrar = document.getElementById('botonDescifrado');


let letraÑ = String.fromCharCode(165);//UFT-8 usa un código diferente al Ascii para algunas letras

bCifrar.addEventListener('click', cipher.encode(offset, textoE.value))

bDecifrar.addEventListener('click', cipher.decode(offset, textoE.value))
