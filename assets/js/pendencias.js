const URL = 'http://localhost:3000';


//Campos de filtro
const produtoFiltro = document.getElementById("produto-filtro");
const bancoPortabilidadeFiltro = document.getElementById("banco-protabilidade-filtro");
const empresaFiltro = document.getElementById("empresa-filtro");
const substatusFiltro = document.getElementById("sub-status-filtro");
const supervisorFiltro = document.getElementById("supervisor-filtro");
const gerenteFiltro = document.getElementById("gerente-filtro");

//ComboModais
const produtoModal6 = document.getElementById("produto-modal-6");
const bancoModal8 = document.getElementById("banco-cliente-modal-8");

//Eventos/Btns
const filtroBtn = document.getElementById("btn-filtrar-busca");

// estrutura de dados
const mapHash = new Map();

//Array 
const arrays = {
    arrayProposta: arrayProposta = [],
}

//Dados na sessão
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
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(URL + "/user/proposta/produto", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                produtoFiltro.innerHTML += `<option value =${element.produto}>${element.produto}</option>`;
                produtoModal6.innerHTML += `<option value =${element.produto}>${element.produto}</option>`;
            });
        })


    fetch(URL + "/user/proposta/bancos", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                bancoPortabilidadeFiltro.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
                bancoModal8.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
            });
        })

    fetch(URL + "/user/proposta/empresas", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                empresaFiltro.innerHTML += `<option value =${element.empresa}>${element.empresa}</option>`;
            });
        })

    fetch(URL + "/user/proposta/substatus", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            data.forEach(element => {
                substatusFiltro.innerHTML += `<option value =${element}>${element}</option>`;
            });
        })


    fetch("http://localhost:3000/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                supervisorFiltro.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
            }
        }).catch(error => console.log('error', error));

    fetch("http://localhost:3000/user/gerente", requestOptions)
        .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
                gerenteFiltro.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
        })).catch(error => console.log('error', error));

    const raw = JSON.stringify({
        nome: dataSession.nome
    })

    fetch(URL + '/user/vinculo', {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }).then(response => response.json().then(function (data) {
        const selectParent = document.getElementById("vinculo-filtro");
        selectParent.innerHTML = `<option value=${data} selected> ${data} </option>`

    })).catch(error => console.log('error', error))
}

