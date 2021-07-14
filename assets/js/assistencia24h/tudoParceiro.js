
import { LOCALHOST } from './session.js';


function todosPorParceiro() {

 let id_parceiro =sessionStorage.getItem('id_acesso');
    let arrayUpdate = [];
    let arrayLinhas = [];

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify({
        "id_parceiro": id_parceiro
    });
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`${LOCALHOST}/user/assistencia/filtrartodasporid`, requestOptions)
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


                arrayUpdate[i] = data[i].cpf
                arrayLinhas[i] = row


                alteraThis.innerHTML = `
                  <td class="text-right" style="text-align: center;" > 
                  <!-- Actions -->
                  <div class="actions ml-3" style="text-align: center;" >
                      <a href="#" class="action-item mr-2 " data-toggle="modal" name="botaoAlterar" 
                      id= "${i}"  data-target=".modal-incluirproposta-parc" title="Alterar" >
                          <i class="fas fa-external-link-alt" name="iconeAlterar"></i>
                      </a>
                  </div>
              </td>
                  `

            }
        }).catch(error => console.log('error: ', error))

};

export { todosPorParceiro}