
import { updateStatusAssistenciaTxt, criarTxt, envioEmailBanco } from './txtBanco.js';
import { updateParcelasRestantes } from './atualizaParcelas.js';
import { personalizaHtml} from './certBoasVindas.js'; 
import { criarDocumentoIke, envioSftp} from './txtIke.js'; 
import { LOCALHOST } from './session.js';
//import { envioEmailcliente } from './emailCliente.js';



function setarEnvioDiaHora() {
    var now = new Date
    var hora_agora = now.getHours() + "" + now.getMinutes();
    var hora = parseInt(hora_agora)
    var dia = String(now.getDate()).padStart(2, '0');
    var diaFormatado = parseInt(dia)
    var localStrg = parseInt(localStorage.getItem("diaEnvioBanco"))
  
    if (localStorage.getItem("diaEnvioBanco") === null || localStrg < diaFormatado) {
      localStorage.setItem('diaEnvioBanco', diaFormatado);
    }
  
    var diaEnvioBanco = localStorage.getItem('diaEnvioBanco');
  
    if (hora > 1600 && diaEnvioBanco == diaFormatado) {
      filtraAssistenciasDebito();
      localStorage.setItem('diaEnvioBanco', diaFormatado + 1);
    }
  
  }

  
  
  function filtraAssistenciasDebito() {
    var now = new Date
    var mes_atual = now.getMonth();
    var mes = parseInt(mes_atual);
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "tipo_contratacao": "Conta bancaria",
      "mes_ultimo_debito": mes //mes anterior
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/cnab`, requestOptions)
      .then(response => response.json())
      .then((function (data) {
  
        var count = data.length;
        var i = 0;
        var valor_total = 0;
  
        for (i; i < count; i++) {
  
          var codigo = data[i].codigo;
          updateStatusAssistenciaTxt(codigo);
  
          var nome = data[i].cliente_nome;
          nome = nome.replaceAll(" ", "");
          var agencia = data[i].agencia;
          var conta = data[i].conta;
          var email = data[i].email;
          var digito = data[i].digito;
          var conta_digito = conta + " " + digito;
          var cpf = data[i].cliente_cpf;
          var vencimento = data[i].data_vencimento;
          var nascimento = data[i].data_nascimento;
          cpf = cpf.replace(/\.|\-/g, '');
          var cidade = data[i].cidade;
          var estado = data[i].estado;
          var valor_assistencia = data[i].valor_assistencia;
          var valorFormatado = parseFloat(valor_assistencia)
          var valorFinal = valor_total += valorFormatado;
          var data_venda = data[i].data_inclusao;
          var rua = data[i].rua;
          var numero = data[i].numero;
          var complemento = data[i].complemento;
          var bairro = data[i].bairro;
          var cep = data[i].cep;
          var id_cliente = data[i].id_cliente;
          var id_contrato = data[i].id_contrato;
          var forma_contratacao = data[i].forma_contratacao;
          var parcelas_restantes = data[i].parcelas_restantes;
          var tipo_assistencia = data[i].tipo_assistencia;
          var vigencia_inicio = data[i].vigencia_inicio;
          var vigencia_fim = data[i].vigencia_fim;
          var parcelas_restantes_formatado = parseInt(parcelas_restantes);
          var parcelas_atualizadas = parcelas_restantes_formatado - 1;
  
          var vigencia_inicio2 = vigencia_inicio.split('/').reverse().join('/');
          var vigencia_inicio3 = vigencia_inicio2.replace("/", "");
          var vigencia_inicio4 = vigencia_inicio3.replace("/", "");
  
          var vigencia_fim2 = vigencia_fim.split('/').reverse().join('/');
          var vigencia_fim3 = vigencia_fim2.replace("/", "");
          var vigencia_fim4 = vigencia_fim3.replace("/", "");
  
          var mes_ultimo_debito = mes + 1;
  
          if (forma_contratacao == "anual" && parcelas_restantes == 1) {
            var valorAss = "23880";
            updateParcelasRestantes(codigo, parcelas_atualizadas, mes_ultimo_debito)

          } else if (forma_contratacao == "mensal") {
  
            if (parcelas_restantes == 12) {
              var valorAss = "1990"; //cobrara 2x de 19,90
              criarTxt(i, agencia, cpf, nome, cidade, estado, valorAss, count, valorFinal,
                conta_digito, vencimento);
              updateParcelasRestantes(codigo, parcelas_atualizadas, mes_ultimo_debito)
  
            } else if (parcelas_restantes < 12 && parcelas_restantes > 0) {
              var valorAss = "1990";
              updateParcelasRestantes(codigo, parcelas_atualizadas, mes_ultimo_debito)
            }
  
          }
  
          personalizaHtml(id_contrato, nome, cpf, tipo_assistencia, vigencia_inicio, vigencia_fim, forma_contratacao, email)
       
          criarTxt(i, agencia, cpf, nome, cidade, estado, valorAss, count, valorFinal,
            conta_digito, vencimento);
  
          criarDocumentoIke(id_cliente, id_contrato, i, conta, nome, cpf, cidade, estado, count,
            nascimento, data_venda, rua, numero, complemento, bairro, cep, vigencia_inicio4, vigencia_fim4);
  
        }
  
      //  envioEmailBanco();
      //  envioSftp();

      //   var emailteste = "thaynara.rodrigues@gmvb.com.br";
      //   envioEmailcliente(emailteste);//só vai se o pdf foi criado anteriormente
  
  
      }))
      .catch(error => console.log('error', error));
  
  }


  export { setarEnvioDiaHora, filtraAssistenciasDebito }