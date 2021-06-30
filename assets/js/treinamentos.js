//TbodyDownload
const tbodyArquivosTreinamentos = document.getElementById("TBODY-ARQUIVOS-TREINAMENTOS");
const tbodyRoteiros = document.getElementById("TBODY-ROTEIROS-OPERACIONAIS");

function bradescoArquivosTreinamento() {
    tbodyArquivosTreinamentos.innerHTML =
        `
        <tr style="text-align: center;">
            <th><b>${('BRADESCO Simulador - Prefeitura de Sao Paulo - SP_V5').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO 4/BRADESCO Simulador - Prefeitura de Sao Paulo - SP_V5.xlsm" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-CANCELAMENTO-DE-PROPOSTAS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Formulario 6241-576E-bradesco').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 1/Formulario 6241-576E-bradesco.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>LIVE SIAPE</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 1/LIVE SIAPE .pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Manual SIAPE - Correspondentes').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 1/Manual SIAPE - Correspondentes.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-INSTRUÇÃO-OPERACIONAL-ESTADO DE-SÃO-PAULO" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>REGRAS DE RISCO</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 1/REGRAS DE RISCO.jpg" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-MANUAL-FORMALIZAÇÃO" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Simulador_INSS').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 1/Simulador_INSS (1).xlsm" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-ORIENTAÇÃO-PARA-CANCELAMENTOS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-word"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('COMO SOLICITAR - Painel Portabilidade').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 2/COMO SOLICITAR - Painel Portabilidade.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-ATIVIDADES-DE-CANCELAMENTO-DE-PROPOSTA" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Manual Painel de Portabilidade Correspondente').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO PARTE 2/Manual Painel de Portabilidade Correspondente.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-CARD-OFERTAS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>
    `
}

function bradescoArquivosRoteiros() {
    tbodyRoteiros.innerHTML =
        `
        <tr style="text-align: center;">
            <th><b>${('INSS Correspondente BRADESCO').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO 4/RO_INSS_Correspondente BRADESCO.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" 
                id="BTN-CORPO-DE-BOMBEIROS-MILITAR">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('PREF SP Correspondente').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO 4/RO_PREF_SP_Correspondente.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" 
                id="BTN-CORPO-DE-BOMBEIROS-MILITAR">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('PREF SP Correspondente').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO 4/RO_PREF_SP_Correspondente.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" 
                id="BTN-CORPO-DE-BOMBEIROS-MILITAR">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('PREF SP Correspondente').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/BRADESCO 4/RO_PREF_SP_Correspondente.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" 
                id="BTN-CORPO-DE-BOMBEIROS-MILITAR">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>
        
    `
}

function cetelemArquivosTreinamentos() {
    tbodyArquivosTreinamentos.innerHTML =
        `
        <tr style="text-align: center;">
            <th><b>${('Capacitação Consignado - Reapresentação').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/MATERIAL CETELEM/Capacitacao Consignado - Reapresentacao(1).pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Fases Cetelem').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/MATERIAL CETELEM/Fases Cetelem (1) (2).pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Novo Modelo de Formalização Digital').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/MATERIAL CETELEM/Novo Modelo de Formalizacao Digital 05_05_20.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>
    `
}

function cetelemArquivosRoteiros() {
    tbodyRoteiros.innerHTML = ``;
}

function itauArquivosTreinamento() {
    tbodyArquivosTreinamentos.innerHTML =
        `
        <tr style="text-align: center;">
            <th><b>${('GUIA MT GOVERNO DO ESTADO DO MATO GROSSO_MT_20102020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/RES ITAU/GUIA_MT_GOVERNO DO ESTADO DO MATO GROSSO_MT_20102020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-CANCELAMENTO-DE-PROPOSTAS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('GUIA RJ PREFEIURA DE MACA RJ').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/RES ITAU/GUIA_RJ_PREFEIURA DE MACA_RJ.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('GUIA SP PREFEITURA DE SO PAULO SP3').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/RES ITAU/GUIA_SP_PREFEITURA DE SO PAULO_SP3.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('GUIA SP PREFEITURA MUNICIPAL DE BARUERI - SP').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/RES ITAU/GUIA_SP_PREFEITURA MUNICIPAL DE BARUERI - SP.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>
    `
}

function itauArquivosRoteiros() {
    tbodyRoteiros.innerHTML = ``;
}

