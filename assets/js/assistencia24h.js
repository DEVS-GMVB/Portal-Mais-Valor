
var nomeBotaoClicado = ""; 


 function nomeBotao(nome){
    nomeBotaoClicado = nome; 
};


function inclusao(){

  if(nomeBotaoClicado=="linkAlterar"){
      alert("fara o update");
    updateBd();
  }else if(nomeBotaoClicado=="btnFP"){
    alert("incluira uma nova");
      auth();

  }


};


//TOKEN
var token = "";
function auth(){


            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({"username":"mv_operacao","company_name":"suthub","password":"Gmvb@2020"});

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };

            fetch("https://api.suthubservice.com/v2/login", requestOptions)
            .then(response => response.json())
            .then(function (response) {
              token = response.sessionToken, 
              //colocar um if aqui
                assistencia(token);
              //  assistenciaPessoal(token);
            }) 
            .catch(error => console.log('error', error));

        };

     


function assistencia(token){

        var ddd = document.getElementById("ddd").value;
        var telefone =document.getElementById("telefone").value;
        var cpf =document.getElementById("cpf").value;
        var email = document.getElementById("email").value;
        var data_nascimento = document.getElementById("nascimento").value;
        var cidade = document.getElementById("cidade").value;
        var bairro = document.getElementById("bairro").value;
        var numero = document.getElementById("numero").value;
        var estado = document.getElementById("estado").value;
        var rua = document.getElementById("rua").value;
        var cep = document.getElementById("cep").value;
        var product_id = document.getElementById("tipoAssistencia").value;
        var quote = 0;
        var uuid =0;

        if (product_id == 670){
            quote = 413;
            product_id = parseInt(product_id);

        }else if(product_id == 669){
            quote = 414;
            product_id = parseInt(product_id);
        }

            var myHeaders = new Headers();
            myHeaders.append("token", token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({//se for residencial ou pessoal so mudar o id do produto[669] e o quote da url nessa requisicao
                          "product_ids":[product_id],
                          "insurance_holder":{
                              "name":"nome",
                              "phones":[{
                                  "area_code": ddd,
                                  "extension":"",
                                  "number":telefone,
                                  "type":"mobile"
                                }],
                                "cpf":cpf,
                                "email":email,
                                "birth_date": data_nascimento,
                                "addresses":[{"additional_details":"",
                                "city":cidade,
                                "country": "BR",
                                "district":bairro,
                                "number":numero,
                                "state":estado,
                                "street": rua,
                                "zipcode": cep
                            }]},
                            "risk_address":{
                                "additional_details":"",
                                "city":cidade,
                                "country": "BR",
                                "district":bairro,
                                "number":numero,
                                "state":estado,
                                "street":rua,
                                "zipcode":cep}});

                    var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                    };

                    fetch("https://api.suthubservice.com/v2/quote/"+quote+"", requestOptions)
                    .then(response => response.json())
                    .then(function (response) {
                      uuid = response.data.contract_id,
                      enviarEmail(token, uuid);
                    }) 
                    .catch(error => console.log('error', error));
        

     };

    
function enviarEmail(token, uuid){
        //Envio de email colocar uuid como parametro 
        var myHeaders = new Headers();
        myHeaders.append("token", token);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(
            {"email":{
                "recipients":["email@email.com"],
                "contact_name":nome,
                "uuid":uuid}
            }
            );

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://api.suthubservice.com/v2/email/2", requestOptions)
        .then(response => response.json())
        .then(function (response) {
        if(response.status=="Email succesfully sent."){
            contrato(token,uuid);
        }else{
            console.log(response);
        }
        }) 
        .catch(error => console.log('error', error));

};




function contrato(token,uuid){

    var product_id = document.getElementById("tipoAssistencia").value;


    if (product_id == 670){
        var product = "resid";
    }else if(product_id == 669){
        var product = "saude";
    }

    var myHeaders = new Headers();
    myHeaders.append("token", token);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://api.suthubservice.com/v2/MaisValor/contract/"+uuid+"/sendSMS?product="+product+"", requestOptions)
    .then(response => response.json())
    .then(function (response) {

        if(response.status == "SMS sent."){
               incluirBd();
        }
   
    }) 
    .catch(error => console.log('error', error));

}