filtroBtn.addEventListener('click', async () => {
    document.getElementById("list").innerHTML = ``;

    const tipoUsuarioFiltro = document.getElementById("tp-usuario-filtro").value;
    const propostaFiltro = document.getElementById("proposta-filtro").value;
    const statusFiltro = document.getElementById("status-filtro").value;
    const tipoFiltro = document.getElementById("tipo-filtro").value;
    const cpfFiltro = document.getElementById("cpf-filtro").value;
    const empresaFiltro = document.getElementById("empresa-filtro").value;
    const mesFiltro = document.getElementById("mes-filtro").value;
    const previsaoSaldoFiltro = document.getElementById("previsao-saldo-filtro").value;
    const novaPropostaFiltro = document.getElementById("nova-proposta-filtro").value;
    const bancoPortabilidadeFiltro = document.getElementById("banco-protabilidade-filtro").value;
    const ordernarFiltro = document.getElementById("ordenar-filtro").value;
    const dataCadastroFiltro = document.getElementById("data-cadastro-filtro").value;
    const dataAtualizacaoFiltro = document.getElementById("data-atualizacao-filtro").value;
    const correntistaFiltro = document.getElementById("correntista-filtro").value;
    const subStatusFiltro = document.getElementById("sub-status-filtro").value;
    const classificacaoFiltro = document.getElementById("classificacao-filtro").value;
    const situacaoStatusFiltro = document.getElementById("situacao-status-filtro").value;
    const convenioMasterFiltro = document.getElementById("convenio-master-filtro").value;
    const faseStatusFiltro = document.getElementById("fase-staus-filtro").value;
    const bancoFiltro = document.getElementById("banco-filtro").value;
    const produtoFiltro = document.getElementById("produto-filtro").value;
    const usuarioMasterFiltro = document.getElementById("usuario-master-filtro").value;
    const supervisorFiltro = document.getElementById("supervisor-filtro").value;
    const produtoMasterFiltro = document.getElementById("produto-master-filtro").value;
    const gerenteFiltro = document.getElementById("gerente-filtro").value;
    const tipoUsuarioMasterFiltro = document.getElementById("tp-usuario-master-filtro").value;
    const dataCorteFiltro = document.getElementById("data-corte-filtro").value;
    const empresaSmsFiltro = document.getElementById("empresa-sms-filtro").value;
    const convenioFiltro = document.getElementById("convenio-filtro").value;
    const vinculoFiltro = document.getElementById("vinculo-filtro");
    const horarioAgendamentoFiltro = document.getElementById("horario-agendamento-filtro").value;
    const validadeContratoFiltro = document.getElementById("validade-contrato-filtro").value;
    const etapaSmsFiltro = document.getElementById("etapa-sms-filtro").value;
    const bancoMasterFiltro = document.getElementById("banco-master-filtro").value;


    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        // cnpj_matriz: cnpj_matr,
        // tipo_usuario: tipo_usuario,
        // perfil: perfil,
        // nome: nome,
        // parceiro: usuario,
        // tipo_parceiro: tipoUsuario,
        proposta: propostaFiltro,
        status: statusFiltro,
        tipo: tipoFiltro,
        cpf: cpfFiltro,
        empresa: empresaFiltro,
        mes: mesFiltro,
        previsao_retorno: previsaoSaldoFiltro,
        novo_proposta: novaPropostaFiltro,
        banco: bancoFiltro,
        data_envio: dataCadastroFiltro,
        data_atualizacao: dataAtualizacaoFiltro,
        // correntista: correntistaFiltro,
        sub_status: subStatusFiltro,
        situacao: situacaoStatusFiltro,
        master: usuarioMasterFiltro,
        tipo_fase: faseStatusFiltro,
        banco_origi: bancoPortabilidadeFiltro,
        produto: produtoFiltro,
        classificacao: classificacaoFiltro,
        usuario_master: tipoUsuarioMasterFiltro,
        supervisor: supervisorFiltro,
        sms: etapaSmsFiltro,
        gerente: gerenteFiltro,
        // tipo_parceiro2: tipo_parceiro2,
        data_corte: dataCorteFiltro,
        empresa_sms: empresaSmsFiltro,
        convenio: convenioFiltro,
        // data_vinculo: vinculo,
        horario: horarioAgendamentoFiltro,
        validade_contrato: validadeContratoFiltro,
        etapa_sms: etapaSmsFiltro,
        tipo_banco: bancoMasterFiltro
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    const data = await fetch(`${URL}/user/pendencia`, requestOptions).then(response => response.json());

    arrays.arrayProposta = []

    for (let i in data) {
        let specific_tbody = document.getElementById('list');
        let row = specific_tbody.insertRow(-1);
        let proposta = row.insertCell(-1);
        let nome = row.insertCell(-1);
        let cpf = row.insertCell(-1);
        let data_cadastro = row.insertCell(-1);
        let parceiro = row.insertCell(-1);
        let valor_entregue = row.insertCell(-1);
        let valor_troco = row.insertCell(-1);
        let convenio = row.insertCell(-1);
        let banco = row.insertCell(-1);
        let produto = row.insertCell(-1);
        let tipo = row.insertCell(-1);
        let status = row.insertCell(-1);
        let substatus = row.insertCell(-1);
        let data_atualizacao = row.insertCell(-1);
        let qtd_consulta_robo = row.insertCell(-1);
        let log_alteracao = row.insertCell(-1);
        let previsao_saldo = row.insertCell(-1);
        let api_sim = row.insertCell(-1);
        let gravacao = row.insertCell(-1);
        let telefoneconstanotfc = row.insertCell(-1);
        //let anexos = row.insertCell(-1);
        let alteraVisualiza = row.insertCell(-1);


        let propostaText = document.createTextNode(`${data[i].proposta}`);
        proposta.appendChild(propostaText);
        let nomeText = document.createTextNode(`${data[i].nome}`);
        nome.appendChild(nomeText);
        let cpfText = document.createTextNode(`${data[i].cpf}`);
        cpf.appendChild(cpfText);
        let data_cadastroText = document.createTextNode(`${data[i].data_envio}`);
        data_cadastro.appendChild(data_cadastroText);
        let parceiroText = document.createTextNode(`${data[i].parceiro}`);
        parceiro.appendChild(parceiroText);
        let valor_entregueText = document.createTextNode(`${data[i].entregue}`);
        valor_entregue.appendChild(valor_entregueText);
        let valor_trocoText = document.createTextNode(`${data[i].valor_troco}`);
        valor_troco.appendChild(valor_trocoText);
        let convenioText = document.createTextNode(`${data[i].convenio}`);
        convenio.appendChild(convenioText);
        let bancoText = document.createTextNode(`${data[i].banco}`);
        banco.appendChild(bancoText);
        let produtoText = document.createTextNode(`${data[i].produto}`);
        produto.appendChild(produtoText);
        let tipoText = document.createTextNode(`${data[i].tipo}`);
        tipo.appendChild(tipoText);
        let statusText = document.createTextNode(`${data[i].status}`);
        status.appendChild(statusText);
        let substatusText = document.createTextNode(`${data[i].sub_status}`);
        substatus.appendChild(substatusText);
        let data_atualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`);
        data_atualizacao.appendChild(data_atualizacaoText);
        let qtd_consulta_roboText = document.createTextNode(`${data[i].qtd_robo}`);
        qtd_consulta_robo.appendChild(qtd_consulta_roboText);
        let log_alteracaoText = document.createTextNode(`${data[i].data_log1}`);
        log_alteracao.appendChild(log_alteracaoText);
        let previsao_saldoText = document.createTextNode(`${data[i].previsao_retorno}`);
        previsao_saldo.appendChild(previsao_saldoText);
        let api_simText = document.createTextNode(`${data[i].id_sim}`);
        api_sim.appendChild(api_simText);
        let gravacaoText = document.createTextNode(`${data[i].gravacao}`);
        gravacao.appendChild(gravacaoText);
        let telefoneconstanotfcText = document.createTextNode(`${data[i].tfc}`);
        telefoneconstanotfc.appendChild(telefoneconstanotfcText);

        arrays.arrayProposta.push(data[i].proposta)
        mapHash.set(data[i].proposta, data[i]);

        // anexos.innerHTML = `<td id="" class="text-right" style="text-align: center;">
        //                      <div class="actions ml-3" style="text-align: center;">
        //                       <a href="#" class="action-item mr-2 " data-toggle="modal" title="download">
        //                         <i class="fas fa-download" onclick="downloadAnexo(mapHash.get(${data[i].proposta}))"></i>
        //                       </a>
        //                      </div>
        //                    </td>`;

        if (data[i].status === "MODALIDADE DIVERGENTE ENTRE CSG E CONTRATO" || data[i].status === "CONVENIO DIVERGENTE DA CCB") {
            //Modal 6
            alteraVisualiza.innerHTML =
                `<div class="actions ml-3" style="text-align: center;">
                        <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-six-pend" title="Alterar">
                            <i class="fas fa-external-link-alt" onclick="modal6(arrays.arrayProposta[${i}])"></i>
                        </a>
                    </div>`
        } else if (data[i].status === "PENDENTE CSG") {
            //Modal 5
            alteraVisualiza.innerHTML =
                `<div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-five-pend" title="Alterar">
                <i class="fas fa-external-link-alt" onclick="modal5(arrays.arrayProposta[${i}])"></i>
            </a>
        </div>`
        } else if (data[i].status === "INFORMAR TABELA DE SALDO - BRADESCO") {
            //Modal 3
            alteraVisualiza.innerHTML =
                `<div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-three-pend" title="Alterar">
                <i class="fas fa-external-link-alt" onclick="modal3(arrays.arrayProposta[${i}])"></i>
            </a>
        </div>`
        } else if (data[i].status === "SALDO RECEBIDO - AGUARDANDO AUTORIZACAO") {
            //Modal 2
            alteraVisualiza.innerHTML =
                `<div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-two-pend" title="Alterar">
                <i class="fas fa-external-link-alt" onclick="modal2(arrays.arrayProposta[${i}])"></i>
            </a>
        </div>`
        } else if (data[i].status === "SEM CONTATO COM O CLIENTE - ANEXAR GRAVACAO") {
            //Modal 7
            alteraVisualiza.innerHTML =
                `<div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-seven-pend" title="Alterar">
                <i class="fas fa-external-link-alt" onclick="modal7(arrays.arrayProposta[${i}])"></i>
            </a>
        </div>`
        } else {
            //Modal 4
            alteraVisualiza.innerHTML =
                `<div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2 " data-toggle="modal" data-target=".modal-four-pend" title="Alterar">
                <i class="fas fa-external-link-alt" onclick="modal4(arrays.arrayProposta[${i}])"></i>
            </a>
        </div>`
        }
    }

});

