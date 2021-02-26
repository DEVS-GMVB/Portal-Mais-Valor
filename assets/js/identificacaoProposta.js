const URL = `http://localhost:3000`;
let supervisor = document.getElementById('Sup')
let gerente = document.getElementById('Gere')
let tipoOperacao = document.getElementById('TpOperacao')
let prod = document.getElementById('Produto')

window.onload = function () {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(URL+ "/user/supervisor", requestOptions)
        .then(response => response.json())
        .then(function (data) {
          for (let i = 0; i < data.length; i++) {
            supervisor.innerHTML += '<option value="' + data[i].parceiro + '">' + data[i].parceiro + '</option>;'
          }
        }).catch(error => console.log('error', error));
      
        fetch("http://localhost:3000/user/gerente", requestOptions)
          .then(response => response.json().then(function (data) {
            for (let i = 0; i < data.length; i++) {
              gerente.innerHTML += '<option value="' + data[i].gerente + '">' + data[i].gerente + '</option>;'
            }
          })).catch(error => console.log('error', error));

          fetch(URL + "/user/proposta/tipo", requestOptions)
          .then(response => response.json())
          .then(function (data) {
            for (let i = 0; i < data.length; i++) {
              tipoOperacao.innerHTML += '<option value="' + data[i].tipo + '">' + data[i].tipo + '</option>;'
            }
          })

          fetch(URL + "/user/proposta/produto", requestOptions)
            .then(response => response.json())
            .then(function (data) {
            for (let i = 0; i < data.length; i++) {
                prod.innerHTML += '<option value="' + data[i].produto + '">' + data[i].produto + '</option>;'
               
            }
            })     
}

const arrays = {
    arrayUpdate: arrayUpdate = [],
    arrayLinhas: arrayLinhas = []
}

const sessionBrowser = {
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome')
}

function Buscar() {    

    var node = document.getElementById("Lista");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const cpf = $("#cpf").val()
    const parcpromo = $("#ParcPromo").val()
    const proposta = $("#Prop").val()
    const mes = $("#Mes").val()
    const tipo = $("#Tipo").val()
    const dtCadastro = $("#DtCad").val()
    const supervisor = $("#Sup").val()
    const gerente = $("#Gere").val()

    const body = {
        cnpj_matriz: sessionBrowser.cnpj_matr,
        perfil: sessionBrowser.perfil,
        tipo_usuario: sessionBrowser.tipo_usuario,
        nome: sessionBrowser.nome,
        cpf: cpf,
        parceiro: parcpromo,
        proposta: proposta,
        mes: mes,
        tipo: tipo,
        data_envio: dtCadastro,
        supervisor: supervisor,
        gerente: gerente
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/user/proposta/identificacao/filtro', requestOptions).
    then(response => response.json().then(function (data) {
        // console.log(data)
        arrays.arrayUpdate = data

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('Lista');
            let row = specific_tbody.insertRow(-1);
            let propostas = row.insertCell(-1)
            let nomeCliente = row.insertCell(-1)
            let cpfCliente = row.insertCell(-1)
            let dataCadastro = row.insertCell(-1)
            let parceiroProm = row.insertCell(-1)
            let vlEntregue = row.insertCell(-1)
            let convenio = row.insertCell(-1)
            let Tipo = row.insertCell(-1)
            let Status = row.insertCell(-1)
            let dataAtualizacao = row.insertCell(-1)
            let logAlteracao = row.insertCell(-1)
            let altera = row.insertCell(-1)

            let propostasText = document.createTextNode(`${data[i].proposta}`);
            propostas.appendChild(propostasText);

            let nomeClineteText = document.createTextNode(`${data[i].nome}`);
            nomeCliente.appendChild(nomeClineteText);

            let cpfClienteText = document.createTextNode(`${data[i].cpf}`);
            cpfCliente.appendChild(cpfClienteText);

            let dataCadastroText = document.createTextNode(`${data[i].data_envio}`);
            dataCadastro.appendChild(dataCadastroText);

            let parceiroPromText = document.createTextNode(`${data[i].parceiro}`);
            parceiroProm.appendChild(parceiroPromText);

            let vlEntregueText = document.createTextNode(`${data[i].entregue}`);
            vlEntregue.appendChild(vlEntregueText)

            let convenioText = document.createTextNode(`${data[i].convenio}`);
            convenio.appendChild(convenioText);

            let TipoText = document.createTextNode(`${data[i].tipo}`);
            Tipo.appendChild(TipoText);

            let StatusText = document.createTextNode(`${data[i].status}`);
            Status.appendChild(StatusText);

            let dataAtualizacaotext = document.createTextNode(`${data[i].data_atualizacao}`);
            dataAtualizacao.appendChild(dataAtualizacaotext);

            let logAlteracaoText = document.createTextNode(``);
            logAlteracao.appendChild(logAlteracaoText);

            arrays.arrayLinhas[i] = row

            altera.innerHTML = ` <div class="actions ml-3" style="text-align: center;">
            <a href="#" class="action-item mr-2" data-toggle="modal"
                data-target=".modal-incluirdocumentacao"
                title="Incluir Documentação" id="btnAlterar">
                <i class="fas fa-external-link-alt"></i>
            </a>

        </div>`
        }
    })).catch(error => console.log('error: ', error))
}

function Inserir(){
    //alert('jkgfsd')
    /*const numeroProposta = $("#NPosposta").val()
    const dataCadas = $("#DtCadastro").val()
    const mesRef = $("#NPosposta").val()
    const status = $("#Status").val()
    const valorEntregue = $("#ValorEntregue").val()
    const bancoOrgi = $("#BancoOrgi").val()
    const produto = $("#Produto").val()
    const tipoOp = $("#TpOperacao").val()
    const cpfCli = $("#CpfCliente").val()
    const nmCli = $("#NmCliente").val()

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const body = {
        e:numeroProposta,
        e:dataCadas,
        e:mesRef,
        e:status,
        e:valorEntregue,
        e:bancoOrgi,
        e:produto,
        e:tipoOp,
        e:cpfCli,
        e:nmCli
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + "", requestOptions)*/
}

function deleteFields(){
    $("#camposIdentificacaoPropostas").each(function () {
        this.reset();
    })
}