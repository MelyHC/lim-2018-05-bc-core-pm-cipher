//Declaro variables llamando a los id de los input (textarea e input)
const inputTxt = document.getElementById('input-text');
const exitTxt = document.getElementById('exit-text');
const numDisplaceTxt = document.getElementById('displacement-number');

//Declaro variables llamando a los id de los botones
const encodeBtn = document.getElementById('encode-button');
const decodeBtn = document.getElementById('decode-button');

//Valido si los compos requeridos son completados
const validationTextNum = (text, num) => {
  if (text.length === 0 || num.length === 0) {
    alert('Debes llenar todos los compos requeridos');
    return false
  } else if (!/[1-9]/.exec(num)) {
    alert('Debes colocar un número en la casilla n de desplazamiento \n Y debe ser diferente de 0')
    return false
  } else {
    return true
  }
}

//Creo eventos de los botones para que ejecuten las funciones de cifrado y descifrado
encodeBtn.addEventListener('click', () => {
  if (validationTextNum(inputTxt.value, numDisplaceTxt.value)) {
    exitTxt.value = cipher.encode(parseInt(numDisplaceTxt.value), inputTxt.value)
  }
});
decodeBtn.addEventListener('click', () => {
  if (validationTextNum(inputTxt.value, numDisplaceTxt.value)) {
    exitTxt.value = cipher.decode(parseInt(numDisplaceTxt.value), inputTxt.value)
  }
});