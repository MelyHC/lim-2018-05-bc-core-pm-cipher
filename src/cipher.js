window.cipher = {
    encode :  (offset, string) =>  {     
        //Declaro una variable donde se almacenara el texto cifrado
        let caracter = '';
        //Bucle para recorrer el texto ingresado
        for (let i = 0; i < string.length; i++ ) {
            //Obteniendo el código Ascii de cada letra del texto ingresado
            let coAscii = string.charCodeAt(i); 
            //Evalua que el dato de entrada este entre los parámetros asignados
            if(coAscii >= 65 && coAscii <= 90) {
                let letraMayu = String.fromCharCode((coAscii - 65 + offset) % 26 + 65);
                caracter += letraMayu;
            } else if(coAscii >= 97 && coAscii <= 122) {
                let letraMinu = String.fromCharCode((coAscii - 97 + offset) % 26 + 97);
                caracter += letraMinu
            } else if(coAscii >= 48 && coAscii <= 57) {
                let numero = String.fromCharCode((coAscii - 48 + offset) % 10 + 48);
                caracter += numero;
            } else {
                let oCaracter = String.fromCharCode(coAscii)
                caracter += oCaracter;
            }
        }
        return caracter;
    },

    decode : (offset, string) => {
        //Declaro una variable donde se almacenara el texto descifrado
        let caracter = '';
        //Bucle para recorrer el texto ingresado
        for (let i = 0; i < string.length; i++ ) {
            //Obteniendo el código Ascii de cada letra del texto ingresado
            let coAscii = string.charCodeAt(i);
            //Filtro el coAscii para aplicar la fórmula correspondiente
            if(coAscii >= 65 && coAscii <= 90) {
                let letraMayu = String.fromCharCode((coAscii - 90 - offset) % 26 + 90);
                caracter += letraMayu;
            } else if(coAscii >= 97 && coAscii <= 122) {
                let letraMinu = String.fromCharCode((coAscii - 122 - offset) % 26 + 122);
                caracter += letraMinu;
            } else if(coAscii >= 48 && coAscii <= 57) {
                let numero = String.fromCharCode((coAscii - 57 - offset) % 10 + 57);
                caracter += numero;
            } else {
                let oCaracter = String.fromCharCode(coAscii)
                caracter += oCaracter;
            }
        }
        return caracter;
    },

    createCipherWithOffset: (offset) => {
        return {
            encode:(string) => {return cipher.encode(offset, string)},
            decode:(string) => {return cipher.decode(offset, string)}
        }
    }
}
