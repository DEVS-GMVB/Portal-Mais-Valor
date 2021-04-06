

    
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
        

        if(data.repescResponse.accessMessageText=="EXISTE PROPOSTA EM ANDAMENTO"){
                alert(data.repescResponse.accessMessageText)
            }

        dataMaxima = document.getElementById("dataMaxima").value = data.atxResponse.firstInstallment.maximumDate  
        dataMinima = document.getElementById("dataMinima").value =data.atxResponse.firstInstallment.minimumDate
        cpAutoShow = data.repescResponse.cpauto.show

        if(cpAutoShow=="S"){
            cpAutoKey = document.getElementById("cpAutoKey").innerHTML =data.repescResponse.cpauto.key
            cpAutoValor = document.getElementById("cpAutoValor").innerHTML =data.repescResponse.cpauto.title
            document.getElementById("inputCpAutoValor").value =data.repescResponse.cpauto.title//
            cpAutoParcelasMax =document.getElementById("cpAutoParcelasMax").innerHTML = data.repescResponse.cpauto.message
        }
        cpPuroShow = data.repescResponse.cppuro.show
        if(cpPuroShow=="S"){
            cpPuroKey = document.getElementById("cpPuroKey").innerHTML =data.repescResponse.cppuro.key
            cpPuroValor = document.getElementById("cpPuroValor").innerHTML =data.repescResponse.cppuro.title
            document.getElementById("inputCpPuroValor").value =data.repescResponse.cppuro.title//
            cpPuroParcelasMax = document.getElementById("cpPuroParcelasMax").innerHTML =data.repescResponse.cppuro.message
        } 
        if(cpAutoShow=="N"&&cpPuroShow=="N"){
            alert("No momento nao existe nenhum produto diponível para esse CPF")
        }

        uuid = document.getElementById("uuid").value =data.uuid
        code = document.getElementById("code").value =data.repescResponse.code
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
               document.getElementById("vencimento2").innerHTML= document.getElementById("vencimento").value,
               document.getElementById("alertaValor").innerHTML= data.simulationResponse.alertaMensagem,
               document.getElementById("uuid").value= data.simulationResponse.uuid


               if(seguro=="84"){
                  document.getElementById("resultadoSeguro").innerHTML= "Incluido:  "+data.simulationResponse.cet.seguroBem.nmSeguro
               }else if (seguro=="75"){
                document.getElementById("resultadoSeguro").innerHTML= "Não";
               }
            })
            .catch(error => console.log('error', error));
        }


 function finalizar(sessionId,access_token,uuid,name,cpf,dateOfBirthFoundation, email,renda,ddd,number){


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
              .then(response => response.json())
              .then(function (data) {

                
                        if(data.match(/@ERFSE0502/)){
                            alert('Verifique a data de vencimento');
                        };
                        
                        if(data.match(/@ERFSE0552/)){
                            alert('Erro Produtox Tabela');
                            };
                        
                        if(data.match(/@ERFSE0564/)){
                            alert('Erro Pessoax tabela');
                            };
                        
                        if(data.match(/@ERFSE0579/)){
                            alert('Erro IOF Tabela');
                            };
                        
                        if(data.match(/@ERFSE0589/)){
                            alert('Ano ou percentual mínimo de entrada inválido');
                            };
                        
                        if(data.match(/@ERFSE0768/)){
                            alert('CARENCIA MAIOR QUE MÁXIMA CADASTRADA');
                            };
                        
                        if(data.match(/@ERQCE0122/)){
                            alert('erro PS7');
                            };
                        
                        if(data.match(/@ERSQE0018/)){
                            alert('TAMANHO ENDERECO EXCEDEU O LIMITE. FAVOR ABREVIAR');
                            };
                        
                        if(data.match(/@ERSQE0058/)){
                            alert('NAO HA AGENTE CERTIFICADO');
                            };
                        
                        if(data.match(/@ERVJE0003/)){
                            alert('ACESSO ROTINA CIPR32F ERRO ACESSO VSAM - C');
                            };
                        
                        if(data.match(/@ERVJE0010/)){
                            alert('TIPO DE PRODUTO INVALIDO";');
                            };
                        
                        if(data.match(/@ERVJE0016/)){
                            alert('DATAS INVÁLIDAS');
                            };
                        
                        if(data.match(/@ERVJE0019/)){
                            alert('O CANAL UTILIZADO ESTA INDISPONIVEL PARA ESSA LOJA');
                            };
                        
                        if(data.match(/@ERVJE0028/)){
                            alert('CAMPO CÓDIGO PROPOSTA, CEP OU RENDA MENSAL NAO INFORMADO CORRETAMENTE');
                            };
                        
                        if(data.match(/@ERVJE0033/)){
                            alert('FINANCIAMENTO NAO DISPONIVEL PARA ESSE VEICULO');
                            };
                        
                        if(data.match(/@ERVJE0039/)){
                            alert('ERRO DB2 NA TABELA VJGT0010 - SQLCODE -0904');
                            };
                        
                        if(data.match(/@ERVJE0046/)){
                            alert('CAMPO NOME MÃE, DATA DE NASCIMENTO , CIDADE , OU AGENTE INVÁLIDO(S)');
                            };
                        
                        if(data.match(/@ERVJE0050/)){
                            alert('CLI-CPF DO CONJUGE INVÁLIDO');
                            };
                        
                        if(data.match(/@ERVJE0051/)){
                            alert('DATA DE NASCIMENTO É MAIOR QUE A DATA DE EMISSAO DO DOCUMENTO');
                            };
                        
                        if(data.match(/@ERVJE0054/)){
                            alert('ERRO NO START DO ARQUIVO . EIBRES.');
                            };
                        
                        if(data.match(/@ERVJE0061/)){
                            alert('');
                            };
                        
                        if(data.match(/@ERVJE0064/)){
                            alert('VALOR DO BEM INVALIDO OU NAO INFORMADO');
                            };
                        
                        if(data.match(/@ERVJE0074/)){
                            alert('DATA DO PRIMEIRO VENCIMENTO MENOR QUE O PERMITIDO');
                            };
                        
                        if(data.match(/@ERVJE0096/)){
                            alert('ERRO FILIAL');
                            };
                        
                        if(data.match(/@ERVJE0097/)){
                            alert('UF - DESPESA CARTORIO INVALIDA');
                            };
                        
                        if(data.match(/@ERVJE0100/)){
                            alert('ERRO CHAMADA SUB-ROTINA AFCS0002');
                            };
                        
                        if(data.match(/@ERVJE0115/)){
                            alert('ERRO DDD TELEFONE FIXO');
                            };
                        
                        if(data.match(/@ERVJE0147/)){
                            alert('FORMA DE PAGAMENTO NAO AUTORIZADA PARA O INTERMEDIARIO / PRODUTO');
                            };
                        
                        if(data.match(/@ERVJE0152/)){
                            alert('CONTA CORRENTE DEVE TER NO MINIMO 7 DIGITOS');
                            };
                        
                        if(data.match(/@ERVJE0154/)){
                            alert('RENDA MENSAL DO TITULAR DEVE ESTAR ENTRE R$ 0,00 A R$ 199.999,99');
                            };
                        
                        if(data.match(/@ERVJE0160/)){
                            alert('DATA DE NASCIMENTO - IDADE DEVE SER MENOR OU IGUAL A 100 ANOS');
                            };
                        
                        if(data.match(/@ERVJE0167/)){
                            alert('ANO DE FABRICACAO E ANO DO MODELO ESTAO INCOERENTES');
                            };
                        
                        if(data.match(/@ERVJE0168/)){
                            alert('ANO FABRICACAO DEVE SER MENOR OU IGUAL AO ANO MODELO');
                            };
                        
                        if(data.match(/@ERVJE0208/)){
                            alert('SUBSEG INVALIDO PARA O INTERMEDIARIO');
                            };
                document.getElementById("numeroPropostaModal").innerHTML =  data.proposalId;
                document.getElementById("statusPropostaModal").innerHTML =  data.statusDescription;
                 console.log(data)
                 
         
              })
              .catch(error => console.log('error', error));
        };





