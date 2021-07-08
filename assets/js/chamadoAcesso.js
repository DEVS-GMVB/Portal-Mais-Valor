//Btn's
const incluir = document.getElementById('btn-incluir')
//let banco = document.getElementsByTagName('banco')

//Check Box's
let bra = document.getElementById('check-bradesco')
let crefisa = document.getElementById('check-crefisa')

//Div's
let divBancos = document.getElementById('div-acessos-banco');

/* só um teste
incluir.addEventListener('click', () => {
    //     for (var i=0; i< banco.length; i++){

    //         if (banco[i].checked == true){

    //         if(banco[i].value == 'check-bradesco'){
    //             console.log('foi')
    //         }
    //     }
    // }
    // console.log('jhdjhk')

    if (bra.checked) {
        console.log('hgfdhgd');
        divBancos.innerHTML += 
        `<div class="bg-subtitulo mt-1">

        <h3>Respostas </h3>

    </div>

    <form class="needs-validation" novalidate>

    <div class="form-row mt-4">

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Bradesco Login</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Bradesco Senha</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Bradesco Login</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Bradesco Senha</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        </div>
    </form>`
    } else {console.log('bra')}

    if(crefisa.checked) {
        divBancos.innerHTML +=
        `<div class="bg-subtitulo mt-1">

        <h3>Respostas </h3>

    </div>

    <form class="needs-validation" novalidate>

    <div class="form-row mt-4">

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Crefisa Login</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Crefisa Senha</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Crefisa Login</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        <div class="col-md-4 mb-3">
            <label for="validationCustom01">Crefisa Senha</label>
            <input type="text" class="form-control form-control-sm" id="campo-endereco" required>

        </div>

        </div>
    </form>`
    } else {console.log('cre')}
})*/