// VARS
var quat = document.getElementById('idQuartenario')
var qua = document.getElementById('id-quaternario')
var sec = document.getElementById('idSecundario')
var ger = document.getElementById('idTerceario')

// Mascaras

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

//%Supervisor
var campo7 = document.querySelector('#id-porc-supervisor');
campo7.addEventListener('keyup', function () {
  var d7 = campo7.value.replace(/\D/g, "");
  d7 = d7.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d7;
});

//%Gerente
var campo8 = document.querySelector('#id-porc-gerente');
campo8.addEventListener('keyup', function () {
  var d8 = campo8.value.replace(/\D/g, "");
  d8 = d8.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d8;
});

//%Quaternario
var campo9 = document.querySelector('#id-porc-quaternario');
campo9.addEventListener('keyup', function () {
  var d9 = campo9.value.replace(/\D/g, "");
  d9 = d9.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d9;
});

//%Supervisor
var campo10 = document.querySelector('#id-ce-supervisor');
campo10.addEventListener('keyup', function () {
  var d10 = campo10.value.replace(/\D/g, "");
  d10 = d10.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d10;
});

//%Gerente
var campo11 = document.querySelector('#id-ce-gerente');
campo11.addEventListener('keyup', function () {
  var d11 = campo11.value.replace(/\D/g, "");
  d11 = d11.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d11;
});

//%Quaternario
var campo12 = document.querySelector('#id-ce-quaternario');
campo12.addEventListener('keyup', function () {
  var d12 = campo12.value.replace(/\D/g, "");
  d12 = d12.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d12;
});

//%Supervisor
var campo122 = document.querySelector('#id-gmg-supervisor');
campo122.addEventListener('keyup', function () {
  var d122 = campo122.value.replace(/\D/g, "");
  d122 = d122.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d122;
});

//%Gerente
var campo13 = document.querySelector('#id-gmg-gerente');
campo13.addEventListener('keyup', function () {
  var d13 = campo13.value.replace(/\D/g, "");
  d13 = d13.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d13;
});

//%Quaternario
var campo14 = document.querySelector('#id-gmg-quaternario');
campo14.addEventListener('keyup', function () {
  var d14 = campo14.value.replace(/\D/g, "");
  d14 = d14.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d14;
});

//%Supervisor
var campo15 = document.querySelector('#id-grj-supervisor');
campo15.addEventListener('keyup', function () {
  var d15 = campo15.value.replace(/\D/g, "");
  d15 = d15.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d15;
});

//%Gerente
var campo16 = document.querySelector('#id-grj-gerente');
campo16.addEventListener('keyup', function () {
  var d16 = campo16.value.replace(/\D/g, "");
  d16 = d16.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d16;
});

//%Quaternario
var campo17 = document.querySelector('#id-grj-quaternario');
campo17.addEventListener('keyup', function () {
  var d17 = campo17.value.replace(/\D/g, "");
  d17 = d17.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
  this.value = d17;
});

// window.onload = function () {

// }


const pross = document.getElementById('comissao');
pross.addEventListener('click', () => {

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  let bbComissao = document.getElementById('idPorcComissao').value;
  //let bbSecuncario = document.getElementById('idSecundario').value;
  //let bbPorcSecundario = document.getElementById('idPorcSecundario').value;
  //let bbTerciario = document.getElementById('idTerceario').value;
  //let bbPorcTerceario = document.getElementById('idPorcTerceario').value;
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
    //pct_secundario: bbPorcSecundario,
    //terceario: bbTerciario,
   // pct_terceario: bbPorcTerceario,
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

<<<<<<< HEAD
  fetch("", requestOptions)
    .then(response => response.json())
    //.then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

})

// Secundario/Supervisor
<<<<<<< HEAD

// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
//   .then(response => response.json().then(function (data) {
//     for (let i = 0; i < data.length; i++) {
//       sec.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
//     }
//   })).catch(error => console.log('error', error));


// // Terceario/Gerente


// fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
//   .then(response => response.json().then(function (data) {
//     // console.log(data)
//     for (let i = 0; i < data.length; i++) {
//       ger.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
//     }
//   })).catch(error => console.log('error', error));
=======
  

})

>>>>>>> master






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
<<<<<<< HEAD
=======
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

  // ----------------------------------------------------
  let cpfComissaoTerc = document.getElementById('cpfTerceario')
  
  cpfComissaoTerc.addEventListener('blur',() =>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"cnpj":cpfComissaoTerc.value})
      
    var requestOptions = {
>>>>>>> 9eaf361... merge caue
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
<<<<<<< HEAD
=======
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
>>>>>>> master
  };
  fetch("http://172.16.0.197:3000/user/parceiros", requestOptions)
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
  fetch("http://172.16.0.197:3000/user/parceiros", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
        $("#idTerc").val("");
      } else {
        $("#idTerc").val(data[0].parceiro);
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
<<<<<<< HEAD
let quat = document.getElementById("idQuartenario");
if (quat.value.length > 0) {
  $("#idQuartenario").val("")
}
})
=======
    };
   
    //http://172.16.0.197:3000/user/supervisor

    fetch("http://172.16.0.197:3000/user/parceiros", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      console.log(data)
      if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
        $("#idTerc").val("");
    } else {
        $("#idTerc").val(data[0].parceiro);
    }
    })
    .catch(error => console.log('error', error));
    })

    cpfComissaoTerc.addEventListener('keyup', () => {
      let terc = document.getElementById("idTerc");
      if (terc.value.length > 0) {
          $("#idTerc").val("")
      }
      // if($("#validationParceiroPromotor").val())
    })
   
  

>>>>>>> 9eaf361... merge caue
=======
  let quat = document.getElementById("idQuartenario");
  if (quat.value.length > 0) {
    $("#idQuartenario").val("")
  }
})
>>>>>>> master
