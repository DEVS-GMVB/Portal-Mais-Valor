import Portabilidade from './Portabilidade.js';
import InssNovo from './InssNovo.js';
import InssRefin from './InssRefin.js';
import SiapeNovo from './SiapeNovo.js';
import SiapeRefin from './SiapeRefin.js';
import GovernoSp from './GovernoSp.js';
import PoliciaMilitar from './PoliciaMilitar.js';
import SpprevNovo from './SpprevNovo.js';
import TjSp from './TjSp.js';
import GovernoMt from './GovernoMt.js';
import GovernoMtSul from './GovernoMtSul.js';
import GovernoMg from './GovernoMg.js';
import InstPrevMg from './InstPrevMg.js';
import PoliciaMilitarMg from './PoliciaMilitarMg.js';
import InstPrevMiliMg from './InstPrevMiliMg.js'
import BombeiroMg from './BombeiroMg.js';
import GovernoParana from './GovernoParana.js';
import GovernoSc from './GovernoSc.js';
import GovernoGo from './GovernoGo.js';
//import GovernoAcre from './GovernoAcre.js';
//import GovernoBahia from './GovernoBahia.js';

const convenio = document.getElementById('campo-convenio');
const btn = document.getElementById('btn-simular');

btn.addEventListener('click', () => {
    if(convenio.value === 'INSS - PORTABILIDADE'){
        Portabilidade.obterVerificacoesPortabilidade();
    } else if (convenio.value === 'INSS - NOVO') {
        InssNovo.obterVerificacoesInssNovo();
    } else if (convenio.value === 'INSS - REFIN'){
        const inssRefin = new InssRefin();
            inssRefin.obterVerificacoesInssRefin();
    } else if (convenio.value === 'SIAPE - NOVO') {
        SiapeNovo.obterVerificacoesSiapeNovo();
    } else if (convenio.value === 'SIAPE - REFIN') {
        const siapeRefin = new SiapeRefin();
        siapeRefin.obterVerificacoesSiapeRefin();
    } else if (convenio.value === 'GOVERNO DE SÃO PAULO - NOVO / REFIN') {
        GovernoSp.obterVerificacoesGovernoSp();
    } else if(convenio.value === 'POLÍCIA MILITAR DE SP - NOVO / REFIN'){
        const policiaMilitar = new PoliciaMilitar();
        policiaMilitar.obterVerificacoesPoliciaMilitar();
    } else if (convenio.value === 'SPPREV - NOVO / REFIN'){
        const sppreNovo = new SpprevNovo();
        sppreNovo.obterVerificacoesSpprevNovo();
    } else if (convenio.value === 'TJ SP - NOVO / REFIN') {
        const tjSp = new TjSp();
        tjSp.obterVerificacoesTjSp();
    } else if (convenio.value === 'GOVERNO MATO GROSSO - NOVO / REFIN') {
        const governoMt = new GovernoMt();
        governoMt.obterVerificacoesGovernoMt();
    } else if (convenio.value === 'GOVERNO MATO GROSSO DO SUL - NOVO / REFIN'){
        const governoMtSul = new GovernoMtSul();
        governoMtSul.obterVerificacoesGovernoMtSul();
    } else if (convenio.value === 'GOVERNO MINAS GERAIS - NOVO / REFIN'){
        const governoMg = new GovernoMg();
        governoMg.obterVerificacoesGovernoMg();
    } else if (convenio.value === 'INST PREV SERV MG - NOVO / REFIN'){
        const instPrevMg = new InstPrevMg();
        instPrevMg.obterVerificacoesInstPrevMg();
    } else if (convenio.value === 'POLICIA MILITAR MG - NOVO / REFIN') {
        const policiaMilitarMg = new PoliciaMilitarMg();
        policiaMilitarMg.obterVerificacoesPoliciaMilitarMg();
    } else if (convenio.value === 'INST PREV SERV MILI MG - NOVO / REFIN') {
        const instPrevMiliMg = new InstPrevMiliMg();
        instPrevMiliMg.obterVerificacoesInstPrevMiliMg();
    } else if (convenio.value === 'CORPO DE BOMBEIRO MG - NOVO / REFIN'){
        const bombeiroMg = new BombeiroMg();
        bombeiroMg.obterVerificacoesBombeiroMg();
    } else if (convenio.value === 'GOVERNO PARANA- NOVO / REFIN') {
        const governoParana = new GovernoParana();
        governoParana.obterVerificacoesGovernoParana();
    } else if (convenio.value === 'GOVERNO SANTA CATARINA - NOVO / REFIN'){
        const governoSc = new GovernoSc();
        governoSc.obterVerificacoesGovernoSc();
    } else if (convenio.value === 'GOVERNO GOÍAS - NOVO / REFIN'){
        const governoGo = new GovernoGo();
        governoGo.obterVerificacoesGovernoGo();
    } else if (convenio.value === 'GOVERNO ACRE - NOVO / REFIN'){
        
    }
});