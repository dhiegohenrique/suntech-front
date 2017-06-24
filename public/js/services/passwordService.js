"use strict";

angular.module("suntechapp").service("passwordService", passwordService);

function passwordService($http, $q) {
    function encrypt(strKey) {
  const newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const bufStrKey = new Buffer(strKey);
  for (let i = 0; i < bufStrKey.length; i++) {
    newKey[i % 16] ^= bufStrKey[i];
  }
  return newKey;
}

// function decrypt(cyphertext) {
// var secret = ")*&SuNTech%2#";

//   // const dc = crypto.createDecipheriv('aes-128-ecb', encrypt(secret), '');
//   // const decrypted = dc.update(cyphertext, 'hex', 'utf8') + dc.final('utf8');
//   // return decrypted;

//   // return AES.decrypt(cyphertext, secret);
//   var password = "123qwe";


//   var cipher = crypto.createCipheriv('aes-128-ecb', password, '');
//   var encrypted = cipher.update(text, 'utf8', 'hex')
//   encrypted += cipher.final('hex');
//   var tag = cipher.getAuthTag();
//   return encrypted;
// }

    function decrypt(text){
      console.log("entrou aqui: " + text);
      var secret = ")*&SuNTech%2#";

        var hash = CryptoJS.MD5(")*&SuNTech%2#");
        var key = CryptoJS.enc.Utf8.parse(hash);
        var iv = CryptoJS.enc.Utf8.parse('1234567812345678');
        // var iv = CryptoJS.enc.Utf8.parse(text);
        // var iv = '';
        var dec = CryptoJS.AES.decrypt(
                text, 
                key, 
                {
                    iv: iv, 
                    mode: CryptoJS.mode.ECB, 
                    padding: CryptoJS.pad.ZeroPadding 
                });
        // return CryptoJS.enc.Utf8.stringify(dec);
        return dec;

        // return CryptoJS.AES.decrypt(text, secret);


    };

    return {
        "encrypt" : encrypt,
        "decrypt" : decrypt
    }
}