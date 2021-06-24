
function simularCpPuro(cpf, access_token, sessionId, vencimento, valorEmprestimo, renda, uuid,seguro){

   var seguro= document.getElementById("seguro").value;
   var formaPagamento = document.getElementById("formaPagamento").value;
   var cpf = document.getElementById("cpf").value;
   var sessionId = document.getElementById("sessionId").value;
   var uuid = document.getElementById("uuid").value;
   var access_token = document.getElementById("access_token").value;
   var renda = document.getElementById("rendaMensal").value;
   var vencimento=document.getElementById("vencimento").value;
   var valorEmprestimo=document.getElementById("myRange").value;
   var qtdParcelas = document.getElementById("qtdParcelas").value;
    var myHeaders = new Headers();
    myHeaders.append("SessionIdSim", sessionId);
    myHeaders.append("Authorization", "Bearer "+access_token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "customer":{
            "document": cpf
        },
        "fees":{
            "tabExemption":true,
            "tcFee":false,
            "tabFee":false,
            "tcExemption":true
        },
        "parameters":{
            "channel":"SIM B",
            "tab":459166,
            "offer":"CPPuro"
        },
        "payment":{
            "account":"",
            "agency":"",
            "coupon":null,
            "digit":"",
            "downPayment":0,
            "firstPaymentDate": vencimento,
            "installmentAmount": qtdParcelas,
            "modality":"P",
            "packageNumber":0,
            "paymentFormId": formaPagamento,
            "totalValue": valorEmprestimo
        },
        "reciprocity":{
            "guarantorQuantity":0,
            "incomeValue": renda,
            "commercialProduct":""
        },
        "uuid": uuid,
        "insurance": {
            "id": seguro
        } 
    });
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/simulation/cp/", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      
       var selectParcelas = document.getElementById('qtdParcelas');
       var qtdParcelas = selectParcelas.value; //erro aqui 
       document.getElementById("qtdParcelas2").innerHTML= qtdParcelas,
       document.getElementById("taxaAnual").innerHTML= data.simulationResponse.cet.pcTaxaAnual,
       document.getElementById("inputTaxaAnual").value= data.simulationResponse.cet.pcTaxaAnual,//
       document.getElementById("taxaMensal").innerHTML= data.simulationResponse.cet.pcTaxaMensal,
       document.getElementById("inputTaxaMensal").value= data.simulationResponse.cet.pcTaxaMensal,//
       document.getElementById("valorEmprestimo2").innerHTML= document.getElementById("myRange").value,
       document.getElementById("totalPagofinal").innerHTML= data.simulationResponse.cet.valorTotalPagoFinal,
       document.getElementById("valorCadaParcela").innerHTML= data.simulationResponse.cet.valorParcela,
       document.getElementById("inputParcelas").value= data.simulationResponse.cet.valorParcela,//
       document.getElementById("vencimento2").innerHTML= document.getElementById("vencimento").value,
       document.getElementById("alertaValor").innerHTML= data.simulationResponse.alertaMensagem,
       document.getElementById("uuid").value= data.simulationResponse.uuid

       if(seguro=="84"){
          document.getElementById("resultadoSeguro").innerHTML= "Incluido:  "+data.simulationResponse.cet.seguroBem.nmSeguro
       }else if (seguro=="75"){
        document.getElementById("resultadoSeguro").innerHTML= "Não";
       }
     //  ervj(data);
    })
    .catch(error => console.log('error', error));
}

export { simularCpPuro }