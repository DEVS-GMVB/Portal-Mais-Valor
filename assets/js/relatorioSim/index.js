
import { pesquisaSIm } from './apiSim.js';
import { resultadoPortal } from './apiPortal.js';


window.addEventListener("load", function () {
    pesquisaSIm();
    setTimeout(resultadoPortal, 15000);

});