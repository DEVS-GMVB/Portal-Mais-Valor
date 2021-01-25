
// Vars
const colocar = document.getElementById('incluir');

colocar.addEventListener('click', () => {
  
    let parceiro = document.getElementById('validationCustomFuncionario').value;
    let cnpj = document.getElementById('cpfcnpj').value;
    let supervisor = document.getElementById('exampleFormControlSupervisor').value;
    let status = document.getElementById('status').value;
    let gerente = document.getElementById('exampleFormControlSelectGerente').value;
    let filial = document.getElementById('exampleFormControlFilial').value;
    let mes_admissao = document.getElementById('exampleFormControlMes').value;
    let mes_demissao = document.getElementById('exampleFormControlMesDemissao').value;
    let tipo = document.getElementById('exampleFormControlTipo').value;

    var raw = JSON.stringify(
        parceiro,
        cnpj,
        supervisor,
        status,
        gerente,
        filial,
        mes_admissao,
        mes_demissao,
        tipo
    )
      
    // var requestOptions = {
    //     method: 'POST',
    //     body: raw,
    //     redirect: 'follow'
    // };

<<<<<<< HEAD
    console.log(raw)
//     fetch("http://172.16.0.197:3000/user/search", requestOptions)
//     .then(response => response.json()
//     .then(function(data){
//         var row = document.createElement('tr');
//         row.insertCell(0).innerHTML = filal.options[filal.selectedIndex].text;
//         row.insertCell(1).innerHTML = func.value;
//         row.insertCell(2).innerHTML = cpfcnpj.value;
//         row.insertCell(3).in
//         document.getElementById('id').appendChild(row);
//     }))
//     .catch(error => console.log('error', error));
=======
    fetch("http://172.16.0.197:3000/user/search", requestOptions)
    .then(response => response.json()
    .then(function(data){
        console.log(data);
        var row = document.createElement('tr');
        row.insertCell(0).innerHTML = filal.options[filal.selectedIndex].text;
        row.insertCell(1).innerHTML = func.value;
        row.insertCell(2).innerHTML = cpfcnpj.value;
        row.insertCell(3).innerHTML = sel.options[sel.selectedIndex].text;
        row.insertCell(4).innerHTML = supervisor.options[supervisor.selectedIndex].text;
        row.insertCell(5).innerHTML = gere.options[gere.selectedIndex].text;
        document.getElementById('id').appendChild(row);
    }))
    .catch(error => console.log('error', error));
>>>>>>> b2d3d5a32b521e7ef09754c914f957d3d426ecd9
})

