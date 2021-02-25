/*const prosseguir = document.getElementById('prosseguirChavejBtn');
prosseguir.addEventListener('click', () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let status = document.getElementById('StatusChavej').value;
    let funcao = document.getElementById('exampleFormControlFuncao').value;
    let empresa = document.getElementById('chavejEmpresa').value;
    let dtEnvio = document.getElementById('dtEnvioChavej').value;
    let senha = document.getElementById('senhaChavej').value;
    let motCancel = document.getElementById('motCancelChaveJ').value;
    let tipoChave = document.getElementById('tipoChavej').value;
    let dtCancelamento = document.getElementById('dtCancelamentoChavej').value;

    var raw = JSON.stringify({
        status:status,
        funcao:funcao,
        empresa:empresa,
        data_envio:dtEnvio,
        senha:senha,
        motivo_cancelamento:motCancel,
        tipo_chave:tipoChave,
        data_inativacao:dtCancelamento
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,                                                                      
        redirect: 'follow'
      };  
      
      fetch("http://172.16.0.197:3000/user/cadastro/inclusao", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
})*/

