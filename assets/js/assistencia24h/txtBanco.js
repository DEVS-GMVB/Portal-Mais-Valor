

import { LOCALHOST } from './session.js';

function criarTxt(i, agencia, cpf, nome, cidade, estado, valorAss, count, valorFinal, conta_digito, vencimento) {

    let data = new Date();
    let diaHoje = ("0" + data.getDate()).slice(-2);
    let mesHoje = ("0" + (data.getMonth() + 1)).slice(-2);
    let anoHoje = data.getFullYear();
    let hoje = anoHoje + mesHoje + diaHoje;
  
    var valor_final2 = valorFinal.toString();
    var valor_total = valor_final2.replace(".", "");
  
    var _str = vencimento;
    var vencimento_invertido = _str.split('/').reverse().join('/');
    var vencimento_ = vencimento_invertido.replace("/", "");
    var vencimento_formatado = vencimento_.replace("/", "");
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "agencia": agencia,
      "cliente_cpf": cpf,
      "cliente_nome": nome,
      "numero_arquivo": i + 1,
      "cidade": cidade,
      "estado": estado,
      "valor_assistencia": valorAss,
      "qtdRegistros": count * 2 + 1, //contem cabecalho e 1 rodape
      "valor_final": valor_total,
      "data_hoje": hoje,
      "id_empresa_banco": conta_digito,
      "data_vencimento": vencimento_formatado
  
  
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/txt`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }
  
  
  
  
  function updateStatusAssistenciaTxt(codigo) {
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "codigo": codigo,
      "status": "Em Andamento"
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/updateStatus`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  };
  
  
  
  function envioEmailBanco() {
    var raw = "";
  
    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/emailBanco`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  export { criarTxt, updateStatusAssistenciaTxt, envioEmailBanco };
  