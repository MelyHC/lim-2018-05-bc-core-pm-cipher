//Declaro variables llamando a los id de los input (textarea e input)
let inputT = document.getElementById('inputText');
let exitT = document.getElementById('exitText'); 
let displacementN = document.getElementById('displacementNumber');

//Declaro variables llamando a los id de los botones
let encodeB = document.getElementById('encodeButton');
let decodeB = document.getElementById('decodeButton');

//Creo eventos de los botones para que ejecuten las funciones de cifrado y descifrado
encodeB.addEventListener('click', () => {
    exitT.value =  cipher.encode(parseInt(displacementN.value), inputT.value)
});
decodeB.addEventListener('click', () => {
    exitT.value = cipher.decode(parseInt(displacementN.value), inputT.value)
});