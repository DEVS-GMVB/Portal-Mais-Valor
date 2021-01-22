// VARS
var gerente = document.getElementById('exampleFormControlSelectGerente');
var filial = document.getElementById('exampleFormControlFilial');
var supervisor = document.getElementById('exampleFormControlSupervisor');
var mes = document.getElementById('exampleFormControlMes');
var mesDemissao = document.getElementById('exampleFormControlMesDemissao');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
    .then(response => response.json().then(function(data){
        for(let i = 0; i < data.length; i++){
            gerente.innerHTML += '<option value="'+i+'">'+data[i].gerente+'</option>;'
        }


    })).catch(error => console.log('error', error));

    
    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            filial.innerHTML += '<option value="'+i+'">'+data[i].filial+'</option>;'
        }
    }))
    .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            supervisor.innerHTML += '<option value="'+i+'">'+data[i].parceiro+'</option>;'
        }
    }))
    .catch(error => console.log('error', error));







// Mês de admissão
for(let i = 1; i <= 12; i++) {
    mes.innerHTML += '<option value="'+i+'">'+i+'</option>;'
}

for(let i = 1; i <= 12; i++) {
    mesDemissao.innerHTML += '<option value="'+i+'">'+i+'</option>;'

}