// VARS
// var quat = document.getElementById('idQuartenario')
// var qua = document.getElementById('id-quaternario')
// var sec = document.getElementById('idSecundario')
var ger = document.getElementById('idTerceario')
let comissaoo_tab = document.getElementById("comissao-tab");
let chavej_tab = document.getElementById("chave-tab");
let testeCont = 0;

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
  let quat = document.getElementById("idQuartenario");
  if (quat.value.length > 0) {
    $("#idQuartenario").val("")
  }
})


//Trocar de tela
const prosseguirr = document.getElementById('comissaoCadastro');
    prosseguirr.addEventListener('click', () => {
        testeCont++;
        if(testeCont === 1) {
            if (comissaoo_tab.getAttribute("aria-selected") == "true") {
              comissaoo_tab.setAttribute('aria-selected', false);
            }

            chavej_tab.setAttribute('aria-selected', true);
            chavej_tab.classList.add('active');
            comissaoo_tab.classList.remove('active');
        }
        else if(testeCont > 1) {
            // alert("etetdsasadadsf")
            chavej_tab.setAttribute('aria-selected', true);
            chavej_tab.classList.add('active');
            comissaoo_tab.classList.remove('active');

            testando.classList.remove('active');

        }

    })
    let testando = document.getElementById("comissao-tabb");
    chavej_tab.addEventListener('blur', () => {
        // comissao_tab.setAttribute('aria-selected', false);
        // alert("fdsfsdsdfs")
        chavej_tab.classList.remove('active');
        

    })