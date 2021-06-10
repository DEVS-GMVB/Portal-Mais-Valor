
import{vigenciaInicial, vigenciaFinal} from  './datasConfig.js';
import{ INDEXPAGE, LOCALHOST, dataSession  } from './session.js';

 function incluirBd(uuid) {


    var vigenciaInicio = vigenciaInicial();
    var vigenciaFim = vigenciaFinal();
    var valorAssistencia = document.getElementById("valor_assistencia").value;
    if (valorAssistencia == "") valorAssistencia = 238.8;
    var ddd = document.getElementById("ddd").value;
    var telefone = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
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
  
    if (formaContratacao == "anual") {
      var parcelas_restantes = 1;
    } else if (formaContratacao == "mensal") {
      var parcelas_restantes = 12;
    }
  
    if (tipoContratacao == "Cartao de Credito") {
      var parcelas_restantes = 0;
    }
  
  
    var vencimento1 = document.getElementById("vencimento").value;
    var vencimento = vencimento1.split('-').reverse().join('-');
    vencimento = vencimento.replace("-", "/");
    vencimento = vencimento.replace("-", "/");
  
    //Dados do Parceiro //colocar num input hidden
    var parceiro = sessionStorage.getItem('nome');
    var id_parceiro =sessionStorage.getItem('id_acesso');
    var cpf_parceiro = sessionStorage.getItem('cpf_usuario');
    var gerente = sessionStorage.getItem('gerente');
    var supervisor = sessionStorage.getItem('supervisor');
//     var parceiro = "a";
//     var id_parceiro = "1"; 
//     var cpf_parceiro = "a";
//     var gerente = "a";
//     var supervisor ="a";
    var now = new Date;
    var data_inclusao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    var responsavel_alteracao = "z";
    var data_alteracao = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
  
    var mes_debito = now.getMonth();
    var mes_ultimo_debito = parseInt(mes_debito);
  
    var cpf_formatado1 = cpf.replace('.', '')
    var cpf_formatado2 = cpf_formatado1.replace('.', '')
    var cpf_formatado3 = cpf_formatado2.replace('-', '')
  
    if (product_id == 670) {
      var produtoEscolhido = "residencial";
      var sigla_produto_escolhido = "r";
  
    } else if (product_id == 669) {
      var produtoEscolhido = "saude";
      var sigla_produto_escolhido = "s";
    }
  
    if(uuid != null && uuid != "" && uuid != "undefined" && uuid != undefined){
        var contrato = uuid
    }else{
        var contrato = cpf_formatado3 + "cc" + sigla_produto_escolhido
    }

    var dn_formatada1 = data_nascimento.replace('/', '')
    var dn_formatada2 = dn_formatada1.replace('/', '')
    //tiras as barras da data de nascimento e colocar no id do cliente na empresa 
  
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
      "telefone": ddd + telefone,
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
      "data_vencimento": vencimento,
      "responsavel_alteracao": responsavel_alteracao,
      "data_alteracao": data_alteracao,
      "valor_assistencia": valorAssistencia,
      "id_cliente": cpf_formatado3 + dn_formatada2,
      "id_contrato": contrato,
      "parcelas_restantes": parcelas_restantes,
      "mes_ultimo_debito": mes_ultimo_debito,
      "vigencia_inicio": vigenciaInicio,
      "vigencia_fim": vigenciaFim,
  
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/incluir`, requestOptions)
      .then(response => response.json())
      .then(function (response) {

        if (response != "Por favor, preencha os dados obrigatórios"){
          alert("Assistencia incluída com sucesso! ");
        }else if( response == "Por favor, preencha os dados obrigatórios"){
          alert(response);
        }
        window.location.href =  `${INDEXPAGE}`

      })
      .catch(error => console.log('error', error));
  
  };


  export { incluirBd };
