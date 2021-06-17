
function chamaHtml(){//jogar a funcao get dentro desse codigo

    var inclusaoInputsCpAuto = document.getElementById("showCpAuto");
    inclusaoInputsCpAuto.innerHTML= 
           `<div class="bg-titulo mt-0" id="divFilha">
    
            <h3>
                Dados do Veículo

            </h3>

            </div>


            <div class="form-row" id="formularioVeiculo">
                <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Marca</label>
                    <select class="form-control form-control-sm" id="marca" onblur = "getAnoCombustivel();" >
                    </select>
                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Ano/Combustível</label>
                    <select class="form-control form-control-sm" id="anoCombustivel"   onblur = "getModeloVeiculo();" >
                    </select>
                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Modelo</label>
                    <select class="form-control form-control-sm" id="modelo" name="modeloVeiculo"  >
                    </select>

                </div>

                <div class="col-md-2 mb-3">
                    <label for="validationCustom02">UF Licença</label>
                    <select class="form-control form-control-sm" id="ufVeiculo" onblur = "salvarVeiculo();">
                    <option value=""></option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                    </select>

                </div>
        <br><br><br> 
        
        
        ` ;
        getMarcaVeiculo();
};



function getMarcaVeiculo(access_token,sessionId){//

    var access_token =  document.getElementById("access_token").value;
    var sessionId =  document.getElementById("sessionId").value;
    var marca =  document.getElementById("marca");
        var myHeaders = new Headers();
        myHeaders.append("SessionIdSim", sessionId);
        myHeaders.append("Authorization", "Bearer "+access_token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/domains/vehicle-makes/C", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
               marca.innerHTML += '<option value="' + data[i].id + '">' + data[i].description + '</option>;' 
            }

        
        })
        .catch(error => console.log('error', error));


};




function simularCpAuto(cpf, access_token, sessionId, vencimento, valorEmprestimo, renda, uuid,
    vAutoYearFuel,vAutoMake,vAutoModel,vAutoYear,seguro){
        var option = $( "#modelo" ).find("option:checked");
        var vAutoYearFuel    = option.data('yearfuelid');
        

        vAutoMake = document.getElementById('marca').value;
        vAutoModel =document.getElementById('modelo').value;
        vAutoYear = document.getElementById('anoCombustivel').value;

    seguro= document.getElementById("seguro").value;
     var formaPagamento = document.getElementById("formaPagamento").value;//7 vira 9 e o 8 vira 10
    if(formaPagamento=="16"){
      var  formaPagamentoCpAuto="16";
    };
    if(formaPagamento=="17"){
      var formaPagamentoCpAuto="17";
    };

    var cpf = document.getElementById("cpf").value;
    var sessionId = document.getElementById("sessionId").value;
    var uuid = document.getElementById("uuid").value;
    var access_token = document.getElementById("access_token").value;
    var renda = document.getElementById("rendaMensal").value;
    var vencimento=document.getElementById("vencimento").value;
    var valorEmprestimo=document.getElementById("myRange").value;
    var uuid = document.getElementById("uuid").value;
    var qtdParcelas = document.getElementById("qtdParcelas").value;
    var myHeaders = new Headers();
    myHeaders.append("SessionIdSim", sessionId);
    myHeaders.append("Authorization", "Bearer "+access_token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "customer":{
            "document":cpf
        },
        "fees":{
            "tabExemption":true,
            "tcFee":false,
            "tabFee":false,
            "tcExemption":true
        },
        "fleet":{
            "id":8
        },"insurance":{
            "id":75,
            "insurancerCode":""
        },
        "parameters":{
            "channel":"SIM A",
            "tab":459166
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
            "paymentFormId": formaPagamentoCpAuto,
            "totalValue":valorEmprestimo
        },
        "reciprocity":{
            "guarantorQuantity":0,
            "incomeValue":renda,
            "commercialProduct":""
        },
        "uuid":uuid,
        "vehicle":{
            "adapted":false,
            "fuelYearModelId": vAutoYearFuel,
            "makeId":vAutoMake,
            "modelId":vAutoModel,
            "vehicleTypeId":4,
            "taxi":false,
            "ufLicensingCode":"SP",
            "yearManufacture":vAutoYear
        }});
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/simulation/cp/", requestOptions)
    .then(response => response.json())
    .then(function (data) {
        if(data.code==400){

            alert(data.errors[0])
        }
       var selectParcelas = document.getElementById('qtdParcelas');
       var qtdParcelas = selectParcelas.value; //erro aqui 
       document.getElementById("qtdParcelas2").innerHTML= qtdParcelas,
       document.getElementById("taxaAnual").innerHTML= data.simulationResponse.cetInformation.pcTaxaAnual;
       document.getElementById("inputTaxaAnual").value= data.simulationResponse.cetInformation.pcTaxaAnual,//
       document.getElementById("taxaMensal").innerHTML= data.simulationResponse.cetInformation.pcTaxaMensal,
       document.getElementById("inputTaxaMensal").value= data.simulationResponse.cetInformation.pcTaxaMensal,//
       document.getElementById("valorEmprestimo2").innerHTML= document.getElementById("myRange").value,
       document.getElementById("totalPagofinal").innerHTML= data.simulationResponse.cetInformation.valorTotalPagoFinal,
       document.getElementById("valorCadaParcela").innerHTML= data.simulationResponse.cetInformation.valorParcela,
       document.getElementById("inputParcelas").value= data.simulationResponse.cetInformation.valorParcela,//
       document.getElementById("vencimento2").innerHTML= document.getElementById("vencimento").value,
       document.getElementById("alertaValor").innerHTML= data.simulationResponse.alertaMensagem,
       document.getElementById("uuid").value= data.simulationResponse.uuid
       
     
      if(seguro=="84"){
          document.getElementById("resultadoSeguro").innerHTML= "Incluido:  "+data.simulationResponse.cetInformation.seguroBem.nmSeguro
       }else if (seguro=="75"){
        document.getElementById("resultadoSeguro").innerHTML= "Não";
       }
      //   ervj(data);
    })
    .catch(error => console.log('error', error));
}


export { chamaHtml, simularCpAuto };