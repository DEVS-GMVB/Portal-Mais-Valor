const URL = 'http://localhost:3000'

const dataSession = {
    id_acesso: sessionStorage.getItem('id_acesso', 'id_acesso'),
    status: sessionStorage.getItem('status', 'status'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome'),
    supervisor: sessionStorage.getItem('supervisor', 'supervisor'),
    gerente: sessionStorage.getItem('gerente', 'gerente'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    cpf_user: sessionStorage.getItem('cpf_usuario', 'cpf_usuario'),
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    supervisor_cpf: sessionStorage.getItem('supervisor_cpf', 'supervisor_cpf'),
    gerente_cpf: sessionStorage.getItem('gerente_cpf', 'gerente_cpf')
}

function dateNow() {
    let date = new Date();
    let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateNow;
}

function Insert(){
    const cpf = $('#cpf-incluir').val()
    const agencia = $('#agencia-incluir').val()
    const conta = $('#conta-incluir').val()
    //const status = $('#status-incluir').val()
    const convenio = $('#convenio-incluir').val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        cpf:cpf,
        agencia:agencia,
        conta:conta,
        status,
        convenio:convenio,
        id_acesso:dataSession.id_acesso,
        cpf_parceiro:dataSession.cpf_parceiro,
        parceiro:dataSession.nome,
        supervisor:dataSession.supervisor,
        cpf_supervisor:dataSession.supervisor_cpf,
        gerente:dataSession.gerente,
        cpf_gerente:dataSession.gerente_cpf
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/user/margemgoverno/incluir", requestOptions).
    then(response => response.json()).
    then(function (res) {
        console.log(body)
        $('#alertSucessoMargemGov').show();
        $('#alertSucessoMargemGov').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alertSucessoMargemGov").textContent = "Consulta de Margem Gov. SP incluida"
    })
}

function search(){

    var node = document.getElementById("List")
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild)
    }
    
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const status = $('#staus-pesquisar').val()
    const convenio = $('#convenio-pesquisar').val()
    const cpf = $('#cpf-pesquisar').val()
    const dtSolicitacao = $('#dtSolicitacao-pesquisar').val()

    const body = {
        status:status,
        convenio:convenio,
        cpf:cpf,
        data_atualizacao:dtSolicitacao
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/margemgoverno/filtro', requestOptions).
    then(response => response.json().then(function (data) {
        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('List');
            let row = specific_tbody.insertRow(-1);
            let cpf = row.insertCell(-1);
            let convenio = row.insertCell(-1);
            let status = row.insertCell(-1);
            let margem = row.insertCell(-1);
            let parceiro = row.insertCell(-1);
            let dtCadastro = row.insertCell(-1);
            let dtAtualizacao = row.insertCell(-1);

            let cpfText = document.createTextNode(`${data[i].cpf}`)
            cpf.appendChild(cpfText)

            let convenioText = document.createTextNode(`${data[i].convenio}`)
            convenio.appendChild(convenioText)

            let statusText = document.createTextNode(`${data[i].status}`)
            status.appendChild(statusText)

            let margemText = document.createTextNode(`${data[i].margem}`)
            margem.appendChild(margemText)

            let parceiroText = document.createTextNode(`${data[i].parceiro}`)
            parceiro.appendChild(parceiroText)

            let dtCadastroText = document.createTextNode(`${data[i].data_venda}`)
            dtCadastro.appendChild(dtCadastroText)

            let dtAtualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`)
            dtAtualizacao.appendChild(dtAtualizacaoText)
        }
    })).catch(error => console.log('error: ', error))
}