window.cipher = {
  encode: (offset, string) => {
    //Declaro una variable donde se almacenara el texto cifrado
    let characters = '';
    //Bucle para recorrer el texto ingresado
    for (let i = 0; i < string.length; i++) {
      //Obteniendo el código Ascii de cada letra del texto ingresado
      let coAscii = string.charCodeAt(i);
      //Evalua que el dato de entrada este entre los parámetros asignados
      if (coAscii >= 65 && coAscii <= 90) {
        characters += String.fromCharCode((coAscii - 65 + offset) % 26 + 65);
      } else if (coAscii >= 97 && coAscii <= 122) {
        characters += String.fromCharCode((coAscii - 97 + offset) % 26 + 97);
      } else if (coAscii >= 48 && coAscii <= 57) {
        characters += String.fromCharCode((coAscii - 48 + offset) % 10 + 48);
      } else {
        characters += String.fromCharCode(coAscii);
      }
    }
    return characters;
  },

  decode: (offset, string) => {
    //Declaro una variable donde se almacenara el texto descifrado
    let characters = '';
    //Bucle para recorrer el texto ingresado
    for (let i = 0; i < string.length; i++) {
      //Obteniendo el código Ascii de cada letra del texto ingresado
      let coAscii = string.charCodeAt(i);
      //Evalua que el dato de entrada este entre los parámetros asignados
      if (coAscii >= 65 && coAscii <= 90) {
        characters += String.fromCharCode((coAscii - 90 - offset) % 26 + 90);
      } else if (coAscii >= 97 && coAscii <= 122) {
        characters += String.fromCharCode((coAscii - 122 - offset) % 26 + 122);
      } else if (coAscii >= 48 && coAscii <= 57) {
        characters += String.fromCharCode((coAscii - 57 - offset) % 10 + 57);
      } else {
        characters += String.fromCharCode(coAscii);
      }
    }
    return characters;
  },

  createCipherWithOffset: (offset) => {
    return {
      encode: (string) => cipher.encode(offset, string),
      decode: (string) => cipher.decode(offset, string)
    }
  }
}
