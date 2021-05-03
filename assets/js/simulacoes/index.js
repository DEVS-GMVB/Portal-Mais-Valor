import InssNovo from './InssNovo.js';
import InssRefin from './InssRefin.js';
import SiapeNovo from './SiapeNovo.js';
import GovernoSp from './GovernoSp.js'

const convenio = document.getElementById('campo-convenio');
const btn = document.getElementById('btn-simular');

btn.addEventListener('click', () => {
    if (convenio.value === 'INSS - NOVO') {
        InssNovo.obterVerificacoesInssNovo();
    } else if (convenio.value === 'INSS - REFIN'){
        const inssRefin = new InssRefin();
            inssRefin.obterVerificacoesInssRefin();
    } else if (convenio.value === 'SIAPE - NOVO') {
        SiapeNovo.obterVerificacoesSiapeNovo();
    } else if (convenio.value === 'SIAPE - REFIN') {
        
    } else if (convenio.value === 'GOVERNO DE SÃO PAULO - NOVO / REFIN') {
        GovernoSp.obterVerificacoesGovernoSp();
    }
});