export const factoryPropostasPortal = (cpf, parceiro, supervisor, gerente, proposta, legado, status, email) => (

    {
        cpf: cpf,
        parceiro: parceiro,
        supervisor: supervisor,
        gerente: gerente,
        proposta: proposta,
        legado: legado,
        status: status,
        email: email
    }
)

export const showLayout = (proposta,legado, status, email, cpf, parceiro, supervisor, gerente) =>{

    let specific_tbody = document.getElementById('listRelatorio');
    let row = specific_tbody.insertRow(-1);
    let rowProposta = row.insertCell(-1);
    let rowLegado = row.insertCell(-1);
    let rowStatus = row.insertCell(-1);
    let rowEmail = row.insertCell(-1);
    let rowCpf= row.insertCell(-1);
    let rowParceiro = row.insertCell(-1);
    let rowSupervisor = row.insertCell(-1);
    let rowGerente = row.insertCell(-1);

    let novaProposta = document.createTextNode(proposta);
    rowProposta.appendChild(novaProposta);
    let novoLegado = document.createTextNode(legado);
    rowLegado.appendChild(novoLegado);
    let novoStatus = document.createTextNode(status);
    rowStatus.appendChild(novoStatus);
    let novoemail= document.createTextNode(email);
    rowEmail.appendChild(novoemail); 
    let novocpf = document.createTextNode(cpf);
    rowCpf.appendChild(novocpf);
    let novoParceiro = document.createTextNode(parceiro);
    rowParceiro.appendChild(novoParceiro);
    let novoSupervisor = document.createTextNode(supervisor);
    rowSupervisor.appendChild(novoSupervisor);
    let novoGerente= document.createTextNode(gerente);
    rowGerente.appendChild(novoGerente); 

}