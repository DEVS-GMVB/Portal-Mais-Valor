const URL = 'http://localhost:3000';

let lista = document.getElementById('lista1');
let buttonFiltro = document.getElementById('filtrar');

//Map
const hashMapImobiliario = new Map();

function dateNow() {
  let date = new Date();
  let dateNow = `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  return dateNow;
}

// Date session
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


//INPUTS MODAL NOVA PROPOSTA
const propostaIncluir = document.getElementById('numero-proposta-incluir')
const dataCadastroIncluir = document.getElementById('data-cadastro-incluir')
const valorFinanciadoIncluir = document.getElementById('valor-financiado-incluir')
const modalidadeIncluir = document.getElementById('modalidade-incluir')
const statusIncluir = document.getElementById('status-incluir')
const tipoImovelIncluir = document.getElementById('tipo-imovel-incluir')
const bancoIncluir = document.getElementById('banco-incluir')
const telefonePromotorIncluir = document.getElementById('telefone-promotor-incluir');
const autorizaClienteIncluir = document.getElementById('autoriza-cliente-incluir');
const dataRetornoIncluir = document.getElementById('data-retorno-incluir');
const nomeClienteIncluir = document.getElementById('nome-cliente-incluir');
const cpfClineteIncluir = document.getElementById('cpf-cliente-incluir');
const dataNascimentoIncluir = document.getElementById('data-nascimento-incluir');
const ufClienteIncluir = document.getElementById('uf-cliente-incluir');
const dddTelIncluir = document.getElementById('ddd-tel-incluir');
const telefoneIncluir = document.getElementById('telefone-cliente-incluir');
const dddCelIncluir = document.getElementById('ddd-cel-incluir');
const celularClienteIncluir = document.getElementById('celular-cliente-incluir');
const parceiroIncluir = document.getElementById('parceiro-incluir');
const supervisorIncluir = document.getElementById('supervisor-incluir');
const gerenteIncluir = document.getElementById('gerente-incluir');
const nomeEspecialistaIncluir = document.getElementById('nome-especialista-incluir');
const observacaoIncluir = document.getElementById('observacao-incluir');

//INPUTS MODAL PESQUISA 
const pesquisaParceiro = document.getElementById("parceiro-pesquisa");
const pesquisaNomeOperador = document.getElementById("nome-operador-pesquisa");
const pesquisaGerente = document.getElementById("gerente-pesquisa");
const pesquisaSupervisor = document.getElementById("supervisor-pesquisa");
const pesquisaStatus = document.getElementById("status-pesquisa");
const pesquisaImovel = document.getElementById("imovel-pesquisa");
const pesquisaTipoImovel = document.getElementById("tipo-imovel-pesquisa");
const pesquisaCpf = document.getElementById("cpf-pesquisa");
const pesquisaProposta = document.getElementById("proposta-pesquisa");
const pesquisaDataAgendamento = document.getElementById("data-agendamento-pesquisa");
const pesquisaNomeCliente = document.getElementById("nome-cliente-pesquisa");
const pesquisaModalidade = document.getElementById("modalidade-pesquisa");
const pesquisaUf = document.getElementById("uf-pesquisa");
const pesquisaIdentificacaoImovel = document.getElementById("identificacao-imovel-pesquisa");
const pesquisaBanco = document.getElementById("banco-pesquisa");
var input = document.querySelectorAll('form#files input[type="file"]');
const buttonIncluir = document.getElementById('incluir-nova-proposta');

//Atualizar
const atualizar = document.getElementById("atualizar-campos")


//Table
const tbody = document.getElementById("listaDadosUsuario");


// var names;

function populaCamposObrigatorios() {
  parceiroIncluir.value = `${sessionStorage.getItem('nome', 'nome')}`
  supervisorIncluir.value = `${sessionStorage.getItem('supervisor', 'supervisor')}`
  gerenteIncluir.value = `${sessionStorage.getItem('gerente', 'gerente')}`
}

window.onload = function () {

  //SELECTS MODAL NOVA PROPOSTA
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  }


  fetch(URL + "/user/proposta/bancos", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        bancoIncluir.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;
        pesquisaBanco.innerHTML += `<option value =${element.banco}>${element.banco}</option>`;

      });
    })

  fetch(URL + "/user/gerente", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        pesquisaGerente.innerHTML += `<option value =${element.gerente}>${element.gerente}</option>`;
      });
    })

  fetch(URL + "/user/supervisor", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      data.forEach(element => {
        pesquisaSupervisor.innerHTML += `<option value =${element.parceiro}>${element.parceiro}</option>`;
      });
    })

  fetch(URL + '/user/imobiliario/status', requestOptions).
  then(response => response.json().then(function (data) {
    for (let i = 0; i < data.length; i++) {
      pesquisaStatus.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
      statusIncluir.innerHTML += '<option value="' + data[i].status + '">' + data[i].status + '</option>;'
    }
  })).catch(error => console.log('error: ', error))

  populaCamposObrigatorios();

}


//INCLUSAO DE PROPOSTA
buttonIncluir.addEventListener('click', () => {


  let data = new FormData();
  input.forEach(file => {
    data.append(file.name, file.files[0])
  });
  data.append("proposta", propostaIncluir.value, );
  data.append("data_solicitacao", dataCadastroIncluir.value);
  data.append("valor_financiado", valorFinanciadoIncluir.value);
  data.append("modalidade", modalidadeIncluir.value);
  data.append("status", statusIncluir.value);
  data.append("tipo_imovel", tipoImovelIncluir.value);
  data.append("banco", bancoIncluir.value);
  data.append("telefone_promotor", telefonePromotorIncluir.value);
  data.append("autorizacao", autorizaClienteIncluir.value);
  data.append("data_retorno", dataRetornoIncluir.value);
  data.append("nome", nomeClienteIncluir.value);
  data.append("cpf", cpfClineteIncluir.value);
  data.append("data_nascimento", dataNascimentoIncluir.value);
  data.append("uf", ufClienteIncluir.value);
  data.append("telefone", dddTelIncluir.value + telefoneIncluir.value);
  data.append("telefone_alternativo", dddCelIncluir.value + celularClienteIncluir.value);
  data.append("parceiro", parceiroIncluir.value);
  data.append("supervisor", supervisorIncluir.value);
  data.append("gerente", gerenteIncluir.value);
  data.append("nome_operador", nomeEspecialistaIncluir.value);
  data.append("observacao", observacaoIncluir.value);

  let requestOptions = {
    method: 'POST',
    body: data,
    redirect: 'follow'
  };


  fetch("http://localhost:3000/user/imobiliario/inclusao/arquivos", requestOptions)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data);

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Proposta ${data.proposta} foi incluida com sucesso!`,
          showConfirmButton: true,
        })
      });
    })

})

