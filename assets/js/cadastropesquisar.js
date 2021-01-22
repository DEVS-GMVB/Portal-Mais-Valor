var colocar = document.getElementById('incluir');
var func = document.getElementById('validationCustomFuncionario')
var cpfcnpj = document.getElementById('cpfcnpj');
var supervisor = document.getElementById('exampleFormControlSupervisor');
var sel = document.getElementById('status');
var supe = document.getElementById('exampleFormControlSupervisor');
var gere = document.getElementById('exampleFormControlSelectGerente');
var filal = document.getElementById('exampleFormControlFilial');
var mesAd = document.getElementById('exampleFormControlMes');
var mesDe = document.getElementById('exampleFormControlMesDemissao');
var tipo = document.getElementById('exampleFormControlTipo');
// Vars


colocar.addEventListener('click', () => {

    var raw = JSON.stringify(
        {"parceiro": func.value},
        {"cnpj": cpfcnpj.value},
        {"status": sel.value},
        {"supervisor": supe.value},
        {"gerente": gere.value},
        {"filial": filal.value},
        {"mes_admissao": mesAd.value},
        {"mes_demissao" : mesDe.value},
        {"tipo": tipo.value}
    )
      
    var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    };


    fetch("http://172.16.0.197:3000/user/search", requestOptions)
    .then(response => response.json()
    .then(function(data){
        var row = document.createElement('tr');
        row.insertCell(0).innerHTML = filal.options[filal.selectedIndex].text;
        row.insertCell(1).innerHTML = func.value;
        row.insertCell(2).innerHTML = cpfcnpj.value;
        row.insertCell(3).in
        document.getElementById('id').appendChild(row);
    }))
    .catch(error => console.log('error', error));
})

