//URL
const URL = `http://localhost:3000/user`;

//Map
const mapObjs = new Map();
const mapHash = new Map();

//Btn's
const incluir = document.getElementById('btn-incluir');
const iconUpdate = document.getElementById('icon-update');
const filtroBtn = document.getElementById("btnBuscar");
const alterarBtn = document.getElementById("btn-alterar");

//Check Box's
let bra = document.getElementById('check-bradesco');
let crefisa = document.getElementById('check-crefisa');
let pan = document.getElementById('check-pan');
let sim = document.getElementById('check-sim');
let cetelem = document.getElementById('check-cetelem');
let daycoval = document.getElementById('check-daycoval');
let parana = document.getElementById('check-parana');
let f5Bmg = document.getElementById('check-f5bgm');
let consorcioBB = document.getElementById('check-consorciobb');
let imobiliario = document.getElementById('check-imobiliario');
let santander = document.getElementById('check-santander');
let wimo = document.getElementById('check-wimo');
let itau = document.getElementById('check-itau');
let safra = document.getElementById('check-safra');
let vendas = document.getElementById('check-vendas');
let ole = document.getElementById('check-ole');
let bancoBrasil = document.getElementById('check-brasil');
let esteira = document.getElementById('check-portal');
let crm = document.getElementById('check-crm');

//Select's
const supervisorSelect = document.getElementById("supervisor");
const gerenteSelect = document.getElementById("gerente");
const tipoSelect = document.getElementById("tipo");
const statusSelect = document.getElementById("status");

//Data
function dateNow() {
    let date = new Date();
    let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    return dateNow;
}

//Sessão
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
    fetch(`${URL}/supervisor`, {
        method: "GET",
    }).then(response => response.json().then(data => {
        for (let i in data) {
            supervisorSelect.innerHTML += `<option value='${data[i].parceiro}'>${data[i].parceiro}</option>`;
        }
    }));

    fetch(`${URL}/gerente`, {
        method: "GET",
    }).then(response => response.json().then(data => {
        for (let i in data) {
            gerenteSelect.innerHTML += `<option value='${data[i].gerente}'>${data[i].gerente}</option>`;
        }
    }));

    fetch(`${URL}/proposta/status`, {
        method: "GET",
    }).then(response => response.json().then(data => {
        for (let i in data) {
            statusSelect.innerHTML += `<option value='${data[i].status}'>${data[i].status}</option>`;
        }
    }));

    fetch(`${URL}/proposta/tipo`, {
        method: "GET",
    }).then(response => response.json().then(data => {
        for (let i in data) {
            tipoSelect.innerHTML += `<option value='${data[i].tipo}'>${data[i].tipo}</option>`;
        }
    }));
}

