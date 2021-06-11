const URL = 'http://localhost:3000/user';

// BTN
const incluir = document.getElementById("btn-incluir");
const apagar = document.getElementById("btn-apagar")

const mapRow = new Map();
const mapObj = new Map();

const arrays = {
    arraysReferenceRow: [],
    contadorRow: 0
}

apagar.addEventListener('click', () => {

    const spans = document.querySelectorAll('label span');
    spans.forEach(item => {
        item.innerHTML =
            `
            Choose a file…
        `
    })

    $(".needs-validation").each(function () {
        this.reset();
    })
})


incluir.addEventListener('click', (e) => {
    const titulo = $("#campo-titulo").val();
    const obs = $("#campo-texto").val();
    const status = $("#campo-status").val();

    const myheaders = new Headers();
    myheaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        titulo,
        obs,
        status
    })

    const requestOptions = {
        method: 'POST',
        headers: myheaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/comunicado/incluir`, requestOptions)
        .then(response => response.json()
            .then(function (data) {
                let comunicado = document.getElementById("list");
                let row = comunicado.insertRow(-1);
                arrays.contadorRow++;

                mapRow.set(data.id_comunicado, row);

                (!$('input[name="url_img"]').val() && !$('input[name="url_img1"]').val() && !$('input[name="url_img2"]').val()) ?

                row.innerHTML =
                    `
                        <td>
                            ${data.titulo}
                        </td>
                        <td>
                            ${data.obs}
                        </td>
                        <th scope="row">
                                <button type="button"
                                    class="btn btn-sm btn-secondary btn-icon rounded-pill" id="btn-download1">
                                    <span class="btn-inner--icon"><i
                                            class="far fa-download"></i></span>
                                    <span class="btn-inner--text">Download</span>
                                </button>
                        </th>
                        <th scope="row">
                            <button type="button"
                                class="btn btn-sm btn-secondary btn-icon rounded-pill" id="btn-download2">
                                <span class="btn-inner--icon"><i
                                        class="far fa-download"></i></span>
                                <span class="btn-inner--text">Download</span>
                            </button>
                        </th>
                        <th scope="row">
                            <button type="button"
                                class="btn btn-sm btn-secondary btn-icon rounded-pill" id="btn-download3">
                                <span class="btn-inner--icon"><i
                                        class="far fa-download"></i></span>
                                <span class="btn-inner--text">Download</span>
                            </button>
                        </th>
                        <td>
                            <div class="d-flex align-items-center justify-content-end">


                                <!-- Actions -->
                                <div class="actions ml-3">
                                    <a href="#" class="action-item mr-2" title="Alterar"
                                        data-toggle="modal"
                                        data-target=".moda-alterar-comunicados">
                                        <i class="far fa-pencil-alt"></i>
                                    </a>
                                    <a href="#" class="action-item mr-2" data-toggle="tooltip"
                                            title="Archive" onclick="Delete(${data.id_comunicado}, arrays.contadorRow)">
                                            <i class="fas fa-trash-alt"></i>
                                    </a>

                                </div>
                            </div>

                        </td>
                    
                    `:
                    incluirAnexos(data).then(function (result) {
                        const obj = new Object({...result});

                        mapObj.set(result.id_comunicado, result);

                        row.innerHTML =
                            `
                            <td>
                                ${result.titulo}
                            </td>
                            <td>
                                ${result.obs}
                            </td>
                            <th scope="row">
                                <button type="button"
                                class="btn btn-sm btn-secondary btn-icon rounded-pill" id="btn-download1" onclick="downloadFile(obj.${url_img})">
                                <span class="btn-inner--icon"><i
                                        class="far fa-download"></i></span>
                                <span class="btn-inner--text">${result.url_img.substring(34, result.url_img.length)}</span>
                                </button>
                            </th>
                            <th scope="row">
                                <button type="button"
                                    class="btn btn-sm btn-secondary btn-icon rounded-pill" id="btn-download2" onclick="downloadFile(${result.url_img1})">
                                    <span class="btn-inner--icon"><i
                                            class="far fa-download"></i></span>
                                    <span class="btn-inner--text">${result.url_img1}</span>
                                </button>
                            </th>
                            <th scope="row">
                                <button type="button"
                                    class="btn btn-sm btn-secondary btn-icon rounded-pill" id="btn-download3" onclick="downloadFile(${result.url_img2})">
                                    <span class="btn-inner--icon"><i
                                            class="far fa-download"></i></span>
                                    <span class="btn-inner--text">${result.url_img2}</span>
                                </button>
                            </th>
                            <td>
                                <div class="d-flex align-items-center justify-content-end">


                                    <!-- Actions -->
                                    <div class="actions ml-3">
                                        <a href="#" class="action-item mr-2" title="Alterar"
                                            data-toggle="modal"
                                            data-target=".moda-alterar-comunicados">
                                            <i class="far fa-pencil-alt"></i>
                                        </a>
                                        <a href="#" class="action-item mr-2" data-toggle="tooltip"
                                            title="Archive" onclick="Delete(${result.id_comunicado}, arrays.contadorRow)">
                                            <i class="fas fa-trash-alt"></i>
                                        </a>

                                    </div>
                                </div>
                            </td> 
                    `


                    })

            }))
        .catch(error => console.error('Deu erro interno', error))
});

async function downloadFile(hash) {
    console.log(hash);
    if(hash) {
        try {
            await fetch(`${URL}/comunicado/download?hash=${hash}`, { method: "GET", redirect: "follow" });

        } catch(error) {
            alert("Arquivo inexistente na base de dados")
        }
        
    } else {
        alert("Arquivo inexistente neste botão");
    }
}

async function incluirAnexos(data) {
    let dados;
    var input = document.querySelectorAll("input[type='file']")
    var codigo = data.id_comunicado

    var data = new FormData();
    input.forEach(file => {
        data.append(file.name, file.files[0])
    })


    await fetch(URL + `/comunicado/anexo?id_comunicado=${codigo}`, {
            method: 'POST',
            body: data,
        })
        .then(response => response.json().then((data) => {
            dados = data;
        }))
        .catch(error => console.error(error))

    return dados;
}

function Delete(id, row) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        id_comunicado: id
    })

    let requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }
    fetch(URL + '/comunicado/deletar', requestOptions)
        .then(response => response.json())
        .then(data => {
            document.getElementById("list").deleteRow($('#list tr')[row]);
            arrays.contadorRow--;
        }).catch(error => console.log('erro: ', error))
}