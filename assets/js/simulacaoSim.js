

    
var  name =document.getElementById("nome").value;
var  email =document.getElementById("email").value;
var  dateOfBirthFoundation =document.getElementById("dataNascimento").value;
ddd =document.getElementById("ddd").value;
number =document.getElementById("telefone").value;
ddd= ddd.toString();
number = number.toString();
var  cpf=document.getElementById("cpf").value;
var  renda =document.getElementById("rendaMensal").value;
var vencimento=document.getElementById("vencimento").value;
var access_token="";
var sessionId="";
var qtdParcelas = [];
var  dataMaxima = "";
var  dataMinima = "";
var  cpAutoKey = "";
var  cpAutoShow = "";
var  cpAutoValor = "";
var  cpAutoParcelasMax = "";
var  cpPuroKey = "";
var  cpPuroShow = "";
var  cpPuroValor = "";
var  cpPuroParcelasMax = "";
var  uuid = "";
var  code = "";
var  ficoCode = "";
var  valorEmprestimo = 0;
var seguro="";
var arrayVeiculo =[];
var option =0;
var vAutoYearFuel = 0;
var vAutoMake = 0;
var vAutoModel = 0;
var vAutoTypeId=4;
var vAutoYear =0;




//REGUA VALOR DO EMPRESTIMO
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}




function gerarToken(){

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic aW50ZWdyYV9jbGk6MTIzNDU2");
    var raw = JSON.stringify({"username":"ZELIA.LEONTINA@AQUIMAISVALOR.COM.BR","password":"!QAZ2wsx"});
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://viverebrasil.com.br/sanredapigwpro/uaa/pro/auth/token", requestOptions)
    .then(response => response.json())
    .then(function (response) {
        access_token = response.access_token,
        document.getElementById("access_token").value = response.access_token,
        gerarSession(access_token)}) 
    .catch(error => console.log('error', error));

}



function gerarSession(access_token,cpf){

    cpf=document.getElementById("cpf").value;
    var myHeaders = new Headers();
    myHeaders.append("Content_type", "application/json");
    myHeaders.append("Authorization", "Bearer "+access_token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"documentId":cpf});
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/login/getSessionIdSim", requestOptions)
    .then(response => response.json())
    .then(function (response) {
        sessionId = response.sessionId,
        document.getElementById("sessionId").value = response.sessionId,
    preAnalise(access_token, sessionId, name, email, dateOfBirthFoundation, cpf, ddd, number,renda)}) //chamar uma função aqui que tenha todos os paremetros da preanálise 
    .catch(error => console.log('error', error));

};





function preAnalise(access_token, sessionId, name, email, dateOfBirthFoundation, cpf, ddd, number, renda){
        
     name =document.getElementById("nome").value;
     email =document.getElementById("email").value;
     dateOfBirthFoundation =document.getElementById("dataNascimento").value;
     ddd =document.getElementById("ddd").value;
     number =document.getElementById("telefone").value;
     cpf=document.getElementById("cpf").value;
     renda =document.getElementById("rendaMensal").value;
     var myHeaders = new Headers();
     myHeaders.append("SessionIdSim", sessionId);
     myHeaders.append("Authorization", "Bearer "+access_token);
     myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "customer":{
                "campaign":"",
                "name": name,
                "email": email,
                "dateOfBirthFoundation": dateOfBirthFoundation,
                "document": cpf,
                "cellPhone":{"ddd": ddd,
                "number": number
            }},
            "purchase":{
                "value":500,
                "financedObject":"CP",
                "subsegment":"0"
            },
            "store":{
                "name":""
            },
            "uuid":""
        });
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };
    fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/identification/cp/", requestOptions)//na hora do fetch da erro 
    .then(response => response.json())
    .then(function (data) {

        dataMaxima = document.getElementById("dataMaxima").value = data.atxResponse.firstInstallment.maximumDate  
        dataMinima = document.getElementById("dataMinima").value =data.atxResponse.firstInstallment.minimumDate,
        cpAutoShow = data.repescResponse.cpauto.show
        if(cpAutoShow=="S"){
            cpAutoKey = document.getElementById("cpAutoKey").innerHTML =data.repescResponse.cpauto.key
            cpAutoValor = document.getElementById("cpAutoValor").innerHTML =data.repescResponse.cpauto.title
            cpAutoParcelasMax =document.getElementById("cpAutoParcelasMax").innerHTML = data.repescResponse.cpauto.message
        }
        cpPuroShow = data.repescResponse.cppuro.show
        if(cpPuroShow=="S"){
            cpPuroKey = document.getElementById("cpPuroKey").innerHTML =data.repescResponse.cppuro.key
            cpPuroValor = document.getElementById("cpPuroValor").innerHTML =data.repescResponse.cppuro.title
            cpPuroParcelasMax = document.getElementById("cpPuroParcelasMax").innerHTML =data.repescResponse.cppuro.message
        } 
        uuid = document.getElementById("uuid").value =data.uuid,
        code = document.getElementById("code").value =data.repescResponse.code,
        ficoCode = document.getElementById("ficoCode").value =data.repescResponse.ficoCode
          
    })
     .catch(error => console.log('error', error));
 };