filtroBtn.addEventListener('click', (e) => {
    document.getElementById('listItens').innerHTML = ``;


    const funcionario = document.getElementById("funcionario");
    const cnpj = document.getElementById("cpf-cnpj");

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        nome: funcionario.value,
        cpf: cnpj.value,
        gerente: gerenteSelect.value,
        supervisor: supervisorSelect.value,
        tipo: tipoSelect.value,
        status: statusSelect.value
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/acessochamado/filtro`, requestOptions)
        .then(response => response.json().then(data => {
            for (let i in data) {
                console.log(data);
                mapObjs.set(data[i].id, data[i]);

                let specific_tbody = document.getElementById('listItens');
                let row = specific_tbody.insertRow(-1);
                let nome = row.insertCell(-1);
                let cpf = row.insertCell(-1);
                let rg = row.insertCell(-1);
                let dataNascimento = row.insertCell(-1);
                let nomeMae = row.insertCell(-1);
                let certificacao = row.insertCell(-1);
                let telefoneCelular = row.insertCell(-1);
                let bairro = row.insertCell(-1);
                let uf = row.insertCell(-1);
                let cep = row.insertCell(-1);
                let alteraVisualiza = row.insertCell(-1);

                let nomeText = document.createTextNode((data[i].nome) ? data[i].nome : "");
                nome.appendChild(nomeText);

                let cpfText = document.createTextNode((data[i].cpf) ? data[i].cpf : "");
                cpf.appendChild(cpfText);

                let rgText = document.createTextNode((data[i].rg) ? data[i].rg : "");
                rg.appendChild(rgText);

                let dataNascimentoText = document.createTextNode((data[i].data_nascimento) ? data[i].data_nascimento : "");
                dataNascimento.appendChild(dataNascimentoText);

                let nomeMaeText = document.createTextNode((data[i].nome_mae) ? data[i].nome_mae : "");
                nomeMae.appendChild(nomeMaeText);

                let certificacaoText = document.createTextNode((data[i].certificacao) ? data[i].certificacao : "");
                certificacao.appendChild(certificacaoText);

                let telefoneCelularText = document.createTextNode((data[i].telefone_celular) ? data[i].telefone_celular : "");
                telefoneCelular.appendChild(telefoneCelularText);

                let bairroText = document.createTextNode((data[i].bairro) ? data[i].bairro : "");
                bairro.appendChild(bairroText);

                let ufText = document.createTextNode((data[i].uf) ? data[i].uf : "");
                uf.appendChild(ufText);

                let cepText = document.createTextNode((data[i].cep) ? data[i].cep : "");
                cep.appendChild(cepText);

                alteraVisualiza.innerHTML =
                    `
                <div class="actions ml-3" style="text-align: center;">
                    <a href="#" class="action-item mr-2" data-toggle="modal"
                        data-target=".modal-alterar-saldodevedor2" id="icon-update" onclick="preencherModal(mapObjs.get(${data[i].id}))"
                        title="Alterar">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            `
            }
        }))
        .catch(error => console.error(error));
});

function preencherModal(data) {
    $("#campo-nome2").val(data.nome);
    $("#campo-cpf2").val(data.cpf);
    $("#campo-rg2").val(data.rg);
    $("#campo-nascimento2").val(data.data_nascimento);
    $("#campo-mae-nome2").val(data.nome_mae);
    $("#campo-certificacao2").val(data.certificacao);
    $("#campo-telefone2").val(data.telefone_celular);
    $("#campo-endereco2").val(data.endereco);
    $("#campo-complemento2").val(data.complemento);
    $("#campo-bairro2").val(data.bairro);
    $("#campo-cidade2").val(data.cidade);
    $("#campo-uf2").val(data.uf);
    $("#campo-cep2").val(data.cep);
    $("#bradesco-login").val(data.bradesco_login);
    $("#bradesco-senha").val(data.bradesco_senha);
    $("#crefisa-login").val(data.crefisa_login);
    $("#crefisa-senha").val(data.crefisa_senha);
    $("#Pan-login").val(data.pan_login);
    $("#Pan-senha").val(data.pan_senha);
    $("#Sim-login").val(data.sim_login);
    $("#Sim-senha").val(data.sim_senha);
    $("#cetelem-login").val(data.cetelem_login);
    $("#cetelem-senha").val(data.cetelem_senha);
    $("#daycoval-login").val(data.daycoval_login);
    $("#daycoval-senha").val(data.daycoval_senha);
    $("#parana-login").val(data.parana_login);
    $("#parana-senha").val(data.parana_senha);
    $("#f5bmg-login").val(data.f5bmg_login);
    $("#f5bmg-senha").val(data.f5bmg_senha);
    $("#consorcio-bb-login").val(data.consorciobb_login);
    $("#consorcio-bb-senha").val(data.consorciobb_senha);
    $("#imobiliario-login").val(data.imobiliario_login);
    $("#imobiliario-senha").val(data.imobiliario_senha);
    $("#santander-login").val(data.santander_login);
    $("#santander-senha").val(data.santander_senha);
    $("#wimo-login").val(data.consorciowimo_login);
    $("#wimo-senha").val(data.consorciowimo_senha);
    $("#itau-login").val(data.itau_login);
    $("#itau-senha").val(data.itau_senha);
    $("#safra-login").val(data.safra_login);
    $("#safra-senha").val(data.safra_senha);
    $("#indica-login").val(data.bbindicavendas_login);
    $("#indica-senha").val(data.bbindicavendas_senha);
    $("#ole-login").val(data.ole_login);
    $("#ole-senha").val(data.ole_senha);
    $("#banco-brasil-login").val(data.bancobrasil_login);
    $("#banco-brasil-senha").val(data.bancobrasil_senha);
    $("#esteira-login").val(data.esteiraportal_login);
    $("#esteira-senha").val(data.esteiraportal_senha);
    $("#crm-login").val(data.crm_login);
    $("#crm-senha").val(data.crm_senha);

    mapHash.set(data.id, data);

    verificaCampos(data);

    alterarBtn.setAttribute('name', `${data.id}`);

    document.getElementById('rg_arq2_file').innerHTML =
        `<button type="button" class="btn btn-primary btn-icon-label" id="rg_arq2" name="rg_arq" 
        onclick="downloadRg(mapHash.get(${data.id}))" style="background-color: white; color: gray; border-color: gray;">
        <span class="btn-inner--icon">
                                        <i class="fa fa-upload"></i>
                                    </span>    
        <span class="btn-inner--text">Rg :</span>
        </button>`

    document.getElementById('cpf_arq2_file').innerHTML =
        `<button type="button" class="btn btn-primary btn-icon-label" id="cpf_arq2" name="cpf_arq2" 
    onclick="downloadCpf(mapHash.get(${data.id}))" style="background-color: white; color: gray; border-color: gray;">
    <span class="btn-inner--icon">
                                        <i class="fa fa-upload"></i>
                                    </span>     
    <span class="btn-inner--text">Cpf :</span>
    </button>`

    document.getElementById('aneps_arq2_file').innerHTML =
        `<button type="button" class="btn btn-primary btn-icon-label" id="aneps_arq" name="aneps_arq" 
    onclick="downloadAneps(mapHash.get(${data.id}))" style="background-color: white; color: gray; border-color: gray;">
    <span class="btn-inner--icon">
                                        <i class="fa fa-upload"></i>
                                    </span>     
    <span class="btn-inner--text">Aneps :</span>
    </button>`


    document.getElementById('pis_arq2_file').innerHTML =
        `<button type="button" class="btn btn-primary btn-icon-label" id="pis_arq" name="pis_arq" 
    onclick="downloadPis(mapHash.get(${data.id}))" style="background-color: white; color: gray; border-color: gray;">
    <span class="btn-inner--icon">
                                        <i class="fa fa-upload"></i>
                                    </span> 
                                    <span class="btn-inner--text">Pis :</span>
    </button>`

    document.getElementById('titulo_arq2_file').innerHTML =
        `<button type="button" class="btn btn-primary btn-icon-label" id="titulo_arq" name="titulo_arq" 
    onclick="downloadTitulo(mapHash.get(${data.id}))" style="background-color: white; color: gray; border-color: gray;">
    <span class="btn-inner--icon">
                                        <i class="fa fa-upload"></i>
                                    </span>     
    <span class="btn-inner--text">Titulo :</span>
    </button>`

    document.getElementById('comprovante_endereco_arq2_file').innerHTML =
        `<button type="button" class="btn btn-primary btn-icon-label" id="comprovante_endereco_arq2" name="comprovante_endereco_arq2" 
    onclick="downloadEnd(mapHash.get(${data.id}))" style="background-color: white; color: gray; border-color: gray;">
    <span class="btn-inner--icon">
                                        <i class="fa fa-upload"></i>
                                    </span>     
    <span class="btn-inner--text">Pis :</span>
    </button>`
}



incluir.addEventListener('click', () => {
    const nome = $("#campo-nome").val();
    const cpf = $("#campo-cpf").val();
    const rg = $("#campo-rg").val();
    const nascimento = $("#campo-nascimento").val();
    const nmMae = $("#campo-nome-mae").val();
    const certificacao = $("#campo-certificacao").val();
    const telefone = $("#campo-telefone").val();
    const endereco = $("#campo-endereco").val();
    const complemento = $("#campo-complemento").val();
    const bairro = $("#campo-bairro").val();
    const cidade = $("#campo-cidade").val();
    const uf = $("#campo-uf").val();
    const cep = $("#campo-cep").val();
    const bradesco = document.getElementById("check-bradesco");
    const crefisa = document.getElementById("check-crefisa");
    const pan = document.getElementById("check-pan");
    const sim = document.getElementById("check-sim");
    const cetelem = document.getElementById("check-cetelem");
    const daycoval = document.getElementById("check-daycoval");
    const parana = document.getElementById("check-parana");
    const f5Bgm = document.getElementById("check-f5bgm");
    const consorcioBB = document.getElementById("check-consorciobb");
    const imobiliario = document.getElementById("check-imobiliario");
    const santander = document.getElementById("check-santander");
    const wimo = document.getElementById("check-wimo");
    const itau = document.getElementById("check-itau");
    const safra = document.getElementById("check-safra");
    const vendas = document.getElementById("check-vendas");
    const ole = document.getElementById("check-ole");
    const bancoBrasil = document.getElementById("check-brasil");
    const portal = document.getElementById("check-portal");
    const crm = document.getElementById("check-crm");

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        data_inclusao: dateNow(),
        responsavel: dataSession.nome,
        nome,
        cpf,
        rg,
        data_nascimento: nascimento,
        nome_mae: nmMae,
        certificacao,
        telefone_celular: telefone,
        endereco,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
        bradesco: (bradesco.checked) ? bradesco.value : "",
        crefisa: (crefisa.checked) ? crefisa.value : "",
        pan: (pan.checked) ? pan.value : "",
        sim: (sim.checked) ? sim.value : "",
        cetelem: (cetelem.checked) ? cetelem.value : "",
        daycoval: (daycoval.checked) ? daycoval.value : "",
        parana: (parana.checked) ? parana.value : "",
        f5bmg: (f5Bgm.checked) ? f5Bgm.value : "",
        consorciobb: (consorcioBB.checked) ? consorcioBB.value : "",
        imobiliario: (imobiliario.checked) ? imobiliario.value : "",
        santander: (santander.checked) ? santander.value : "",
        consorciowimo: (wimo.checked) ? wimo.value : "",
        itau: (itau.checked) ? itau.value : "",
        safra: (safra.checked) ? safra.value : "",
        bbindicavendas: (vendas.checked) ? vendas.value : "",
        ole: (ole.checked) ? ole.value : "",
        bancobrasil: (bancoBrasil.checked) ? bancoBrasil.value : "",
        esteiraportal: (portal.checked) ? portal.value : "",
        crm: (crm.checked) ? crm.value : ""
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "/acessochamado/incluir", requestOptions).
    then(response => response.json()).
    then(async function (res) {
        //console.log(body)
        $('#alert-sucesso').show();
        $('#alert-sucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alert-sucesso").textContent = "Chamado de acesso incluido"

        const dataJson = await uploadFiles(res.id);
        console.log(dataJson);
        if (dataJson) {
            console.log(dataJson);
        }
    }).catch(error => console.log('erro: ', error));
});

alterarBtn.addEventListener('click', (e) => {
    const id = alterarBtn.getAttribute('name');

    const bradesco_login = $("#bradesco-login").val()
    const bradesco_senha = $("#bradesco-senha").val()
    const crefisa_login = $("#crefisa-login").val()
    const crefisa_senha = $("#crefisa-senha").val()
    const pan_login = $("#Pan-login").val()
    const pan_senha = $("#Pan-senha").val()
    const sim_login = $("#Sim-login").val()
    const sim_senha = $("#Sim-senha").val()
    const cetelem_login = $("#cetelem-login").val()
    const cetelem_senha = $("#cetelem-senha").val()
    const daycoval_login = $("#daycoval-login").val()
    const daycoval_senha = $("#daycoval-senha").val()
    const parana_login = $("#parana-login").val()
    const parana_senha = $("#parana-senha").val()
    const f5bmg_login = $("#f5bmg-login").val()
    const f5bmg_senha = $("#f5bmg-senha").val()
    const consorciobb_login = $("#consorcio-bb-login").val()
    const consorciobb_senha = $("#consorcio-bb-senha").val()
    const imobiliario_login = $("#imobiliario-login").val()
    const imobiliario_senha = $("#imobiliario-senha").val()
    const santander_login = $("#santander-login").val()
    const santander_senha = $("#santander-senha").val()
    const consorciowimo_login = $("#wimo-login").val()
    const consorciowimo_senha = $("#wimo-senha").val()
    const itau_login = $("#itau-login").val()
    const itau_senha = $("#itau-senha").val()
    const safra_login = $("#safra-login").val()
    const safra_senha = $("#safra-senha").val()
    const bbindicavendas_login = $("#indica-login").val()
    const bbindicavendas_senha = $("#indica-senha").val()
    const ole_login = $("#ole-login").val()
    const ole_senha = $("#ole-senha").val()
    const bancobrasil_login = $("#banco-brasil-login").val()
    const bancobrasil_senha = $("#banco-brasil-senha").val()
    const esteiraportal_login = $("#esteira-login").val()
    const esteiraportal_senha = $("#esteira-senha").val()
    const crm_login = $("#crm-login").val()
    const crm_senha = $("#crm-senha").val()

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        bradesco_login,
        bradesco_senha,
        crefisa_login,
        crefisa_senha,
        pan_login,
        pan_senha,
        sim_login,
        sim_senha,
        cetelem_login,
        cetelem_senha,
        daycoval_login,
        daycoval_senha,
        parana_login,
        parana_senha,
        f5bmg_login,
        f5bmg_senha,
        consorciobb_login,
        consorciobb_senha,
        imobiliario_login,
        imobiliario_senha,
        santander_login,
        santander_senha,
        consorciowimo_login,
        consorciowimo_senha,
        itau_login,
        itau_senha,
        safra_login,
        safra_senha,
        bbindicavendas_login,
        bbindicavendas_senha,
        ole_login,
        ole_senha,
        bancobrasil_login,
        bancobrasil_senha,
        esteiraportal_login,
        esteiraportal_senha,
        crm_login,
        crm_senha,
        data_alteracao: dateNow(),
        responsavel: dataSession.nome
    });

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`${URL}/acessochamado/atualizar?id=${id}`, requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

});

async function uploadFiles(id) {
    const data = new FormData();
    const filesInputs = document.querySelectorAll("#files input[type='file']")

    filesInputs.forEach(file => {
        data.append(file.name, file.files[0]);
    });

    const dataResponse = await fetch(`${URL}/acessochamado/arquivo?id=${id}`, {
        method: "POST",
        body: data
    }).then(response => response.json()).catch(error => console.log(error));

    //console.log(dataResponse);

    return dataResponse;
}

function verificaCampos(data) {
    const camposText = document.querySelectorAll("#dados-alteracao input[type='text']");

    camposText.forEach(element => {
        element.setAttribute('disabled', true);
    });

    if (data.bradesco === '1') {
        $("#bradesco-login").attr('disabled', false);
        $("#bradesco-senha").attr('disabled', false);
    } else {
        $("#bradesco-login").attr('disabled', true);
        $("#bradesco-senha").attr('disabled', true);
    }

    if (data.crefisa === '1') {
        $("#crefisa-login").attr('disabled', false);
        $("#crefisa-senha").attr('disabled', false);
    } else {
        $("#crefisa-login").attr('disabled', true);
        $("#crefisa-senha").attr('disabled', true);
    }

    if (data.pan === '1') {
        $("#Pan-login").attr('disabled', false);
        $("#Pan-senha").attr('disabled', false);
    } else {
        $("#Pan-login").attr('disabled', true);
        $("#Pan-senha").attr('disabled', true);
    }

    if (data.sim === '1') {
        $("#Sim-login").attr('disabled', false);
        $("#Sim-senha").attr('disabled', false);
    } else {
        $("#Sim-login").attr('disabled', true);
        $("#Sim-senha").attr('disabled', true);
    }

    if (data.cetelem === '1') {
        $("#cetelem-login").attr('disabled', false);
        $("#cetelem-senha").attr('disabled', false);
    } else {
        $("#cetelem-login").attr('disabled', true);
        $("#cetelem-senha").attr('disabled', true);
    }

    if (data.daycoval === '1') {
        $("#daycoval-login").attr('disabled', false);
        $("#daycoval-senha").attr('disabled', false);
    } else {
        $("#daycoval-login").attr('disabled', true);
        $("#daycoval-senha").attr('disabled', true);
    }

    if (data.parana === '1') {
        $("#parana-login").attr('disabled', false);
        $("#parana-senha").attr('disabled', false);
    } else {
        $("#parana-login").attr('disabled', true);
        $("#parana-senha").attr('disabled', true);
    }

    if (data.f5bmg === '1') {
        $("#f5bmg-login").attr('disabled', false);
        $("#f5bmg-senha").attr('disabled', false);
    } else {
        $("#f5bmg-login").attr('disabled', true);
        $("#f5bmg-senha").attr('disabled', true);
    }

    if (data.consorciobb === '1') {
        $("#consorcio-bb-login").attr('disabled', false);
        $("#consorcio-bb-senha").attr('disabled', false);
    } else {
        $("#consorcio-bb-login").attr('disabled', true);
        $("#consorcio-bb-senha").attr('disabled', true);
    }

    if (data.imobiliario === '1') {
        $("#imobiliario-login").attr('disabled', false);
        $("#imobiliario-senha").attr('disabled', false);
    } else {
        $("#imobiliario-login").attr('disabled', true);
        $("#imobiliario-senha").attr('disabled', true);
    }

    if (data.santander === '1') {
        $("#santander-login").attr('disabled', false);
        $("#santander-senha").attr('disabled', false);
    } else {
        $("#santander-login").attr('disabled', true);
        $("#santander-senha").attr('disabled', true);
    }

    if (data.consorciowimo === '1') {
        $("#wimo-login").attr('disabled', false);
        $("#wimo-senha").attr('disabled', false);
    } else {
        $("#wimo-login").attr('disabled', true);
        $("#wimo-senha").attr('disabled', true);
    }

    if (data.itau === '1') {
        $("#itau-login").attr('disabled', false);
        $("#itau-senha").attr('disabled', false);
    } else {
        $("#itau-login").attr('disabled', true);
        $("#itau-senha").attr('disabled', true);
    }

    if (data.safra === '1') {
        $("#safra-login").attr('disabled', false);
        $("#safra-senha").attr('disabled', false);
    } else {
        $("#safra-login").attr('disabled', true);
        $("#safra-senha").attr('disabled', true);
    }

    if (data.bbindicavendas === '1') {
        $("#indica-login").attr('disabled', false);
        $("#indica-senha").attr('disabled', false);
    } else {
        $("#indica-login").attr('disabled', true);
        $("#indica-senha").attr('disabled', true);
    }

    if (data.ole === '1') {
        $("#ole-login").attr('disabled', false);
        $("#ole-senha").attr('disabled', false);
    } else {
        $("#ole-login").attr('disabled', true);
        $("#ole-senha").attr('disabled', true);
    }

    if (data.bancobrasil === '1') {
        $("#banco-brasil-login").attr('disabled', false);
        $("#banco-brasil-senha").attr('disabled', false);
    } else {
        $("#banco-brasil-login").attr('disabled', true);
        $("#banco-brasil-senha").attr('disabled', true);
    }

    if (data.esteiraportal === '1') {
        $("#esteira-login").attr('disabled', false);
        $("#esteira-senha").attr('disabled', false);
    } else {
        $("#esteira-login").attr('disabled', true);
        $("#esteira-senha").attr('disabled', true);
    }

    if (data.crm === '1') {
        $("#crm-login").attr('disabled', false);
        $("#crm-senha").attr('disabled', false);
    } else {
        $("#crm-login").attr('disabled', true);
        $("#crm-senha").attr('disabled', true);
    }
}


function downloadRg(rg) {
    console.log(rg.rg_arq);
    if (rg.rg_arq) {
        window.location.href = `http://localhost:3000/user/acessochamado/download?hash=${rg.rg_arq}`;
    } else {
        alert("Arquivo não inserido na base de dados");
    }
}

