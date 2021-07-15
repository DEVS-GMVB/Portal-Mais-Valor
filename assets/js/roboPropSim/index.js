import { propostasPortal } from './chamadasPortal.js';
import { apagarTudo } from './helpers.js';

window.addEventListener("load", function () {

    propostasPortal();

    setInterval(propostasPortal, 300000);

    document.getElementById("btnapagar").addEventListener("click", function () {
        apagarTudo();
    });


});