const dataDadosUsuario = () => {

  const tr = document.createElement("tr");

  tr.innerHTML = `
  <td style="text-align: center;">
   ${sessionStorage.getItem('nome','nome')} 
  </td>

  <td style="text-align: center;">

    ${sessionStorage.getItem('supervisor', 'supervisor')}

  </td>

  <td style="text-align: center;">

    ${sessionStorage.getItem('gerente', 'gerente')}
  </td>
  <td style="text-align: center;">
    ${sessionStorage.getItem('empresa', 'empresa')}
  </td>

  <td style="text-align: center;">
    ${sessionStorage.getItem('tipo_usuario', 'tipo_usuario')}
  </td>
  <td style="text-align: center;">
    ${sessionStorage.getItem('classificacao', 'classificacao')}
  </td>

  `
  tbody.append(tr)
}

const buscarLogs = (codigo) => {
  let tbody = document.getElementById("listaLogs");
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.lastChild)
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "codigo": codigo
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch(URL + "/user/imobiliario/logs", requestOptions)
    .then(response => response.json())
    .then(result => {
      for (const value of result) {
        const tbody = document.getElementById("listaLogs");
        let row = tbody.insertRow(-1);
        let data_log = row.insertCell(-1);
        let campo = row.insertCell(-1);
        let valor_antigo = row.insertCell(-1);
        let valor_novo = row.insertCell(-1);
        let responsavel = row.insertCell(-1);

        let data_log_text = document.createTextNode(`${value.data_log}`);
        data_log.appendChild(data_log_text);

        let campo_text = document.createTextNode(`${value.campo}`);
        campo.appendChild(campo_text);

        let valor_antigo_text = document.createTextNode(`${value.valor_velho}`);
        valor_antigo.appendChild(valor_antigo_text);

        let valor_novo_text = document.createTextNode(`${value.valor_novo}`);
        valor_novo.appendChild(valor_novo_text);

        let responsavel_text = document.createTextNode(`${value.usuario}`);
        responsavel.appendChild(responsavel_text);

      }
    })
    .catch(error => console.log('error', error));
}

