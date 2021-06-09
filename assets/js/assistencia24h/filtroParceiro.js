
import { INDEXPAGE, LOCALHOST } from  "./session.js";

function filtro() {

    apagarFiltrosSemRedirecionamento();
    var fCpf = document.getElementById("fCpf").value;
    var fTipoContratacao = document.getElementById("fTipoContratacao").value;
    var fBanco = document.getElementById("fBanco").value;
    var fTipoAssistencia = document.getElementById("fTipoAssistencia").value;
    var fFormaContratacao = document.getElementById("fFormaContratacao").value;
  
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "id_parceiro": "1",
      "cliente_cpf": fCpf,
      "tipo_contratacao": fTipoContratacao,
      "banco": fBanco,
      "tipo_assistencia": fTipoAssistencia,
      "forma_contratacao": fFormaContratacao
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/filtrarselecionadasporid`, requestOptions)
      .then(response => response.json())
      .then(function (data) {
  
        for (let i = 0; i < data.length; i++) {
  
          let specific_tbody = document.getElementById('list');
          let row = specific_tbody.insertRow(-1);
          let cpf = row.insertCell(-1);
          let nome = row.insertCell(-1);
          let tipoContratacao = row.insertCell(-1);
          let tipoAssistencia = row.insertCell(-1);
          let alteraThis = row.insertCell(-1);
  
          row.id = "row" + i
          cpf.id = "cpf" + i
          nome.id = "nome" + i
          tipoContratacao.id = "tipoContratacao" + i
          tipoAssistencia.id = "tipoAssistencia" + i
  
  
          let tAssistencia = document.createTextNode(`${data[i].tipo_assistencia}`);
          tipoAssistencia.appendChild(tAssistencia);
  
          let cpf2 = document.createTextNode(`${data[i].cliente_cpf}`);
          cpf.appendChild(cpf2);
  
          let nome_cliente = document.createTextNode(`${data[i].cliente_nome}`);
          nome.appendChild(nome_cliente);
  
          let contratacao_tipo = document.createTextNode(`${data[i].tipo_contratacao}`);
          tipoContratacao.appendChild(contratacao_tipo);
  
  
          arrays.arrayUpdate[i] = data[i].cpf
          arrays.arrayLinhas[i] = row
          alteraThis.innerHTML = `
                <td class="text-right" style="text-align: center;">
                <!-- Actions -->
                <div class="actions ml-3" style="text-align: center;">
                    <a href="#" class="action-item mr-2 " data-toggle="modal" id= "${i}"
                      onclick = "pegarIdBotaoAlterar(this.id);"
                        data-target=".modal-incluirproposta-parc" title="Alterar" >
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </td>
                `
        }
      })
      .catch(error => console.log('error', error));
  
  };
  
  
  function apagarFiltros() {
    var elemento = document.getElementById("list");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
    window.location.href = INDEXPAGE;
  };
  
  function apagarFiltrosSemRedirecionamento() {
    var elemento = document.getElementById("list");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
  };
  
export { filtro, apagarFiltros };
