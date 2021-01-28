const prosseguir = document.getElementById('prosseguirBtnSigla');
prosseguir.addEventListener('click', () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json").value;
    let sigla = document.getElementById('validationCustomSigla').value;
    let codEscritorio = document.getElementById('codEscritorio').value;
    let nmEscritorio = document.getElementById('nomeEscritorio').value;
    let status = document.getElementById('statusSigla').value;
    let dtInativacao = document.getElementById('dataInativacao').value;
    let motPendencia = document.getElementById('motivoPendencia').value;
    let siglaPorsp = document.getElementById('siglaProspesct').value;
    let cpfcnpjSigla = document.getElementById('cpfCnpjSigla').value;
    let parcPromoSigla = document.getElementById('parcPromoSigla').value;
    let usaSiglaE = document.getElementById('usaSiglaE').value;
    let usaSilgaI = document.getElementById('usaSiglaI').value;
    let observ = document.getElementById('observSigla').value;

    var raw = JSON.stringify({

        siglae:sigla,
        codigo_corban:codEscritorio,
        nome_corban:nmEscritorio,
        status_e:status,
        data_inativacao:dtInativacao,
        motivo_pendencia:motPendencia,
        sigla_prospect:siglaPorsp,
        cpf_usuario_1:cpfcnpjSigla,
        //PerceiroPromotor
        usa_esteira1:usaSiglaE,
        usa_siglai1:usaSilgaI,
        observacao:observ
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,                                                                      
        redirect: 'follow'
      };  
      
      fetch("http://172.16.0.197:3000/user/cadastro/inclusao", requestOptions)
      .then(response => response.json())
    //   console.log(response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

})