function downloadCpf(cpf) {
    console.log(cpf.cpf_arq);
    if (cpf.cpf_arq) {
        window.location.href = `http://localhost:3000/user/acessochamado/download?hash=${cpf.cpf_arq}`;
    } else {
        alert("Arquivo não inserido na base de dados");
    }
}

function downloadAneps(aneps) {
    console.log(aneps.aneps_arq);
    if (aneps.aneps_arq) {
        window.location.href = `http://localhost:3000/user/acessochamado/download?hash=${aneps.aneps_arq}`;
    } else {
        alert("Arquivo não inserido na base de dados");
    }
}

function downloadPis(pis) {
    console.log(pis.pis_arq);
    if (pis.pis_arq) {
        window.location.href = `http://localhost:3000/user/acessochamado/download?hash=${pis.pis_arq}`;
    } else {
        alert("Arquivo não inserido na base de dados");
    }
}

function downloadTitulo(titulo) {
    console.log(titulo.titulo_arq);
    if (titulo.titulo_arq) {
        window.location.href = `http://localhost:3000/user/acessochamado/download?hash=${titulo.titulo_arq}`;
    } else {
        alert("Arquivo não inserido na base de dados");
    }
}

function downloadEnd(end) {
    console.log(end.comprovante_endereco_arq);
    if (end.comprovante_endereco_arq) {
        window.location.href = `http://localhost:3000/user/acessochamado/download?hash=${end.comprovante_endereco_arq}`;
    } else {
        alert("Arquivo não inserido na base de dados");
    }
}
