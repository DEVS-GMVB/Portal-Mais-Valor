const URL = `http://localhost:3000`;

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

    fetch("http://localhost:3000/user/login", requestOptions)
        .then(function (response) {
            response.json().then(function (data) {

                if (!response.ok)
                    return alert(data.erro);

                const user = data.user
                const supervisor_cpf = data.supervisor_cpf
                const gerente_cpf = data.gerente_cpf
                const matriz = user.cnpj_matriz;
                const data_nascimento = user.data_nascimento;
                const id_acesso = user.id_acesso;
                const nome = user.nome;
                const perfil = user.perfil;
                const status = user.status;
                const tipo_usuario = user.tipo_usuario;
                const tipo_parceiro2 = user.tipo_parceiro2;
                const cpf_usuario = user.cpf_usuario;
                const supervisor = user.supervisor;
                const gerente = user.gerente;

                sessionStorage.setItem('cnpj_matriz', matriz);
                sessionStorage.setItem('data_nascimento', data_nascimento);
                sessionStorage.setItem('id_acesso', id_acesso);
                sessionStorage.setItem('nome', nome);
                sessionStorage.setItem('perfil', perfil);
                sessionStorage.setItem('status', status);
                sessionStorage.setItem('tipo_usuario', tipo_usuario);
                sessionStorage.setItem('tipo_parceiro', tipo_parceiro2);
                sessionStorage.setItem('cpf_usuario', cpf_usuario);
                sessionStorage.setItem('supervisor', supervisor);
                sessionStorage.setItem('gerente', gerente);
                sessionStorage.setItem('supervisor_cpf', supervisor_cpf);
                sessionStorage.setItem('gerente_cpf', gerente_cpf);


                // console.log(sessionStorage.getItem('cnpj_matriz', 'cnpj_matriz'));
                // console.log(sessionStorage.getItem('data_nascimento', 'data_nascimento'));
                // console.log(sessionStorage.getItem('id_acesso', 'id_acesso'));
                // console.log(sessionStorage.getItem('nome', 'nome'));
                // console.log(sessionStorage.getItem('perfil', 'perfil'));
                // console.log(sessionStorage.getItem('status', 'status'));
                // console.log(sessionStorage.getItem('tipo_parceiro2', 'tipo_parceiro2'))
                // console.log(sessionStorage.getItem('supervisor_cpf', 'supervisor_cpf'))
                // console.log(sessionStorage.getItem('gerente_cpf', 'gerente_cpf'))


                window.location.href = "../../paginas/home.html";
            });
        }).catch(error => console.log('error', error));

    // buscarCpfs(sessionStorage.getItem('supervisor', 'supervisor'), sessionStorage.getItem('gerente', 'gerente'));


};

// const buscarCpfs = async (supervisor, gerente) => {
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//         supervisor: supervisor,
//         gerente: gerente
//     });

//     const requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//     };

//     await fetch(URL + "/user/buscar", requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             const supervisor_cpf = result.supervisor_cpf;
//             const gerente_cpf = result.gerente_cpf;

//             sessionStorage.setItem('supervisor_cpf', supervisor_cpf);
//             sessionStorage.setItem('gerente_cpf', gerente_cpf);
//         })
//         .catch(error => console.log('error', error));

// }


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

    fetch("http://172.16.0.197:3000/user/email", requestOptions)
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