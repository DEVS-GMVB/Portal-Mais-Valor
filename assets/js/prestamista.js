//Select
const tipoOperacao = document.getElementById("tipo-operacao");
const btnSimular = document.getElementById("btn-simular");
// Campos
const valorEntregue = document.getElementById("campo-valor-entregue");
const valorTroco = document.getElementById("campo-valor-troco");
const valorRefin = document.getElementById("campo-valor-refinanciamento");
//Evento perca de foco
tipoOperacao.addEventListener('blur', () => {
    if (tipoOperacao.value === 'NOVO') {
        //Liberar valor entregue e bloquear os outros dois
        valorEntregue.removeAttribute('disabled');
        valorTroco.disabled = true;
        valorRefin.disabled = true;

    } else if (tipoOperacao.value === 'REFINANCIAMENTO') {
        //Liberar dois campos e bloquear o campo de valor entregue
        valorEntregue.disabled = true;
        valorTroco.removeAttribute('disabled');
        valorRefin.removeAttribute('disabled');
    } else {
        valorEntregue.disabled = true;
        valorTroco.disabled = true;
        valorRefin.disabled = true;
    }
})

btnSimular.addEventListener('click', () => {
    
})

