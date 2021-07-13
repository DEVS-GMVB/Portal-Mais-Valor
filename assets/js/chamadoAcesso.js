//URL
const URL = `http://localhost:3000/user`;

//Map
const mapObjs = new Map();

//Btn's
const incluir = document.getElementById('btn-incluir');
const iconUpdate = document.getElementById('icon-update');
const filtroBtn = document.getElementById("btnBuscar");

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
    $("#campo-nascimento2").val(data.data_nasimento);
    $("#campo-mae-nome2").val(data.nome_mae);
    $("#campo-certificacao2").val(data.certificacao);
    $("#campo-telefone2").val(data.telefone_celular);
    $("#campo-complemento2").val(data.complemento);
    $("#campo-bairro2").val(data.bairro);
    $("#campo-cidade2").val(data.campo-cidade2);
    $("#campo-uf2").val(data.uf);
    $("#campo-cidade2").val(data.cidade);
    $("#check-bradesco2").val(data.bradesco);
    $("#check-crefisa2").val(data.crefisa);
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
    then(function (res) {
        console.log(body)
        $('#alert-sucesso').show();
        $('#alert-sucesso').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("alert-sucesso").textContent = "Chamado de acesso incluido"
    }).catch(error => console.log('erro: ', error));
});

iconUpdate.addEventListener('click', () => {
    const camposText = document.querySelectorAll("#dados-alteracao input[type='text']");

    camposText.forEach(element => {
        element.setAttribute('disabled', true);
    });

    if (bra.checked) {
        $("#bradesco-login").attr('disabled', false);
        $("#bradesco-senha").attr('disabled', false);
    } else {
        $("#bradesco-login").attr('disabled', true);
        $("#bradesco-senha").attr('disabled', true);
    }

    if (crefisa.checked) {
        $("#crefisa-login").attr('disabled', false);
        $("#crefisa-senha").attr('disabled', false);
    } else {
        $("#crefisa-login").attr('disabled', true);
        $("#crefisa-senha").attr('disabled', true);
    }

    if (pan.checked) {
        $("#Pan-login").attr('disabled', false);
        $("#Pan-senha").attr('disabled', false);
    } else {
        $("#Pan-login").attr('disabled', true);
        $("#Pan-senha").attr('disabled', true);
    }

    if (sim.checked) {
        $("#Sim-login").attr('disabled', false);
        $("#Sim-senha").attr('disabled', false);
    } else {
        $("#Sim-login").attr('disabled', true);
        $("#Sim-senha").attr('disabled', true);
    }

    if (cetelem.checked) {
        $("#cetelem-login").attr('disabled', false);
        $("#cetelem-senha").attr('disabled', false);
    } else {
        $("#cetelem-login").attr('disabled', true);
        $("#cetelem-senha").attr('disabled', true);
    }

    if (daycoval.checked) {
        $("#daycoval-login").attr('disabled', false);
        $("#daycoval-senha").attr('disabled', false);
    } else {
        $("#daycoval-login").attr('disabled', true);
        $("#daycoval-senha").attr('disabled', true);
    }

    if (parana.checked) {
        $("#parana-login").attr('disabled', false);
        $("#parana-senha").attr('disabled', false);
    } else {
        $("#parana-login").attr('disabled', true);
        $("#parana-senha").attr('disabled', true);
    }

    if (f5Bmg.checked) {
        $("#f5bmg-login").attr('disabled', false);
        $("#f5bmg-senha").attr('disabled', false);
    } else {
        $("#f5bmg-login").attr('disabled', true);
        $("#f5bmg-senha").attr('disabled', true);
    }

    if (consorcioBB.checked) {
        $("#consorcio-bb-login").attr('disabled', false);
        $("#consorcio-bb-senha").attr('disabled', false);
    } else {
        $("#consorcio-bb-login").attr('disabled', true);
        $("#consorcio-bb-senha").attr('disabled', true);
    }

    if (imobiliario.checked) {
        $("#imobiliario-login").attr('disabled', false);
        $("#imobiliario-senha").attr('disabled', false);
    } else {
        $("#imobiliario-login").attr('disabled', true);
        $("#imobiliario-senha").attr('disabled', true);
    }

    if (santander.checked) {
        $("#santander-login").attr('disabled', false);
        $("#santander-senha").attr('disabled', false);
    } else {
        $("#santander-login").attr('disabled', true);
        $("#santander-senha").attr('disabled', true);
    }

    if (wimo.checked) {
        $("#wimo-login").attr('disabled', false);
        $("#wimo-senha").attr('disabled', false);
    } else {
        $("#wimo-login").attr('disabled', true);
        $("#wimo-senha").attr('disabled', true);
    }

    if (itau.checked) {
        $("#itau-login").attr('disabled', false);
        $("#itau-senha").attr('disabled', false);
    } else {
        $("#itau-login").attr('disabled', true);
        $("#itau-senha").attr('disabled', true);
    }

    if (safra.checked) {
        $("#safra-login").attr('disabled', false);
        $("#safra-senha").attr('disabled', false);
    } else {
        $("#safra-login").attr('disabled', true);
        $("#safra-senha").attr('disabled', true);
    }

    if (vendas.checked) {
        $("#indica-login").attr('disabled', false);
        $("#indica-senha").attr('disabled', false);
    } else {
        $("#indica-login").attr('disabled', true);
        $("#indica-senha").attr('disabled', true);
    }

    if (ole.checked) {
        $("#ole-login").attr('disabled', false);
        $("#ole-senha").attr('disabled', false);
    } else {
        $("#ole-login").attr('disabled', true);
        $("#ole-senha").attr('disabled', true);
    }

    if (bancoBrasil.checked) {
        $("#banco-brasil-login").attr('disabled', false);
        $("#banco-brasil-senha").attr('disabled', false);
    } else {
        $("#banco-brasil-login").attr('disabled', true);
        $("#banco-brasil-senha").attr('disabled', true);
    }

    if (esteira.checked) {
        $("#esteira-login").attr('disabled', false);
        $("#esteira-senha").attr('disabled', false);
    } else {
        $("#esteira-login").attr('disabled', true);
        $("#esteira-senha").attr('disabled', true);
    }

    if (crm.checked) {
        $("#crm-login").attr('disabled', false);
        $("#crm-senha").attr('disabled', false);
    } else {
        $("#crm-login").attr('disabled', true);
        $("#crm-senha").attr('disabled', true);
    }
})