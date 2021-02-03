// VARS
var quat = document.getElementById('idQuartenario')
var qua = document.getElementById('id-quaternario')
var sec = document.getElementById('idSecundario')
var ger = document.getElementById('idTerceario')
var teste = document.getElementById("idPorcComissao")

//Santander
var campo = document.querySelector('#idParceiroPromotor');
campo.addEventListener('keyup', function () {
  var d = campo.value.replace(/\D/g, "");
  d = d.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d;
  if (campo.value.length < 5) {
    campo.classList.add("invalido");
  } else {
    campo.classList.remove("invalido");
  }
});

//Convenios especiais
var campo1 = document.querySelector('#id-ce-parceiro-promotor');
campo1.addEventListener('keyup', function () {
  var d1 = campo1.value.replace(/\D/g, "");
  d1 = d1.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d1;
});

//Minas gerais
var campo2 = document.querySelector('#id-gmg-parcpromo');
campo2.addEventListener('keyup', function () {
  var d2 = campo2.value.replace(/\D/g, "");
  d2 = d2.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d2;
});

//Rio de janeiro
var campo3 = document.querySelector('#id-grj-parcpromo');
campo3.addEventListener('keyup', function () {
  var d3 = campo3.value.replace(/\D/g, "");
  d3 = d3.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d3;
});

//Tabela multi banco
var campo4 = document.querySelector('#id-tm-parcpromo');
campo4.addEventListener('keyup', function () {
  var d4 = campo4.value.replace(/\D/g, "");
  d4 = d4.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d4;
});

//Tabela sim
var campo5 = document.querySelector('#id-ts-parcpromo');
campo5.addEventListener('keyup', function () {
  var d5 = campo5.value.replace(/\D/g, "");
  d5 = d5.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d5;
});

//Tabela crefisa
var campo6 = document.querySelector('#id-tc-parcpromo');
campo6.addEventListener('keyup', function () {
  var d6 = campo6.value.replace(/\D/g, "");
  d6 = d6.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d6;
});


// window.onload = function () {
    
// }


const prosseguir = document.getElementById('comissao');
prosseguir.addEventListener('click', () => {

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  let bbComissao = document.getElementById('idPorcComissao').value;
  let bbSecuncario = document.getElementById('idSecundario').value;
  let bbPorcSecundario = document.getElementById('idPorcSecundario').value;
  let bbTerciario = document.getElementById('idTerceario').value;
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
    secundario: bbSecuncario,
    pct_secundario: bbPorcSecundario,
    terceario: bbTerciario,
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

  // fetch("", requestOptions)
  //   .then(response => response.json())
  //   //.then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

})

// Secundario/Supervisor

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
  .then(response => response.json().then(function (data) {
    for (let i = 0; i < data.length; i++) {
      sec.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
    }
  })).catch(error => console.log('error', error));


// Terceario/Gerente

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
  .then(response => response.json().then(function (data) {
    // console.log(data)
    for (let i = 0; i < data.length; i++) {
      ger.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
    }
  })).catch(error => console.log('error', error));

// Quaternario


// fetch("http://172.16.0.197:3000/user/quaternario", requestOptions)
//   .then(response => response.json().then(function (data) {
//     // console.log(data)
//     for (let i = 0; i < data.length; i++) {
//       quat.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
//       qua.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
//     }
//   })).catch(error => console.log('error', error));



// Mascaras




// Logica para fazer carregar o cnpj nos campos

teste.addEventListener('blur', () =>{
  alert("testetetete")
})
