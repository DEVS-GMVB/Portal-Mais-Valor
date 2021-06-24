
import { gerarToken } from './autSessao.js'
import { chamaHtml } from './cpAuto.js';
import { limiteVencimento, reguaCpAuto, reguaCpPuro, 
         excluirCpAuto, HabilitarInputParaDebitoEmConta,
         simular, verificaCep} from './handlePage.js';
import { finalizar, modal } from './finalizar.js';


window.addEventListener("load", function () {


var formaPagamento = document.getElementById('formaPagamento');
formaPagamento.addEventListener('blur', function() {
HabilitarInputParaDebitoEmConta();
});


//REGUA VALOR DO EMPRESTIMO
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}


document.getElementById("btnAnalisar").addEventListener("click", function () {
    gerarToken();
});

document.getElementById("cpAutoKey").addEventListener("click", function () {
    chamaHtml();
    limiteVencimento();
    reguaCpAuto();
});

document.getElementById("cpPuroKey").addEventListener("click", function () {
     limiteVencimento();
     reguaCpPuro(); 
     excluirCpAuto();
});


document.getElementById("simular").addEventListener("click", function () {
    simular();
});


document.getElementById("btnFinalizar").addEventListener("click", function () {
    finalizar();
    modal();
});


document.getElementById("cep").addEventListener("blur", function( event ) {
    verificaCep();
}, true);




});