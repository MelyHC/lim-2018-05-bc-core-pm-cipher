let textoT = document.getElementById('texto');
const bCode = document.getElementById('botonCifrado');
const bDecode = document.getElementById('botonDescifrado');

bCode.addEventListener('click', function code() {
    let caracter = [];
    let textoL = textoT.value
    for (let i = 0; i < textoL.length; i++ ) {
        caracter[i] = textoL.charCodeAt(i) + 4;
    }
    textoL = caracter.toString();
});

bDecode.addEventListener('click', function decode() {
    for (let i = 0; i <= textoT.lengt; i++ ) {
        
    }
    textoT.value = 'Cambiar texto para decoficicarlo';
});
console.log(textoT)