

import { LOCALHOST } from './session.js';

function envioEmailcliente(emailteste) { //envia e deleta o pdf gerado 

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": emailteste
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${LOCALHOST}/user/assistencia/emailcliente`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

export { envioEmailcliente };
