
window.onload= function(){

 //let id_acesso= sessionStorage.getItem('id_acesso',id_acesso);

let proposta = document.getElementById("proposta");
let nome = document.getElementById("nome");
let cpf = document.getElementById("cpf");
let data_cadastro = document.getElementById("data_cadastro");        
let parceiro = document.getElementById("parceiro");     
let valor_entregue = document.getElementById("valor_entregue");
let valor_troco = document.getElementById("valor_troco"); 
let convenio  = document.getElementById("convenio");
let banco = document.getElementById("banco");             
let produto = document.getElementById("produto"); 
let tipo = document.getElementById("tipo"); 
let status = document.getElementById("status");
let substatus = document.getElementById("substatus");
let data_atualizacao = document.getElementById("data_atualizacao");
let qtd_consulta_robo = document.getElementById("qtd_consulta_robo");
let log_alteracao = document.getElementById("log_alteracao");
let previsao_saldo = document.getElementById("previsao_saldo"); 
let indica_vendas = document.getElementById("indica_vendas"); 
let api_sim = document.getElementById("api_sim");  
let gravacao = document.getElementById("gravacao");
let telefoneconstanotfc=document.getElementById("telefoneconstanotfc");

 let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  fetch("http://localhost:3000/user/proposta/parceiro?id_acesso=2", requestOptions)//pegar esse id acesso do login get session storage
    .then(response => response.json())
    .then(result => 

      
      proposta.innerHTML = result[0].proposta


      )
    .catch(error => console.log('error', error));


 

    //         let cnpj = row.insertCell(-1);
    //         let status = row.insertCell(-1);    

    //         let filialText = document.createTextNode(`${value.filial}`);
    //         filial.appendChild(filialText);

}
