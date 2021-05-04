import InssNovo from './InssNovo.js';
import InssRefin from './InssRefin.js';
import SiapeNovo from './SiapeNovo.js';
import SiapeRefin from './SiapeRefin.js';
import PoliciaMilitar from './PoliciaMilitar.js';

const convenio = document.getElementById('campo-convenio');
const btn = document.getElementById('btn-simular');

btn.addEventListener('click', () => {
    switch (convenio.value) {
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

        case 'POLÍCIA MILITAR DE SP - NOVO / REFIN':
            const policiaMilitar = new PoliciaMilitar();
            policiaMilitar.obterVerificacoesPoliciaMilitar();
            break;

        default:
            console.log('Error is not verifications');
    }
});