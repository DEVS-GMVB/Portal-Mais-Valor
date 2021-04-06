const URL = 'http://localhost:3000/user';

const BASE_PAGAMENTO = document.getElementById("btn-pagamento");
const BASE_EMAILS = document.getElementById("btn-emails");
const BASE_COMISSIONAMENTO = document.getElementById("btn-comissionamento");
const BASE_PARCEIROS = document.getElementById("btn-parceiros");
const BASE_CALLCENTER = document.getElementById("btn-callcenter");
const BASE_IDENTIFICACAO = document.getElementById("btn-indetificacao");
const BASE_PROPOSTAS = document.getElementById("btn-propostas");
const BASE_PROPOSTABB = document.getElementById("btn-propostabb");

BASE_PAGAMENTO.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "/pagamento", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("pagamento.xlsx", {headers: true}) FROM ?', [data]);
            // var csv = 'name_vod, active_vod, usersforvod, canceled\n';
            // data.forEach(function (obj) {
            //     csv += Object.values(obj).join(',');
            //     csv += "\n";
            // });

            // var hiddenElement = document.createElement('a');
            // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
            // hiddenElement.target = '_blank';
            // hiddenElement.download = 'data.csv';
            // hiddenElement.click();
        })
        .catch(error => console.log('error', error));
})

BASE_EMAILS.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "/emails", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("emails.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})

BASE_COMISSIONAMENTO.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL+"/comissionamento", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("comissionamento.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})

BASE_PARCEIROS.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(URL+"/parceiro", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("parceiros.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})

BASE_CALLCENTER.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(URL+"/callcenter", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("callcenter.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})

BASE_IDENTIFICACAO.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(URL+"/identificacao/chave", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("chavex.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})

BASE_PROPOSTAS.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(URL+"/proposta/indica", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("propostas.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})

BASE_PROPOSTABB.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch(URL+"/propostabb", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("propostas.xlsx", {headers: true}) FROM ?', [data]);
        })
        .catch(error => console.log('error', error));
})