//FUNCOES DE VALIDACAO DE CEP


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
        <br><br><br> 
        
        
        ` ;
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


function simularCpAuto(cpf, access_token, sessionId, vencimento, valorEmprestimo, renda, uuid,
    vAutoYearFuel,vAutoMake,vAutoModel,vAutoYear,seguro){
        var option = $( "#modelo" ).find("option:checked");
        var vAutoYearFuel    = option.data('yearfuelid');
        

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
       document.getElementById("vencimento2").innerHTML= document.getElementById("vencimento").value,
       document.getElementById("alertaValor").innerHTML= data.simulationResponse.alertaMensagem,
       document.getElementById("uuid").value= data.simulationResponse.uuid
       

      /* if(seguro=="84"){
          document.getElementById("resultadoSeguro").innerHTML= "Incluido:  "+data.simulationResponse.cetInformation.seguroBem.nmSeguro
       }else if (seguro=="75"){
        document.getElementById("resultadoSeguro").innerHTML= "Não";
       }*/
    })
    .catch(error => console.log('error', error));
}


function modal(){

 
 
    var inclusaoInputsCpAuto = document.getElementById("showCpAuto");
    inclusaoInputsCpAuto.innerHTML= 
   `
   <div class="modal fade modalvisualizarsim" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
   aria-hidden="true" >
   <div class="modal-dialog modal-lg">
       <div class="modal-content">
   
           <div class="modal-header">
               <img src="logocolorido.png" style="height: 70px; right: 70px;">
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
               </button>
           </div>
           <div class="modal-body">
               <form class="needs-validation mt-4" novalidate>
   
   
   
   
                   <div class="form-row">
   
                       <div class="col-md-12 mb-3">
                           <label for="validationCustom01">Número da Proposta</label>
                               <div id="numeroPropostaModal" ></div>
                       </div>

                       <div class="col-md-12 mb-3">
                       <label for="validationCustom01">Status da Proposta</label>
                       <div id="statusPropostaModal" ></div>

                       </div>
   
                   </div>
   
           </form>
           
           <hr>
   
   
           <div class="opcoes-cadastro" style="text-align: center; margin-inline: block;">
               <button type="button" class="btn btn-primary btn-icon-label" data-toggle="modal" 
               data-target=".modalvisualizarsim" title="Alterar" onclick="salvarBd">
                   <span class="btn-inner--icon">
                       <i class="fas fa-check"></i>
                   </span>
                   <span class="btn-inner--text">Confirmar</span>
               </button>
   
   
           </div>
   
   
           </div>
               
                       </div>
                   </div>
                   </div>` ;



    //pegar valor do input do numero da proposta e dar um inner html nessa div
    
};//no botao de confirmar puxar a funcao q salva no bd

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



function simular(){
                    
    const pai = document.getElementById("showCpAuto");
    const filho = pai.querySelector("#divFilha");
    
    if (filho !== null) {
       simularCpAuto();
    } else {
       simularCpPuro();
    }

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
             /*

                *loading pre analise e modal , dentro da funcao apos o 
                clique do botao chamar a funcao carregando on, apos a resposta renderizada colocar carregando off
                mandar(csp) o html ao chamar a funcao, apos o then dar um display none

                *salvar no banco***fetch****valores dos inputs hidden******usar  maquino
                 local com a api atualizada 

                */






             