const transporterCodigoUpadate = {
  arrayCodigo: []
}

//PESQUISAR PROPOSTAS
//preencher modal alterar
const modal = (dados) => {
  //Preenche outras tabelas do modal
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.lastChild);
  }
  dataDadosUsuario();

  buscarLogs(dados.codigo);
  transporterCodigoUpadate.arrayCodigo.push(dados.codigo);

  $('#numero-proposta-alterar').val(dados.proposta);
  $('#data-cadastro-alterar').val(dados.data_solicitacao)
  $('#valor-financiado-alterar').val(dados.valor_financiado)
  $('#modalidade-alterar').val(dados.modalidade)
  $('#status-alterar').val(dados.status)
  $('#tipo-imovel-alterar').val(dados.tipo_imovel)
  $('#banco-alterar').val(dados.banco)
  $('#telefone-promotor-alterar').val(dados.telefone_promotor)
  $('#autoriza-alterar').val(dados.autorizacao)
  $('#data-retorno-alterar').val(dados.data_retorno)
  $('#nome-cliente-alterar').val(dados.nome)
  $('#cpf-cliente-alterar').val(dados.cpf)
  $('#data-nascimento-alterar').val(dados.data_nascimento)
  $('#uf-cliente-alterar').val(dados.uf)
  $('#telefone-cliente-alterar').val(dados.telefone)
  $('#celular-cliente-alterar').val(dados.telefone_alternativo)
  $('#parceiro-alterar').val(dados.parceiro)
  $('#supervisor-alterar').val(dados.supervisor)
  $('#gerente-alterar').val(dados.gerente)
  $('#nome-especialista-alterar').val()
  $('#observacao-alterar').val(dados.observacao);
}

atualizar.addEventListener('click', () => {
  const codigo = transporterCodigoUpadate.arrayCodigo[transporterCodigoUpadate.arrayCodigo.length - 1]

  const data = this.dateNow();

  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const numeroProposta = $('#numero-proposta-alterar ').val()
  const dtCadastro = $('#data-cadastro-alterar').val()
  const vlFinanciado = $('#valor-financiado-alterar').val()
  const modalidade = $('#modalidade-alterar').val()
  const status = $('#status-alterar').val()
  const tpImovel = $('#tipo-imovel-alterar').val()
  const banco = $('#banco-alterar').val()
  const telPromotor = $('#telefone-promotor-alterar').val()
  const autorizaCliente = $('#autoriza-alterar').val()
  const dtRetorno = $('#data-retorno-alterar').val()
  const nome = $('#nome-cliente-alterar').val()
  const cpf = $('#cpf-cliente-alterar').val()
  const dtNascimento = $('#data-nascimento-alterar').val()
  const uf = $('#uf-cliente-alterar').val()
  //const dddTel = $('#ddd-tel-alterar').val()
  const telefone = $('#telefone-cliente-alterar').val()
  //const dddCel = $('#ddd-cel-alterar').val()
  const celular = $('#celular-cliente-alterar').val()

  const body = {
    codigo: codigo,
    proposta: numeroProposta,
    data_solicitacao: dtCadastro,
    valor_financiado: vlFinanciado,
    modalidade: modalidade,
    status: status,
    tipo_imovel: tpImovel,
    banco: banco,
    telefone_promotor: telPromotor,
    autorizacao: autorizaCliente,
    data_retorno: dtRetorno,
    nome: nome,
    cpf: cpf,
    data_nascimento: dtNascimento,
    uf: uf,
    telefone: telefone,
    telefone_alternativo: celular,
    responsavel: dataSession.nome,
    data_atualizacao: data
  }

  const raw = JSON.stringify(body)

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch(URL + '/user/imobiliario/alterar', requestOptions).
  then(response => response.json().then(function (data) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: `Proposta foi alterada com sucesso!`,
      showConfirmButton: true,
    })
  })).catch(error => console.log('error: ', error))

})




