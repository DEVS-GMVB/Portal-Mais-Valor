
import { incluirBd } from "./inserir.js";

var token = "";
var valor_seguro = 0;

 function cartaoCredito() {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "username": "mv_operacao",
    "company_name": "suthub",
    "password": "Gmvb@2020"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/login", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      token = response.sessionToken,
        assistencia(token);
    })
    .catch(error => console.log('error', error));

};




 function assistencia(token) {

  var nome = document.getElementById("nome").value;
  var ddd = document.getElementById("ddd").value;
  var telefone = document.getElementById("telefone").value;
  var cpf = document.getElementById("cpf").value;
  var email = document.getElementById("email").value;
  var data_nascimento = document.getElementById("nascimento").value;
  var cidade = document.getElementById("cidade2").value;
  var bairro = document.getElementById("bairro").value;
  var numero = document.getElementById("numero").value;
  var estado = document.getElementById("estado2").value;
  var rua = document.getElementById("rua").value;
  var cep = document.getElementById("cep").value;
  var product_id = document.getElementById("tipoAssistencia").value;
  var quote = 0;
  var uuid = 0;

  if (product_id == 670) {
    quote = 413;
    product_id = parseInt(product_id);

  } else if (product_id == 669) {
    quote = 414;
    product_id = parseInt(product_id);
  }

  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "product_ids": [product_id],
    "insurance_holder": {
      "name": nome,
      "phones": [{
        "area_code": ddd,
        "extension": "",
        "number": telefone,
        "type": "mobile"
      }],
      "cpf": cpf,
      "email": email,
      "birth_date": data_nascimento,
      "addresses": [{
        "additional_details": "",
        "city": cidade,
        "country": "BR",
        "district": bairro,
        "number": numero,
        "state": estado,
        "street": rua,
        "zipcode": cep
      }]
    },
    "risk_address": {
      "additional_details": "",
      "city": cidade,
      "country": "BR",
      "district": bairro,
      "number": numero,
      "state": estado,
      "street": rua,
      "zipcode": cep
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/quote/" + quote + "", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      console.log(response)
      uuid = response.data.contract_id,
        valor_seguro = response.data.payment_options[0].valor_total
      document.getElementById("valor_assistencia").value = valor_seguro
      enviarEmail(token, uuid, nome, email);
    })
    .catch(error => console.log('error', error));


};


 function enviarEmail(token, uuid, nome, email) {

  var myHeaders = new Headers();
  myHeaders.append("token", token);
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "email": {
      "recipients": [email],
      "contact_name": nome,
      "uuid": uuid
    }
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/email/2", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      contrato(token, uuid);
    })
    .catch(error => console.log('error', error));

};


 function contrato(token, uuid) {

  var product_id = document.getElementById("tipoAssistencia").value;
  if (product_id == 670) {
    var product = "resid";
  } else if (product_id == 669) {
    var product = "saude";
  }
  var myHeaders = new Headers();
  myHeaders.append("token", token);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://api.suthubservice.com/v2/MaisValor/contract/" + uuid + "/sendSMS?product=" + product + "", requestOptions)
    .then(response => response.json())
    .then(function (response) {
      if (response.status == "SMS sent.") {
        incluirBd(uuid);
      }
    })
    .catch(error => console.log('error', error));
}



export { cartaoCredito };