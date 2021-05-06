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
import GovernoAcre from './GovernoAcre.js';
import GovernoBahia from './GovernoBahia.js';
import Exercito from './Exercito.js';
import Aeronautica from './Aeronautica.js';
import Marinha from './Marinha.js';
import TribunalDf from './TribunalDf.js';
import TribunalJstiçaPara from './TribunalJustiçaPara.js';
import Trt1 from './Trt1.js';
import Aspara from './Aspara.js';
import SuperiorTj from './SuperiorTj.js';
import SenadoFederal from './SenadoFederal.js';
import CamaraDeputado from './CamaraDeputado.js';
import PrefeituraSA from './PrefeituraSA.js';
import PrefeituraCuritiba from './PrefeituraCuritiba.js';
import PrefeituraPiracicaba from './PrefeituraPiracicaba.js';
import PrefeituraRJ from './PrefeituraRJ.js';
import PrefeituraCampoGrande from './PrefeituraCampoGrande.js';
import PrefeituraSBC from './PrefeituraSBC.js';
import PrefeituraRegistro from './PrefeituraRegistro.js';
import PrefeituraGuaruja from './PrefeituraGuaruja.js';
import PrefeituraSP from './PrefeituraSP.js';
import IpremSp from './IpremSp.js';
import PrefeituraManaus from './PrefeituraManaus.js';
import PrefeituraBarueri from './PrefeituraBarueri.js';
import PrefeituraTaboao from './PrefeituraTaboao.js';
import PrefeituraItanhaem from './PrefeituraItanhaem.js';
import PrefeituraBh from './PrefeituraBh.js';
import PrefeituraPg from './PrefeituraPg.js';
import PrefeituraCaraguatatuba from './PrefeituraCaraguatatuba.js';
import PrefeituraFerrazV from './PrefeituraFerrazV.js';

const convenio = document.getElementById('campo-convenio');
const btn = document.getElementById('btn-simular');