function paranaArquivosTreinamento() {
    tbodyArquivosTreinamentos.innerHTML =
        `
        <tr style="text-align: center;">
            <th><b>${('af CM aviso aos clientes a4 - pb consignado').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/af CM aviso aos clientes a4 - pb consignado.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-CANCELAMENTO-DE-PROPOSTAS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('af CM Quadro portabilidade copiar').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/af CM Quadro portabilidade copiar.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('af CM SAC').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/af CM SAC.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('af CM tabela pf copiar').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/af CM tabela pf copiar.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Cadastrando Novo Especial').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Cadastrando Novo Especial.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Cadastrando Refinanciamento Especial').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Cadastrando Refinanciamento Especial.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Cadastrando um Refinanciamento').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Cadastrando um Refinanciamento.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Cadastrando uma Portabilidade do SIAPE').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Cadastrando uma Portabilidade do SIAPE.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Cadastrando uma Portabilidade').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Cadastrando uma Portabilidade.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Guia Escola Comercial PB Consignado').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Guia Escola Comercial PB Consignado.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Mapa de Conteúdos').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Mapa de Conteudos.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Roteiro Operacional Simplificado - Convênios').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/PARANA/Roteiro Operacional Simplificado - Convenios.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>
    `
}

function paranaRoteiros() {
    tbodyRoteiros.innerHTML = ``;
}

function safraArquivosTreinamentos() {
    tbodyArquivosTreinamentos.innerHTML =
        `
        <tr style="text-align: center;">
            <th><b>${('SAFRA - Novas regras de parcelas pagas para portabilidade').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA REGRAS/SAFRA - Novas regras de parcelas pagas para portabilidade.docx" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-CANCELAMENTO-DE-PROPOSTAS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('SAFRA Manual WEB2.0 setembro2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA REGRAS/SAFRA Manual_WEB2.0_setembro2020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b>${('Treinamentos Status Rec Exp Can').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA REGRAS/Treinamentos_Status_Rec_Exp_Can.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-SIMULADOR-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

    `
}

function safraArquivosRoteiros() {
    tbodyRoteiros.innerHTML = 
    `
        <tr style="text-align: center;">
            <th><b>${('SAFRA AERONAUTICA EXTERNO 01 09 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA AERONAUTICA_RO EXTERNO 01_09_2020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-CANCELAMENTO-DE-PROPOSTAS" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA GOV BA EXTERNO 25 09 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA GOV BA RO EXTERNO 25_09_2020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA GOV GO INTERNO 04 09 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA GOV GO RO INTERNO 04_09_2020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA GOV PR ROTEIRO EXTERNO 14 09 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA GOV PR ROTEIRO EXTERNO 14_09_2020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA INSS EXTERNO 15 09 20').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA INSS_RO EXTERNO_15_09_20.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('safra PREF CAMPINAS INTERNO 04 08 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/safra PREF CAMPINAS RO INTERNO 04_08_2020 (1).pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA Resumo gov go 21 09').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA Resumo RO gov go 21-09.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA EXTERNO CAMPREV SP 21 08 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA RO EXTERNO CAMPREV SP 21_08_2020.pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('SAFRA MARINHA EXTERNO 01 09 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/SAFRA RO MARINHA EXTERNO_01_09_2020 (1).pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

        <tr style="text-align: center;">
            <th><b> ${('safra MARINHA EXTERNO 01 09 2020').toUpperCase()}</b></th>
            <th scope="row">
                <a href="http://localhost:3000/user/treinamentos/SAFRA ROTEIROS/safra RO MARINHA EXTERNO_01_09_2020 (2).pdf" class="btn btn-sm btn-secondary btn-icon rounded-pill" id="BTN-COMO-CALCULAR-A-MARGEM-NO-GOV-SP" style="cursor: pointer; color:black;">
                    <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                    <span class="btn-inner--text">DOWNLOAD</span>
                </a>
            </th>
        </tr>

    `
}

function arquivosCrefisa() {
    tbodyArquivosTreinamentos.innerHTML =
        ``
}

function roteirosCrefisa() {
    tbodyRoteiros.innerHTML =
        `<tr style="text-align: center;">
    <th><b>PASSO A PASSO DE DIGITAÇÃO</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/ROTEIROS CREFISA/Passo a passo digitação banco crefisa (1).pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>INSS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/ROTEIROS CREFISA/ROTEIRO INSS CREFISA.docx">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>SIAPE </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/ROTEIROS CREFISA/ROTEIRO SIAPE CREFISA.docx">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>UPAGSS SIAPE </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/ROTEIROS CREFISA/UPAGS__SIAPE_20201116.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>
`
}

