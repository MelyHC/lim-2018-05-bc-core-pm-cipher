window.cipher = {
    encode :  (offset, string) =>  {     
        //Declaro una variable donde se almacenara el texto cifrado
        let character = '';
        //Bucle para recorrer el texto ingresado
        for (let i = 0; i < string.length; i++ ) {
            //Obteniendo el código Ascii de cada letra del texto ingresado
            let coAscii = string.charCodeAt(i); 
            //Evalua que el dato de entrada este entre los parámetros asignados
            if(coAscii >= 65 && coAscii <= 90) {
                let capitalLetter = String.fromCharCode((coAscii - 65 + offset) % 26 + 65);
                character += capitalLetter;
            } else if(coAscii >= 97 && coAscii <= 122) {
                let lowerCaseLetter = String.fromCharCode((coAscii - 97 + offset) % 26 + 97);
                character += lowerCaseLetter
            } else if(coAscii >= 48 && coAscii <= 57) {
                let number = String.fromCharCode((coAscii - 48 + offset) % 10 + 48);
                character += number;
            } else {
                let otherCharacter = String.fromCharCode(coAscii)
                character += otherCharacter;
            }
        }
        return character;
    },

    decode : (offset, string) => {
        //Declaro una variable donde se almacenara el texto descifrado
        let character = '';
        //Bucle para recorrer el texto ingresado
        for (let i = 0; i < string.length; i++ ) {
            //Obteniendo el código Ascii de cada letra del texto ingresado
            let coAscii = string.charCodeAt(i);
            //Evalua que el dato de entrada este entre los parámetros asignados
            if(coAscii >= 65 && coAscii <= 90) {
                let capitalLetter = String.fromCharCode((coAscii - 90 - offset) % 26 + 90);
                character += capitalLetter;
            } else if(coAscii >= 97 && coAscii <= 122) {
                let lowerCaseLetter = String.fromCharCode((coAscii - 122 - offset) % 26 + 122);
                character += lowerCaseLetter;
            } else if(coAscii >= 48 && coAscii <= 57) {
                let number = String.fromCharCode((coAscii - 57 - offset) % 10 + 57);
                caracter += number;
            } else {
                let otherCharacter = String.fromCharCode(coAscii)
                character += otherCharacter;
            }
        }
        return character;
    },

    createCipherWithOffset: (offset) => {
        return {
            encode:(string) => {return cipher.encode(offset, string)},
            decode:(string) => {return cipher.decode(offset, string)}
        }
    }
}
