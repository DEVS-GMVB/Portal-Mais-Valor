const URL = `http://localhost:3000/user`;
const URL_API_CEP = 'https://viacep.com.br/ws';
//btn
const incluir = document.getElementById('buttonIncluir');

const cep = document.getElementById("cep-campo");

cep.addEventListener('blur', async (e) => {

    if (e.target.value === '' || e.target.value === null) {
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

incluir.addEventListener('click', async () => {
    const nome = $("#id-nome").val();
    const endereco = $("#id-endereco").val();
    const numero = $("#id-numero").val();
    const cep = $("#cep-campo").val();
    const bairro = $("#id-bairro").val();
    const cidade = $("#id-cidade").val();
    const uf = $("#id-uf").val();
    const complemento = $("#id-complemento").val();
    const telefone = $("#id-telefone").val();

    const email = $("#id-email").val();
    const nomeContato = $("#id-email").val();


    const pagamentoCartao = $("#pagamento-via-cartao").val();
    const favorecido = $("#campo-favorecido").val();
    const cpf = $("#cpf-cnpj").val();
    const banco = $("#id-banco").val();
    const agencia = $("#id-agencia").val();
    const cCorrente = $("#id-conta-corrente").val();
    const rg = $("#id-rg").val();
    const nasci = $("#id-dt-nasci").val();
    const nmMae = $("#id-nome-mae").val();
    const certificacao = $("#id-certificacao").val();
    const celular = $("#id-telefone").val();
    const enderecoResidencial = $("#id-endereco").val();
    const complemento2 = $("#id-complemento").val();
    const bairro2 = $("#id-bairro").val();
    const cidade2 = $("#id-cidade").val();
    const uf2 = $("#id-uf").val();
    const cep2 = $("#cep-campo").val();
    const nome_contato_emergencial = $("#id-nome-emergencial-contato").val();
    const telefone_contato_emergencial = $("#id-telfone-emergencial-contato").val();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    console.log(rg)

    const body = {
        nome_completo: nome,
        nome_completo: nomeContato,
        logradouro: endereco,
        logradouro: enderecoResidencial,
        numero_l: numero,
        cep: cep,
        cep: cep2,
        bairro: bairro,
        bairro: bairro2,
        cidade: cidade,
        cidade: cidade2,
        uf: uf,
        uf: uf2,
        complemento: complemento,
        complemento: complemento2,
        telefone: telefone,
        telefone: celular,
        email,
        nome_contato_emergencial,
        telefone_contato_emergencial,
        tipo_pagamento: pagamentoCartao,
        favorecido,
        cnpj: rg,
        cpf,
        banco,
        agencia,
        conta: cCorrente,
        data_nascimento: nasci,
        // nome_pai: nmPai,
        nome_mae: nmMae,
        certificacao,
        status: 'AGUARDANDO APROVAÇÃO DP'
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

        const dataJson = await inclusaoArquivos(res.id_parceiro);

        if (dataJson) {
            console.log(dataJson);
        }
    })

})

async function inclusaoArquivos(id_parceiro) {
    console.log(id_parceiro);
    const filesInputs = document.querySelectorAll("#files input[type='file']");

    const formData = new FormData();

    filesInputs.forEach(fileEl => {
        formData.append(fileEl.name, fileEl.files[0]);

    });

    const data = await fetch(`${URL}/cadastro/arquivo?id_parceiro=${id_parceiro}`, {
        method: "POST",
        body: formData
    }).
    then(res => res.json()).
    catch(error => console.log(error));

    console.log(data)

    return data;

}
