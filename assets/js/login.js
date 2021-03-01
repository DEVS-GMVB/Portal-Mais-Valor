const url = 'https://api-portalmaisvalor.herokuapp.com';

const Logar = () => {

    const usuario = document.getElementById("input-login").value;
    const senha = document.getElementById("input-password").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "usuario": usuario,
        "senha": senha
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url + "/user/login", requestOptions)
        .then(function (response) {
            response.json().then(function (data) {

                if (!response.ok) {

                    Swal.fire({
                        title: 'Error!',
                        text: 'Senha ou usuário incorreto!',
                        icon: 'error',
                        confirmButtonText: 'ok',
                        width: 350
                    })
                }

                const user = data.user
                const matriz = user.cnpj_matriz;
                const data_nascimento = user.data_nascimento;
                const id_acesso = user.id_acesso;
                const nome = user.nome;
                const perfil = user.perfil;
                const status = user.status;
                const tipo_parceiro2 = user.tipo_usuario;
                const tipo_usuario = user.tipo_usuario;
                const cpf_usuario = user.cpf_usuario;

                sessionStorage.setItem('cnpj_matriz', matriz);
                sessionStorage.setItem('data_nascimento', data_nascimento);
                sessionStorage.setItem('id_acesso', id_acesso);
                sessionStorage.setItem('nome', nome);
                sessionStorage.setItem('perfil', perfil);
                sessionStorage.setItem('status', status);

                sessionStorage.setItem('tipo_parceiro2', tipo_parceiro2)

                sessionStorage.setItem('tipo_usuario', tipo_usuario);
                sessionStorage.setItem('tipo_parceiro', tipo_parceiro2);

                sessionStorage.setItem('cpf_usuario', cpf_usuario);


                window.location.href = "https://devs-gmvb.github.io/Portal-Mais-Valor/paginas/home.html";
            });
        }).catch(error => console.log('error', error));
};


const Email = () => {

    const email = document.getElementById("exampleInputlogin").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": email
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(url + "/user/email", requestOptions)
        .then(function (response) {
            response.json().then(function (data) {

                if (!response.ok)
                    return alert(data.erro);


                // console.log(data)
                alert(data.sucesso);

                window.location.href = '../../paginas/login e recover/resetsenha.html'


            }).catch(error => console.log('error', error));
        })


};