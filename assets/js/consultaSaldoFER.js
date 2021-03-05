const URL = 'http://localhost:3000'

const breakModal = {
    buttonInsert: function(){
        document.getElementById('btn-incluir').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir" onclick="insertFER()">
                            <span class="btn-inner--icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="btn-inner--text">Incluir saldo FER</span>
                        </button>
        `
    }
}

function change(){
    breakModal.buttonInsert();
}

/*function insertFER(){
    const dtCadastro = $('#dataCadastro').val()
    const parceiro = $('#parceiro').val()
    const cpf = $('#cpf').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        data_cadastro: dtCadastro,
        parceiro:parceiro,
        cpf:cpf
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "", requestOptions).
    then(response => response.text()).
    then(function (res) {

    }).catch(error => console.log('erro: ', error))
}*/
