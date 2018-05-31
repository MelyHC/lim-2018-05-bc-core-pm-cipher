//Declaro variables llamando a
let textoE = document.getElementById('textoEntrada');
let textoS = document.getElementById('textoSalida');
let numD = document.getElementById('númeroDesplazamiento');

let bCifrar = document.getElementById('botonCifrado');
let bDescifrar = document.getElementById('botonDescifrado');

bCifrar.addEventListener('click', function () {
    textoS.value =  cipher.encode(parseInt(numD.value), textoE.value)
});
bDescifrar.addEventListener('click', function() {
    textoS.value = cipher.decode(parseInt(numD.value), textoE.value)
});