const URL = `http://localhost:3000`;

//btn's
const search = document.getElementById("btn-buscar");
const change = document.getElementById("btn-change");
const insertAverbacaoGoias = document.getElementById("btn-incluir");
// const fields = document.querySelectorAll('#fieldsUpdate input');

//obj's
const obj = {}

const dateNow = {
    date: () => {
        let date = new Date();
        let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return dateNow;
    }
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
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    supervisor_cpf: sessionStorage.getItem('supervisor_cpf', 'supervisor_cpf'),
    gerente_cpf: sessionStorage.getItem('gerente_cpf', 'gerente_cpf')
}


const breakModal = {
    emptyFields: (valueDisable) => {
        document.getElementById("tipo_campo").disabled = valueDisable;
        document.getElementById("validade_campo").disabled = valueDisable;

        $("#fieldsUpdate input").prop('readonly', valueDisable);
    },


    empty: () => {
        $(".needs-validation").each(function () {
            this.reset()
        })
    },

    changeButtonInsert: () => {
        document.getElementById("valueText").textContent = "Dados Usuário"

        breakModal.emptyFields(false);


        const opts = document.querySelectorAll("#status_usuario_campo option")
        opts.forEach(opt => {
            if (opt.getAttribute('value') !== "AGUARDANDO AVERBACAO") {
                const addOpt = document.getElementById('status_usuario_campo')
                addOpt.innerHTML = `
                    <option value="AGUARDANDO AVERBACAO">AGUARDANDO AVERBAÇÃO</option>
                    <option value="AVERBADO">AVERBADO</option>
                    <option value="AVERBACAO SOLICITADA">AVERBAÇÃO SOLICITADA</option>
                `
            }
        })


        change.innerHTML = `
        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="insert()">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Incluir / Salvar Alteração</span>
        </button>
        `
    },

    changeButtonUpdate: (cod, linha) => {
        document.getElementById("valueText").textContent = "Dados Atualização"

        breakModal.emptyFields(true);
        functions.configsButtonUpdate();


        //Limpa array para preservar custo de processamento
        arrays.arrayTransporterRows = [];
        arrays.arrayTransporterCode = [];

        arrays.arrayTransporterCode.push(cod)
        arrays.arrayTransporterRows.push(linha)


        change.innerHTML = `

        <button type="button" class="btn btn-primary btn-icon-label" id="btn-insert" onclick="functions.updateAtualizacaoAverbacao(arrays.arrayTransporterCode[${arrays.arrayTransporterCode.length - 1}], arrays.arrayTransporterRows[${arrays.arrayTransporterRows.length - 1}])">
            <span class="btn-inner--icon">
                <i class="fas fa-plus"></i>
            </span>
            <span class="btn-inner--text">Salvar Alteração</span>
        </button>
        `
    }
}



const arrays = {
    arrayCodigos: [],
    arrayTransporterCode: [],
    arrayRows: [],
    arrayTransporterRows: []
}


