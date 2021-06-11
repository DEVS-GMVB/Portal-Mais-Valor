const URL = 'http://localhost:3000/user'

//Aqui e coloquei o id na div do botao
let divBotao = document.getElementById("div-botao");

//Aqui
let jk = document.getElementById("btn-incluir-producao");

//Aqui
const arrays = {
    arrayId: arrayId = []
}

let incluirBtn = document.getElementById('incluir');

window.onload = () => {
    lista();
}

function lista(){

    var node = document.getElementById("list");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    let supervisor = sessionStorage.getItem('nome', 'nome');
    console.log(supervisor)

    const body = {supervisor}

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/producao/lista`, requestOptions)
        .then(response => response.json())
        .then(function (data) {
            console.log('foi')

            let vlTotal = 0;

               data.forEach(item => {
                
            node.innerHTML += 
                    `<tr style="text-align: center;">
              
                    <td style="text-align: center;">${item.data_cadastro}</td>
                    <td style="text-align: center;">${item.supervisor}</td>
                    <td style="text-align: center;">${item.digitado_novo}</td>
                    <td style="text-align: center;">${item.digitado_prev}</td>
                    <td style="text-align: center;">${item.integrado_prev}</td>
                    <td style="text-align: center;">${item.digitado_novo}</td>
                    <td style="text-align: center;">${(vlTotal+=parseFloat(item.digitado_novo + item.integrado_prev))}</td>
        
                    <td class="text-right" style="text-align: center;">
                        <!-- Actions -->
                        <div class="actions ml-3" style="text-align: center;">
                            <a href="#" class="action-item mr-2 " data-toggle="modal"
                                data-target=".modal-cadastroproducao" title="Alterar"
                                id="modalAlterar">
                                <i class="fas fa-sync-alt"></i>
                            </a>
                        </div>
                    </td>
        
                </tr>`
            });

        }).catch(error => console.log('error: ', error))
}



incluirBtn.addEventListener("click", async () => {
    const integrado_novo = document.getElementById("integrado-santander").value;
    const digitado_novo = document.getElementById("digitado-santander").value;
    const ole_valor = document.getElementById("integrado-multi-bancos").value;
    const ole_qtd = document.getElementById("digitado-multi-bancos").value;
    const integrado_prev = document.getElementById("integrado-bb").value;
    const digitado_prev = document.getElementById("digitado-bb").value;

    //const btn_incluir_prodcao = document.getElementById("btn-incluir-producao");

    const myHeders = new Headers();
    myHeders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        integrado_novo,
        digitado_novo,
        ole_valor,
        ole_qtd,
        integrado_prev,
        digitado_prev,
        supervisor: sessionStorage.getItem("nome", "nome"),
        data_cadastro: new Date().toLocaleDateString()
    })

    const requestOptions = {
        method: "POST",
        headers: myHeders,
        body: raw,
        redirect: "follow"
    }

    const resultInsert = await fetch(`${URL}/producao`, requestOptions).then(response => response.json());

    if (typeof resultInsert === "object") {
        const tbody = document.getElementById("list");

        $('#success').show();
        $('#success').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("success").textContent = "Produção incluida com sucesso";

        // btn_incluir_prodcao.style.display = "none";

        const trEl = createRow(resultInsert);
        tbody.prepend(trEl);

        //Botão sumir
        document.getElementById("incluir").style.display = "none";
    }
});


const createRow = (data) => {
    const trEl = document.createElement("tr");
    trEl.style.textAlign = "center";

    //Aqui
    arrays.arrayId = []
    arrays.arrayId.push(data.id_producao)

    trEl.innerHTML = `
        <td style="text-align: center;">${data.data_cadastro}</td>
        <td style="text-align: center;">${data.supervisor}</td>
        <td style="text-align: center;">${data.digitado_novo}</td>
        <td style="text-align: center;">${data.digitado_prev}</td>
        <td style="text-align: center;">${data.integrado_prev}</td>
        <td style="text-align: center;">${data.digitado_novo}</td>
        <td style="text-align: center;">${parseFloat(data.digitado_novo.replace(',','.')) + parseFloat(data.digitado_prev.replace(',','.'))}</td>

        <td class="text-right" style="text-align: center;">
            <!-- Actions -->
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2 " data-toggle="modal"
                    data-target=".modal-cadastroproducao" title="Alterar"
                    id="modalAlterar" onclick="Modal(${data.id_producao})">
                    <i class="fas fa-sync-alt" style="display: ${(data.data_cadastro !== new Date().toLocaleDateString()) ? "none" : "block"};" ></i>
                </a>
            </div>
        </td>

    `
    return trEl;
}
//Aqui em cima no onclick e mais

//Aqui
function Modal(id){
    
    //console.log(row)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        id_producao: id
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/producao/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#integrado-santander").val(data.integrado_novo);
        $("#digitado-santander").val(data.digitado_novo);
        $("#integrado-multi-bancos").val(data.ole_valor);
        $("#digitado-multi-bancos").val(data.ole_qtd);
        $("#integrado-bb").val(data.integrado_prev);
        $("#digitado-bb").val(data.digitado_prev);
    })).catch(error => console.log('erro: ', error))

    divBotao.innerHTML =
    `<button type="button" class="btn btn-primary btn-icon-label" onclick="Update(${id})">
    <span class="btn-inner--icon">
        <i class="fas fa-plus"></i>
    </span>
    <span class="btn-inner--text">Alterar</span>
    </button>`
}

function Update(id){

    const myheaders = new Headers()
    myheaders.append('Content-Type', 'application/json')

    const integradoSant = $("#integrado-santander").val();
    const digitadoSant = $("#digitado-santander").val();
    const integradoMulti = $("#integrado-multi-bancos").val();
    const digitadoMulti = $("#digitado-multi-bancos").val();
    const integradoBB = $("#integrado-bb").val();
    const digitadoBB = $("#digitado-bb").val();

    const body = {
        id_producao:id,
        integrado_novo:integradoSant,
        digitado_novo:digitadoSant,
        ole_valor:integradoMulti,
        ole_qtd:digitadoMulti,
        integrado_prev:integradoBB,
        digitado_prev:digitadoBB,
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/producao/alterar`, requestOptions).
    then(response => response.json().then(function (data){
       
        console.log(data.digitado_novo)
        $('#success').show();
        $('#success').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("success").textContent = "Produção alterada com sucesso";

        // updateTbody(row)

        document.getElementById('list').rows[0].innerHTML = 
        `<td style="text-align: center;">${new Date().toLocaleDateString()}</td>
        <td style="text-align: center;">${sessionStorage.getItem("nome", "nome")}</td>
        <td style="text-align: center;">${data.digitado_novo}</td>
        <td style="text-align: center;">${data.ole_qtd}</td>
        <td style="text-align: center;">${data.ole_valor}</td>
        <td style="text-align: center;">${data.digitado_novo}</td>
        <td style="text-align: center;">${parseFloat(data.digitado_novo.replace(',','.')) + parseFloat(data.digitado_prev.replace(',','.'))}</td>

        <td class="text-right" style="text-align: center;">
            <!-- Actions -->
            <div class="actions ml-3" style="text-align: center;">
                <a href="#" class="action-item mr-2 " data-toggle="modal"
                    data-target=".modalincsac" title="Alterar"
                    id="modalAlterar">
                    <i class="fas fa-sync-alt"></i>
                </a>
            </div>
        </td>`

    })).catch(error => console.log('error: ', error))
}





