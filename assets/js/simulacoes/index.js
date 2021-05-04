import Portabilidade from './Portabilidade.js';
import InssNovo from './InssNovo.js';
import InssRefin from './InssRefin.js';
import SiapeNovo from './SiapeNovo.js';
import SiapeRefin from './SiapeRefin.js';
import GovernoSp  from './GovernoSp.js';
import PoliciaMilitar from './PoliciaMilitar.js';
import SpprevNovo from './SpprevNovo.js';
import TjSp from './TjSp.js';
import GovernoMt from './GovernoMt.js';
import GovernoMtSul from './GovernoMtSul.js';
import GovernoMg from './GovernoMg.js';
import InstPrevMg from './InstPrevMg.js';
import InstPrevMiliMg from './InstPrevMiliMg.js';
import PoliciaMilitarMg from './PoliciaMilitarMg.js';
import BombeiroMg from './BombeiroMg.js';
import GovernoParana from './GovernoParana.js';
import GovernoSc from './GovernoSc.js';
import GovernoGo from './GovernoGo.js';

const convenio = document.getElementById('campo-convenio');
const btn = document.getElementById('btn-simular');

btn.addEventListener('click', () => {
    switch (convenio.value) {
        case 'INSS - PORTABILIDADE':
            Portabilidade.obterVerificacoesPortabilidade();
            break;

        case 'INSS - NOVO':
            InssNovo.obterVerificacoesInssNovo();
            break;

        case 'INSS - REFIN':
            const inssRefin = new InssRefin();
            inssRefin.obterVerificacoesInssRefin();
            break;

        case 'SIAPE - NOVO':
            SiapeNovo.obterVerificacoesSiapeNovo();
            break;

        case 'SIAPE - REFIN':
            const siapeRefin = new SiapeRefin();
            siapeRefin.obterVerificacoesSiapeRefin();
            break;

        case 'GOVERNO DE SÃO PAULO - NOVO / REFIN':
            GovernoSp.obterVerificacoesGovernoSp();
            break;

        case 'POLÍCIA MILITAR DE SP - NOVO / REFIN':
            const policiaMilitar = new PoliciaMilitar();
            policiaMilitar.obterVerificacoesPoliciaMilitar();
            break;

        case 'SPPREV - NOVO / REFIN':
            const spprevNovo = new SpprevNovo();
            spprevNovo.obterVerificacoesSpprevNovo();
            break;

        case 'TJ SP - NOVO / REFIN':
            const tjSp = new TjSp();
            tjSp.obterVerificacoesTjSp();
            break;

        case 'GOVERNO MATO GROSSO - NOVO / REFIN':
            const governoMt = new GovernoMt();
            governoMt.obterVerificacoesGovernoMt();
            break;

        case 'GOVERNO MATO GROSSO DO SUL - NOVO / REFIN':
            const governoMtSul = new GovernoMtSul();
            governoMtSul.obterVerificacoesGovernoMtSul();
            break;

        case 'GOVERNO MINAS GERAIS - NOVO / REFIN':
            const governoMg = new GovernoMg();
            governoMg.obterVerificacoesGovernoMg();
            break;

        case 'INST PREV SERV MG - NOVO / REFIN':
            const instPrevMg = new InstPrevMg();
            instPrevMg.obterVerificacoesInstPrevMg();
            break;
        case 'POLICIA MILITAR MG - NOVO / REFIN':
            const policiaMilitarMg = new PoliciaMilitarMg();
            policiaMilitarMg.obterVerificacoesPoliciaMilitarMg();
            break;

        case 'INST PREV SERV MILI MG - NOVO / REFIN':
            const instPrevMiliMg = new InstPrevMiliMg();
            instPrevMiliMg.obterVerificacoesInstPrevMiliMg();
            break;

        case 'CORPO DE BOMBEIRO MG - NOVO / REFIN': 
            const bombeiroMg = new BombeiroMg();
            bombeiroMg.obterVerificacoesBombeiroMg();
            break;

        case 'GOVERNO PARANA- NOVO / REFIN':
            const governoParana = new GovernoParana();
            governoParana.obterVerificacoesGovernoParana();
            break;

        case 'GOVERNO SANTA CATARINA - NOVO / REFIN':
            const governoSc = new GovernoSc();
            governoSc.obterVerificacoesGovernoSc();
            break;
        
        case 'GOVERNO GOÍAS - NOVO / REFIN':
            const governoGo = new GovernoGo();
            governoGo.obterVerificacoesGovernoGo();
            break;
        default:
            console.log('Error is not verifications');
    }
});