//limpa pesquisa
document.getElementById('button-filtros-pesquisa').addEventListener('click', () => {
  lista.innerHTML = ""
})



buttonFiltro.addEventListener('click', () => {
  lista.innerHTML = ""


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "parceiro": dataSession.nome,
    "nome_operador": pesquisaNomeOperador.value,
    "gerente": pesquisaGerente.value,
    "supervisor": pesquisaSupervisor.value,
    "status": pesquisaStatus.value,
    "imovel": pesquisaImovel.value,
    "tipo_imovel": pesquisaTipoImovel.value,
    "cpf": pesquisaCpf.value,
    "proposta": pesquisaProposta.value,
    "data_retorno": pesquisaDataAgendamento.value,
    "nome": pesquisaNomeCliente.value,
    "modalidade": pesquisaModalidade.value,
    "uf": pesquisaUf.value,
    "identificacao_imovel": pesquisaIdentificacaoImovel.value,
    "banco": pesquisaBanco.value
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(URL + "/user/imobiliario/pesquisar", requestOptions)
    .then(response => response.json()
      .then(data => {

        for (let index = 0; index < data.length; index++) {
          const element = data[index];

          hashMapImobiliario.set(data[index].codigo, data[index]);

          lista.innerHTML += ` <tr>
      <td style="text-align: center;">${element.proposta}</td>
      <td style="text-align: center;">${element['nome']}</td>
      <td style="text-align: center;">${element.cpf}</td>
      <td style="text-align: center;">${element.data_solicitacao}</td>
      <td style="text-align: center;">${element.data_solicitacao}</td>
      <td style="text-align: center;">${element.parceiro}</td>
      <td style="text-align: center;">R$${element.valor_financiado}</td>
      <td style="text-align: center;">${element.status}</td>
      <td style="text-align: center;">${element.sub_status}</td>
      <td style="text-align: center;">${element.situacao_sac}</td>
      <td style="text-align: center;">${element.nome_operador}</td>
      <td style="text-align: center;">${element.responsavel}</td>
      <td style="text-align: center;">${element.data_atualizacao}</td>
      <td style="text-align: center;">${element.modalidade}</td>
      <td style="text-align: center;">${element.tipo_imovel}</td>
      <td style="text-align: center;">${element.data_retorno}</td>
      <td style="text-align: center;">${element.telefone}</td>
      <td style="text-align: center;">${element.telefone_promotor}</td>
      <td style="text-align: center;">${element.uf}</td>
      <td style="text-align: center;">${element.banco}</td>
      <td style="text-align: center;">${element.autorizacao}</td>

      <td class="text-right" style="text-align: center;">
          <!-- Actions -->
          <div class="actions ml-3" style="text-align: center;">
              <a  href= class="action-item mr-2" data-id= 1 data-toggle="modal"
                  data-target=".modalalterarpropostas" title="Alterar"onclick="modal(hashMapImobiliario.get(${data[index].codigo}))">
                  <i  class="fas fa-external-link-alt">
                   </i>
              </a>
              <a href="#" class="action-item mr-2" data-toggle="modal"
                  data-target=".modalteladecadastro" title="Visualizar">
                  <i class="fas fa-eye"></i>
              </a>
          </div>
      </td>
  </tr>`

        }


      }))
    .catch(error => console.log('error', error))

})



const botao_excel = document.getElementById("planilhaExcel");

botao_excel.addEventListener('click', () => {
  var table2excel = new Table2Excel();
  table2excel.export(document.querySelectorAll("table"));

})