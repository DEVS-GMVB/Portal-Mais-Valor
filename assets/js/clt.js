const URL = `http://localhost:3000/user`;
const URL_API_CEP = 'https://viacep.com.br/ws';
//btn
const incluir = document.getElementById('buttonIncluir');
//liberar button
const filho14 = document.getElementById('id-filhos-14');
const quantos = document.getElementById('id-quantos');

const cep = document.getElementById("cep-campo");

cep.addEventListener('blur', async (e) => {
    console.log(e.target.value === '')

    if(e.target.value === '' || e.target.value === null) {
        $("#id-cidade").val('');
        $("#id-endereco").val('');
        $("#id-bairro").val('');
        $("#id-uf").val('');

        return;
    }


    const data = await fetch(`${URL_API_CEP}/${cep.value.replace(/-/g, "")}/json`).then(response => (response.status === 200) ? response.json() : {
        message: "CEP Inválido"
    });

    $("#id-cidade").val(data.localidade);
    $("#id-endereco").val(data.logradouro);
    $("#id-bairro").val(data.bairro);
    $("#id-uf").val(data.uf)
});

document.getElementById('id-filhos-14').addEventListener('blur', () => {

    if (filho14.value === 'SIM') {
        $("#id-quantos").attr('disabled', false);
    } else {
        $("#id-quantos").attr('disabled', true);
    }

});

incluir.addEventListener('click', async () => {
    const nome = $("#id-nome").val();
    const endereco = $("#id-endereco").val();
    const numero = $("#id-numero").val();
    const bairro = $("#id-bairro").val();
    const cidade = $("#id-cidade").val();
    const uf = $("#id-uf").val();
    const telefone = $("#id-telefone").val();
    const celular = $("#id-celular").val();
    const email = $("#id-email").val();
    const nmPai = $("#id-nome-pai").val();
    const nmMae = $("#id-nome-mae").val();
    const estadoCivil = $("#id-estado-civil").val();
    const filhos = $("#id-filhos").val();
    const cidadeUf = $("#id-cidade-uf").val();
    const escolaridade = $("#id-escolaridade").val();
    const curso = $("#id-curso").val();
    const nasci = $("#id-dt-nasci").val();
    const cpf = $("#id-cpf").val();
    const rg = $("#id-rg").val();
    const cracha = $("#id-cracha").val();
    const filhos14 = $("#id-filhos-14").val();
    const quantos = $("#id-quantos").val();
    const dtReservita = $("#id-dt-reservita").val();
    const pis = $("#id-pis").val();
    const orgExp = $("#id-org-exp").val();
    const ufReservita = $("#id-uf-reservita").val();
    const nPis = $("#n-pis").val();
    const ctps = $("#id-ctps").val();
    const serie = $("#id-serie").val();
    const estado = $("#id-estado").val();
    const titulo = $("#id-titulo").val();
    const zona = $("#id-zona").val();
    const secao = $("#id-secao").val();
    const banco = $("#id-banco").val();
    const agencia = $("#id-agencia").val();
    const cCorrente = $("#id-conta-corrente").val();
    const acao = $("#id-acao").val();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(rg)

    const body = {
        nome_completo: nome,
        logradouro: endereco,
        numero_l: numero,
        bairro,
        cidade,
        //uf
        telefone,
        telefone: celular,
        email,
        nome_pai: nmPai,
        nome_mae: nmMae,
        estado_civil: estadoCivil,
        filhos,
        naturalidade: cidadeUf,
        escolaridade,
        curso,
        data_nascimento: nasci,
        cpf,
        rg,
        cnpj: rg,
        cracha,
        //filhos14
        //quantos filhos
        data_rg: dtReservita,
        pis,
        orgao_emissao: orgExp,
        uf_rg: ufReservita,
        //numero pis
        ctps,
        serie_ctps: serie,
        estado_ctps: estado,
        titulo_eleitor: titulo,
        zona_titulo: zona,
        secao_titulo: secao,
        banco,
        agencia,
        conta: cCorrente,
        //acao
        status: 'AGUARDANDO APROVAÇÃO DP',
        data_criacao: new Date().toLocaleDateString()
    }

    const raw = JSON.stringify(body)

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    await fetch(URL + "/cadastral", requestOptions).
    then(response => response.json()).
    then(async function (res) {
        console.log(res);

        $('#success').show();

        $('#success').fadeIn(300).delay(3000).fadeOut(400);

        document.getElementById("success").textContent = "Incluido";

        const dataJson = await uploadFiles(res.id_parceiro);

        console.log(dataJson);

        if (dataJson) {
            console.log(dataJson);
        }
    })

})

async function uploadFiles(id_parceiro) {
    const data = new FormData();
    const filesInputs = document.querySelectorAll("#files input[type='file']");

    filesInputs.forEach(file => {
        data.append(file.name, file.files[0]);
    });

    const dataResponse = await fetch(`${URL}/cadastro/arquivo?id_parceiro=${id_parceiro}`, {
        method: "POST",
        body: data
    }).then(response => response.json()).catch(error => console.error(error));

    console.log(dataResponse);

    return dataResponse;
}