function incluirBd(){

    //Dados do Cliente
    var ddd = document.getElementById("ddd").value;
    var telefone =document.getElementById("telefone").value;
    var cpf =document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var data_nascimento = document.getElementById("nascimento").value;
    var bairro = document.getElementById("bairro").value;
    var rua = document.getElementById("rua").value;
    var cep = document.getElementById("cep").value;
    var product_id = document.getElementById("tipoAssistencia").value;
    var nome = document.getElementById("nome").value;
    var complemento = document.getElementById("complemento").value;

    //Dados bancarios
    var tipoContratacao = document.getElementById("tipoContratacao").value;
    var banco = document.getElementById("banco").value;
    var agencia = document.getElementById("agencia").value;
    var conta = document.getElementById("conta").value;
    var digito = document.getElementById("digito").value;
    var tipoConta = document.getElementById("tipoConta").value;
    var status = document.getElementById("status").value;

    //Dados do Produto
    var formaContratacao = document.getElementById("formaContratacao").value;

    //Dados do Parceiro //colocar num input hidden
    var parceiro = "x";
    var id_parceiro = 0;
    var cpf_parceiro = "000.000.000-00";
    var gerente = "y";
    var supervisor = "y";
    var now = new Date;
    var data_inclusao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()+" "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    var responsavel_alteracao = "z";
    var data_alteracao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()+" "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()

    if(product_id==670){
     var produtoEscolhido = "residencial";
    }else if(product_id==669){
    var produtoEscolhido = "saude";
    }

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "cliente_nome": nome,
  "cliente_cpf": cpf,
  "data_nascimento": data_nascimento,
  "cep": cep,
  "rua": rua,
  "bairro": bairro,
  "numero": numero,
  "complemento": complemento,
  "email": email,
  "telefone": ddd+telefone,
  "tipo_contratacao": tipoContratacao,
  "banco": banco,
  "agencia": agencia,
  "conta": conta,
  "digito": digito,
  "tipo_conta": tipoConta,
  "status": status,
  "tipo_assistencia": produtoEscolhido,
  "forma_contratacao": formaContratacao,
  "parceiro": parceiro,
  "id_parceiro": id_parceiro,
  "cpf_parceiro": cpf_parceiro,
  "supervisor": supervisor,
  "gerente": gerente,
  "data_inclusao": data_inclusao,
  "responsavel_alteracao": responsavel_alteracao,
  "data_alteracao": data_alteracao
});


var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/user/assistencia/incluir", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

};


   


function updateBd(){

     //Dados do Cliente
     var ddd = document.getElementById("ddd").value;
     var telefone =document.getElementById("telefone").value;
     var cpf =document.getElementById("cpf").value;
     var email = document.getElementById("email").value;
     var data_nascimento = document.getElementById("nascimento").value;
     var bairro = document.getElementById("bairro").value;
     var rua = document.getElementById("rua").value;
     var cep = document.getElementById("cep").value;
     var product_id = document.getElementById("tipoAssistencia").value;
     var nome = document.getElementById("nome").value;
     var complemento = document.getElementById("complemento").value;
 
     //Dados bancarios
     var tipoContratacao = document.getElementById("tipoContratacao").value;
     var banco = document.getElementById("banco").value;
     var agencia = document.getElementById("agencia").value;
     var conta = document.getElementById("conta").value;
     var digito = document.getElementById("digito").value;
     var tipoConta = document.getElementById("tipoConta").value;
     var status = document.getElementById("status").value;
 
     //Dados do Produto
     var formaContratacao = document.getElementById("formaContratacao").value;
 
     //Dados do Parceiro //colocar num input hidden
     var now = new Date;
     var responsavel_alteracao = "z";
     var data_alteracao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()+" "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
 

     if(product_id==670){
        var produtoEscolhido = "residencial";
       }else if(product_id==669){
       var produtoEscolhido = "saude";
       };

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "codigo": 1,
    "cliente_nome": nome,
    "cliente_cpf": cpf,
    "data_nascimento": data_nascimento,
    "cep": cep,
    "rua": rua,
    "bairro": bairro,
    "numero": numero,
    "complemento": complemento,
    "email": email,
    "telefone": ddd+telefone,
    "tipo_contratacao": tipoContratacao,
    "banco": banco,
    "agencia": agencia,
    "conta": conta,
    "digito": digito,
    "tipo_conta": tipoConta,
    "status": status,
    "tipo_assistencia": produtoEscolhido,
    "forma_contratacao": formaContratacao,
    "responsavel_alteracao": responsavel_alteracao,
    "data_alteracao": data_alteracao
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("localhost:3000/user/assistencia/alterar", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}
    

//fazer filtro para cada um encontrado no select renderizar***usar exemplo insertCell (precisa do localhost na mesma maquina do front)
//qd incluir renderizar o recem incluido na pagina abaixo do ultimo
//qd clicar em alterar puxar aquele dado no banco por id e trazer no formulario de alteracao 
//o mesmo modal e usado no insert e update, verificar essa regra
//chama uma funcao que pega o nome do botao joga numa variavel global
//apos clicar em incluir verificar o valor dessa variavel  se for x chamar funcao x se for y chamar funcao y


function filtro(){

    var fCpf = document.getElementById("fCpf").value;
    var fTipoContratacao =document.getElementById("fTipoContratacao").value;
    var fBanco =document.getElementById("fBanco").value;
    var fTipoAssistencia = document.getElementById("fTipoAssistencia").value;
    var fFormaContratacao = document.getElementById("fFormaContratacao").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "cliente_cpf": fCpf,
      "tipo_contratacao": fTipoContratacao,
      "banco": fBanco,
      "tipo_assistencia": fTipoAssistencia,
      "forma_contratacao": fFormaContratacao
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("localhost:3000/user/assistencia/filtrar", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))//o resultado do filtro renderizar com incert cell
      .catch(error => console.log('error', error)); 


};

function selecionarTodos(){ 

    //chamar no onload da pagina de acordo com os dados da sessao
    //colocar usuario e supervisor nos paramentros de filtro na rota ja existente(backend)

};





