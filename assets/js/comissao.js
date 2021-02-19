// const URL = "http://localhost:3000"
// VARS
// var quat = document.getElementById('idQuartenario')
// var qua = document.getElementById('id-quaternario')
// var sec = document.getElementById('idSecundario')
var ger = document.getElementById('idTerceario')



// window.onload = function () {

// }


const prosse = document.getElementById('comissao');
prosse.addEventListener('click', () => {

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  let bbComissao = document.getElementById('idPorcComissao').value;
  // let bbSecuncario = document.getElementById('idSecundario').value;
  let bbPorcSecundario = document.getElementById('idPorcSecundario').value;
  //let bbTerciario = document.getElementById('idTerceario').value;
  let bbPorcTerceario = document.getElementById('idPorcTerceario').value;
  let bbQuaternario = document.getElementById('idQuartenario').value;
  let bbPorcQaternario = document.getElementById('idPorcQuaternario').value;
  let santParcPromo = document.getElementById('idParceiroPromotor').value;
  let santSupervisor = document.getElementById('id-porc-supervisor').value;
  let santGerente = document.getElementById('id-porc-gerente').value;
  let santPorcQuaternario = document.getElementById('id-porc-quaternario').value;
  let santMaxComissao = document.getElementById('id-max-comissao').value;
  let santQuaternario = document.getElementById('id-quaternario').value;
  let ceParcPromo = document.getElementById('id-ce-parceiro-promotor').value;
  let ceSupervisor = document.getElementById('id-ce-supervisor').value;
  let ceGerente = document.getElementById('id-ce-gerente').value;
  let ceQuaternario = document.getElementById('id-ce-quaternario').value;
  let MaxComissao = document.getElementById('id-max-comissao').value;
  let gmgParcPromo = document.getElementById('id-gmg-parcpromo').value;
  let gmgSupervisor = document.getElementById('id-gmg-supervisor').value;
  let gmgGerente = document.getElementById('id-gmg-gerente').value;
  let gmgQuaternario = document.getElementById('id-gmg-quaternario').value;
  let gmgMaxComissao = document.getElementById('id-gmg-max-comissao').value;
  let grjParcPromo = document.getElementById('id-grj-parcpromo').value;
  let grjSupervisor = document.getElementById('id-grj-supervisor').value;
  let grjGerente = document.getElementById('id-grj-gerente').value;
  let grjQuaternario = document.getElementById('id-grj-quaternario').value;
  let grjMaxComissao = document.getElementById('id-grj-max-comissao').value;
  let tnParcPromo = document.getElementById('id-tm-parcpromo').value;
  let tsParcPromo = document.getElementById('id-ts-parcpromo').value;

  var raw = JSON.stringify({

    comissao: bbComissao,
    // secundario: bbSecuncario,
    pct_secundario: bbPorcSecundario,
    //terceario: bbTerciario,
    pct_terceario: bbPorcTerceario,
    quaternario: bbQuaternario,
    pct_quaternario: bbPorcQaternario,
    comissao_novo: santParcPromo,
    comissao_novo_sup: santSupervisor,
    comissao_novo_ger: santGerente,
    comissao_novo_quat: santPorcQuaternario,
    //% Máximo Comissão(SUP/GER/QUAT)

    qua_sant2: santQuaternario,
    comissao_inss: ceParcPromo,
    comissao_inss_sup: ceSupervisor,
    comissao_inss_ger: ceGerente,
    comissao_inss_quat: ceQuaternario,
    //% Máximo Comissão(SUP/GER/QUAT)

    governo_minas: gmgParcPromo,
    governo_minas_sup: gmgSupervisor,
    governo_minas_ger: gmgGerente,
    governo_minas_quat: gmgQuaternario,
    //% Máximo Comissão(SUP/GER/QUAT)

    prefeitura_rio: grjParcPromo,
    prefeitura_rio_sup: grjSupervisor,
    prefeitura_rio_ger: grjGerente,
    prefeitura_rio_quat: grjQuaternario,
    //% Máximo Comissão(SUP/GER/QUAT)

    //% Parceiro/Promotor MEI - tabela multi bancos 

    //% Parceiro/Promotor MEI - tabela sim

  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };



})







// Logica para fazer carregar o cnpj nos campos
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
  fetch(URL+"/user/parceiros", requestOptions)
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
  let sec = document.getElementById("idSec");
  if (sec.value.length > 0) {
    $("#idSec").val("")
  }
})

//Terceario
let cpfTerceario = document.getElementById("cpfTerceario");
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
  fetch(URL+"/user/parceiros", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
        $("#idTerc").val("");
      } else {
        $("#idTerc").val(data[0].parceiro);
      }
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,                                                                      
        redirect: 'follow'
      };  
      
      fetch("http://172.16.0.197:3000/user/cadastro/inclusao", requestOptions)
      .then(response => response.json())
    //   console.log(response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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
  fetch(URL+"/user/parceiros", requestOptions)
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