function modal6(proposta) {

    $('.needs-validation').each(function () {
        this.reset();
    });

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        proposta: proposta
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#convenio-modal-6").val(data.convenio)
        $("#produto-modal-6").val(data.produto)
    })).catch(error => console.log('erro: ', error))

    document.getElementById('div-btn-modal-6').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-modal-6"
        onclick="update(${proposta})">
                                <span class="btn-inner--icon">
                                    <i class="fas fa-plus"></i>
                                </span>
                                <span class="btn-inner--text">Salvar Alteração 6</span>
                            </button>`

}

function modal5(proposta) {

    
    $('.needs-validation').each(function () {
        this.reset();
    });

    console.log(proposta)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        proposta: proposta
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#obs-pendencia-modal-5").val(data.obs_pendencia)
        $("#cadastro1-modal-5").val(data.arq_cad1)
        $("#cadastro2-modal-5").val(data.arq_cad2)
        $("#cadastro3-modal-5").val(data.arq_cad3)
        $("#cadastro4-modal-5").val(data.arq_cad4)
        $("#cadastro5-modal-5").val(data.arq_cad1n)
        $("#cadastro6-modal-5").val(data.arq_cad2n)
        $("#cadastro7-modal-5").val(data.arq_cad3n)
        $("#cadastro8-modal-5").val(data.arq_cad4n)
    })).catch(error => console.log('erro: ', error))

    document.getElementById('div-btn-modal-5').innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-modal-5"
        onclick="update(${proposta})">
                                <span class="btn-inner--icon">
                                    <i class="fas fa-plus"></i>
                                </span>
                                <span class="btn-inner--text">Salvar Alteração 5</span>
                            </button>`

}

