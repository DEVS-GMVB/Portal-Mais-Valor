const URL = `http://localhost:3000/user`;

//Botão principal
const pesquisar = document.getElementById("btn-pesquisar");

//Obj
const objProp = new Object();

pesquisar.addEventListener('click', async () => {
    const supervisor = document.getElementById("supervisor");
    const nivel = document.getElementById("setor");

    objProp["supervisor"] = "COMPANHIA DO CREDITO";
    objProp["nivel"] = nivel.value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        ...objProp
    })


    const {
        pesquisaSetor: producaoTotalMedia,
        pesquisaMes: evolucaoMensal,
        pesquisaDia: evolucaoDia
    } = await fetch(`${URL}/producao/analista/filtro`, {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        })
        .then(response => response.json().then(function (data) {
            return data;
        }))
        .catch(error => console.error(error));

    for(const {} of evolucaoMensal) {
        console.log(data);
    }


});