function HabilitarInputParaDebitoEmConta(value){
    let formaPagamento = document.getElementById("formaPagamento");
    let agencia = document.getElementById("agencia");
    let conta = document.getElementById("conta");
    let digito = document.getElementById("digito");
    if(formaPagamento.value == 10){
        agencia.disabled = false;
        conta.disabled = false;
        digito.disabled = false;
    }else if(formaPagamento.value == 9){
        agencia.disabled = true;
        conta.disabled = true;
        digito.disabled = true;
    }
};



function simularCpPuro(cpf, access_token, sessionId, vencimento, valorEmprestimo, renda, uuid,seguro){

            seguro= document.getElementById("seguro").value;
            formaPagamento = document.getElementById("formaPagamento").value;
            cpf = document.getElementById("cpf").value;
            sessionId = document.getElementById("sessionId").value;
            uuid = document.getElementById("uuid").value;
            access_token = document.getElementById("access_token").value;
            renda = document.getElementById("rendaMensal").value;
            vencimento=document.getElementById("vencimento").value;
            valorEmprestimo=document.getElementById("myRange").value;
            uuid = document.getElementById("uuid").value;
            qtdParcelas = document.getElementById("qtdParcelas").value;
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
               document.getElementById("taxaMensal").innerHTML= data.simulationResponse.cet.pcTaxaMensal,
               document.getElementById("valorEmprestimo2").innerHTML= document.getElementById("myRange").value,
               document.getElementById("totalPagofinal").innerHTML= data.simulationResponse.cet.valorTotalPagoFinal,
               document.getElementById("valorCadaParcela").innerHTML= data.simulationResponse.cet.valorParcela,
               document.getElementById("vencimento2").innerHTML= document.getElementById("vencimento").value;
               document.getElementById("alertaValor").innerHTML= data.simulationResponse.alertaMensagem
               if(seguro=="84"){
                  document.getElementById("resultadoSeguro").innerHTML= "Incluido:  "+data.simulationResponse.cet.seguroBem.nmSeguro
               }else if (seguro=="75"){
                document.getElementById("resultadoSeguro").innerHTML= "Não";
               }
            })// dar um inner html com os resultados da simulação 
            .catch(error => console.log('error', error));
        }


 function finalizarCpPuro(sessionId,access_token,uuid,name,cpf,dateOfBirthFoundation, email,renda,ddd,number){

            var  ddd =document.getElementById("ddd").value;
            var  number =document.getElementById("telefone").value;
            ddd= ddd.toString();
            number = number.toString();
            var access_token =  document.getElementById("access_token").value;
            var cpf =  document.getElementById("cpf").value;
            var dateOfBirthFoundation =  document.getElementById("dataNascimento").value;
            var email =  document.getElementById("email").value;
            var name =  document.getElementById("nome").value;
            var renda =  document.getElementById("rendaMensal").value;
            var sessionId =  document.getElementById("sessionId").value;
            var uuid =  document.getElementById("uuid").value;
            dateOfBirthFoundation = dateOfBirthFoundation.split('-').reverse().join('-');
            dateOfBirthFoundation = dateOfBirthFoundation.replace("-", "/");
            dateOfBirthFoundation = dateOfBirthFoundation.replace("-", "/");
            var cep =  document.getElementById("cep").value;
            var rua =  document.getElementById("rua").value;
            var numero_casa =  document.getElementById("numero_casa").value;
            var complemento =  document.getElementById("complemento").value;
            var bairro =  document.getElementById("bairro").value;
            var uf =  document.getElementById("uf").value;
            var code_city= document.getElementById("code_city").value;
            var genero =  document.getElementById("genero").value;
            var ocupacao =  document.getElementById("ocupacao").value;
            var patrimonio =  document.getElementById("patrimonio").value;
            var nome_mae =  document.getElementById("nomeMae").value;
            var documento =  document.getElementById("documento").value;
            var emissao= document.getElementById("emissao").value;
            var estado_civil =  document.getElementById("estadoCivil").value;
            var documento_uf =  document.getElementById("ufDoc").value;
            var myHeaders = new Headers();
            myHeaders.append("SessionIdSim", sessionId);
            myHeaders.append("Authorization", "Bearer "+access_token);
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify(
                {"ip":"",
                "uuid": uuid,
                "additional":{
                    "certifieldAgentId":539
                },
                "customer":{
                    "name": name,
                    "document":cpf,
                    "dateOfBirthFoundation": dateOfBirthFoundation,
                    "email":email,
                    "address":{
                        "zipCode":cep,
                        "street":rua,
                        "number":numero_casa,
                        "complement":complemento,
                        "neighborhood":bairro,
                        "state":uf,
                        "city":code_city,
                        "type":"R"
                    },
                    "natural":{
                        "gender":genero,
                        "mother": nome_mae,
                        "monthlyIncome":renda,
                        "patrimony":patrimonio,
                        "documentNumber":documento,
                        "documentId":3,
                        "documentState":documento_uf,
                        "dateOfIssue":emissao,
                        "issuingBodyDocument":"SSP",
                        "maritalStatus":estado_civil,
                        "birthState":"SP",
                        "birthCity":34515803,
                        "nationality":23,
                        "occupation":ocupacao,
                        "cellphone":{
                            "ddd":ddd,
                            "number": number
                        }
                    },
                    "incomeList":[
                        {
                            "incomeType":"1",
                            "income":5000
                        }
                      ]
                   }
                }
              );
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            };
            fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/capture/cp/proposal", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
        };



