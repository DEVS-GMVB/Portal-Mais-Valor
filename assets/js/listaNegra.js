const URL = 'http://localhost:3000';

const insert = document.getElementById("insert");


const arrays = {
    arraysReferenceRow: [],
    contadorRow: 0
}

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


const functionsRequests = {
    insert: () => {
        const cpf_cliente = $("#cpf_cliente").val();
        const motivo = $("#motivo").val();
        const parceiro = $("#parceiro").val();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            cpf_cliente,
            motivo,
            parceiro: dataSession.nome,
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

        fetch(URL + "/user/lista/negra/inserir", requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.message === "Cpf já existente na lista negra") {
                    $('#error').show();
                    $('#error').fadeIn(300).delay(3000).fadeOut(400);
                    document.getElementById("error").textContent = "CPF cliente já existe na Lista Negra";

                } else {

                    insertTbody(result)

                    $('#success').show();
                    $('#success').fadeIn(300).delay(3000).fadeOut(400);
                    document.getElementById("success").textContent = "CPF cliente incluido com sucesso na Lista Negra";
                }
            })
            .catch(error => console.log('error', error));
    }
}


const handleFunctionsRequests = {
    get: (target, name) => {
        if (target[name]) {
            return target[name];
        } else {
            throw new Error("Prop does not exist")
        }
    },

    set: (target, name, value) => {
        if (target[name]) {
            if (value) {
                target[name] = value
            } else {
                throw new Error("Value does not exist")
            }
        }
    }
}

const functionsRequestsProxy = new Proxy(functionsRequests, handleFunctionsRequests)

insert.addEventListener('click', () => {
    if ($("#cpf_cliente").val() == "") {
        $('#error').show();
        $('#error').fadeIn(300).delay(3000).fadeOut(400);
        return document.getElementById("error").textContent = "Preencha o campo CPF cliente";
    }
    functionsRequestsProxy.insert();
})

function insertTbody(data) {

    arrays.contadorRow++;

    let listNegra = document.getElementById("listNegra");
    let row = listNegra.insertRow(-1);
    let cpf_cell = row.insertCell(-1);
    let motivo_cell = row.insertCell(-1);
    let usuario_cell = row.insertCell(-1);
    let delete_icon = row.insertCell(-1);

    let cpf_cell_text = document.createTextNode(`${data.cpf}`);
    cpf_cell.appendChild(cpf_cell_text);

    let motivo_cell_text = document.createTextNode(`${data.motivo}`)
    motivo_cell.appendChild(motivo_cell_text);

    let usuario_cell_text = document.createTextNode(`${data.parceiro}`)
    usuario_cell.appendChild(usuario_cell_text);

    // console.log($('#listNegra tr').length)

    delete_icon.innerHTML = `
        <div class="actions ml-3">
            <a href="#" class="action-item mr-2" data-toggle="tooltip" title="Excluir" onclick="deleteRow(arrays.contadorRow)">
                <i class="fas fa-trash-alt"></i>
            </a>
        </div>
    `
}


function deleteRow(row) {

    // console.log(row);

    document.getElementById("listNegra").deleteRow($('#listNegra tr')[row]);
    arrays.contadorRow--;
}