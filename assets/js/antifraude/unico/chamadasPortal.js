
import { apis, dataHora } from "../utils";

const insertUnico = (id_transacao, proposta, cpf_cliente) => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "id_acesso": id_transacao,
      "proposta": proposta,
      "data_envio": dataHora.hoje,
      "data_atualizacao": dataHora.hoje,
      "responsavel_atualizacao": sessionStorage.getItem('nome'),
      "face_match": 0,
      "biometria": 0,
      "iveness": 0,
      "qrcode": 0,
      "status_cliente": "em processamento mesa",
      "cpf_cliente": cpf_cliente,
      "empresa": "Unico"
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${apis.LOCALHOST}/user/Antifraude/BrtInsert`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
   const updateUnico = (id_acesso, status_cliente) => {
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "id_acesso": id_acesso,
      "status_cliente": status_cliente,
      "data_atualizacao": dataHora.hoje
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${apis.LOCALHOST}/user/Antifraude/BrtUpdate`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }