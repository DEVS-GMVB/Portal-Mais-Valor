//Secundario
let cpfSecundario = document.getElementById("cpfSecundario");
cpfSecundario.addEventListener('blur', () => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "cnpj": cpfSecundario.value
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(URL + "/user/secundario", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
        $("#idSec").val("");
      } else {
        $("#idSec").val(data[0].parceiro);
      }
    })
    .catch(error => console.log('error', error));
})

cpfSecundario.addEventListener('keyup', () => {
  let secund = document.getElementById('idSec')
  if (secund.value.length > 0) {
    $('#idSec').val('')
  }
})

    //Terceario
    let cpfTerceario = document.getElementById('cpfTerceario')
    cpfTerceario.addEventListener('blur', () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "cnpj": cpfTerceario.value
    });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(URL + "/user/terceario", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      if (data[0].gerente  === "NAO INFORMADO NA INSERA‡A?O") {
        $("#idTerc").val("");
      } else {
        $("#idTerc").val(data[0].gerente);
      }
    })
    .catch(error => console.log('error', error));
})

cpfTerceario.addEventListener('keyup', () => {
  let ter = document.getElementById("idTerc");
  if (ter.value.length > 0) {
    $("#idTerc").val("")
  }
})

//Quaternario
let cpfQuaternario = document.getElementById("quaternario");
cpfQuaternario.addEventListener('blur', () => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "cnpj": cpfQuaternario.value
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://172.16.0.197:3000/user/parceiros", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
        $("#idQuartenario").val("");
      } else {
        $("#idQuartenario").val(data[0].parceiro);
      }
    })
    .catch(error => console.log('error', error));
})

cpfQuaternario.addEventListener('keyup', () => {
  let quat = document.getElementById("idQuartenario");
  if (quat.value.length > 0) {
    $("#idQuartenario").val("")
  }
})

