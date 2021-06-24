const URL = `http://localhost:3000/user`;

const atualizarDados = document.getElementById('atualizar-dados');
const atualizarPerfil = document.getElementById("salvar-alteracoes");

//Dados da sessão
const dataSession = {
    id_acesso: sessionStorage.getItem('id_acesso', 'id_acesso'),
    status: sessionStorage.getItem('status', 'status'),
    perfil: sessionStorage.getItem('perfil', 'perfil'),
    nome: sessionStorage.getItem('nome', 'nome'),
    supervisor: sessionStorage.getItem('supervisor', 'supervisor'),
    gerente: sessionStorage.getItem('gerente', 'gerente'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'),
    cpf_user: sessionStorage.getItem('cpf_usuario', 'cpf_usuario'),
    tipo_usuario: sessionStorage.getItem('tipo_usuario', 'tipo_usuario'),
    supervisor_cpf: sessionStorage.getItem('supervisor_cpf', 'supervisor_cpf'),
    gerente_cpf: sessionStorage.getItem('gerente_cpf', 'gerente_cpf')
}

atualizarDados.addEventListener('click', () => {

    let cnpj = dataSession.cpf_user;

    console.log(cnpj)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        cnpj: cnpj
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    }

    fetch(`${URL}/perfil/modal`, requestOptions).
    then(response => response.json().then(function (data) {
        $("#numero-telefone-dados").val(data.telefone)
        $("#email-dados").val(data.email)
        $("#endereco-dados").val(data.logradouro);
        $("#cep-dados").val(data.cep);
        $("#n-dados").val(data.numero_l);
        $("#complemento-dados").val(data.complemento);
        $("#bairro-dados").val(data.bairro);
        $("#cidade-dados").val(data.cidade);
        $("#estado-dados").val();

    })).catch(error => console.log('erro: ', error))

})

atualizarPerfil.addEventListener('click', async () => {

    const telefone = $("#numero-telefone-dados").val();
    const email = $("#email-dados").val();
    const endereco = $("#endereco-dados").val();
    const cep = $("#cep-dados").val();
    const numero_l = $("#n-dados").val();
    const complemento = $("#complemento-dados").val();
    const bairro = $("#bairro-dados").val();
    const cidade = $("#cidade-dados").val();

    const myheaders = new Headers();
    myheaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        telefone,
        email,
        endereco,
        cep,
        numero_l,
        complemento,
        bairro,
        cidade
    });

    const requestOptions = {
        method: "PUT",
        headers: myheaders,
        body: raw,
        redirect: "follow"
    }

    const result = await fetch(`${URL}/perfil?cnpj=${sessionStorage.getItem('cpf_usuario')}`, requestOptions).then(response => response.json());

    if (result.id_parceiro) {
        $('#success').show();
        $('#success').fadeIn(300).delay(3000).fadeOut(400);
        document.getElementById("success").textContent = "Atualização feita com sucesso";

        return;
    }

    alert("Erro durante a atualização")
});
