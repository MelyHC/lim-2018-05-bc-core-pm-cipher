let textoE = document.getElementById('textoEntrada');
const bCifrar = document.getElementById('botonCifrado');
const bDecifrar = document.getElementById('botonDescifrado');
let textoS = document.getElementById('textoSalida');

let letraÑ = String.fromCharCode(165);//UFT-8 usa un código diferente al Ascii para algunas letras

bCifrar.addEventListener('click', function code() {
    let caracter = '';
    let textoL = textoE.value;
    for (let i = 0; i < textoL.length; i++ ) {
        //Obteniendo el código Ascii de cada letra de mi texto
        let coAscii = textoL.charCodeAt(i); 
        if(coAscii >= 65 && coAscii <= 90) {
            let letraMayu = String.fromCharCode((coAscii - 65 + 4) % 26 + 65);
            caracter += letraMayu;
        } else if(coAscii >= 97 && coAscii <= 122) {
            let letraMinu = String.fromCharCode((coAscii - 97 + 4) % 26 + 97);
            caracter += letraMinu
        } else if(coAscii >= 48 && coAscii <= 57) {
            let numero = String.fromCharCode((coAscii - 48 + 4) % 10 + 48);
            caracter += numero;
         /*} else if(coAscii >= 160 && coAscii <= 165) {
            let intento = String.fromCharCode((coAscii- 160 + 4) % 6 + 160);
            caracter += intento*/
        } else {
            let otroCaracter = String.fromCharCode(coAscii)
            caracter += oCaracter;
        }
    }
    return textoS.value = caracter;
});

bDecifrar.addEventListener('click', function decode() {
    let caracter = '';
    let textoL = textoE.value;
    for (let i = 0; i < textoL.length; i++ ) {
        let coAscii = textoL.charCodeAt(i);
        if(coAscii >= 65 && coAscii <= 90) {
            let letraMayu = String.fromCharCode((coAscii - 90 - 4) % 26 + 90);
            caracter += letraMayu;
        } else if(coAscii >= 97 && coAscii <= 122) {
            let letraMinu = String.fromCharCode((coAscii - 122 - 4) % 26 + 122);
            caracter += letraMinu;
        } else if(coAscii >= 48 && coAscii <= 57) {
            let numero = String.fromCharCode((coAscii - 57 - 4) % 10 + 57);
            caracter += numero;
        } else {
            let otroCaracter = String.fromCharCode(coAscii)
            caracter += oCaracter;
        }
    }
    return textoS.value = caracter;
});