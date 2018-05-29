let textoE = document.getElementById('textoEntrada');
let textoS = document.getElementById('textoSalida');

window.cipher = {
    encode :  () =>  {     
        let caracter = '';
        let textoL = textoE.value;
        for (let i = 0; i < textoL.length; i++ ) {
            //Obteniendo el código Ascii de cada letra de mi texto
            let coAscii = textoL.charCodeAt(i); 
            //Filtro el coAscii para aplicar la fórmula correspondiente y devolver 
            if(coAscii >= 65 && coAscii <= 90) {
                let letraMayu = String.fromCharCode((coAscii - 65 + 4) % 26 + 65);
                caracter += letraMayu;
            } else if(coAscii >= 97 && coAscii <= 122) {
                let letraMinu = String.fromCharCode((coAscii - 97 + 4) % 26 + 97);
                caracter += letraMinu
            } else if(coAscii >= 48 && coAscii <= 57) {
                let numero = String.fromCharCode((coAscii - 48 + 4) % 10 + 48);
                caracter += numero;
            } else {
                let oCaracter = String.fromCharCode(coAscii)
                caracter += oCaracter;
            }
        }
        textoS.value = caracter;
    },

    decode : () => {
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
                let oCaracter = String.fromCharCode(coAscii)
                caracter += oCaracter;
            }
        }
        textoS.value = caracter;
    },
}
