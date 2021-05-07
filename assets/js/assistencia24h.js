
const arrays = {
  arrayUpdate: arrayUpdate = [],
  arrayLinhas: arrayLinhas = []
}

//usar variavel de sessao para o id parceiro 
//pegar essa variavel com get e jogar na funcao todosPorParceiro()
var valor_seguro=0;
//ao carregar a pagina...
window.onload = function todosPorParceiro(){ 

              var myHeaders = new Headers();
              myHeaders.append("Content-Type", "application/json");
              var raw = JSON.stringify(
                {
                "id_parceiro": "1"
                }
                );
              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

      fetch("http://localhost:3000/user/assistencia/filtrartodasporid", requestOptions)
        .then(response => response.json())
        .then(function (data) {

            for (let i = 0; i < data.length; i++) {

                let specific_tbody = document.getElementById('list');
                let row = specific_tbody.insertRow(-1);
                let cpf = row.insertCell(-1);
                let nome = row.insertCell(-1);
                let tipoContratacao = row.insertCell(-1);
                let tipoAssistencia = row.insertCell(-1);
                let alteraThis = row.insertCell(-1);
                
                row.id = "row"+i
                cpf.id = "cpf"+i
                nome.id = "nome"+i
                tipoContratacao.id = "tipoContratacao"+i
                tipoAssistencia.id = "tipoAssistencia"+i


                let tAssistencia = document.createTextNode(`${data[i].tipo_assistencia}`);
                tipoAssistencia.appendChild(tAssistencia);
                
                let cpf2 = document.createTextNode(`${data[i].cliente_cpf}`);
                cpf.appendChild(cpf2);
                
                let nome_cliente = document.createTextNode(`${data[i].cliente_nome}`);
                nome.appendChild(nome_cliente);

                let contratacao_tipo = document.createTextNode(`${data[i].tipo_contratacao}`);
                tipoContratacao.appendChild(contratacao_tipo);

                
                arrays.arrayUpdate[i] = data[i].cpf
                arrays.arrayLinhas[i] = row
          

                alteraThis.innerHTML = `
                <td class="text-right" style="text-align: center;" > 
                <!-- Actions -->
                <div class="actions ml-3" style="text-align: center;" >
                    <a href="#" class="action-item mr-2 " data-toggle="modal" name="botaoAlterar" 
                    id= "${i}"  data-target=".modal-incluirproposta-parc" title="Alterar" 
                    onclick="pegarIdBotaoAlterar(this.id)">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </td>
                `

            }
      }).catch(error => console.log('error: ', error))

};


