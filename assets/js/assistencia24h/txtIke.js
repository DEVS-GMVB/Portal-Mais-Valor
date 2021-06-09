


function criarDocumentoIke(id_cliente, id_contrato, i, conta, nome, cpf, cidade, estado, count,
    nascimento, data_venda, rua, numero, complemento, bairro, cep, vigencia_inicio, vigencia_fim) { //incluir no parametro vigencia inicio e vigencia fim
  
    //formatando data de inclusão
    var data_venda0 = data_venda.toString()
    var data_venda1 = data_venda0.match(/\b(\d+\/\d+\/\d+)\b/g)
    var data_venda3 = data_venda1.toString()
    var data_venda4 = data_venda3.split('/') //erro na função split
  
    if (data_venda4[1] < 10) {
      data_venda4[1] = "0" + data_venda4[1];
    }
    if (data_venda4[0] < 10) {
      data_venda4[0] = "0" + data_venda4[0];
    }
    var data_venda_formatada = data_venda4[2] + data_venda4[1] + data_venda4[0];
  
  
    //formatando data de nascimento 
    var nascimento4 = nascimento.split('/') //erro na função split
    console.log(nascimento4)
    if (nascimento4[1] < 10 && nascimento4[1].indexOf("0") === -1) {
      nascimento4[1] = "0" + nascimento4[1];
    }
    if (nascimento4[0] < 10 && nascimento4[0].indexOf("0") === -1) {
      nascimento4[0] = "0" + nascimento4[0];
    }
    var nascimento_formatado = nascimento4[2] + nascimento4[1] + nascimento4[0];
  
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "contrato": id_contrato, //gerado pela GMVB (parte do projeto gerar internamente)
      "conta": conta,
      "qtdRegistros": count,
      "cod_interno_cliente": id_cliente,
      "nome": nome,
      "cpf": cpf,
      "data_nascimento": nascimento_formatado,
      "data_venda": data_venda_formatada, //limpar horas e caracteres especiais
      "endereco": rua,
      "numero": numero,
      "complemento": complemento,
      "bairro": bairro,
      "cidade": cidade,
      "cep": cep,
      "uf": estado,
      "numero_sequencial_arquivo": i,
      "vigencia_inicial": vigencia_inicio,
      "vigencia_final": vigencia_fim
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("http://localhost:3000/user/assistencia/ike", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  
  
  function envioSftp() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "teste": "Mais_Valor"
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch("http://localhost:3000/user/assistencia/ikeEnvio", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  export { criarDocumentoIke, envioSftp };