const URL = 'http://localhost:3000';

class ConsultaMargem {

    loadsSelect(url) {

        const statusSelect = document.getElementById('status-filtro')

        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }

        fetch(url + "/user/margem/status", requestOptions)
            .then(response => response.json())
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    statusSelect.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
                }
            }).catch(error => console.log('error', error));

    }

    filtroMargem(url) {

        var node = document.getElementById("Lista");
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const usuario = $('#usuario-filtro').val()
        const status = $('#status-filtro').val()
        const dataAtu = $('#dataAtualizacao-filtro').val()
        const dataCad = $('#dataCadastro-filtro').val()
        const cpf = $('#cpf-filtro').val()

        const body = {
            cnpj_matriz: sessionBrowser.cnpj_matr,
            perfil: sessionBrowser.perfil,
            tipo_usuario: sessionBrowser.tipo_usuario,
            nome: sessionBrowser.nome,
            usuario: usuario,
            status: status,
            data: dataAtu,
            data: dataCad,
            cpf: cpf
        }

        const raw = JSON.stringify(body)

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        }

        fetch(url + '/user/margem/pesquisa', requestOptions).
        then(response => response.json().then(function (data) {
            //arrays.arrayUpdate = data;
            // console.log(arrays.arrayUpdate)
            for (let i = 0; i < data.length; i++) {

                let specific_tbody = document.getElementById('listItens');
                let row = specific_tbody.insertRow(-1);
                let cpf = row.insertCell(-1);
                let dataCadastro = row.insertCell(-1)
                let convenio = row.insertCell(-1)
                let matricula = row.insertCell(-1)
                let status = row.insertCell(-1)
                let parceiro = row.insertCell(-1)
                let senha = row.insertCell(-1)
                let renda = row.insertCell(-1)
                let dataAtualizacao = row.insertCell(-1)
                let dataalteracao = row.insertCell(-1)
                let margemDisponivel = row.insertCell(-1)
            }
        }))
    }

    
}

const loading = new ConsultaMargem();

window.onload = function () {
    loading.loadsSelect(URL)
}

const sessionBrowser = {
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome')
}

function deleteFields() {
    $('#camposForm').each(function () {
        this.reset()
    })
}