let supervisorComissao = document.getElementById("exampleSupervisor");
let gerenteComissao = document.getElementById("exampleGerente");


window.onload = function () {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisorComissao.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'


            }
        }).catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteComissao.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                
            }
        })).catch(error => console.log('error', error));

}