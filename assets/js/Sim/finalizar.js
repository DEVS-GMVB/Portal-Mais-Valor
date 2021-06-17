
 import { confirmarProposta } from './inclusaoProposta.js';
 
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

        document.getElementById("numeroPropostaModal").innerHTML =  data.proposalId;
        document.getElementById("inputProposta").value =  data.proposalId;
        document.getElementById("statusPropostaModal").innerHTML =  data.statusDescription;
        verificaPraSalvar();

              // ervj(data);
      })
      .catch(error => console.log('error', error));
};



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
                       <input type="hidden" id="inputProposta">
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
               data-target=".modalvisualizarsim" title="Alterar" 
               id="confirmarProposta">
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

                   
    
};

function verificaPraSalvar(){
    var inputProposta = document.getElementById('inputProposta').value;
    var proposta  = parseInt(inputProposta);
    console.log(proposta)
    if(proposta>0){
        console.log(proposta)
        confirmarProposta();
    };
}
export { finalizar, modal }

