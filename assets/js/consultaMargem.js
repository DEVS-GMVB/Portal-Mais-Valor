window.onload = function () {
    consultaMargem.loadSelects()
}


const arrays = {
    arrayCpfs: [],
    arrayRows: [],
    arrayTransferRows: []
}

const dataSession = {
    id_acesso: sessionStorage.getItem('id_acesso', 'id_acesso'),
    status: sessionStorage.getItem('status', 'status'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome'),
    supervisor: sessionStorage.getItem('supervisor', 'supervisor'),
    gerente: sessionStorage.getItem('gerente', 'gerente'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    cpf_user: sessionStorage.getItem('cpf_usuario', 'cpf_usuario'),
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario')
}

class ConsultaMargem {
    #transporter
    #valueTransporter

    constructor(url) {
        this.URL = url
    }

    dateNow() {
        let date = new Date();
        let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`
        return dateNow;
    }

    loadSelects() {
        const statusSelect = document.getElementById("status-filtro")

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        fetch(this.URL + "/user/margem/status", requestOptions)
            .then(response => response.json())
            .then(function (data) {
                    for (let i = 0; i < data.length; i++) {
                        statusSelect.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
                    }
                }

            ).catch(error => console.log('error: ', error))
    }

    filterSearch() {
        arrays.arrayCpfs = [];
        arrays.arrayRows = [];

        var node = document.getElementById("list");
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }

        const user = document.getElementById("usuario-filtro").value
        const status = document.getElementById("status-filtro").value
        const dateUpdate = document.getElementById("dataAtualizacao-filtro").value
        const dataCadastro_filtro = document.getElementById("dataCadastro-filtro").value
        const cpf_filtro = document.getElementById("cpf-filtro").value

        // vars session browser
        const sessionBrowser = {
            tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
            cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
            perfil: sessionStorage.getItem('perfil', 'perfil'),
            nome: sessionStorage.getItem('nome', 'nome'),
            cpfUser: sessionStorage.getItem('cpf_usuario', 'cpf_usuario')
        }



        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const body = {
            userPerfil: sessionBrowser.tipo_usuario, //sessionBrowser.perfil,
            userCpf: sessionBrowser.cpfUser,
            userTipousuario: sessionBrowser.tipo_usuario, //sessionBrowser.tipo_usuario,
            userNome: sessionBrowser.nome, //sessionStorage.nome,
            userCnpjMatriz: sessionBrowser.cnpj_matr, //sessionBrowser.cnpj_matr,
            parceiro: user,
            status: status,
            data_atualizacao: dateUpdate,
            data_envio: dataCadastro_filtro,
            cpf: cpf_filtro
        }

        const raw = JSON.stringify(body)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        fetch(this.URL + '/user/margem/pesquisa', requestOptions).
        then(response => response.json()).
        then(function (data) {


            for (let i = 0; i < data.length; i++) {
                let specific_tbody = document.getElementById('list');
                let row = specific_tbody.insertRow(-1);
                let cpfFiltro = row.insertCell(-1);
                let data_Cadastro = row.insertCell(-1);
                let convenio = row.insertCell(-1);
                let matricula = row.insertCell(-1);
                let status = row.insertCell(-1);
                let parceiro = row.insertCell(-1);
                let senha = row.insertCell(-1);
                let renda = row.insertCell(-1);
                let dataAtualizacao = row.insertCell(-1);
                let dataAlteracao = row.insertCell(-1);
                let margemDisponivel = row.insertCell(-1);
                let alteraVisualiza = row.insertCell(-1);


                let cpfText = document.createTextNode(`${data[i].cpf}`);
                cpfFiltro.appendChild(cpfText);

                let dataCadastroText = document.createTextNode(`${data[i].data_envio}`);
                data_Cadastro.appendChild(dataCadastroText)

                let convenioText = document.createTextNode(`${data[i].convenio}`);
                convenio.appendChild(convenioText);

                let matriculaText = document.createTextNode(`${data[i].matricula}`);
                matricula.appendChild(matriculaText)

                let parceiroText = document.createTextNode(`${data[i].parceiro}`);
                parceiro.appendChild(parceiroText)

                let senhaText = document.createTextNode(`${data[i].senha}`);
                senha.appendChild(senhaText)

                let rendaText = document.createTextNode(`${""}`);
                renda.appendChild(rendaText);

                let dataAtualizacaoText = document.createTextNode(`${data[i].data_atualizacao}`);
                dataAtualizacao.appendChild(dataAtualizacaoText);

                let dataAlteracaoText = document.createTextNode(`${""}`);
                dataAlteracao.appendChild(dataAlteracaoText);

                let statusText = document.createTextNode(`${data[i].status}`);
                status.appendChild(statusText)

                let margemDisponivelText = document.createTextNode(`${data[i].valor_margem}`);
                margemDisponivel.appendChild(margemDisponivelText)

                arrays.arrayCpfs.push(data[i].cpf)
                arrays.arrayRows.push(row)

                alteraVisualiza.innerHTML = `
                <div class="actions ml-3" style="text-align: center;">
                    <a href="#" class="action-item mr-2" data-toggle="modal" onclick="updateMargemConsulta(arrays.arrayCpfs[${i}], arrays.arrayRows[${i}])"
                        data-target=".modal-alterar-consultamargem" title="Alterar">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                `
            }

        }).catch(error => console.log('error: ', error))
    }

    modalMargem(cpf, rows) {
        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        const body = {
            cpf: cpf
        }

        const raw = JSON.stringify(body)

        fetch(this.URL + '/user/margem/modal', {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }).then(response => response.json().then(function (data) {
            // console.log(data)
            consultaMargem.changeUpdate(data.codigo, rows)

            // const debug = new FileReader().readAsDataURL(data.arquivo1)
            // console.log(debug)
            // document.getElementById("margem").innerHTML = `
            // <a id="baixar" href="" download></a>
            // `
            // var baixar = document.getElementById('baixar');
            // baixar.href = `${debug}`;
            // baixar.innerHTML = "Baixar imagem Stack Exchange"

            $('#data-incluir').val(data.data_envio)
            $('#parceiro-incluir').val(data.parceiro)
            $('#cpf-incluir').val(data.cpf)
            $('#matricula-incluir').val(data.matricula)
            $('#convenio-incluir').val(data.convenio)
            $('#senha-incluir').val(data.senha)
            $('#valor-margem-incluir').val(data.valor_margem)

        })).catch(error => console.log('error: ', error))
    }

    changeInsert() {
        //Resets campos
        this.empty()


        document.getElementById("button").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="insert" onclick="insertDB()">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
        `
    }

    changeUpdate(codigo, rows) {
        arrays.arrayTransferRows.push(rows)

        //Reset campos
        this.empty()

        document.getElementById("button").innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="update" onclick="updateMargem(${codigo}, arrays.arrayTransferRows[${arrays.arrayTransferRows.length - 1}])">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Salvar Alteração</span>
        </button>
        `
    }

    update(codigo, rows) {
        const data = this.dateNow();

        this.updateTbody(rows)

        const dataCadas = $('#data-incluir').val()
        const parceiro = $('#parceiro-incluir').val()
        const cpf = $('#cpf-incluir').val()
        const matricula = $('#matricula-incluir').val()
        const convenio = $('#convenio-incluir').val()
        const senha = $('#senha-incluir').val()
        const vlMargem = $('#valor-margem-incluir').val()

        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')

        const body = {
            codigo: codigo,
            data_envio: dataCadas,
            parceiro: parceiro,
            cpf: cpf,
            matricula: matricula,
            convenio: convenio,
            senha: senha,
            valor_margem: vlMargem,
            responsavel: dataSession.nome,
            data_atualizacao: data
        }

        const raw = JSON.stringify(body)

        fetch(this.URL + '/user/margem/alterar', {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }).then(response => response.json().then(function (data) {
            console.log(data)
            if (data) {
                $('#alertSucessoCM').show();
                $('#alertSucessoCM').fadeIn(300).delay(3000).fadeOut(400);
                document.getElementById("alertSucessoCM").textContent = "Margem alterada com sucesso"

            } else {
                $('#alertFalhaCM').show();
                $('#alertFalhaCM').fadeIn(300).delay(3000).fadeOut(400);
                document.getElementById("alertFalhaCM").textContent = "Erro ao alterar, está margem não existe um código"
            }

        })).catch(error => console.log('error: ', error))
    }

    insert() {
        const data = this.dateNow();

        const resultCpfs = this.searchCpfs(dataSession.supervisor, dataSession.gerente);

        Promise.resolve(resultCpfs).then(function (value) {

            const dataCadas = $('#data-incluir').val()
            // const parceiro = $('#parceiro-incluir').val()
            const cpf = $('#cpf-incluir').val()
            const matricula = $('#matricula-incluir').val()
            const convenio = $('#convenio-incluir').val()
            const senha = $('#senha-incluir').val()
            const vlMargem = $('#valor-margem-incluir').val()

            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json')

            const body = {
                id_parceiro: "",
                data_cadastro: dataCadas,
                parceiro: dataSession.nome,
                cpf: cpf,
                matricula: matricula,
                convenio: convenio,
                responsavel: "",
                senha: senha,
                valor_margem: vlMargem,
                gerente: dataSession.gerente,
                supervisor: dataSession.supervisor,
                userPerfil: dataSession.perfil,
                userCpf: dataSession.cpf_user,
                userTipousuario: dataSession.tipo_usuario,
                userNome: dataSession.nome,
                userCnpjMatriz: dataSession.cnpj_matr,
                data_inclusao: data,
                id_acesso: dataSession.id_acesso,
                cpf_gerente: value.gerente_cpf,
                cpf_supervisor: value.supervisor_cpf
            }

            const raw = JSON.stringify(body)

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            }

            fetch(URL + '/user/margem/incluir', requestOptions).
            then(response => response.json().then(function (data) {
                if (data) {
                    $('#alertSucessoCM').show();
                    $('#alertSucessoCM').fadeIn(300).delay(3000).fadeOut(400);
                    document.getElementById("alertSucessoCM").textContent = "Margem cadastrada com sucesso"

                }

                const fileInputs = document.querySelectorAll('div#div-fundo input[type="file"]')[0]
                const codigo = data

                var data = new FormData()
                data.append(fileInputs.name, fileInputs.files[0])


                fetch(URL + `/user/margem/incluir/anexo?codigo=${codigo}`, {
                    method: 'POST',
                    body: data
                }).then(response => response.json()).then(function (data) {

                }).catch(error => console.log('error: ', error))


            })).catch(error => console.log('error: ', error))
        })

    }

    empty() {
        $('.needs-validation').each(function () {
            this.reset()
        })
    }

    updateTbody(row) {
        let cells = row.cells
        cells[0].textContent = $('#cpf-incluir').val()
        cells[1].textContent = $('#data-incluir').val()
        cells[2].textContent = $('#convenio-incluir').val()
        cells[3].textContent = $('#matricula-incluir').val()
        cells[5].textContent = $('#parceiro-incluir').val()
        cells[6].textContent = $('#senha-incluir').val()
        cells[10].textContent = $('#valor-margem-incluir').val()
    }

    searchCpfs = async (supervisor, gerente) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            supervisor: supervisor,
            gerente: gerente
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        await fetch(this.URL + "/user/buscar", requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                this.#transporter = result
            })
            .catch(error => console.log('error', error));

        return this.#transporter
    }



}


const URL = 'http://localhost:3000';
const consultaMargem = new ConsultaMargem(URL);




function search() {
    consultaMargem.filterSearch();
}

function insertFunction() {
    //Configs da quebra de referência de modais
    consultaMargem.changeInsert();
}

function insertDB() {
    consultaMargem.insert()
}

function updateMargemConsulta(cpf, rows) {
    consultaMargem.modalMargem(cpf, rows)
}

function updateMargem(cod, row) {
    consultaMargem.update(cod, row)
}