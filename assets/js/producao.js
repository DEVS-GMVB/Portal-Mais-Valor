//URL
const URL = 'http://localhost:3000/user';

//Btn
const incluirBtn = document.getElementById("incluir");

window.onload = () => {
    lista();
}


function lista() {

    var node = document.getElementById("list");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    let supervisor = sessionStorage.getItem('nome', 'nome')

    const body = {
        supervisor
    }

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
            data.forEach(item => {

                node.innerHTML +=
                    `<tr style="text-align: center;">
        
        
                    <td style="text-align: center;">${item.data_cadastro}</td>
                    <td style="text-align: center;">${item.supervisor}</td>
                    <td style="text-align: center;">${item.digitado_novo}</td>
                    <td style="text-align: center;">${item.digitado_prev}</td>
                    <td style="text-align: center;">${item.integrado_prev}</td>
                    <td style="text-align: center;">${item.digitado_novo}</td>
                    <td style="text-align: center;">${parseFloat(item.digitado_novo.replace(',','.')) + parseFloat(item.digitado_prev.replace(',','.'))}</td>
        
                    <td class="text-right" style="text-align: center;">
                        <!-- Actions -->
                        <div class="actions ml-3" style="text-align: center;">
                            <a href="#" class="action-item mr-2 " data-toggle="modal"
                                data-target=".modalincsac" title="Alterar"
                                id="modalAlterar">
                                <i class="fas fa-sync-alt" style="display: ${(item.data_cadastro !== new Date().toLocaleDateString()) ? "none" : "block"};" ></i>
                            </a>
                        </div>
                    </td>
        
        
        
                </tr>`;


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

    const btn_incluir_prodcao = document.getElementById("btn-incluir-producao");

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
    }
});


const createRow = (data) => {
    const trEl = document.createElement("tr");
    trEl.style.textAlign = "center";

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
                    data-target=".modalincsac" title="Alterar"
                    id="modalAlterar">
                    <i class="fas fa-sync-alt" style="display: ${(data.data_cadastro !== new Date().toLocaleDateString()) ? "none" : "block"};" ></i>
                </a>
            </div>
        </td>

    `
    return trEl;
}