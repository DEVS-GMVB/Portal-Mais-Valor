console.log('js')

//Data
const DATA_ATUAL = new Date().toLocaleDateString();

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
let btn_max_bradesco = document.getElementById('div-saldo-max-bradesco');
let btn_min_bradesco = document.getElementById('div-saldo-min-bradesco');

//Botoes Ole
let btn_idade_ole = document.getElementById('div-idade-ole');
let btn_parcelas_ole = document.getElementById('div-parcelas-ole');
let btn_max_ole = document.getElementById('div-max-ole');
let btn_min_ole = document.getElementById('div-min-ole');

//Botões Paraná
let btn_idade_parana = document.getElementById('div-idade-parana');
let btn_parcelas_parana = document.getElementById('div-parcelas-parana');
let btn_max_parana = document.getElementById('div-max-parana');
let btn_min_parana = document.getElementById('div-min-parana');

//Botoes PAN
let btn_idade_pan = document.getElementById('div-idade-pan');
let btn_parcelas_pan = document.getElementById('div-parcelas-pan');
let btn_max_pan = document.getElementById('div-max-pan');
let btn_min_pan = document.getElementById('div-min-pan');

//Botões DayCoval
let btn_idade_daycoval = document.getElementById('div-idade-daycoval');
let btn_parcelas_daycoval = document.getElementById('div-parcelas-daycoval');
let btn_max_daycoval = document.getElementById('div-max-daycoval');
let btn_min_daycoval = document.getElementById('div-min-daycoval');

//Botões BB
let btn_idade_bb = document.getElementById('div-idade-bancobrasil');
let btn_parcelas_bb = document.getElementById('div-parcela-bancobrasil');
let btn_max_bb = document.getElementById('div-max-bancobrasil');
let btn_min_bb = document.getElementById('div-min-bancobrasil');

function dataDiff(nascimento) {
    const DIAS_ATUAIS = parseInt(DATA_ATUAL.substring(0,2));
    const MES_DIAS_ATUAIS = parseInt(DATA_ATUAL.substring(3,5));
    const ANOS_DIAS_ATUAIS = parseInt(DATA_ATUAL.substring(6,10));

    const DIAS_NASCIMENTO_ATUAIS = parseInt(nascimento.substring(0,2));
    const MES_NASCIMENTO_ATUAIS = parseInt(nascimento.substring(3,5));
    const ANOS_NASCIMENTO_ATUAIS = parseInt(nascimento.substring(6,10));

    const DIAS_TOTAL_ATUAIS = DIAS_ATUAIS + (MES_DIAS_ATUAIS * 30) + (ANOS_DIAS_ATUAIS * 365);
    const DIAS_TOTAL_NASCIMENTO = DIAS_NASCIMENTO_ATUAIS + (MES_NASCIMENTO_ATUAIS * 30) + (ANOS_NASCIMENTO_ATUAIS * 365);

    const DIFF_DATE = DIAS_TOTAL_ATUAIS - DIAS_TOTAL_NASCIMENTO;

    return parseInt(DIFF_DATE);
}

const dataDias= dataDiff(dtNascimento.value);

//SANTANDER ---------------------------------------------------------------------------------------------------

