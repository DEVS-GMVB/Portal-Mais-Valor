

import { LOCALHOST } from './session.js'


function pegarPdf(html, email) { //fazer um post sem variavel 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "html": html,
      "nomeArquivo": email
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/htmlToPdf`, requestOptions)
      .then(response => response.text())
      .then(result =>
  
        console.log(result)
      )
      .catch(error => console.log('error', error));
  }

  export { pegarPdf };