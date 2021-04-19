const URL = 'http://localhost:3000'

let buscar = document.getElementById('btn-buscar');
let excel = document.getElementById('btn-excel')

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


window.onload = () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "/user/semanal/faixa", requestOptions)
        .then(response => response.json())
        .then(data => {
            for (const obj of data) {
                let specific_tbody = document.getElementById('tbody-1');
                let row = specific_tbody.insertRow(-1);
                let faixaPontuacao = row.insertCell(-1);
                let clt = row.insertCell(-1);

                let faixaPontuacaoTexto = document.createTextNode(`${obj.faixa}`);
                faixaPontuacao.appendChild(faixaPontuacaoTexto);

                let cltTexto = document.createTextNode(`${obj.valor_campanha}`);
                clt.appendChild(cltTexto);
            }
        })
        .catch(error => console.log('error', error));
}

buscar.addEventListener('click', () => {
    
    var node = document.getElementById("tbody-2");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const semana = $("#campo-semana").val();

    const body = {
        cnpj: dataSession.cpf_user,//'434.479.388-97',
        semana:semana
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/semanal/busca', requestOptions).
    then(response => response.json().then(function (data) {

        for(let i = 0; i < data.length; i++){
            let specific_tbody = document.getElementById('tbody-2');
            let row = specific_tbody.insertRow(-1);
            let proposta = row.insertCell(-1);
            let dtProposta = row.insertCell(-1);
            let parceiro = row.insertCell(-1);
            let vlSolicitado = row.insertCell(-1);
            let vlLiberado = row.insertCell(-1);
            let convenio = row.insertCell(-1);
            let tipo = row.insertCell(-1);
            let qtdParcelas = row.insertCell(-1);
            let mesRef = row.insertCell(-1);
            let banco = row.insertCell(-1);
            let pontosContrato = row.insertCell(-1);
            let vlPontuacao = row.insertCell(-1);
            let semana = row.insertCell(-1);
            //let premiacao = row.insertCell(-1);

            let propostaText = document.createTextNode(`${data[i].proposta}`);
            proposta.appendChild(propostaText);

            let dtPropostaText = document.createTextNode(`${data[i].data_proposta}`);
            dtProposta.appendChild(dtPropostaText);

            let parceiroText = document.createTextNode(`${data[i].parceiro}`);
            parceiro.appendChild(parceiroText);

            let vlSolicitadoText = document.createTextNode(`${data[i].valor_solicitado}`);
            vlSolicitado.appendChild(vlSolicitadoText);

            let vlLiberadotext = document.createTextNode(`${data[i].valor_liberado}`);
            vlLiberado.appendChild(vlLiberadotext);

            let convenioText = document.createTextNode(`${data[i].convenio}`);
            convenio.appendChild(convenioText);

            let tipoText = document.createTextNode(`${data[i].tipo}`);
            tipo.appendChild(tipoText);

            let qtdParcelasText = document.createTextNode(`${data[i].parcela_total}`);
            qtdParcelas.appendChild(qtdParcelasText);

            let mesRefText = document.createTextNode(`${data[i].mes}`);
            mesRef.appendChild(mesRefText);

            let bancoText = document.createTextNode(`${data[i].banco}`);
            banco.appendChild(bancoText);

            let pontosContratoText = document.createTextNode(`${data[i].contrato}`);
            pontosContrato.appendChild(pontosContratoText);

            let vlPontuacaoText = document.createTextNode(`${data[i].valor_pontuacao}`);
            vlPontuacao.appendChild(vlPontuacaoText);
            
            let semanatext = document.createTextNode(`${data[i].semana}`);
            semana.appendChild(semanatext);

        }

    })).catch(error => console.log('error: ', error))
})

excel.addEventListener('click', ()=>{
    var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("#table-2"));
})
