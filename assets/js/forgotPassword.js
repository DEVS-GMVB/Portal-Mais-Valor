const senhaValida = (p) => {
    let retorno = false;

    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/;
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
    if (p.length > 8) {
        return retorno;
    }
    if (p.length < 8) {
        return retorno;
    }
    let auxMaiuscula = 0;
    let auxMinuscula = 0;
    let auxNumero = 0;
    let auxEspecial = 0;

    for (var i = 0; i < p.length; i++) {

        if (letrasMaiusculas.test(p[i]))
            auxMaiuscula++;

        else if (letrasMinusculas.test(p[i]))
            auxMinuscula++;

        else if (numeros.test(p[i]))
            auxNumero++;

        else if (caracteresEspeciais.test(p[i]))
            auxEspecial++;
    }
    if (auxMaiuscula > 0) {
        if (auxMinuscula > 0) {
            if (auxNumero > 0) {
                if (auxEspecial) {
                    retorno = true;
                }
            }
        }
    }


    return retorno;
}


//verifica se foi inserida uma senha com as condições desejadas
const senha = document.getElementById('input-password-1');
senha.addEventListener('focusout', () => {
    if (!senhaValida(senha.value)) {
        alert("A senha deve conter 8 caracteres,sendo pelo menos 1 numero, 1 letra maiuscula, 1 minuscula e 1 caractere especial Ex.: Test@123")

    }
});


//verifica se as senhas são iguais
document.getElementById('confirm-update').addEventListener('click', () => {

    let senha = document.getElementById('input-password-1').value;
    let confirmaSenha = document.getElementById('input-password-2').value;
    if (confirmaSenha !== senha) {
        alert('não logar senhas diferentes')
        document.getElementById('input-password-2').value = null;
    }

    const token = document.getElementById('input-token').value;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "token": token,
        "novaSenha": senha
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://172.16.0.197:3000/user/reset", requestOptions)
        .then(function (response) {
            response.json().then(function (data) {
                console.log(data);
                alert('senha alterada com sucesso');
                window.location.href = 'http://localhost:5500/paginas/login%20e%20recover/login.html';
            });

        });
    }).catch(error => console.log('error', error));