//FUNCOES DE VALIDACAO DE CEP

        
$(function () {
    $('#cep').change(function () {
        var cep = $(this).val().replace('-', '').replace('.', '');
        if (cep.length === 8) {
            $.get("https://viacep.com.br/ws/" + cep + "/json", function (data) {
                if (!data.erro) {
                    $('#bairro').val(data.bairro);
                    $('#complemento').val(data.complemento);
                    $('#cidade').val(data.localidade);
                    $('#rua').val(data.logradouro);
                    $('#uf').val(data.uf);
                }
            }, 'json');
        }
    });
    });

function verificaCep() {
        let inputCep = document.querySelector('input[name=cep]');
        let cep = inputCep.value.replace('-', '');
        let url = 'https://viverebrasil.com.br/sanredapigwpro/api/pro/address/zipcode/'+cep+'/address';
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status = 200){
                     let idCidade = getCountryId(JSON.parse(xhr.responseText));
                     document.getElementById("code_city").value =idCidade;
                };
            };
        };
        xhr.send();
};
    
function getCountryId(json) {
        let cityId = json.countyId;
        return cityId;
    };

function chamaHtml(){//jogar a funcao get dentro desse codigo

    var inclusaoInputsCpAuto = document.getElementById("showCpAuto");
    inclusaoInputsCpAuto.innerHTML= 
           `<div class="bg-titulo mt-0">
    
            <h3>
                Dados do Veículo

            </h3>

            </div>


            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Marca</label>
                    <select class="form-control form-control-sm" id="marca" >
                    </select>

                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Ano/Combustível</label>
                    <select class="form-control form-control-sm" id="anoCombustivel" onfocus="getAnoCombustivel()">
                    </select>
                </div>

                <div class="col-md-3 mb-3">
                    <label for="validationCustom02">Modelo</label>
                    <select class="form-control form-control-sm" id="modelo" name="modeloVeiculo" onfocus="getModeloVeiculo()">
                    </select>

                </div>

                <div class="col-md-2 mb-3">
                    <label for="validationCustom02">UF Licença</label>
                    <select class="form-control form-control-sm" id="ufVeiculo" onfocus="salvarVeiculo()">
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
        <br><br><br>   ` ;
        getMarcaVeiculo();
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
            }})
        .catch(error => console.log('error', error));


};


