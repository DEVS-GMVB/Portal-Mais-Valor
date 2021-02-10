let supervisorComissao = document.getElementById("exampleSupervisor");
let gerenteComissao = document.getElementById("exampleGerente");
<<<<<<< HEAD
=======
let parceiropromotor = document.getElementById("exampleParcPromo");
let status = document.getElementById("exampleStatus");
let dtGerente = document.getElementById("exampleDtGerente");
let dtSupervisor = document.getElementById("exampledtSupervisor")
let compPag = document.getElementById("exampleCompPag")
>>>>>>> master


window.onload = function () {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

<<<<<<< HEAD
=======
    //Supervisor
>>>>>>> master
    fetch("http://172.16.0.197:3000/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisorComissao.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'


            }
        }).catch(error => console.log('error', error));

<<<<<<< HEAD
=======
        //Gerente
>>>>>>> master
    fetch("http://172.16.0.197:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteComissao.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
                
            }
        })).catch(error => console.log('error', error));

<<<<<<< HEAD
}
=======
        //Parceiro Promotor
//   fetch("http://172.16.0.197:3000/user/comissao/promotor", requestOptions)
//   .then(response => response.json().then(function (data) {
//     for (let i = 0; i < data.length; i++) {
//       parceiropromotor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
//     }
//   })).catch(error => console.log('error', error));

      //Status
      fetch("http://172.16.0.197:3000/user/comissao/status", requestOptions)
      .then(response => response.json().then(function (data) {
        for (let i = 0; i < data.length; i++) {
            status.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
        }
      })).catch(error => console.log('error', error));

       //Data Gerente
       fetch("http://172.16.0.197:3000/user/comissao/datagerente", requestOptions)
       .then(response => response.json().then(function (data) {
         for (let i = 0; i < data.length; i++) {
            dtGerente.innerHTML += '<option value="' + data[i].data_ger + '">' + data[i].data_ger + '</option>;'
         }
       })).catch(error => console.log('error', error));

       //Data Supervisor
       fetch("http://172.16.0.197:3000/user/comissao/datasupervisor", requestOptions)
       .then(response => response.json().then(function (data) {
         for (let i = 0; i < data.length; i++) {
            dtSupervisor.innerHTML += '<option value="' + data[i].data_sup + '">' + data[i].data_sup + '</option>;'
         }
       })).catch(error => console.log('error', error));

       //Competencia Pagamento
       fetch("http://172.16.0.197:3000/user/comissao/competencia", requestOptions)
       .then(response => response.json().then(function (data) {
         for (let i = 0; i < data.length; i++) {
            compPag.innerHTML += '<option value="' + data[i].competencia + '">' + data[i].competencia + '</option>;'
         }
       })).catch(error => console.log('error', error));

}

>>>>>>> master
