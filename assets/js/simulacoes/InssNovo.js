console.log('js')

//Campos
let dtNascimento = document.getElementById('campo-data-nascimento');
let qtdParcelas = document.getElementById('campo-quantidade-parcelas');
let valor = document.getElementById('campo-valor');

//Botões Santander
let btn_idade_sant = document.getElementById('div-idade-santander');
let btn_parcelas_sant = document.getElementById('btn-qtd-parcelas-santander');
let btn_max_sant = document.getElementById('div-saldo-max-santander');
let btn_min_sant = document.getElementById('div-saldo-min-santander');

//Botoes Bradesco
let btn_idade_bradesco = document.getElementById('div-idade-bradesco');
let btn_parcelas_bradesco = document.getElementById('div-parcelas-bradesco');

//SANTANDER ---------------------------------------------------------------------------------------------------

//Idade
if (dtNascimento.value > 29579) {
    btn_idade_sant.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}else{
    btn_idade_sant.innerHTML = 
    `
    <button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
}

//Quantidade parcelas
if (qtdParcelas.value > 84 || qtdParcelas.value < 3) {
    btn_parcelas_sant.innerHTML =
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_sant.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Saldo maximo
if (valor.value > 200000) {
    btn_max_sant.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`   
} else {
    btn_max_sant.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Saldo minimo
if (valor.value < 300) {
    btn_min_sant.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>` 
} else {
    btn_min_sant.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//BRADESCO ---------------------------------------------------------------------------------------------------

//Idade
if (dtNascimento.value > 27375){
    btn_idade_bradesco.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_idade_bradesco.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Quantidade parcelas
if (qtdParcelas.value > 84) {
    btn_parcelas_bradesco.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_bradesco.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}