function getAnoCombustivel(access_token,sessionId,marca){
    var marca =  document.getElementById("marca").value;
    var access_token =  document.getElementById("access_token").value;
    var sessionId =  document.getElementById("sessionId").value;
    var anoCombustivel =  document.getElementById("anoCombustivel");

        var myHeaders = new Headers();
        myHeaders.append("SessionIdSim", sessionId);
        myHeaders.append("Authorization", "Bearer "+access_token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/domains/vehicle-year-fuel/"+marca+"/false", requestOptions)
        .then(response => response.json())
        .then( function (data) {
            for (let i = 0; i < data.length; i++) {
               anoCombustivel.innerHTML += '<option value="' + data[i].year + '" data-combustivel = "'+ data[i].fuelCode +'" > '+ data[i].description + '</option>;' 
            }})
        .catch(error => console.log('error', error));

};


function getModeloVeiculo(access_token,sessionId,marca,ano,combustivel){//onblur do campo combustivel veiculo, pegar o valor do id e chamar aqui
        var marca =  document.getElementById("marca").value;
        var select =  document.getElementById("anoCombustivel");
        var ano =  select.querySelector('option:checked').value;
        var modelo =  document.getElementById("modelo");

        var option = $( "#anoCombustivel" ).find("option:checked");
        var combustivel    = option.data('combustivel');
        
        var access_token =  document.getElementById("access_token").value;
        var sessionId =  document.getElementById("sessionId").value;

        var myHeaders = new Headers();
        myHeaders.append("SessionIdSim", sessionId);
        myHeaders.append("Authorization", "Bearer "+access_token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/domains/vehicle-make/"+marca+"/vehicle-model/"+ano+"/"+combustivel+"/false", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
               modelo.innerHTML += '<option value="' + data[i].id + '" data-yearFuelId = "'+ data[i].yearFuelId +'">' + data[i].description + '</option>;' 
            }})
        .catch(error => console.log('error', error));
        
};


function salvarVeiculo(option,vAutoYearFuel,vAutoMake,vAutoModel,vAutoTypeId,vAutoYear){//onclur do estado salvar as variaveis em um arrai e retornar esse array na funcao
     arrayVeiculo =[];
     option = $( "#anoCombustivel" ).find("option:checked");
     vAutoYearFuel    = option.data('yearfuelid');
     vAutoMake = $( "#marca" ).find("option:checked").value;
     vAutoModel = $( "#modelo" ).find("option:checked").value;
     vAutoTypeId=4;
     vAutoYear = $( "#anoCombustivel" ).find("option:checked").value;
    
    arrayVeiculo.push(vAutoYearFuel,vAutoMake,vAutoModel,vAutoTypeId,vAutoYear);
    return arrayVeiculo;
 
};
var teste = salvarVeiculo();
console.log(teste)

/////////////////////////////////////CONTINUAR///////////////////////////////////////////////////

function valida_form(){ //ao clickar no botao
    var codigoCidade =  document.getElementById("vAddressCity").value;//valor do input hidden da cidade
        if(codigoCidade === "" || codigoCidade === "undefined"){ 
                var msg =   document.getElementById("mensagemCep");
                msg.innerHTML = "CEP com possibilidade de erro na inclusão";
        }else{
            var msg =   document.getElementById("mensagemCep");
                msg.innerHTML = "CEP ok";
        };
        return msg;
    };

function reguaMaxCpPuro(){ 
    // ( trazer valor sem R$)
     //get by id 
     // dar um console log pra debug
     //colocar no value max da regua
         
};

function reguaMaxCpAuto(){ 
     // ( trazer valor sem R$)
     //get by id 
     // dar um console log pra debug
     //colocar no value max da regua
         
};

function limiteVencimento(){
//pegar do input hidden as datas
//colocar no value max e min do calendario
};

//nomear os ids corretamente

