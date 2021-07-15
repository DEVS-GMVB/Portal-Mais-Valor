import { mailing } from "./apiBrt.js";
import { envioBase64 } from "./apiBrt.js";
import { fechartransacao } from "./apiBrt.js";
import { dataHora, apis, toBase64 } from "../utils.js";

export const selectMailing = (access_token, id_transacao, proposta) => {

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "proposta": proposta
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.LOCALHOST}/user/Antifraude/brtSelectMailing`, requestOptions)
    .then(response => response.json())
    .then(result =>
      mailing(access_token, id_transacao, proposta, result)
    )
    .catch(error => console.log('error', error));
}


export const selectArquivos = (access_token, idTransacao, numeroProposta, cpf) => {

  let arrayArquivos = [],
    arrayUrls = [],
    arraybase64 = []
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "proposta": numeroProposta
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.LOCALHOST}/user/Antifraude/brtSelectArquivos`, requestOptions)
    .then(response => response.json())
    .then(function (data) {
      arrayArquivos = Object.values(data)

      let contadorArquivos = 0;
      while (contadorArquivos < 27) {

        if (arrayArquivos[contadorArquivos] != null &&
          arrayArquivos[contadorArquivos] != undefined &&
          arrayArquivos[contadorArquivos] != "0" &&
          arrayArquivos[contadorArquivos] != "") {
          arrayUrls.push(`https://grupogmvb.com/lw/${arrayArquivos[contadorArquivos]}`)
        }
        contadorArquivos++;
      }

      let contadorUrls = 0;
      while (contadorUrls < arrayUrls.length) {

        var url = arrayUrls[contadorUrls];
        toBase64(url, function (dataUrl) {

          let prefixoPdf = "data:application/pdf;base64,",
            prefixoJpeg = "data:image/jpeg;base64,",
            prefixoPng = "data:image/png;base64,";

          if (dataUrl.indexOf(prefixoPdf) != -1) {
            var tipoArquivo = prefixoPdf;
            var extensao = "pdf";
          } else if (dataUrl.indexOf(prefixoJpeg) != -1) {
            var tipoArquivo = prefixoJpeg;
            var extensao = "jpeg";
          } else if (dataUrl.indexOf(prefixoPng) != -1) {
            var tipoArquivo = prefixoPng;
            var extensao = "png";
          }

          dataUrl = dataUrl.replace(tipoArquivo, "");
          arraybase64.push(dataUrl)
          envioBase64(access_token, idTransacao, dataUrl, extensao)
        })
        contadorUrls++;
      }
      setTimeout(function () {
        fechartransacao(access_token, idTransacao, numeroProposta, cpf)
      }, 3000);
    })
    .catch(error => console.log('error', error));
}


export const insertBrt = (id_transacao, proposta, cpf_cliente) => {

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
    "empresa": "BRT"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(`${apis.LOCALHOST}/user/Antifraude/brtInsert`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export const updateBrt = (id_acesso, status_cliente) => {

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

  fetch(`${apis.LOCALHOST}/user/Antifraude/brtUpdate`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}