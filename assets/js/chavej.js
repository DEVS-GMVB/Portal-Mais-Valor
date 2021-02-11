let chaveJ_tab = document.getElementById("chavej-tab");
let testando2 = document.getElementById("chavej-tabb");
let comissao_tab = document.getElementById("comissao-tab");
let testando = document.getElementById("comissao-tabb");

window.onload = function () {
  
    // //--------------------------------
    // //Prosseguir chaveJ
    const prosseguirChaveJ = document.getElementById("prosseguirChaveJ");
    let contChavej = 0;
    prosseguirChaveJ.addEventListener("click", () => {

        contChavej++;
        if (contChavej === 1) {
            if (comissao_tab.getAttribute("aria-selected") == "true") {
                comissao_tab.setAttribute('aria-selected', false);
            }

            chaveJ_tab.setAttribute('aria-selected', true);
            chaveJ_tab.classList.add('active');
            comissao_tab.classList.remove('active');
        } else if (contChavej > 1) {
            // alert("etetdsasadadsf")
            chaveJ_tab.setAttribute('aria-selected', true);
            chaveJ_tab.classList.add('active');
            comissao_tab.classList.remove('active');

            testando2.classList.remove('active');

        }

    })

    chaveJ_tab.addEventListener('blur', () => {
        // comissao_tab.setAttribute('aria-selected', false);
        // alert("fdsfsdsdfs")
        chaveJ_tab.classList.remove('active');


    })
}


const prosseguir = document.getElementById('prosseguirChavejBtn');
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

        //Chavej
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
    //   console.log(response)
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
})