function modal3(proposta) {

    
    $('.needs-validation').each(function () {
        this.reset();
    });

    console.log(proposta)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        proposta: proposta
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#tipo-modal-3").val(data.tipo)
        $("#obs-pendencia-modal-3").val(data.obs_pendencia)
        $("#saldo1-modal-3").val(data.saldo_port1)
        $("#saldo2-modal-3").val(data.saldo_port2)
        $("#saldo3-modal-3").val(data.saldo_port3)
    })).catch(error => console.log('erro: ', error))

    document.getElementById('div-btn-modal-3').innerHTML = `
<button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-modal-3"
onclick="update(${proposta})">
                        <span class="btn-inner--icon">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="btn-inner--text">Salvar Alteração 3</span>
                    </button>`

}

function modal2(proposta) {

    $('.needs-validation').each(function () {
        this.reset();
    });

    console.log(proposta)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        proposta: proposta
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#obs-pendencia-modal-2").val(data.obs_pendencia)
    })).catch(error => console.log('erro: ', error))

    document.getElementById('div-btn-modal-2').innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-modal-2"
    onclick="update(${proposta})">
                            <span class="btn-inner--icon">
                                <i class="fas fa-plus"></i>
                            </span>
                            <span class="btn-inner--text">Salvar Alteração 2</span>
                        </button>`

}

function modal7(proposta) {

    $('.needs-validation').each(function () {
        this.reset();
    });

    console.log(proposta)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        proposta: proposta
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#novo-telefone-modal-6").val(data.telefone)
        $("#obs-pendencia-modal-7").val(data.obs_pendencia)
        $("#deseja-confirmacao-modal-7").val()
        $("#data-confirmacao-modal-7").val()
        $("#horario-confirmacao-modal-7").val(data.horario)
    })).catch(error => console.log('erro: ', error))

    document.getElementById('div-btn-modal-7').innerHTML = `
<button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-modal-7">
                        <span class="btn-inner--icon">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="btn-inner--text">Salvar Alteração 7</span>
                    </button>`

}

function modal4(proposta) {

    $('.needs-validation').each(function () {
        this.reset();
    });

    console.log(proposta)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        proposta: proposta
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#obs-pendencia-modal-4").val(data.obs_pendencia)
        $("#pendencia1-modal-4").val(data.arquivo_pendente1)
        $("#pendencia2-modal-4").val(data.arquivo_pendente2)
        $("#pendencia3-modal-4").val(data.arquivo_pendente1n)
        $("#pendencia4-modal-4").val(data.arquivo_pendente2n)
    })).catch(error => console.log('erro: ', error))

    document.getElementById('div-btn-modal-4').innerHTML = `
<button type="button" class="btn btn-primary btn-icon-label" id="btn-incluir-modal-4">
                        <span class="btn-inner--icon">
                            <i class="fas fa-plus"></i>
                        </span>
                        <span class="btn-inner--text">Salvar Alteração 4</span>
                    </button>`

}

function modal4Update(data) {
    // $("#obs-pendencia-modal-4").val(data.observacao);

    const codigo = data.proposta;

    const formData = new FormData();

    const fields = document.querySelectorAll("form-modal4 input[type='file']");

    fields.forEach(file => {
        formData.append(file.name, file.files[0]);
    });


}

function update(proposta){

    console.log(proposta)
    // console.log('oi')

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const convenio6 = $("#convenio-modal-6").val()
    const produto6 = $("#produto-modal-6").val()
    const obs5 = $("#obs-pendencia-modal-5").val()
    const obs3 = $("#obs-pendencia-modal-3").val()
    const obs2 = $("#obs-pendencia-modal-2").val()

    const body = {
        proposta:proposta,
        convenio:convenio6,
        produto:produto6,
        obs_pendencia: (obs5 !== "" && obs5 !== null)? obs5:obs3
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/user/pendencia/alterar`, requestOptions).
    then(response => response.json().then(function (data){
        console.log(body)
        console.log('alterado')
    }))
}