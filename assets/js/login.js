


const Logar = () => {

    const usuario = document.getElementById("input-login").value;
    const senha = document.getElementById("input-password").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "usuario": usuario,"senha": senha });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/user/login", requestOptions) 
    .then(function(response){
        response.json().then(function(data){
      
            if(!response.ok){

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
            const data_nascimento  = user.data_nascimento;
            const id_acesso = user.id_acesso;
            const nome = user.nome;
            const perfil = user.perfil;
            const status = user.status;
            const tipo_usuario = user.tipo_usuario;
            const tipo_parceiro2 = user.tipo_parceiro2;
            const cpf_usuario = user.cpf_usuario;

            sessionStorage.setItem('cnpj_matriz',matriz);
            sessionStorage.setItem('data_nascimento',data_nascimento);
            sessionStorage.setItem('id_acesso',id_acesso);
            sessionStorage.setItem('nome',nome);
            sessionStorage.setItem('perfil',perfil);
            sessionStorage.setItem('status',status);
            sessionStorage.setItem('tipo_usuario',tipo_usuario);
            sessionStorage.setItem('tipo_parceiro',tipo_parceiro2);
            sessionStorage.setItem('cpf_usuario',cpf_usuario);

            window.location.href = "../../paginas/home.html";
        });
    }).catch(error => console.log('error', error));
};


const Email = () => {

    const email = document.getElementById("exampleInputlogin").value;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "email": email });

    const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://172.16.0.197:3000/user/email", requestOptions)
    .then(function(response){
        response.json().then(function(data){
      
            if(!response.ok)
                return alert(data.erro);


            // console.log(data)
            alert(data.sucesso);

            window.location.href = '../../paginas/login e recover/resetsenha.html'
            
            
        }).catch(error => console.log('error', error));
    })
            
    
};