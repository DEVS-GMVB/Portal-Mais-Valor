export const editaStatus = (data) => {

    let i = 0
    let arrayStatusEditado = [];
    while (i < data.proposalResumeList.length) {

        let proposta = data.proposalResumeList[i].proposalId
        let status = data.proposalResumeList[i].status
        let novoStatus = ""
        switch (status) {
            case "CANCELADA":
                novoStatus = "CANCELADO"
                break;

            case "COM PENDENCIA":
                novoStatus = "PENDENTE"
                break;

            case "EM ANDAMENTO":
                novoStatus = "EM ANALISE"
                break;

            case "LIBERANDO PAGAMENTO":
                novoStatus = "INTEGRADO"
                break;

            case "NAO APROVADA":
                novoStatus = "REPROVADO"
                break;

            case "PAGAMENTO REALIZADO":
                novoStatus = "INTEGRADO"
                break;

            case "PENDENCIA RESOLVIDA":
                novoStatus = "PENDENCIA RESOLVIDA - SIM"
                break;
        }
        arrayStatusEditado.push({
            proposta: proposta,
            status: novoStatus
        })
        i++;
    }
    return arrayStatusEditado;
}


export const showLayout = (proposta, status, parmResponsavel, data_atualizacao) =>{

          let specific_tbody = document.getElementById('list');
          let row = specific_tbody.insertRow(-1);
          let cellProposta = row.insertCell(-1);
          let cellStatus = row.insertCell(-1);
          let responsavel = row.insertCell(-1);
          let dataAlteracao = row.insertCell(-1);

          let childStatus = document.createTextNode(status);
          cellStatus.appendChild(childStatus);
          let childResponsavel = document.createTextNode(parmResponsavel);
          responsavel.appendChild(childResponsavel);
          let childProposta = document.createTextNode(proposta);
          cellProposta.appendChild(childProposta);
          let childDataAlteracao= document.createTextNode(data_atualizacao);
          dataAlteracao.appendChild(childDataAlteracao); 

}


    
 const zeroFill = n => {
    return ('0' + n).slice(-2);
}

 export const horaAgora =() => {
    const now = new Date();
    const agora =   zeroFill(now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
    return agora
}


 export function apagarTudo() {
    const elemento = document.getElementById("list");
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    };
  };