


const prosseguir = document.getElementById('incluirSilgasE');
prosseguir.addEventListener('click', () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json").value;
    let sigla = document.getElementById('validationSigla').value;
    let codEscritorio = document.getElementById('validationCodigoEscritorio').value;
    let nmEscritorio = document.getElementById('validationNomeEscritorio').value;
    let status = document.getElementById('exampleFormControlStatusSiglas').value;
    let dtInativacao = document.getElementById('validationDataInativacao').value;
    let motPendencia = document.getElementById('validationMotivoPendencia').value;
    let siglaPorsp = document.getElementById('validationSiglaPropesct').value;
    let cpfcnpjSigla = document.getElementById('validationCpfCnpf').value;
    let parcPromoSigla = document.getElementById('validationParceiroPromotor').value;
    let usaSiglaE = document.getElementById('exampleFormControlUsaSigla').value;
    let usaSilgaI = document.getElementById('exampleFormControlSelect1').value;
    let observ = document.getElementById('exampleFormControlObs').value;

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

let cpfCnpjSigla = document.getElementById("validationCpfCnpf");


cpfCnpjSigla.addEventListener('blur', () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({ "cnpj": cpfCnpjSigla.value });

  var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };

  fetch("http://172.16.0.197:3000/user/parceiros", requestOptions)
      .then(response => response.json())
      .then(function (data) {
          if (data[0].parceiro === "NAO INFORMADO NA INSERA‡A?O") {
              $("#idQuartenario").val("");
          } else {
              $("#idQuartenario").val(data[0].parceiro);
          }
      })
      .catch(error => console.log('error', error));
})

cpfCnpjSigla.addEventListener('keyup', () => {
  let promotor = document.getElementById("idQuartenario");
  if (promotor.value.length > 0) {
      $("#idQuartenario").val("")
  }
  // if($("#validationParceiroPromotor").val())
})
