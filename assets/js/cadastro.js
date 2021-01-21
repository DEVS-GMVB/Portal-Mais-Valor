// VARS
var gerente = document.getElementById('exampleFormControlSelectGerente');
var filial = document.getElementById('exampleFormControlFilial');
var supervisor = document.getElementById('exampleFormControlSupervisor');
var mes = document.getElementById('exampleFormControlMes');
var mesDemissao = document.getElementById('exampleFormControlMesDemissao')

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };


  fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
    .then(response => response.json().then(function(data){
        for(let k in data){
            var op = document.createElement('option')
            op.text = `${data[k].gerente}`;
            gerente.append(op);
        }


    })).catch(error => console.log('error', error));

    
    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let k in data) {
            var op = document.createElement('option');
            op.text = `${data[k].filial}`;
            filial.append(op);
        }
    }))
    .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let k in data){
            var op = document.createElement('option');
            op.text = `${data[k].parceiro}`;
            supervisor.append(op);
        }
    }))
    .catch(error => console.log('error', error));







// Mês de admissão
for(let i = 1; i <= 12; i++) {
    var m = document.createElement('option');
    m.text = i;
    mes.append(m);
}

for(let i = 1; i <= 12; i++) {
    var me = document.createElement('option');
    me.text = i;
    mesDemissao.append(me);
}