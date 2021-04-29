const btnSimular = document.getElementById("btn-simular");
//date
const DATA_ATUAL = new Date().toLocaleDateString();
//select
const convenioSelect = document.getElementById("campo-convenio");
//campos
const saldoDevedor = document.getElementById("campo-valor");
const tipo = document.getElementById("campo-tipo");
const dataNascimento = document.getElementById("campo-data-nascimento");
const sexo = document.getElementById("campo-sexo");
const quantidadeParcelasAberto = document.getElementById("campo-quantidade-parcelas");

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

    return DIFF_DATE;
}
