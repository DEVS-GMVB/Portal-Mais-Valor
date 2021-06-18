var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
myHeaders.append("x-client-auth", "Basic UVVDZXZENkUwM1k1ek9XSFl2ejM5MWtDdzhMRjRTTTg6cExnR3pKRTE4cFo4amsxTA==");

var urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://api.claro.com.br/oauth2/v1/token", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


  //*************************************************************** */



  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("x-client-auth", "Bearer bGBwpd1JCS4OuvAjm36gen4A9ztZ");
myHeaders.append("X-CustomerID", "claro_teste");

var raw = JSON.stringify({
  "data": {
    "customer": {
      "networkMsisdn": "5511958022948",
      "cpf": "98677851003"
    }
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.claro.com.br/customers/v1/validationsphones", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));