const URL = `http://localhost:3000/user`;
//Botão principal
const pesquisar = document.getElementById("btn-pesquisar");
//Obj
const objProp = new Object();

pesquisar.addEventListener('click', async () => {

    const tbodyProducaoTotal = document.getElementById("tbody-producao-total");
    tbodyProducaoTotal.innerHTML = ``;

    const supervisor = document.getElementById("supervisor");
    const nivel = document.getElementById("setor");

    objProp["supervisor"] = supervisor.value;
    objProp["nivel"] = nivel.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        ...objProp
    })

    const {
        pesquisaSetor: producaoTotalMedia,
    } = await fetch(`${URL}/producao/analista/setor`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        })
        .then(response => response.json().then(function (data) {
            return data;
        }))
        .catch(error => console.error(error));
    for (const {
            usuario: operador,
            nivel: setor,
            total
        } of producaoTotalMedia) {
        const trEl = document.createElement("tr");
        trEl.style.textAlign = 'center';

        trEl.innerHTML +=
            `
        <th scope="row">${operador}</th>
        <td>${setor}</td>
        <td>${total}</td>
    `

        tbodyProducaoTotal.appendChild(trEl);

    }

})

pesquisar.addEventListener('click', async () => {

    const tbodyEvolucaoMensal = document.getElementById("tbody-evolucao-mensal");

    tbodyEvolucaoMensal.innerHTML = ``;

    const supervisor = document.getElementById("supervisor");
    const nivel = document.getElementById("setor");

    objProp["supervisor"] = supervisor.value;
    objProp["nivel"] = nivel.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        ...objProp
    })

    const {
        pesquisaMes: evolucaoMensal,
    } = await fetch(`${URL}/producao/analista/mes`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        })
        .then(response => response.json().then(function (data) {
            return data;
        }))
        .catch(error => console.error(error));

    for (const {
            usuario: operador,
            nivel: setor,
            OUTUBRO: dezembro,
            NOVEMBRO: janeiro,
            DEZEMBRO: fevereiro
        } of evolucaoMensal) {
        const trEl = document.createElement("tr");
        trEl.style.textAlign = 'center';

        trEl.innerHTML +=
            `
        <th scope="row">${operador}</th>
        <td>${(setor === null ? "" : setor)}</td>
        <td>${dezembro}</td>
        <td>${janeiro}</td>
        <td>${fevereiro}</td>
        <td>${""}</td>
    `

        tbodyEvolucaoMensal.appendChild(trEl);

    }

});

pesquisar.addEventListener('click', async () => {

    const tbodyEvolucaoDiaria = document.getElementById("tbody-evolucao-diaria");

    tbodyEvolucaoDiaria.innerHTML = ``;

    const supervisor = document.getElementById("supervisor");
    const nivel = document.getElementById("setor");

    objProp["supervisor"] = supervisor.value;
    objProp["nivel"] = nivel.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        ...objProp
    })

    const {
        pesquisaDia: evolucaoDia
    } = await fetch(`${URL}/producao/analista/dia`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        })
        .then(response => response.json().then(function (data) {
            return data;
        }))
        .catch(error => console.error(error));

    for (const {
            usuario: operador,
            "01": dia1,
            "02": dia2,
            "03": dia3,
            "04": dia4,
            "05": dia5,
            "06": dia6,
            "07": dia7,
            "08": dia8,
            "09": dia9,
            10: dia10,
            11: dia11,
            12: dia12,
            13: dia13,
            14: dia14,
            15: dia15,
            16: dia16,
            17: dia17,
            18: dia18,
            19: dia19,
            20: dia20,
            21: dia21,
            22: dia22,
            23: dia23,
            24: dia24,
            25: dia25,
            26: dia26,
            27: dia27,
            28: dia28,
            29: dia29,
            30: dia30,
            31: dia31,

        } of evolucaoDia) {
        const trEl = document.createElement("tr");
        trEl.style.textAlign = 'center';

        trEl.innerHTML +=
            `
        <th scope="row">${operador}</th>
        <th scope="row">${dia1}</th>
        <th scope="row">${dia2}</th>
        <th scope="row">${dia3}</th>
        <th scope="row">${dia4}</th>
        <th scope="row">${dia5}</th>
        <th scope="row">${dia6}</th>
        <th scope="row">${dia7}</th>
        <th scope="row">${dia8}</th>
        <th scope="row">${dia9}</th>
        <th scope="row">${dia10}</th>
        <th scope="row">${dia11}</th>
        <th scope="row">${dia12}</th>
        <th scope="row">${dia13}</th>
        <th scope="row">${dia14}</th>
        <th scope="row">${dia15}</th>
        <th scope="row">${dia16}</th>
        <th scope="row">${dia17}</th>
        <th scope="row">${dia18}</th>
        <th scope="row">${dia19}</th>
        <th scope="row">${dia20}</th>
        <th scope="row">${dia21}</th>
        <th scope="row">${dia22}</th>
        <th scope="row">${dia23}</th>
        <th scope="row">${dia24}</th>
        <th scope="row">${dia25}</th>
        <th scope="row">${dia26}</th>
        <th scope="row">${dia27}</th>
        <th scope="row">${dia28}</th>
        <th scope="row">${dia29}</th>
        <th scope="row">${dia30}</th>
        <th scope="row">${dia31}</th>
    `

        tbodyEvolucaoDiaria.appendChild(trEl);

    }

});