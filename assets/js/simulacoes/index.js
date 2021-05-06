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
import GovernoAcre from './GovernoAcre.js';
import GovernoBahia from './GovernoBahia.js';
import Exercito from './Exercito.js';
import Aeronautica from './Aeronautica.js';
import Marinha from './Marinha.js';
import TribunalDf from './TribunalDf.js';
import TribunalJustiçaPara from './TribunalJustiçaPara.js';
import Trt1 from './Trt1.js';
import Aspara from './Aspara.js';
import SenadoFederal from './SenadoFederal.js';
import CamaraDeputado from './CamaraDeputado.js';
import PrefeituraSA from './PrefeituraSA.js';
import PrefeituraCuritiba from './PrefeituraCuritiba.js';
import PrefeituraRJ from './PrefeituraRJ.js';
import PrefeituraCampoGrande from './PrefeituraCampoGrande.js';
import SuperiorTJ from './SuperiorTj.js';
import PrefeituraPiracicaba from './PrefeituraPiracicaba.js';
import PrefeituraRegistro from './PrefeituraRegistro.js';
import PrefeituraGuaruja from './PrefeituraGuaruja.js';
import PrefeituraSp from './PrefeituraSP.js';
import IpremSp from './IpremSp.js';
import PrefeituraManaus from './PrefeituraManaus.js';
import PrefeituraBarueri from './PrefeituraBarueri.js';
import PrefeituraItanhaem from './PrefeituraItanhaem.js';
import PrefeituraBh from './PrefeituraBh.js';
import PrefeituraPg from './PrefeituraPg.js';
import PrefeituraCaraguatatuba from './PrefeituraCaraguatatuba.js';
import PrefeituraTaboao from './PrefeituraTaboao.js';
import PrefeituraSBC from './PrefeituraSBC.js';
import PrefeituraFerrazV from './PrefeituraFerrazV.js';

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

        case 'GOVERNO ACRE - NOVO / REFIN':
            const governoAcre = new GovernoAcre();
            governoAcre.obterVerificacoesGovernoBahia();
            break;

        case 'GOVERNO BAHIA - NOVO / REFIN':
            const governoBahia = new GovernoBahia();
            governoBahia.obterVerificacoesGovernoBahia();
            break;

        case 'EXERCITO - NOVO / REFIN': 
            const exercito = new Exercito();
            exercito.obterVerificacoesExercito();
            break;

        case 'AERONAUTICA - NOVO / REFIN':
            const aeronautica = new Aeronautica();
            aeronautica.obterVerificacoesAeronautica();
            break;

        case 'MARINHA - NOVO / REFIN':
            const marinha = new Marinha();
            marinha.obterVerificacoesMarinha();
            break;

        case 'TRIBUNAL JUSTIÇA DF - NOVO / REFIN':
            const tribunalDf = new TribunalDf();
            tribunalDf.obterVerificacoesTribunalDf();
            break;
        case 'TRIBUNAL JUSTIÇA PARÁ - NOVO / REFIN':
            const tribunalJusticaPara = new TribunalJustiçaPara();
            tribunalJusticaPara.obterVerificacoesTJPara();
            break;

        case 'TRT - 1ª REGIÃO - NOVO / REFIN':
            const trt1 = new Trt1();
            trt1.obterVerificacoesTrt1();
            break;

        case 'ASSEMBLÉIA LEGISLATIVA PARÁ - NOVO / REFIN':
            const aspara = new Aspara();
            aspara.obterVerificacoesAspara();
            break;

        case 'SUPERIOR TJ - NOVO / REFIN':
            const superiorTj = new SuperiorTJ();
            superiorTj.obterVerificacoesSuperiorTj();
            break;

        case 'SENADO FEDERAL - NOVO / REFIN':
            const senadoFederal = new SenadoFederal();
            senadoFederal.obterVerificacoesSenadoFederal();
            break;

        case 'CAMARA DOS DEPUTADOS - NOVO / REFIN':
            const camaraDeputados = new CamaraDeputado();
            camaraDeputados.obterVerificacoesCamaraDeputado();
            break;

        case 'PREFEITURA SANTO ANDRÉ - NOVO / REFIN':
            const prefeituraSa = new PrefeituraSA(); 
            prefeituraSa.obterVerificacoesPrefeituraSA();
            break;

        case 'PREFEITURA CURITIBA - NOVO / REFIN':
            const prefeituraCuritiba = new PrefeituraCuritiba();
            prefeituraCuritiba.obterVerificacoesPrefeituraCuritiba();
            break;

        case 'PREFEITURA PIRACICABA - NOVO / REFIN':
            const prefeituraPiracicaba = new PrefeituraPiracicaba();
            prefeituraPiracicaba.obterVerificacoesPrefeituraPiracicaba();
            break;
        
        case 'PREFEITURA RIO DE JANEIRO - NOVO / REFIN': 
            const prefeituraRj = new PrefeituraRJ();
            prefeituraRj.obterVerificacoesPrefeituraRJ();
            break;

        case 'PREFEITURA CAMPO GRANDE - NOVO / REFIN':
            const prefeituraCampoGrande = new PrefeituraCampoGrande();
            prefeituraCampoGrande.obterVerificacoesPrefeituraCampoGrande();
            break;

        case 'PREFEITURA SÃO BERNARDO DO CAMPO - NOVO / REFIN':
            const prefeituraSBC = new PrefeituraSBC();
            prefeituraSBC.obterVerificacoesPrefeituraSBC();
            break;

        case 'PREFEITURA REGISTRO - NOVO / REFIN':
            const prefeituraRegistro = new PrefeituraRegistro();
            prefeituraRegistro.obterVerificacoesPrefeituraRegistro();
            break;

        case 'PREFEITURA GUARUJÁ - NOVO / REFIN':
            const prefeituraGuaruja = new PrefeituraGuaruja();
            prefeituraGuaruja.obterVerificacoesPrefeituraGuaruja();
            break;
        
        case 'PREFEITURA SÃO PAULO - NOVO / REFIN':
            const prefeituraSp = new PrefeituraSp();
            prefeituraSp.obterVerificacoesPrefeituraSP();
            break;

        case 'IPREM SÃO PAULO - NOVO / REFIN':
            const ipremSp = new IpremSp();
            ipremSp.obterVerificacoesIpremSp();
            break;
        
        case 'PREFEITURA MANAUS - NOVO / REFIN':
            const prefeituraManaus = new PrefeituraManaus();
            prefeituraManaus.obterVerificacoesPrefeituraManaus();
            break;

        case 'PREFEITURA BARUERI - NOVO / REFIN':
            const prefeituraBarueri = new PrefeituraBarueri();
            prefeituraBarueri.obterVerificacoesPrefeituraBarueri();
            break;
        
        case 'PREFEITURA TABOÃO DA SERRA - NOVO / REFIN':
            const prefeituraTaboao = new PrefeituraTaboao();
            prefeituraTaboao.obterVerificacoesPrefeituraTaboao();
            break;

        case 'PREFEITURA ITANHAÉM - NOVO / REFIN':
            const prefeituraItanhem = new PrefeituraItanhaem();
            prefeituraItanhem.obterVerificacoesPrefeituraItanhaem();
            break;

        case 'PREFEITURA BELO HORIZONTE - NOVO / REFIN':
            const prefeituraBh = new PrefeituraBh();
            prefeituraBh.obterVerificacoesPrefeituraBh();
            break;

        case 'PREFEITURA PRAIA GRANDE - NOVO / REFIN':
            const prefeituraPg = new PrefeituraPg();
            prefeituraPg.obterVerificacoesPrefeituraPg();
            break;

        case 'PREFEITURA CARAGUATATUBA - NOVO / REFIN':
            const prefeituraCaraguatatuna = new PrefeituraCaraguatatuba();
            prefeituraCaraguatatuna.obterVerificacoesPrefeituraCaraguatatuba();
            break;
        
        case 'PREFEITURA FERRAZ DE VASCONCELOS - NOVO / REFIN':
            const prefeituraFerrazV = new PrefeituraFerrazV();
            prefeituraFerrazV.obterVerificacoesPrefeituraFerrazV();
            break;
            
        default:
            console.log('Error is not verifications');
    }
});