function valida_form(){ //ao perder o foco do campo CEP  essa função é acionada
    var codigoCidade =  document.getElementById("vAddressCity").value;
           
           if(codigoCidade === "" || codigoCidade === "undefined"){ // verifica se tem codigo da cidade

                var msg =   document.getElementById("mensagemCep");  //coloca mensagem na div 
                 msg.innerHTML = "CEP com possibilidade de erro na inclusão";

           }else{

               var msg =   document.getElementById("mensagemCep");
                 msg.innerHTML = "CEP ok";

           };

           return msg;
   };



   function alertaProdutosIndisponiveis(){
    //se ambos forem nao (N fazer um alert) pegar por id
   };


//se a resposta conter ervj ,  jogar na variavel toda a resposta na variavel e tratar
/*
   switch (expr) {
    case "Laranjas":
      console.log("As laranjas custam $0.59 o quilo.");
      break;
    case "Maçãs":
      console.log("Maçãs custam $0.32 o quilo.");
      break;
    case "Bananas":
      console.log("Bananas custam $0.48 o quilo.");
      break;
    case "Cerejas":
      console.log("Cerejas custam $3.00 o quilo.");
      break;
    case "Mangas":
    case "Mamões":
      console.log("Mangas e mamões custam $2.79 o quilo.");
      break;
    default:
      console.log("Desculpe, estamos sem nenhuma " + expr + ".");
  }
*/
/*

//apos clicar em simular chamar uma funcao q verifica se u uuid esta vazio, enquanto ele estiver vazio
//usar um carregando

modal de resultado da simulacao //a principio fazer na mesma pagina e depois so copiar os ids

pegar todos os dados para dar um 
insert Na esteira nova



*/


//usar uma funcao chamada simular e dentro dela um if pra saber se e cp auto ou cp puro

function simularCpAuto(cpf, access_token, sessionId, vencimento, valorEmprestimo, renda, uuid,
    vAutoYearFuel,vAutoMake,vAutoModel,vAutoYear,seguro){
        var option = $( "#modelo" ).find("option:checked");
        var vAutoYearFuel    = option.data('yearfuelid');
        
//fazer um if else para substiruir os valores de forma de pagamento ***confirmar quais sao

        vAutoMake = document.getElementById('marca').value;
        vAutoModel =document.getElementById('modelo').value;
        vAutoYear = document.getElementById('anoCombustivel').value;

    seguro= document.getElementById("seguro").value;
    formaPagamento = document.getElementById("formaPagamento").value;//7 vira 9 e o 8 vira 10
    if(formaPagamento=="9"){
       var formaPagamentoCpAuto="7";
    };
    if(formaPagamento=="10"){
      var  formaPagamentoCpAuto="8";
    };

    cpf = document.getElementById("cpf").value;
    sessionId = document.getElementById("sessionId").value;
    uuid = document.getElementById("uuid").value;
    access_token = document.getElementById("access_token").value;
    renda = document.getElementById("rendaMensal").value;
    vencimento=document.getElementById("vencimento").value;
    valorEmprestimo=document.getElementById("myRange").value;
    uuid = document.getElementById("uuid").value;
    qtdParcelas = document.getElementById("qtdParcelas").value;
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
       var selectParcelas = document.getElementById('qtdParcelas');
       var qtdParcelas = selectParcelas.value; //erro aqui 
       document.getElementById("qtdParcelas2").innerHTML= qtdParcelas,
       document.getElementById("taxaAnual").innerHTML= data.simulationResponse.cetInformation.pcTaxaAnual,
       document.getElementById("taxaMensal").innerHTML= data.simulationResponse.cetInformation.pcTaxaMensal,
       document.getElementById("valorEmprestimo2").innerHTML= document.getElementById("myRange").value,
       document.getElementById("totalPagofinal").innerHTML= data.simulationResponse.cetInformation.valorTotalPagoFinal,
       document.getElementById("valorCadaParcela").innerHTML= data.simulationResponse.cetInformation.valorParcela,
       document.getElementById("vencimento2").innerHTML= document.getElementById("vencimento").value;
       document.getElementById("alertaValor").innerHTML= data.simulationResponse.alertaMensagem;
      /* if(seguro=="84"){
          document.getElementById("resultadoSeguro").innerHTML= "Incluido:  "+data.simulationResponse.cetInformation.seguroBem.nmSeguro
       }else if (seguro=="75"){
        document.getElementById("resultadoSeguro").innerHTML= "Não";
       }*/
    })// dar um inner html com os resultados da simulação 
    .catch(error => console.log('error', error));
}
