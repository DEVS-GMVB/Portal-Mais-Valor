import {
  apis
} from "../utils";


const apiTokenGmvb = () => { 

  var myHeaders = new Headers();
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch("http://api.grupogmvb.com:3335/unico", requestOptions)
    .then(response => response.json())
    .then(result => tokenUnico(result.jwtToken))
    .catch(error => console.log('error', error));

}


const tokenUnico = (tokenGmvb) => { //recebe como paraametro o token gmvb

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Cookie", "incap_ses_1242_2244026=km1MB67/yXkmbkA7xng8EbT5zGAAAAAAwPcXTDSd8qi4DiqlCH5h9Q==; visid_incap_2242254=XqRNxV6ZTcKfENHqBXgzLIGRJmAAAAAAQUIPAAAAAACG6qr0Dk9gU9w4gwIAWmIu; visid_incap_2244026=EHR96/XRTUGKBseC0L6ELpI8LWAAAAAAQUIPAAAAAABGEr/A+v4oK6S4ggV5Urbu; _session_idp=s%3AgYvV0nHJh5hRJa6_Xa-YxlgCv47VIvDv.I28eg0VOn3NvdbyYM8qSUjtkQLJcEwjwtPsgm9Ic%2FCs");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "urn:ietf:params:oauth:grant-type:jwt-bearer");
  urlencoded.append("assertion", `${tokenGmvb}`);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };
  fetch("https://identity.acesso.io/oauth2/token", requestOptions)
    .then(response => response.text())
    .then(result => enviarMsg(result.access_token))
    .catch(error => console.log('error', error));
}


const enviarMsg = (tokenUnico) => {

  //pegar dados das Tags
  var myHeaders = new Headers();
  myHeaders.append("APIKEY", "aaa6b16b-09cf-4594-b07c-9e5bba008224");
  myHeaders.append("Authorization", `Bearer ${tokenUnico}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "incap_ses_1242_2244026=Xyu8QUuGuHpZKlxMxng8EYr52WAAAAAABIRhg/T6gtmH4NszEKh8MA==; visid_incap_2242254=XqRNxV6ZTcKfENHqBXgzLIGRJmAAAAAAQUIPAAAAAACG6qr0Dk9gU9w4gwIAWmIu; visid_incap_2244026=EHR96/XRTUGKBseC0L6ELpI8LWAAAAAAQUIPAAAAAABGEr/A+v4oK6S4ggV5Urbu; .ASPXAUTH=2CA5E494AD5CED403C5389EC424C1BFCC22D684EB8D8DCCCB57C4FAB584E21078F1E7DF5D9A67096E67D31AE3C9C34039996C9FF78DAD33485933EB9DF0B170844346C7BB0C3B6444A75600BDEA46C36EEE7F697F2A571536137491DAED8C316F0393E96DA4C4AAF4AFDE4FBD0926041F4AE882344A1FC696B71801FC6B071480E3A4CA36B77EA5BC80ECCE7E494CEDF1E42ADAF; GCLB=CNDF8P7Tz82UPQ");

  var raw = JSON.stringify({
    "subject": {
      "Code": "01431091030",
      "Name": "Maria Clara Silva",
      "Gender": "F",
      "BirthDate": "01/01/1998",
      "Email": "thãynara.rodrigues@gmvb.com.br",
      "Phone": "5511992067272"
    },
    "indexes": [{
      "key": "{NUMERO DA SOLICITAÇÃO}",
      "value": "0",
      "page": "SMS"
    }],
    "template": "msg_gmvb",
    "send": "true"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(`${apis.URL_UNICO}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result.Id + "  " + result.Error.Description))
    .catch(error => console.log('error', error));
}


const statusRecebimentoMsg = (token, idMessage) => {

  var myHeaders = new Headers();
  myHeaders.append("APIKEY", "aaa6b16b-09cf-4594-b07c-9e5bba008224");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "incap_ses_1242_2244026=Xyu8QUuGuHpZKlxMxng8EYr52WAAAAAABIRhg/T6gtmH4NszEKh8MA==; visid_incap_2242254=XqRNxV6ZTcKfENHqBXgzLIGRJmAAAAAAQUIPAAAAAACG6qr0Dk9gU9w4gwIAWmIu; visid_incap_2244026=EHR96/XRTUGKBseC0L6ELpI8LWAAAAAAQUIPAAAAAABGEr/A+v4oK6S4ggV5Urbu; .ASPXAUTH=2CA5E494AD5CED403C5389EC424C1BFCC22D684EB8D8DCCCB57C4FAB584E21078F1E7DF5D9A67096E67D31AE3C9C34039996C9FF78DAD33485933EB9DF0B170844346C7BB0C3B6444A75600BDEA46C36EEE7F697F2A571536137491DAED8C316F0393E96DA4C4AAF4AFDE4FBD0926041F4AE882344A1FC696B71801FC6B071480E3A4CA36B77EA5BC80ECCE7E494CEDF1E42ADAF; GCLB=CNDF8P7Tz82UPQ");

  var raw = "";
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(`${apis.URL_UNICO}/sent/${idMessage}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result)) //puxar o statusGeralMsg ta,bem
    .catch(error => console.log('error', error));
}


const statusGeralMsg = (token, idMessage) => {

  var myHeaders = new Headers();
  myHeaders.append("APIKEY", "aaa6b16b-09cf-4594-b07c-9e5bba008224");
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Cookie", "incap_ses_1242_2244026=Xyu8QUuGuHpZKlxMxng8EYr52WAAAAAABIRhg/T6gtmH4NszEKh8MA==; visid_incap_2242254=XqRNxV6ZTcKfENHqBXgzLIGRJmAAAAAAQUIPAAAAAACG6qr0Dk9gU9w4gwIAWmIu; visid_incap_2244026=EHR96/XRTUGKBseC0L6ELpI8LWAAAAAAQUIPAAAAAABGEr/A+v4oK6S4ggV5Urbu; .ASPXAUTH=2CA5E494AD5CED403C5389EC424C1BFCC22D684EB8D8DCCCB57C4FAB584E21078F1E7DF5D9A67096E67D31AE3C9C34039996C9FF78DAD33485933EB9DF0B170844346C7BB0C3B6444A75600BDEA46C36EEE7F697F2A571536137491DAED8C316F0393E96DA4C4AAF4AFDE4FBD0926041F4AE882344A1FC696B71801FC6B071480E3A4CA36B77EA5BC80ECCE7E494CEDF1E42ADAF; GCLB=CNDF8P7Tz82UPQ");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  fetch(`${apis.URL_UNICO}/${idMessage}`, requestOptions)
    .then(response => response.text())
    .then(function (data) {

      let status = data.status;
      let statusDescricao = "";

      switch (status) {
        case 0:
          statusDescricao = "Não enviado";
          break;
        case 1:
          statusDescricao = "Aguardando Documentos";
          break;
        case 2:
          statusDescricao = "Em Divergência (resolver no Painel AcessoBio)";
          break;
        case 3:
          statusDescricao = "Concluído ";
          break;
        case 4:
          statusDescricao = "Cancelado";
          break;
        case 5:
          statusDescricao = "Erro";
          break;
        case 6:
          statusDescricao = "Enviando Mensagem ";
          break;
        case 7:
          statusDescricao = "Aguardando captura da mensagem";
          break;
        case 8:
          statusDescricao = "Reenviando mensagem";
          break;
      };
 
      console.log(statusDescricao)
    })
    .catch(error => console.log('error', error));
}