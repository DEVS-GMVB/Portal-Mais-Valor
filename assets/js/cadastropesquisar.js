var colocar = document.getElementById('incluir');
var func = document.getElementById('validationCustomFuncionario')




colocar.addEventListener('click', () => {
    var raw = JSON.stringify(
        {"funcionario": func.value}
    )
      
    var requestOptions = {
        method: 'POST',
        body: raw,
        redirect: 'follow'
    };


    fetch("http://172.16.0.197:3000/user/search", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
})

