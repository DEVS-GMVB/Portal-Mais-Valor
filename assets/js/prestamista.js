//Select
const tipoOperacao = document.getElementById("tipo-operacao");
const tipoSeguro = document.getElementById("tipo-seguro");
const btnSimular = document.getElementById("btn-simular");
// Campos
const valorEntregue = document.getElementById("campo-valor-entregue");
const valorTroco = document.getElementById("campo-valor-troco");
const valorRefin = document.getElementById("campo-valor-refinanciamento");
const tabelaSeguro = document.getElementById("campo-tabela-seguro");
const tabelaConsignado = document.getElementById("campo-tabela-consignado");
//Evento perca de foco
tipoOperacao.addEventListener('blur', () => {
    if (tipoOperacao.value === 'NOVO') {
        //Liberar valor entregue e bloquear os outros dois
        valorEntregue.removeAttribute('disabled');
        valorTroco.value = ""
        valorRefin.value = ""
        valorTroco.disabled = true;
        valorRefin.disabled = true;

    } else if (tipoOperacao.value === 'REFINANCIAMENTO') {
        //Liberar dois campos e bloquear o campo de valor entregue
        valorEntregue.disabled = true;
        valorEntregue.value = ""
        valorTroco.removeAttribute('disabled');
        valorRefin.removeAttribute('disabled');
    } else {
        valorEntregue.disabled = true;
        valorTroco.disabled = true;
        valorRefin.disabled = true;
    }
})

btnSimular.addEventListener('click', () => {
    calculoPrestamista();
})

function calculoPrestamista() {
    let valorEntregueResultado;

    let valorEntregue = parseFloat(document.getElementById("campo-valor-entregue").value.replace(/\./g, ""));
    let valorTroco = parseFloat(document.getElementById("campo-valor-troco").value.replace(/\./g, ""));
    let valorRefin = parseFloat(document.getElementById("campo-valor-refinanciamento").value.replace(/\./g, ""));
    console.log(valorEntregue, valorTroco, valorRefin)
    const tabelaSeguro = parseFloat(document.getElementById("campo-tabela-seguro").value);
    const tabelaConsignado = parseFloat(document.getElementById("campo-tabela-consignado").value);

    
    (valorTroco + valorRefin) > 100000 ? valorEntregueResultado = 100000 : valorEntregueResultado = valorTroco + valorRefin;
    (valorEntregue > 100000) ? valorEntregue = 100000 : valorEntregue;

    if (tipoOperacao.value === 'NOVO') {
        if (tipoSeguro.value === 'SEM SEGURO') {
            const valorComissaoSeguro = (valorEntregue * (tabelaConsignado / 100))

            const premio = 0;

            const valor_total = valorEntregue

            const resultado2 = (valorEntregue * (tabelaConsignado / 100))

            const resultado3 = (premio * (tabelaSeguro / 100))

            const totalGeral = resultado2 + resultado3;

            populaCampos(totalGeral, valorComissaoSeguro, valor_total, valor_total);


        } else if (tipoSeguro.value === 'SEGURO PUBLICO') {
            const premio = (valorEntregue * (6.2 / 100))

            const valor_total = premio + valorEntregue

            const resultado2 = (valorEntregue * (tabelaConsignado / 100))

            const resultado3 = (premio * (tabelaSeguro / 100))

            const totalGeral = resultado2 + resultado3

            const valorComissaoSeguro = (valorEntregue * (tabelaConsignado / 100))

            populaCampos(totalGeral, valorComissaoSeguro, valor_total, valorEntregue);

        } else {
            const premio = (valorEntregue * (8.4 / 100))

            const valor_total = premio + valorEntregue

            const resultado2 = (valorEntregue * (tabelaConsignado / 100))

            const resultado3 = (premio * (tabelaSeguro / 100))

            const totalGeral = resultado2 + resultado3

            const valorComissaoSeguro = (valorEntregue * (tabelaConsignado / 100))

            populaCampos(totalGeral, valorComissaoSeguro, valor_total, valorEntregue);

        }
    } else {
        if (tipoSeguro.value === 'SEM SEGURO') {
            let valorComissaoSeguro = (valorTroco * (tabelaConsignado / 100))

            const premio = 0

            const valor_total = valorTroco;

            let resultado2 = (valorTroco * (tabelaConsignado / 100))

            let resultado3 = (premio * (tabelaSeguro / 100))

            const totalGeral = resultado2 + resultado3;

            $("#modal-valor-comissao-consignado").val(formataMoeda(valorComissaoSeguro));
            $("#valor-emprestimo").val(formataMoeda(valor_total));
            $("#modal-valor-premio").val(formataMoeda(0));
            $("#modal-valor-comissao-seguro").val(formataMoeda(totalGeral - valorComissaoSeguro));
            $("#modal-valor-entregue").val(formataMoeda(0));
            $("#modal-total-geral").val(formataMoeda(valorComissaoSeguro));
            $("#modal-comissao-semseguro").val(formataMoeda(valorComissaoSeguro));

        } else if (tipoSeguro.value === 'SEGURO PUBLICO') {
            console.log(valorEntregueResultado);
            const premio = (valorEntregueResultado * (6.2 / 100))

            const valor_total = premio + valorEntregueResultado


            let resultado2 = (valorTroco * (tabelaConsignado / 100))

            let resultado3 = (premio * (tabelaSeguro / 100))


            const totalGeral = resultado2 + resultado3


            const valorComissaoSeguro = (valorTroco * (tabelaConsignado / 100))

            populaCampos(totalGeral, valorComissaoSeguro, valor_total, valorEntregueResultado);

        } else {
            const premio = ((valorEntregueResultado) * (8.4 / 100))

            const valor_total = premio + valorEntregueResultado

            let resultado2 = (valorTroco * (tabelaConsignado / 100))

            let resultado3 = (premio * (tabelaSeguro / 100))


            const totalGeral = resultado2 + resultado3


            const valorComissaoSeguro = (valorTroco * (tabelaConsignado / 100))

            populaCampos(totalGeral, valorComissaoSeguro, valor_total, valorEntregueResultado);
        }
    }
}

function populaCampos(valorTotal, valorComissaoSeguro, valorEmprestimo, valorEntregueTroco) {
    const totalGeral = formataMoeda(valorTotal);
    const valorComissaoSeg = formataMoeda(valorComissaoSeguro);
    const valorEmpres = formataMoeda(valorEmprestimo);

    $("#modal-valor-comissao-consignado").val(valorComissaoSeg);
    $("#valor-emprestimo").val(valorEmpres);
    $("#modal-valor-premio").val(formataMoeda(valorEmprestimo - valorEntregueTroco));
    $("#modal-valor-comissao-seguro").val(formataMoeda(valorTotal - valorComissaoSeguro));
    $("#modal-valor-entregue").val(formataMoeda(valorEntregueTroco));
    $("#modal-total-geral").val(totalGeral);
    $("#modal-comissao-semseguro").val(valorComissaoSeg);
}

const formataMoeda = (value) => {
    return value.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    })
}