
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
})