function arquivosOle() {
    tbodyArquivosTreinamentos.innerHTML =
        `<tr style="text-align: center;">
    <th><b>DEFINIÇÃO DOS STATUS PRINCIPAIS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/DEFINIÇÃO DOS STATUS PRINCIPAIS.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>ESTEIRA INVERTIDA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/ESTEIRA INVERTIDA.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL FEDERAL - ANEXO I </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/INSTRUÇÃO OPERACIONAL FEDERAL - ANEXO I.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL FEDERAL </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/INSTRUÇÃO OPERACIONAL FEDERAL.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL INSS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/INSTRUÇÃO OPERACIONAL INSS.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>ORIENTAÇÕES DE RISCO DO BANCO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/ORIENTAÇÕES RISCO BANCO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>ORIENTAÇÕES DE RISCO CORRESPONDENTE </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/ORIENTAÇÕES RISCO CORRESPONDENTE.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>TREINAMENTO DE RETENÇÃO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 1/TREINAMENTO RETENÇÃO.pptx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>DIGITAÇÃO DE PROPOSTAS DE EMPRÉSTIMO PARA ANDROID E IOS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 2/DIGITAÇÃO DE PROPOSTAS DE EMPRÉSTIMO- ANDROID E IOS.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>MANUAL DE ABERTURA DE CHAMADO VIA SSM - CORRESPONDENTE </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 2/Manual Abertura de Chamado Via SSM - Correspondente.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>NOVA PORTABILIDADE </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 2/NOVA PORTABILIDADE.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>FUNÇÃO DE RESET DE SENHA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 2/RESET DE SENHA FUNÇÃO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr> 
    
    <tr style="text-align: center;">
    <th><b>RESET DE SENHA DO PORTAL ORIENTA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 2/RESET DE SENHA PORTAL ORIENTA.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>IMAGEM </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/26279cdb-e460-4e9f-a435-d231747f8977.jpg">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>VENDA DIGITAL PADRÃO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/CONVENIOS_VendaDigital_Padrao.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>EQUIPE DE GERENTES COMERCIAIS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/Equipe Gerentes Comerciais.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL DE CARTÃO - ESTADO DE SÃO PAULO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/INSTRUÇÃO OPERACIONAL CARTÃO - ESTADO DE SÃO PAULO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL DE EMPRESTIMO - ESTADO DO MATO GROSSO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/INSTRUÇÃO OPERACIONAL EMPRESTIMO - ESTADO DO MATO GROSSO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL DO ESTADO DE SÃO PAULO 1 </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/INSTRUÇÃO OPERACIONAL ESTADO DE SÃO PAULO (1).pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL DO ESTADO DE SÃO PAULO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/INSTRUÇÃO OPERACIONAL ESTADO DE SÃO PAULO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL DE INSS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/INSTRUÇÃO OPERACIONAL INSS OLÉ.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    
    <tr style="text-align: center;">
    <th><b>SITES DE AVERBAÇÃO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/OLÉ PARTE 4/sites averbação ole.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    `
}

function roteiroOle() {
    tbodyRoteiros.innerHTML =
        ``
}


function arquivosPan(){
    tbodyArquivosTreinamentos.innerHTML = 
    `<tr style="text-align: center;">
    <th><b>CANCELAMENTO DE PROPOSTAS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/CancelamentoPropostasPan.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>CBM </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/CBM PAN.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>COMO CALCULAR A MARGEM NO GOV SP </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/Como Cálcular a Margem no GOV SP.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>COPIA DE SIMULADOR GOV SP </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/Cópia de Simulador_GOV. SP_Mai_2020_V13.xlsm">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>INSTRUÇÃO OPERACIONAL DO ESTADO DE SÃO PAULO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/INSTRUÇÃO OPERACIONAL ESTADO DE SÃO PAULO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>MANUAL DE FORMALIZAÇÃO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/MANUAL FORMALIZAÇÃO PAN.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>ORIENTAÇÃO PARA CANCELAMENTO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/Orientacao_para_cancelamento.docx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>ATIVIDADES DE CANCELAMENTO DE PROPOSTAS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN Atividades Cancelamento de Propostas.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>FORMALIZAÇÃO DIGITAL DE CONSIGNADO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN Formalizacao_digital_consignado_v4 - Manual (1).pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>MANUAL CARD DE OFERTAS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN Manual_Card_Ofertas.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>PORTABILIDADE DIGITAL </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN Portabilidade Digital.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>PÓS FORMALIZAÇÃO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN PÓS FORMALIZAÇÃO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>STATUS DE ESTEIRA QUE GERAM MAIS DÚVIDAS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/STATUS DE ESTEIRA QUE GERAM MAIS DÚVIDAS.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    `
}