const functions = {
    configsButtonUpdate: () => {
        //Retira o option de acordo com o fluxo do usuário na página
        const opts = document.querySelectorAll("#status_usuario_campo option")
        opts.forEach(opt => {
            if (opt.getAttribute("value") === "AGUARDANDO AVERBACAO") {
                opt.remove();
            }
        })

    },

    emptyTbody: () => {
        let node = document.getElementById("List")
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild)
        }
    },

    search: () => {
        functions.emptyTbody();

        const usuario_filtro = $("#usuario_filtro").val();
        const status_filtro = $("#status_filtro").val();
        const data_atualizacao = $("#data_atualizacao_filtro").val();
        const data_cadastro = $("#data_cadastro_filtro").val();
        const cpf_filtro = $("#cpf_filtro").val();

        console.log(status_filtro)

        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json');

        const body = {
            userTipousuario: "",
            userPerfil: "",
            userCpf: "",
            parceiro: usuario_filtro,
            status: status_filtro,
            cpf: cpf_filtro,
            data_atualizacao: data_atualizacao,
            data_cadastro: data_cadastro
        }

        const raw = JSON.stringify(body)

        const requestOptions = {
            method: 'POST',
            headers: myheaders,
            body: raw,
            redirect: 'follow'
        }

        fetch(URL + '/user/averbacao/goias/filtro', requestOptions).
        then((response) => response.json().then(function (data) {

            console.log(data)

            arrays.arrayCodigos = [];
            arrays.arrayRows = [];

            for (let i = 0; i < data.length; i++) {

                let specific_tbody = document.getElementById("List")
                let row = specific_tbody.insertRow(-1);
                let proposta = row.insertCell(-1);
                let cpf = row.insertCell(-1);
                let tipo = row.insertCell(-1);
                let data_cadastro = row.insertCell(-1);
                let tipo_formalizacao = row.insertCell(-1);
                let valor_solicitado = row.insertCell(-1);
                let prazo = row.insertCell(-1);
                let parcela = row.insertCell(-1);
                let status = row.insertCell(-1);
                let parceiro = row.insertCell(-1);
                let senha = row.insertCell(-1);
                let validade_senha = row.insertCell(-1);
                let log_alteracao = row.insertCell(-1)
                let data_alteracao = row.insertCell(-1)
                let altera_icon = row.insertCell(-1);

                let proposta_text = document.createTextNode(`${data[i].proposta}`)
                proposta.appendChild(proposta_text)

                let cpf_text = document.createTextNode(`${data[i].cpf}`)
                cpf.appendChild(cpf_text)

                let tipo_text = document.createTextNode(`${data[i].tipo}`)
                tipo.appendChild(tipo_text)

                let data_cadastro_text = document.createTextNode(``)
                data_cadastro.appendChild(data_cadastro_text)

                let tipo_formalizacao_text = document.createTextNode(`${data[i].tipo_formalizacao}`)
                tipo_formalizacao.appendChild(tipo_formalizacao_text)

                let valor_solicitado_text = document.createTextNode(`${data[i].valor_solicitado}`)
                valor_solicitado.appendChild(valor_solicitado_text)

                let prazo_text = document.createTextNode(`${data[i].prazo}`)
                prazo.appendChild(prazo_text)

                let parcela_text = document.createTextNode(`${data[i].parcela}`)
                parcela.appendChild(parcela_text)

                let status_text = document.createTextNode(`${data[i].status}`)
                status.appendChild(status_text)

                let parceiro_text = document.createTextNode(`${data[i].parceiro}`)
                parceiro.appendChild(parceiro_text)

                let senha_text = document.createTextNode(`${data[i].senha}`)
                senha.appendChild(senha_text)

                let senha_validade_text = document.createTextNode(`${data[i].validade_senha}`)
                validade_senha.appendChild(senha_validade_text)

                let log_atualizacao_text = document.createTextNode(``)
                log_alteracao.appendChild(log_atualizacao_text)

                let data_alteracao_text = document.createTextNode(`${data[i].data_alteracao}`)
                data_alteracao.appendChild(data_alteracao_text)

                arrays.arrayCodigos.push(data[i].codigo);
                arrays.arrayRows.push(row)

                altera_icon.innerHTML = `

                <div class="actions ml-3" style="text-align: center;">
                    <a href="#" class="action-item mr-2" data-toggle="modal" onclick="functions.handleCods(arrays.arrayCodigos[${i}],arrays.arrayRows[${i}])"
                        data-target=".modal-alterar-averbacaogoias" title="Alterar">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>

                `
            }

        })).catch(error => console.log('error: ', error))

    },

    handleCods: (cod, linha) => {
        breakModal.empty();
        breakModal.changeButtonUpdate(cod, linha);


        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json')

        const body = {
            codigo: cod
        }

        const raw = JSON.stringify(body)

        const requestOptions = {
            method: 'POST',
            headers: myheaders,
            body: raw,
            redirect: 'follow'
        }

        fetch(URL + '/user/averbacao/goias/modal', requestOptions).
        then(response => response.json().then(function (data) {

            populaCampos(data);

        })).catch(error => console.log('error: ', error))

    },

    insert: () => {
        const data_cadastro = $("#data_cadastro_campo").val();
        const parceiro = $("#parceiro_campo").val();
        const tipo = $("#tipo_campo").val();
        const valor = $("#valor_campo").val();
        const parcela = $("#parcela_campo").val();
        const prazo = $("#prazo_campo").val();
        const senha = $("#senha_campo").val();
        const validade = $("#validade_campo").val();
        const original_parcela = $("#parcela_original_campo").val();
        const matricula = $("#matricula_campo").val();
        const status_usuario = $("#status_usuario_campo").val();


        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            data_envio: dateNow.date(),
            parceiro: dataSession.nome,
            tipo: tipo,
            valor_solicitado: valor,
            parcela: parcela,
            prazo: prazo,
            senha: senha,
            validade_senha: validade,
            parcela_original: original_parcela,
            matricula: matricula,
            status: status_usuario,
            data_inclusao: dateNow.date(),
            id_acesso: dataSession.id_acesso,
            cpf_supervisor: dataSession.supervisor_cpf,
            cpf_gerente: dataSession.gerente_cpf,
            cpf_parceiro: dataSession.cpf_user,
            gerente: dataSession.gerente,
            supervisor: dataSession.supervisor,
            id_parceiro: dataSession.id_acesso
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(URL + "/user/averbacao/goias/inserir", requestOptions)
            .then(response => response.json())
            .then(result => {
                const successFile = functions.insertAnexo(result);
                Promise.resolve(successFile).then(function (value) {})
                //Insert n é obrigatório anexar um arquivo
                $('#success').show();
                $('#success').fadeIn(300).delay(3000).fadeOut(400);
                document.getElementById("success").textContent = "Averbação Goiás incluido com sucesso"

            })
            .catch(error => console.log('error', error));
    },
    insertAnexo: async (data) => {
        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json');

        const file = document.querySelector('div#file input[type="file"]')
        const codigo = data.codigo

        var data = new FormData();
        // fileInputs.forEach(file => {
        //     data.append(file.name, file.files[0])
        // })
        data.append(file.name, file.files[0])

        await fetch(URL + `/user/averbacao/goias/anexo?codigo=${codigo}`, {
            method: 'POST',
            body: data
        }).
        then(response => response.json().then(function (data) {
            // console.log(data)
            obj.transporter = data
        })).catch(error => console.log('error: ', error))

        return obj.transporter;
    },

    updateAtualizacaoAverbacao: (cod, linha) => {


        const status_campo = $("#status_usuario_campo").val();

        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json')

        const body = {
            codigo: cod,
            status: status_campo,
            responsavel: dataSession.nome,
            data_atualizacao: dateNow.date()
        }

        const raw = JSON.stringify(body);

        fetch(URL + '/user/averbacao/goias/atualizar', {
            method: 'POST',
            headers: myheaders,
            body: raw,
            redirect: 'follow'
        }).
        then(response => response.json().then(function (data) {

            // Insert de anexo n obrigatório
            const result = functions.insertAnexo(data);
            Promise.resolve(result).then(function (data) {})

            updateTbody(linha, data.status);
            $('#success').show();
            $('#success').fadeIn(300).delay(3000).fadeOut(400);
            document.getElementById("success").textContent = "Averbação Goiás atualizado com sucesso"

        })).catch(error => console.log('error: ', error))



    }

}



const populaCampos = (data) => {
    $("#data_cadastro_campo").val(data.data_cadastro);
    $("#parceiro_campo").val(data.parceiro);
    $("#tipo_campo").val(data.tipo);
    $("#valor_campo").val(data.valor_solicitado);
    $("#parcela_campo").val(data.parcela);
    $("#prazo_campo").val(data.prazo);
    $("#senha_campo").val(data.senha);
    $("#validade_campo").val(data.validade_senha);
    $("#parcela_original_campo").val(data.original_parcela);
    $("#matricula_campo").val(data.matricula);
    $("#status_usuario_campo").val(data.status);
}

search.addEventListener('click', () => {
    functions.search();
})


insertAverbacaoGoias.addEventListener('click', () => {
    breakModal.empty();
    breakModal.changeButtonInsert();

})

function insert() {
    functions.insert();
}

function updateTbody(row, status) {
    let cells = row.cells;
    cells[8].textContent = status
}

  