//Identificacao de botao para ecolha de formulario ao inserir ou alterar
                  var nomeBotaoClicado = ""; 
                  function nomeBotao(nome){
                      nomeBotaoClicado = nome; 
                  };

                  function inclusao(){
                    if(nomeBotaoClicado=="btnFP"){
                      auth();
                    }else {
                      updateBd();
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

          var nome = document.getElementById("nome").value;
          var ddd = document.getElementById("ddd").value;
          var telefone =document.getElementById("telefone").value;
          var cpf =document.getElementById("cpf").value;
          var email = document.getElementById("email").value;
          var data_nascimento = document.getElementById("nascimento").value;
          var cidade = document.getElementById("cidade2").value;
          var bairro = document.getElementById("bairro").value;
          var numero = document.getElementById("numero").value;
          var estado = document.getElementById("estado2").value;
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

           var raw = JSON.stringify({
              "product_ids":[product_id],
              "insurance_holder":{
                  "name": nome,
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
          valor_seguro = response.data.payment_options[0].valor_total
          document.getElementById("valor_assistencia").value = valor_seguro
          enviarEmail(token, uuid, nome, email);
        }) 
        .catch(error => console.log('error', error));
        

};

    
  function enviarEmail(token, uuid, nome, email){
    //Envio de email colocar uuid como parametro 
              var myHeaders = new Headers();
              myHeaders.append("token", token);
              myHeaders.append("Content-Type", "application/json");

              var raw = JSON.stringify(
                  {"email":{
                      "recipients":[email],
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
                  contrato(token,uuid);
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
              console.log(response)
                if(response.status == "SMS sent."){
                      incluirBd();
                }
            }) 
            .catch(error => console.log('error', error));
    }



  function incluirBd(){
             //CHAMAR VALOR DO SEGURO DO CAMPO HIDDEN
            var valorAssistencia = document.getElementById("valor_assistencia").value
            console.log(valorAssistencia)
            var ddd = document.getElementById("ddd").value;
            var telefone =document.getElementById("telefone").value;
            var cpf =document.getElementById("cpf").value;
            var email = document.getElementById("email").value;
            var data_nascimento = document.getElementById("nascimento").value;
            var bairro = document.getElementById("bairro").value;
            var cidade = document.getElementById("cidade2").value;
            var estado = document.getElementById("estado2").value;
            var rua = document.getElementById("rua").value;
            var numero = document.getElementById("numero").value;
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
            var id_parceiro = "1";
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
                "cidade": cidade,
                "estado": estado,
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
                "id_parceiro": id_parceiro ,
                "cpf_parceiro": cpf_parceiro,
                "supervisor": supervisor,
                "gerente": gerente,
                "data_inclusao": data_inclusao,
                "responsavel_alteracao": responsavel_alteracao,
                "data_alteracao": data_alteracao,
                "valor_assistencia": valorAssistencia
              });

              var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
              };

        fetch("http://localhost:3000/user/assistencia/incluir", requestOptions)
          .then(response => response.json())
          .then(function (response) {
            console.log(response)
            window.location.href = "http://127.0.0.1:5501/paginas/assistencia24h.html"

        }) 
          .catch(error => console.log('error', error));

  };



  function filtro(){

            apagarFiltrosSemRedirecionamento();
            var fCpf = document.getElementById("fCpf").value;
            var fTipoContratacao =document.getElementById("fTipoContratacao").value;
            var fBanco =document.getElementById("fBanco").value;
            var fTipoAssistencia = document.getElementById("fTipoAssistencia").value;
            var fFormaContratacao = document.getElementById("fFormaContratacao").value;

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            var raw = JSON.stringify({
              "id_parceiro": "1",
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
    
        fetch("http://localhost:3000/user/assistencia/filtrarselecionadasporid", requestOptions)
          .then(response => response.json())
          .then(function (data) {
        
          for (let i = 0; i < data.length; i++) {
    
              let specific_tbody = document.getElementById('list');
                let row = specific_tbody.insertRow(-1);
              let cpf = row.insertCell(-1);
              let nome = row.insertCell(-1);
              let tipoContratacao = row.insertCell(-1);
              let tipoAssistencia = row.insertCell(-1);
              let alteraThis = row.insertCell(-1);

              row.id = "row"+i
              cpf.id = "cpf"+i
              nome.id = "nome"+i
              tipoContratacao.id = "tipoContratacao"+i
              tipoAssistencia.id = "tipoAssistencia"+i


              let tAssistencia = document.createTextNode(`${data[i].tipo_assistencia}`);
              tipoAssistencia.appendChild(tAssistencia);
              
              let cpf2 = document.createTextNode(`${data[i].cliente_cpf}`);
              cpf.appendChild(cpf2);
    
              let nome_cliente = document.createTextNode(`${data[i].cliente_nome}`);
              nome.appendChild(nome_cliente);
    
              let contratacao_tipo = document.createTextNode(`${data[i].tipo_contratacao}`);
              tipoContratacao.appendChild(contratacao_tipo);
    
              
                arrays.arrayUpdate[i] = data[i].cpf
                arrays.arrayLinhas[i] = row
              alteraThis.innerHTML = `
              <td class="text-right" style="text-align: center;">
              <!-- Actions -->
              <div class="actions ml-3" style="text-align: center;">
                  <a href="#" class="action-item mr-2 " data-toggle="modal" id= "${i}"
                    onclick = "pegarIdBotaoAlterar(this.id);"
                      data-target=".modal-incluirproposta-parc" title="Alterar" >
                      <i class="fas fa-external-link-alt"></i>
                  </a>
              </div>
          </td>
              `
          }})
          .catch(error => console.log('error', error)); 

  };


    function apagarFiltros(){
        var elemento = document.getElementById("list");
        while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      };
      window.location.href = "http://127.0.0.1:5501/paginas/assistencia24h.html";
    };

    function apagarFiltrosSemRedirecionamento(){
        var elemento = document.getElementById("list");
        while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
      };
    };



    var idBotaoAlterar = ""; 
    function pegarIdBotaoAlterar(id){
            
            idBotaoAlterar = id; 
            var tagPai ="row"+id;
            let teste = document.getElementById(tagPai);
            var cpfChildren =   teste.children[0].id;
            var nomeChildren =   teste.children[1].id;
            var tipoCChildren =   teste.children[2].id;
            var tipoAChildren =   teste.children[3].id;
            var valoCpf = document.getElementById(cpfChildren);
            var valoNome = document.getElementById(nomeChildren);
            var valoTipoC = document.getElementById(tipoCChildren);
            var valoTipoA = document.getElementById(tipoAChildren);
          
            var cpfformatado = valoCpf.innerHTML;
            var nomeformatado = valoNome.innerHTML;
            var tipoCformatado = valoTipoC.innerHTML;
            var tipoAformatado = valoTipoA.innerHTML;


            selecaoParaalteracao(cpfformatado, nomeformatado, tipoCformatado, tipoAformatado)

    };
 

    function selecaoParaalteracao(cpfformatado, nomeformatado, tipoCformatado, tipoAformatado){//

          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");

          var raw = JSON.stringify({
            "cliente_cpf": cpfformatado,
            "cliente_nome": nomeformatado,
            "tipo_contratacao": tipoCformatado,
            "tipo_assistencia": tipoAformatado
          });

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };

          fetch("http://localhost:3000/user/assistencia/filtrarParaAlterar", requestOptions)
            .then(response => response.json())
            .then(function (data) {
console.log(data)
              var codigo = data.codigo ;
              var nome = data.cliente_nome ;
              var data_nascimento = data.data_nascimento
              var cpf = data.cliente_cpf;
              var rua = data.rua;
              var complemento = data.complemento;
              var bairro = data.bairro;
              var cidade = data.cidade;
              var numero = data.numero;
              var estado = data.estado;
              var cep = data.cep;
              var email = data.email;
              var telefone = data.telefone;
              var agencia = data.agencia;
              var conta = data.conta;
              var digito = data.digito;
              var banco = data.banco;
              var contratacao = data.tipo_contratacao;
              var tipo_conta = data.tipo_conta;
              var tipo_assistencia = data.tipo_assistencia;
              var forma_contratacao = data.forma_contratacao;
              var status = data.status;
              var tipo_assistencia2 = "";
              var telefoneFinal = "";
              var telefoneSplit = telefone.split('');
              var dddFormatado = telefoneSplit[0]+ telefoneSplit[1];

              for (var i = 2; i < 11; i++) {
                      telefoneFinal += telefoneSplit[i]
                    
                  }
            
              document.getElementById("codigo").value = codigo;
              document.getElementById("ddd").value = dddFormatado;
              document.getElementById("nascimento").value = data_nascimento;
              document.getElementById("complemento").value = complemento;
              document.getElementById("nome").value = nome;
              document.getElementById("cpf").value = cpf;
              document.getElementById("rua").value = rua;
              document.getElementById("bairro").value = bairro;
              document.getElementById("cidade2").value = cidade;
              document.getElementById("estado2").value = estado;
              document.getElementById("numero").value = numero;
              document.getElementById("cep").value = cep;
              document.getElementById("email").value = email;
              document.getElementById("telefone").value = telefoneFinal;
              document.getElementById("agencia").value = agencia;
              document.getElementById("tipoConta").value = tipo_conta;
              document.getElementById("conta").value = conta;
              document.getElementById("digito").value = digito;
              document.getElementById("banco").value = banco;
              document.getElementById("tipoContratacao").value = contratacao;

              if(tipo_assistencia=="residencial"){
                  tipo_assistencia2 = "670";
              }else if(tipo_assistencia=="saude"){
                  tipo_assistencia2 = "669";
              }

              document.getElementById("tipoAssistencia").value =  tipo_assistencia2;
              document.getElementById("formaContratacao").value = forma_contratacao;
              document.getElementById("status").value = status;
              //fazer um input hidden
              //pegar variavel codigo e jogar num input hidden  
            })
            .catch(error => console.log('error', error));
    }



    function updateBd(){
      
          //Dados do Cliente
          var ddd = document.getElementById("ddd").value;
          var codigo = document.getElementById("codigo").value;
          var telefone =document.getElementById("telefone").value;
          var numero = document.getElementById("numero").value;
          var cpf =document.getElementById("cpf").value;
          var email = document.getElementById("email").value;
          var data_nascimento = document.getElementById("nascimento").value;
          var bairro = document.getElementById("bairro").value;
          var cidade = document.getElementById("cidade2").value;
          var estado = document.getElementById("estado2").value;
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
                "codigo": codigo,
                "cliente_nome": nome,
                "cliente_cpf": cpf,
                "data_nascimento": data_nascimento,
                "cep": cep,
                "rua": rua,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado,
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

                fetch("http://localhost:3000/user/assistencia/alterar", requestOptions)
                .then(response => response.json())
                .then(function (data) {
                  console.log(data);
                  window.location.href = "http://127.0.0.1:5501/paginas/assistencia24h.html"

                })
                .catch(error => console.log('error', error));

    }

    