function roteirosPan(){
    tbodyRoteiros.innerHTML = 
    `<tr style="text-align: center;">
    <th><b>PASSO A PASSO PANCRED</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN Passo a passo_RO PANCRED.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>AERONAUTICA EMPRESTIMO</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/PAN RO_AERONAUTICA_Emprestimo_03.01_V65.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>AERO</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/RO PAN AERO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>INISS</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/RO PAN INSS.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>SIAPE</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/RO SIAPE.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>GOVERNO MA. - EMPRESTIMO</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/RO_GOV.MA_Emprestimo_04.05_V47.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>GOVERNO SP. - EMPRESTIMO</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/RO_GOV.SP_Emprestimo_04.54_V37.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>SPPREV - EMPRESTIMO</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/MATERIAL BANCO PAN/RO_SPPREV_Emprestimo_04.58_V06.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>
`
}

function santanderArquivosTreinamentos(){
    tbodyArquivosTreinamentos.innerHTML =
    `<tr style="text-align: center;">
    <th><b>${('Biometria Facial - Convênios2').toUpperCase()}</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER 2/Biometria Facial - Convênios2.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>${('Calculadora de Portabilidade de Crédito v6.0 - Update').toUpperCase()}</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER 2/Calculadora de Portabilidade de Crédito_v6.0 - Update.xlsb">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>${('CÓDIGO DE CONDUTA DE CORRESPONDENTES').toUpperCase()}</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER 2/CÓDIGO DE CONDUTA DE CORRESPONDENTES.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>${('CONVÊNIO KROTON').toUpperCase()}</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER 2/CONVÊNIO KROTON.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>${('CONVÊNIO PRONIL').toUpperCase()}</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER 2/CONVÊNIO PRONIL.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>

<tr style="text-align: center;">
    <th><b>${('convenios especiais').toUpperCase()}</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER 2/convenios especiais.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
</tr>
    
    <tr style="text-align: center;">
    <th><b>BIOMETRIA FACIAL </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Biometria Facial - Convênios2.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>CONVÊNIO ESTADO DO ESPÍRITO SANTO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/CONVÊNIO ESTADO DO ESPÍRITO SANTO.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>CONVÊNIO KROTON </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/CONVÊNIO KROTON.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>CONVÊNIO PRONTIL </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/CONVÊNIO PRONIL.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>CONVÊNIOS ESPECIAIS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/convenios especiais.xlsx">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>PASSO A PASSO ACESSO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Passo a Passo Acesso - Santander.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>PASSO A PASSO DA RETENÇÃO AUTOMÁTICA - ESCRITÓRIOS 003</b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Passo a passo da Retenção Automática - Escritórios (003).pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>PASSO A PASSO DA RETENÇÃO AUTOMÁTICA - ESCRITÓRIOS </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Passo a passo da Retenção Automática Santander - Escritórios.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS CONSIGNADO PREVENTIVO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Consignado_Preventivo.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS CONSIGNADO PREVENTIVO AUDITORIA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Consignado_Preventivo_Auditoria.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS CONSIGNADO REFIN </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Consignado_Refin.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS CONSIGNADO REFIN AUDITORIA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Consignado_Refin_Auditoria.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS CONSIGNADO NOVO </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Contrato_Novo.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS CONSIGNADO NOVO AUDITORIA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Contrato_Novo_Auditoria.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS PEDIDO DE PORTABILIDADE AUDITORIA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Pedido de Portabilidade_Auditoria.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS PORTABILIDADE SALDO MAIOR </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Portabilidade Saldo Maior.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>

    <tr style="text-align: center;">
    <th><b>SCRIPT SMS PORTABILIDADE SALDO MAIOR AUDITORIA </b></th>
    <th scope="row">
        <a class="btn btn-sm btn-secondary btn-icon rounded-pill" style="color: black; cursor:pointer;"
        href="http://localhost:3000/user/treinamentos/SANTANDER1/Script SMS_Portabilidade Saldo Maior_Auditoria.pdf">
            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
            <span class="btn-inner--text">DOWNLOAD</span>
        </a>
    </th>
    </tr>
    `
}

function roteiroSantander() {
    tbodyRoteiros.innerHTML = ``;
}