btn.addEventListener('click', () => {
    if (convenio.value === 'INSS - PORTABILIDADE') {
        Portabilidade.obterVerificacoesPortabilidade();
    } else if (convenio.value === 'INSS - NOVO') {
        InssNovo.obterVerificacoesInssNovo();
    } else if (convenio.value === 'INSS - REFIN') {
        const inssRefin = new InssRefin();
        inssRefin.obterVerificacoesInssRefin();
    } else if (convenio.value === 'SIAPE - NOVO') {
        SiapeNovo.obterVerificacoesSiapeNovo();
    } else if (convenio.value === 'SIAPE - REFIN') {
        const siapeRefin = new SiapeRefin();
        siapeRefin.obterVerificacoesSiapeRefin();
    } else if (convenio.value === 'GOVERNO DE SÃO PAULO - NOVO / REFIN') {
        GovernoSp.obterVerificacoesGovernoSp();
    } else if (convenio.value === 'POLÍCIA MILITAR DE SP - NOVO / REFIN') {
        const policiaMilitar = new PoliciaMilitar();
        policiaMilitar.obterVerificacoesPoliciaMilitar();
    } else if (convenio.value === 'SPPREV - NOVO / REFIN') {
        const sppreNovo = new SpprevNovo();
        sppreNovo.obterVerificacoesSpprevNovo();
    } else if (convenio.value === 'TJ SP - NOVO / REFIN') {
        const tjSp = new TjSp();
        tjSp.obterVerificacoesTjSp();
    } else if (convenio.value === 'GOVERNO MATO GROSSO - NOVO / REFIN') {
        const governoMt = new GovernoMt();
        governoMt.obterVerificacoesGovernoMt();
    } else if (convenio.value === 'GOVERNO MATO GROSSO DO SUL - NOVO / REFIN') {
        const governoMtSul = new GovernoMtSul();
        governoMtSul.obterVerificacoesGovernoMtSul();
    } else if (convenio.value === 'GOVERNO MINAS GERAIS - NOVO / REFIN') {
        const governoMg = new GovernoMg();
        governoMg.obterVerificacoesGovernoMg();
    } else if (convenio.value === 'INST PREV SERV MG - NOVO / REFIN') {
        const instPrevMg = new InstPrevMg();
        instPrevMg.obterVerificacoesInstPrevMg();
    } else if (convenio.value === 'POLICIA MILITAR MG - NOVO / REFIN') {
        const policiaMilitarMg = new PoliciaMilitarMg();
        policiaMilitarMg.obterVerificacoesPoliciaMilitarMg();
    } else if (convenio.value === 'INST PREV SERV MILI MG - NOVO / REFIN') {
        const instPrevMiliMg = new InstPrevMiliMg();
        instPrevMiliMg.obterVerificacoesInstPrevMiliMg();
    } else if (convenio.value === 'CORPO DE BOMBEIRO MG - NOVO / REFIN') {
        const bombeiroMg = new BombeiroMg();
        bombeiroMg.obterVerificacoesBombeiroMg();
    } else if (convenio.value === 'GOVERNO PARANA- NOVO / REFIN') {
        const governoParana = new GovernoParana();
        governoParana.obterVerificacoesGovernoParana();
    } else if (convenio.value === 'GOVERNO SANTA CATARINA - NOVO / REFIN') {
        const governoSc = new GovernoSc();
        governoSc.obterVerificacoesGovernoSc();
    } else if (convenio.value === 'GOVERNO GOÍAS - NOVO / REFIN') {
        const governoGo = new GovernoGo();
        governoGo.obterVerificacoesGovernoGo();
    } else if (convenio.value === 'GOVERNO ACRE - NOVO / REFIN') {
        const governoAcre = new GovernoAcre();
        governoAcre.obterVerificacoesGovernoAcre();
    } else if (convenio.value === 'GOVERNO BAHIA - NOVO / REFIN') {
        const governoBahia = new GovernoBahia();
        governoBahia.obterVerificacoesGovernoBahia();
    } else if (convenio.value === 'EXERCITO - NOVO / REFIN') {
        const exercito = new Exercito();
        exercito.obterVerificacoesExercito();
    } else if (convenio.value === 'AERONAUTICA - NOVO / REFIN') {
        const aeronautica = new Aeronautica();
        aeronautica.obterVerificacoesAeronautica();
    } else if (convenio.value === 'MARINHA - NOVO / REFIN') {
        const marinha = new Marinha();
        marinha.obterVerificacoesMarinha();
    } else if (convenio.value === 'TRIBUNAL JUSTIÇA DF - NOVO / REFIN') {
        const tribunalDf = new TribunalDf();
        tribunalDf.obterVerificacoesTribunalDf();
    } else if (convenio.value === 'TRIBUNAL JUSTIÇA PARÁ - NOVO / REFIN') {
        const tjPara = new TribunalJstiçaPara();
        tjPara.obterVerificacoesTJPara();
    } else if (convenio.value === 'TRT - 1ª REGIÃO - NOVO / REFIN') {
        const trt1 = new Trt1();
        trt1.obterVerificacoesTrt1();
    } else if (convenio.value === 'ASSEMBLÉIA LEGISLATIVA PARÁ - NOVO / REFIN') {
        const aspara = new Aspara();
        aspara.obterVerificacoesAspara();
    } else if (convenio.value === 'SUPERIOR TJ - NOVO / REFIN') {
        const superiorTj = new SuperiorTj();
        superiorTj.obterVerificacoesSuperiorTj();
    } else if (convenio.value === 'SENADO FEDERAL - NOVO / REFIN') {
        const senadoFederal = new SenadoFederal();
        senadoFederal.obterVerificacoesSenadoFederal();
    } else if (convenio.value === 'CAMARA DOS DEPUTADOS - NOVO / REFIN') {
        const camaraDeputado = new CamaraDeputado();
        camaraDeputado.obterVerificacoesCamaraDeputado();
    } else if (convenio.value === 'PREFEITURA SANTO ANDRÉ - NOVO / REFIN') {
        const prefeituraSA = new PrefeituraSA();
        prefeituraSA.obterVerificacoesPrefeituraSA();
    } else if (convenio.value === 'PREFEITURA CURITIBA - NOVO / REFIN') {
        const prefeituraCuritiba = new PrefeituraCuritiba();
        prefeituraCuritiba.obterVerificacoesPrefeituraCuritiba();
    } else if (convenio.value === 'PREFEITURA PIRACICABA - NOVO / REFIN') {
        const prefeituraPiracicaba = new PrefeituraPiracicaba();
        prefeituraPiracicaba.obterVerificacoesPrefeituraPiracicaba();
    } else if (convenio.value === 'PREFEITURA RIO DE JANEIRO - NOVO / REFIN') {
        const prefeituraRj = new PrefeituraRJ();
        prefeituraRj.obterVerificacoesPrefeituraRJ();
    } else if (convenio.value === 'PREFEITURA CAMPO GRANDE - NOVO / REFIN') {
        const prefeituraCampoGrande = new PrefeituraCampoGrande();
        prefeituraCampoGrande.obterVerificacoesPrefeituraCampoGrande();
    } else if (convenio.value === 'PREFEITURA SÃO BERNARDO DO CAMPO - NOVO / REFIN') {
        const prefeituraSBC = new PrefeituraSBC();
        prefeituraSBC.obterVerificacoesPrefeituraSBC();
    } else if (convenio.value === 'PREFEITURA REGISTRO - NOVO / REFIN') {
        const prefeituraRegistro = new PrefeituraRegistro();
        prefeituraRegistro.obterVerificacoesPrefeituraRegistro();
    } else if (convenio.value === 'PREFEITURA GUARUJÁ - NOVO / REFIN') {
        const prefeituraGuaruja = new PrefeituraGuaruja();
        prefeituraGuaruja.obterVerificacoesPrefeituraGuaruja();
    } else if (convenio.value === 'PREFEITURA SÃO PAULO - NOVO / REFIN') {
        const prefeituraSP = new PrefeituraSP();
        prefeituraSP.obterVerificacoesPrefeituraSP();
    } else if (convenio.value === 'IPREM SÃO PAULO - NOVO / REFIN') {
        const ipremSp = new IpremSp();
        ipremSp.obterVerificacoesIpremSp();
    } else if (convenio.value === 'PREFEITURA MANAUS - NOVO / REFIN') {
        const prefeituraManaus = new PrefeituraManaus();
        prefeituraManaus.obterVerificacoesPrefeituraManaus();
    } else if (convenio.value === 'PREFEITURA BARUERI - NOVO / REFIN') {
        const prefeituraBarueri = new PrefeituraBarueri();
        prefeituraBarueri.obterVerificacoesPrefeituraBarueri();
    } else if (convenio.value === 'PREFEITURA TABOÃO DA SERRA - NOVO / REFIN') {
        const prefeituraTaboao = new PrefeituraTaboao();
        prefeituraTaboao.obterVerificacoesPrefeituraTaboao();
    } else if (convenio.value === 'PREFEITURA ITANHAÉM - NOVO / REFIN') {
        const prefeituraItanhaem = new PrefeituraItanhaem();
        prefeituraItanhaem.obterVerificacoesPrefeituraItanhaem();
    } else if (convenio.value === 'PREFEITURA BELO HORIZONTE - NOVO / REFIN') {
        const prefeituraBh = new PrefeituraBh();
        prefeituraBh.obterVerificacoesPrefeituraBh();
    } else if (convenio.value === 'PREFEITURA PRAIA GRANDE - NOVO / REFIN') {
        const prefeituraPg = new PrefeituraPg();
        prefeituraPg.obterVerificacoesPrefeituraPg();
    } else if (convenio.value === 'PREFEITURA CARAGUATATUBA - NOVO / REFIN') {
        const prefeituraCaraguatatuba = new PrefeituraCaraguatatuba();
        prefeituraCaraguatatuba.obterVerificacoesPrefeituraCaraguatatuba();
    } else if (convenio.value === 'PREFEITURA FERRAZ DE VASCONCELOS - NOVO / REFIN') {
        const prefeituraFerrazV = new PrefeituraFerrazV();
        prefeituraFerrazV.obterVerificacoesPrefeituraFerrazV();
    }
});