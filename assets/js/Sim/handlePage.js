
import { simularCpAuto } from './cpAuto.js';
import { simularCpPuro } from './cpPuro.js';


function HabilitarInputParaDebitoEmConta(){
    let formaPagamento = document.getElementById("formaPagamento");
    let agencia = document.getElementById("agencia");
    let conta = document.getElementById("conta");
    let digito = document.getElementById("digito");
    if(formaPagamento.value == 17){
        agencia.disabled = false;
        conta.disabled = false;
        digito.disabled = false;
    }else if(formaPagamento.value == 16){
        agencia.disabled = true;
        conta.disabled = true;
        digito.disabled = true;
    }
};


function verificaCep() {
    let inputCep = document.querySelector('input[name=cep]');
    let cep = inputCep.value.replace('-', '');
    let url = 'https://viverebrasil.com.br/sanredapigwpro/api/pro/address/zipcode/'+cep+'/address';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200){
                 let idCidade = getCountryId(JSON.parse(xhr.responseText));
                 document.getElementById("code_city").value =idCidade;
            };
        };
    };
    xhr.send();
};


function getCountryId(json) {
    let cityId = json.countyId;
    let street = json.street;
    let district =json.district;
    let city=json.city;
    let state =json.state;

    document.getElementById("rua").value =street;
    document.getElementById("bairro").value =district;
    document.getElementById("cidade").value =city;
    document.getElementById("uf").value =state;

    return cityId;

};


function getOcupacao(sessionId,access_token){  
    var access_token =  document.getElementById("access_token").value;
    var sessionId =  document.getElementById("sessionId").value;
    var ocupacao =  document.getElementById("ocupacao");
        var myHeaders = new Headers();
        myHeaders.append("SessionIdSim", sessionId);
        myHeaders.append("Authorization", "Bearer "+access_token);
      
        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
        fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/domains/role", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
               ocupacao.innerHTML += '<option value="' + data[i].id + '">' + data[i].description + '</option>;'
            }})
        .catch(error => console.log('error', error));

};
getOcupacao();


function excluirCpAuto(){
    document.getElementById("divFilha").style.display="none";
    document.getElementById("formularioVeiculo").style.display="none";
};



function limiteVencimento(){
    var dataMaxima = document.getElementById("dataMaxima").value;
    var dataMinima = document.getElementById("dataMinima").value;
    $("#vencimento").attr({
        "max" : dataMaxima,
        "min" : dataMinima
     });
};

function reguaCpAuto(){//chamar na escolha do produto
    var valorMaxRegua = document.getElementById("inputCpAutoValor").value
    var rs ="R$ "
    valorMaxRegua = valorMaxRegua.replace(rs,'');
    valorMaxRegua = valorMaxRegua.replace('.','');
    document.getElementById("myRange").max = valorMaxRegua
};


function reguaCpPuro(){//chamar na escolha do produto
    var valorMaxRegua = document.getElementById("inputCpPuroValor").value
    var rs ="R$ "
    valorMaxRegua = valorMaxRegua.replace(rs,'');
    valorMaxRegua = valorMaxRegua.replace('.','');
    document.getElementById("myRange").max = valorMaxRegua

};


function simular(){
                    
    const pai = document.getElementById("showCpAuto");
    const filho = pai.querySelector("#divFilha");
    
    if (filho !== null) {
       simularCpAuto();
    } else {
       simularCpPuro();
    }

};

export { excluirCpAuto, reguaCpAuto, reguaCpPuro, 
         limiteVencimento, HabilitarInputParaDebitoEmConta, 
         simular, verificaCep}