var arrayValorTotal = []

now = new Date  
if (now.getDay () ==5){
document.write ("Hoje é  dia de enviar o arquivo");
filtraAssistenciasDebito();
} 
else{
    document.write ("Hoje não é dia de enviar o arquivo ");
}

function filtraAssistenciasDebito(){//

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "status": "Assistencia Solicitada",
  "tipo_contratacao": "Conta bancaria"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/user/assistencia/cnab", requestOptions)
  .then(response => response.json())
  .then((function (data) {
                  var count = data.length; 
                  var i = 0;
                  var valor_total = 0;

                  for(i;i<count; i++){

                        var nome = data[i].cliente_nome;
                        nome = nome.replaceAll(" ","");
                        var agencia = data[i].agencia;
                        var cpf = data[i].cliente_cpf;
                        cpf = cpf.replace(/\.|\-/g, '');
                        var numero_arquivo = i;
                        var cidade =  data[i].cidade;
                        var estado =  data[i].estado;
                        var valor_assistencia =  data[i].valor_assistencia;
                        var valorFormatado = parseFloat(valor_assistencia)
                        var valorFinal =  valor_total += valorFormatado;
                        ///////////////////////////colocar esse valor na requisicao //////////////////////////////
                    
                  criarTxt(i, agencia, cpf ,  nome, numero_arquivo,cidade,estado, valor_assistencia, count, valorFinal)

                  }
                
                }))
  .catch(error => console.log('error', error));

}



function criarTxt(i , agencia, cpf ,  nome, numero_arquivo, cidade, estado, valor_assistencia,count, valorFinal){
   
let data = new Date();
let diaHoje = ("0" + data.getDate()).slice(-2);
let mesHoje = ("0" + (data.getMonth() + 1)).slice(-2);
let anoHoje = data.getFullYear();
hoje = anoHoje + mesHoje + diaHoje;


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "agencia": agencia,
  "cliente_cpf": cpf,
  "cliente_nome": nome,
  "numero_arquivo": i+1,
  "cidade": cidade,
  "estado": estado,
  "valor_assistencia": valor_assistencia,
  "qtdRegistros":count *2+1,
  "valor_final": valorFinal,
  "data_hoje": hoje //+ cabecalho em cada lettra A e rodape 
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3000/user/assistencia/txt", requestOptions)
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
}

//colocar a soma total na requisicao 
//acertar data de geracao do arquivo no cabecalho A
//ike
//arquivo de envio mensal
//envio de email
//apos o envio dar um update no banco de dados nas assistencias correpsondentes 

    







