const URL = 'http://localhost:3000/user';

const BASE_PAGAMENTO = document.getElementById("base-pagamento");

BASE_PAGAMENTO.addEventListener('click', () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "/pagamento", requestOptions)
        .then(response => response.json())
        .then(data => {
            alasql('SELECT * INTO XLSX("arquivo.xlsx", {headers: true}) FROM ?', [data]);
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