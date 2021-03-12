/*Encriptar y desencriptar una cadena con la librería crypto*/
/*https://www.npmjs.com/package/crypto-js*/
const CryptoAES = require('crypto-js/aes');
const CryptoENC = require('crypto-js/enc-utf8');
const ciphertext = CryptoAES.encrypt('my message', 'secret key 123');
const _ciphertext = CryptoAES.decrypt(ciphertext.toString(), 'secret key 123');
console.log(_ciphertext.toString(CryptoENC));

