// VARS

let gerente = document.getElementById('exampleFormControlSelectGerente');
let filial = document.getElementById('exampleFormControlFilial');
let supervisor = document.getElementById('exampleFormControlSupervisor');
let mes = document.getElementById('exampleFormControlMes');
let mesDemissao = document.getElementById('exampleFormControlMesDemissao');
window.onload = function () {

var gerente = document.getElementById('exampleFormControlSelectGerente');
var filial = document.getElementById('exampleFormControlFilial');
var f = document.getElementById('exampleFormControlSelect1')
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
            gerente.innerHTML += '<option value="'+data[i].gerente+'">'+data[i].gerente+'</option>;'
        }
    })).catch(error => console.log('error', error));

    
    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            filial.innerHTML += '<option value="'+data[i].filial+'">'+data[i].filial+'</option>;'
        }
    }))
    .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/filial", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            f.innerHTML += '<option value="'+i+'">'+data[i].filial+'</option>;'
        }
    }))
    .catch(error => console.log('error', error));

    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
    .then(response => response.json()
    .then(function(data){
        for(let i = 0; i < data.length; i++){
            supervisor.innerHTML += '<option value="'+data[i].parceiro+'">'+data[i].parceiro+'</option>;'
        }
    }))
    .catch(error => console.log('error', error));
}
const colocar = document.getElementById('incluir');


colocar.addEventListener('click', () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    let parceiro = document.getElementById('validationCustomFuncionario').value;
    let cnpj = document.getElementById('cpfcnpj').value;
    let supervisor = document.getElementById('exampleFormControlSupervisor').value;
    let status = document.getElementById('status').value;
    let gerente = document.getElementById('exampleFormControlSelectGerente').value;
    let filial = document.getElementById('exampleFormControlFilial').value;
    let mes_admissao = document.getElementById('exampleFormControlMes').value;
    let mes_demissao = document.getElementById('exampleFormControlMesDemissao').value;
    let tipo = document.getElementById('exampleFormControlTipo').value;
    let superintendente = document.getElementById('exampleFormControlSelect1Superintendente').value;
    // console.log(cnpj,status,supervisor,gerente,filial, mes_admissao, mes_demissao, tipo,superintendente);
    var raw = JSON.stringify({
        parceiro:parceiro,
        cnpj:cnpj,
        supervisor:supervisor,
        status:status,
        gerente:gerente,
        filial:filial,
        mes_admissao:mes_admissao,
        mes_demissao:mes_demissao,
        tipo:tipo
    })
      
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    // console.log(raw);
    fetch("http://localhost:3000/user/search", requestOptions)
    .then(response => response.json())
    .then(result => {
        
        for (const value of result) {
            console.log(value);
            var x = document.createElement("tr");
            x.setAttribute("id", "myTr");
            document.getElementById("table").appendChild(x);

           
          }

    })
    .catch(error => console.log('error', error));
})


 // 
        
        // row.insertCell(1).innerHTML = func.value;
        // row.insertCell(2).innerHTML = cpfcnpj.value;
        // row.insertCell(3).in
        // document.getElementById('id').appendChild(row);