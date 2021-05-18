const URL = 'http://localhost:3000/user'

let pesquisar = document.getElementById('btn-pesquisar');

pesquisar.addEventListener('click', () =>{

    var node = document.getElementById("tbody-producao-total");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }

    var node2 = document.getElementById("tbody-evolucao-mensal");
    while (node2.hasChildNodes()) {
        node2.removeChild(node2.lastChild);
    }

    var node3 = document.getElementById("tbody-evolucao-diaria");
    while (node3.hasChildNodes()) {
        node3.removeChild(node3.lastChild);
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const setor = $("#setor").val();
    const supervisor = $("#supervisor").val();

    const body = {
        nivel:setor,
        supervisor:supervisor
    }

    const raw = JSON.stringify(body)

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(URL + '/producao/analista/filtro', requestOptions).
    then(response => response.json().then(function (data) {

        /*for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('tbody-producao-total');
            let row = specific_tbody.insertRow(-1);
            let operador = row.insertCell(-1);
            let setor = row.insertCell(-1);
            let total = row.insertCell(-1);

            let operadorText = document.createTextNode(`${data[i].usuario}`);
            operador.appendChild(operadorText);

            let setorText = document.createTextNode(`${data[i].nivel}`);
            setor.appendChild(setorText);

            let totalText = document.createTextNode(`${data[i].total}`);
            total.appendChild(totalText);
        }*/

        for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('tbody-evolucao-mensal');
            let row = specific_tbody.insertRow(-1);
            let operador = row.insertCell(-1);
            let setor = row.insertCell(-1);
            let dezembro = row.insertCell(-1);
            let janeiro = row.insertCell(-1);
            let fevereiro = row.insertCell(-1);

            let operadorText = document.createTextNode(`${data[i].usuario}`);
            operador.appendChild(operadorText);

            let setorText = document.createTextNode(`${data[i].nivel}`);
            setor.appendChild(setorText);

            let dezembroText = document.createTextNode(``);
            dezembro.appendChild(dezembroText);

            let janeiroText = document.createTextNode(``);
            janeiro.appendChild(janeiroText);

            let fevereiroText = document.createTextNode(``);
            fevereiro.appendChild(fevereiroText);
        }

        /*for (let i = 0; i < data.length; i++) {
            let specific_tbody = document.getElementById('tbody-evolucao-diaria');
            let row = specific_tbody.insertRow(-1);
            let operador = row.insertCell(-1);
            let dia1 = row.insertCell(-1);
            let dia2 = row.insertCell(-1);
            let dia3 = row.insertCell(-1);
            let dia4 = row.insertCell(-1);
            let dia5 = row.insertCell(-1);
            let dia6 = row.insertCell(-1);
            let dia7 = row.insertCell(-1);
            let dia8 = row.insertCell(-1);
            let dia9 = row.insertCell(-1);
            let dia10 = row.insertCell(-1);
            let dia11 = row.insertCell(-1);
            let dia12 = row.insertCell(-1);
            let dia13 = row.insertCell(-1);
            let dia14 = row.insertCell(-1);
            let dia15 = row.insertCell(-1);
            let dia16 = row.insertCell(-1);
            let dia17 = row.insertCell(-1);
            let dia18 = row.insertCell(-1);
            let dia19 = row.insertCell(-1);
            let dia20 = row.insertCell(-1);
            let dia21 = row.insertCell(-1);
            let dia22 = row.insertCell(-1);
            let dia23 = row.insertCell(-1);
            let dia24 = row.insertCell(-1);
            let dia25 = row.insertCell(-1);
            let dia26 = row.insertCell(-1);
            let dia27 = row.insertCell(-1);
            let dia28 = row.insertCell(-1);
            let dia29 = row.insertCell(-1);
            let dia30 = row.insertCell(-1);
            let dia31 = row.insertCell(-1);

            let operadorText = document.createTextNode(`${data[i].usuario}`);
            operador.appendChild(operadorText);

            let dia1Text = document.createTextNode(data + i + 1);
            dia1.appendChild(dia1Text);

            let dia2Text = document.createTextNode(``);
            dia2.appendChild(dia2Text);

            let dia3Text = document.createTextNode(``);
            dia3.appendChild(dia3Text);

            let dia4Text = document.createTextNode(``);
            dia4.appendChild(dia4Text);

            let dia5Text = document.createTextNode(``);
            dia5.appendChild(dia5Text);

            let dia6Text = document.createTextNode(``);
            dia6.appendChild(dia6Text);

            let dia7Text = document.createTextNode(``);
            dia7.appendChild(dia7Text);

            let dia8Text = document.createTextNode(``);
            dia8.appendChild(dia8Text);

            let dia9Text = document.createTextNode(``);
            dia9.appendChild(dia9Text);

            let dia10Text = document.createTextNode(``);
        }*/
        
    })).catch(error => console.log('error: ', error))
})