var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("Authorization", "Basic NkVYQzhBUEoxbGprNEFpeUQ4MDdLa09WMFlzYTpWMDZKdTBFTWN2TG40VVVmczhpdXVVUmZibU1h");

var raw = "";

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://gateway.apiserpro.serpro.gov.br/token?grant_type=client_credentials", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //************************************************************** */



var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer d8c1d44b-2862-3195-b61b-575b3bf0324d");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://gateway.apiserpro.serpro.gov.br/consulta-cpf-df/v1/cpf/42084654840", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));