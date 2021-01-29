
const buttonInclude = document.getElementById('incluirSilgasE');

buttonInclude.addEventListener('click', () =>{
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    let sigla = document.getElementById("validationSigla").value;
    let codigoEscritorio = document.getElementById('validationCodigoEscritorio').value;
    let nomeEscritorio = document.getElementById('validationNomeEscritorio').value;
    let statusSiglas = document.getElementById('exampleFormControlStatusSiglas').value;
    let dataInativacao = document.getElementById('validationDataInativacao').value;
    let motivoPendencia = document.getElementById('validationMotivoPendencia').value;
    let siglaPropesct = document.getElementById('validationSiglaPropesct').value;
    let cpfCnpf = document.getElementById('validationCpfCnpf').value;
    let parceiroPromotor = document.getElementById('validationParceiroPromotor').value;
    let usaSigla = document.getElementById('exampleFormControlUsaSigla').value;
    let obs = document.getElementById('exampleFormControlObs').value;
    
    var raw = JSON.stringify({
        siglae: sigla,
        codigo: codigoEscritorio,
        nome_carbon: nomeEscritorio,
        

    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("rota", requestOptions)
    .then(response => response.json())
    .catch(error => console.log('error', error));
})