//Idade
if (dataDias > 29579) {
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
if (parseFloat(valor.value) > 200000) {
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
if (parseFloat(valor.value) < 300) {
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
if (dataDias > 27375){
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

//Saldo maximo
if (dataDias >= 6570 & dataDias < 22241 & parseFloat(valor.value) > 70000) {
    btn_max_bradesco.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 22242 & dataDias < 24066 & parseFloat(valor.value) > 60000) {
    btn_max_bradesco.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 24067 & dataDias < 25891 & parseFloat(valor.value) > 50000) {
    btn_max_bradesco.innerHTML =
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 25892 & dataDias < 29176 & parseFloat(valor.value) > 25000) {
    btn_max_bradesco.innerHTML =
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_max_bradesco.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Saldo minimo
if (parseFloat(valor.value) < 900) {
    btn_min_bradesco.innerHtml = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_min_bradesco.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//OLE ---------------------------------------------------------------------------------------------------
if (dataDias > 29176) {
    btn_idade_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_idade_ole.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Quantidade de parcelas
if (qtdParcelas.value > 84) {
    btn_parcelas_ole.innerHTML =
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_ole.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Saldo maximo
if (dataDias >= 9125 & dataDias < 25161 & parseFloat(valor.value) > 85000) {
    btn_max_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 25162 & dataDias < 26621 & parseFloat(valor.value) > 70000){
    btn_max_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 26622 & dataDias < 27716 & parseFloat(valor.value) > 30000) {
    btn_max_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 27717 & dataDias < 28446 & parseFloat(valor.value) > 15000){
    btn_max_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 28447 & dataDias < 29176 & parseFloat(valor.value) > 5000){
    btn_max_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_max_ole.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`    
}

//Saldo minimo
if (parseFloat(valor.value) < 300) {
    btn_min_ole.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_min_ole.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
    <span class="btn-inner--icon"><i class="far fa-check"></i></span>
    <span class="btn-inner--text">ACEITA</span>
    </button>`
}


//PARANÁ--------------------------
console.log(dataDias)
if(dataDias > 29176) {
    btn_idade_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_idade_parana.innerHTML = 
    `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if(parseInt(btn_parcelas_parana.value) > 84) {
    btn_parcelas_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_parana.innerHTML = 
    `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if(dataDias < 26986 && parseFloat(valor.value) > 60.000) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 26987 && dataDias < 27351 && parseFloat(valor) > 60.000 && parseInt(qtdParcelas.value) > 72) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 27352 && dataDias < 27716 && parseFloat(valor) > 25.000 && parseInt(qtdParcelas.value) > 60){
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 27717 && dataDias < 28081 && parseFloat(valor) > 16.000 && parseInt(qtdParcelas.value) > 48) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 28082 && dataDias < 28446 && parseFloat(valor) > 10.000 && parseInt(qtdParcelas.value) > 36) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 28447 && dataDias < 28811 && parseFloat(valor) > 1.000 && parseInt(qtdParcelas.value) > 24) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 28812 && dataDias < 29176 && parseFloat(valor) > 500 && parseInt(qtdParcelas.value) > 12) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 29177) {
    btn_max_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_max_parana.innerHTML =
    `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if(parseFloat(valor) < 1) {
    btn_min_parana.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_min_parana.innerHTML =
    `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

//PAN ---------------------------------------------------------------------------------------------------

//Idade
if (dataDias > 29176) {
    btn_idade_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_idade_pan.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Quantidade de parcelas
if (dataDias >= 27010 & dataDias < 27351 & parseInt(qtdParcelas.value) > 84) {
    btn_parcelas_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 27372 & dataDias < 27716 & parseInt(qtdParcelas.value) > 60){
    btn_parcelas_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 27717 & dataDias < 27740 & parseInt(qtdParcelas.value) > 48){
    btn_parcelas_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 27741 & dataDias < 28105 & parseInt(qtdParcelas.value) > 36){
    btn_parcelas_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 28106 & dataDias < 28811 & parseInt(qtdParcelas.value) > 24){
    btn_parcelas_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 28812 & dataDias < 29176 & parseInt(qtdParcelas.value) > 12){
    btn_parcelas_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_pan.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//Saldo maximo
if (dataDias >= 27372 & dataDias < 27716 & parseInt(qtdParcelas.value) > 60 & parseFloat(valor.value) > 30000) {
    btn_max_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 27717 & dataDias < 27740 & parseInt(qtdParcelas.value) > 48 & parseFloat(valor.value) > 20000){
    btn_max_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 27741 & dataDias < 28105 & parseInt(qtdParcelas.value) > 36 & parseFloat(valor.value) > 15000){
    btn_max_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 28106 & dataDias < 28811 & parseInt(qtdParcelas.value) > 24 & parseFloat(valor.value) > 4000){
    btn_max_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 28812 & dataDias < 29176 & parseInt(qtdParcelas.value) > 12 & parseFloat(valor.value) > 2000){
    btn_max_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if(dataDias >= 29177){
    btn_max_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_max_pan.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITA</span>
    </button>`
}

if (parseFloat(valor.value) < 200) {
    btn_min_pan.innerHTML = 
    `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_min_pan.innerHTML = 
    `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITA</span>
    </button>`
}

//DayCoval------------
if (dataDias > 27351) {
    btn_idade_daycoval.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_idade_daycoval.innerHTML =
        `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if (parseInt(qtdParcelas.value) > 84) {
    btn_parcelas_daycoval.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_daycoval.innerHTML =
        `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if (dataDias >= 7642 && dataDias < 25891 && parseFloat(valor.value) > 250.000) {
    btn_max_daycoval.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else if (dataDias >= 25892 && dataDias < 27351 && parseFloat(valor.value) > 75.000) {
    btn_max_daycoval.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_max_daycoval.innerHTML =
        `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

// BANCO DO BRASIL------------------
if (dataDias > 29541) {
    btn_idade_bb.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
    <span class="btn-inner--icon"><i
    class="fas fa-times"></i></span>
    <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_idade_bb.innerHTML =
        `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if (parseInt(qtdParcelas.value) > 84 && parseInt(qtdParcelas.value) < 2) {
    btn_parcelas_bb.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_parcelas_bb.innerHTML =
        `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}

if(parseFloat(valor.value) > 100.000) {
    btn_max_bb.innerHTML =
        `<button type="button"
    class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
    </button>`
} else {
    btn_max_bb.innerHTML =
        `
    <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
        <span class="btn-inner--icon"><i class="far fa-check"></i></span>
        <span class="btn-inner--text">ACEITO</span>
    </button>
    `
}
