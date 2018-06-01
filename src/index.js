//Declaro variables llamando a los id de los input (textarea e input)
let textoE = document.getElementById('textoEntrada');
let textoS = document.getElementById('textoSalida'); 
let numD = document.getElementById('númeroDesplazamiento');

//Declaro variables llamando a los id de los botones
let bCifrar = document.getElementById('botonCifrado');
let bDescifrar = document.getElementById('botonDescifrado');

//Creo eventos de los botones para que ejecuten las funciones de cifrado y descifrado
bCifrar.addEventListener('click', () => {
    textoS.value =  cipher.encode(parseInt(numD.value), textoE.value)
});
bDescifrar.addEventListener('click', () => {
    textoS.value = cipher.decode(parseInt(numD.value), textoE.value)
});