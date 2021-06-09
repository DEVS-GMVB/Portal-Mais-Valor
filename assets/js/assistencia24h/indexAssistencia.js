import { cartaoCredito } from "./cartao.js";
import { incluirBd } from "./inserir.js";
import { updateBd, pegarIdBotaoAlterar} from "./alterar.js";
import { configuracaoVencimento } from "./datasConfig.js";
import { filtro, apagarFiltros } from './filtroParceiro.js';
import { setarEnvioDiaHora, filtraAssistenciasDebito } from './selecaoParaTxt.js';
import { todosPorParceiro } from './tudoParceiro.js';



window.addEventListener("load", function () {

    todosPorParceiro();
    setarEnvioDiaHora();
    configuracaoVencimento();
    filtraAssistenciasDebito(); //apagar qd terminar os testes

    var nomeBotaoClicado = "";
    $('#btnFP').click(function () {
        var nome = $(this).attr('name');
        nomeBotaoClicado = nome;
    });

    document.getElementById("inclusao").addEventListener("click", function () {
        inclusao(nomeBotaoClicado)
    });

    document.getElementById("filtrarBusca").addEventListener("click", function () {
        filtro();
    });

    document.getElementById("btnapagar").addEventListener("click", function () {
        apagarFiltros();
    });


   document.addEventListener('click', function (e) {
        if (e.target && e.target.name == 'botaoAlterar'){
            nomeBotaoClicado = 'botaoAlterar';
            var btnAlterar = e.target.id;
            pegarIdBotaoAlterar(btnAlterar);

        }else if ( e.target && e.target.name == 'iconeAlterar' ){
            nomeBotaoClicado = 'botaoAlterar';
                var target = $(this).closest('[id]');
                alert(target.data('id'));//id da tag pai
        }
    });



    $(function () {
        $('#cep').change(function () {
          var cep = $(this).val().replace('-', '').replace('.', '');
          if (cep.length === 8) {
            $.get("https://viacep.com.br/ws/" + cep + "/json", function (data) {
              if (!data.erro) {
                $('#bairro').val(data.bairro);
                $('#complemento').val(data.complemento);
                $('#cidade2').val(data.localidade);
                $('#rua').val(data.logradouro);
                $('#estado2').val(data.uf);
              }
            }, 'json');
          }
        });
      });


});



var inclusao = (nomeBotaoClicado) => {
    if (nomeBotaoClicado == "btnFP") {
        let forma_de_pagamento = document.getElementById("tipoContratacao").value;
        if (forma_de_pagamento == "Cartao de Credito") {
            cartaoCredito();
        } else if (forma_de_pagamento == "Conta bancaria") {
             let uuid = "";
            incluirBd(uuid);
        }
    } else if (nomeBotaoClicado == "botaoAlterar") {
        updateBd();
    }

};






