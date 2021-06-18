var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://consulta.confirmeonline.com.br/IntegracaoRest/webresources/integracao/completo?usuario=INTAQUIM&senha=euaFOQV4&sigla=XVGYU&cpfcnpj=420.846.548-40&nome=Thaynara Cristina Rodrigues&telefone=1146367318\n", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));