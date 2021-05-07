class Portabilidade{
    obterVerificacoesPortabilidade(){
        //Campos
        let dtNascimento = document.getElementById('campo-data-nascimento');
        let qtdParcelas = parseInt(document.getElementById('campo-quantidade-parcelas').value);
        let valor = parseFloat(document.getElementById('campo-valor').value);

        const dataDias = this.dataDiff(dtNascimento.value);

        //Botões Santander
        let btn_idade_sant = document.getElementById('div-idade-santander');
        let btn_parcelas_sant = document.getElementById('btn-qtd-parcelas-santander');
        let btn_max_sant = document.getElementById('div-saldo-max-santander');
        let btn_min_sant = document.getElementById('div-saldo-min-santander');

         //Botoes Bradesco
         let btn_idade_bradesco = document.getElementById('div-idade-bradesco');
         let btn_parcelas_bradesco = document.getElementById('div-parcelas-bradesco');
         let btn_max_bradesco = document.getElementById('div-saldo-max-bradesco');
         let btn_min_bradesco = document.getElementById('div-saldo-min-bradesco');
 
         //Botoes Ole
         let btn_idade_ole = document.getElementById('div-idade-ole');
         let btn_parcelas_ole = document.getElementById('div-parcelas-ole');
         let btn_max_ole = document.getElementById('div-max-ole');
         let btn_min_ole = document.getElementById('div-min-ole');
 
         //Botões Paraná
         let btn_idade_parana = document.getElementById('div-idade-parana');
         let btn_parcelas_parana = document.getElementById('div-parcelas-parana');
         let btn_max_parana = document.getElementById('div-max-parana');
         let btn_min_parana = document.getElementById('div-min-parana');
 
         //Botoes PAN
         let btn_idade_pan = document.getElementById('div-idade-pan');
         let btn_parcelas_pan = document.getElementById('div-parcelas-pan');
         let btn_max_pan = document.getElementById('div-max-pan');
         let btn_min_pan = document.getElementById('div-min-pan');
 
         //Botões DayCoval
         let btn_idade_daycoval = document.getElementById('div-idade-daycoval');
         let btn_parcelas_daycoval = document.getElementById('div-parcelas-daycoval');
         let btn_max_daycoval = document.getElementById('div-max-daycoval');
 
         //Botões BB
         let btn_idade_bb = document.getElementById('div-idade-bancobrasil');
         let btn_parcelas_bb = document.getElementById('div-parcela-bancobrasil');

         //SANTANDER ---------------------------------------------------------------------------------------------------------

         //Idade
        if (dataDias + (qtdParcelas * 30) > 31440) {
            btn_idade_sant.innerHTML = 
            `
                <button type="button" title="Terminar o contrato com (85 anos 11 meses)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_idade_sant.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }  

        //Quantidade de parcelas
        if (qtdParcelas > 71){
            btn_parcelas_sant.innerHTML = 
            `
                <button type="button"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_parcelas_sant.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        //Saldo minimo
        if (valor < 1000) {
            btn_min_sant.innerHTML =
            `
                <button type="button" title="SALDO MINIMO - R$ 200,00"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_min_sant.innerHTML =` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }
        
        //Restrição a banco

        //BRADESCO ---------------------------------------------------------------------------------------------------------

        //Politica de idade
        if (dataDias + (qtdParcelas * 30) > 29979) {
            btn_idade_bradesco.innerHTML =
            `
                <button type="button" title="Homem  terminar com 77 anos -  Mulher  terminar com 80 anos "
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_idade_bradesco.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        /*//Quantidade de parcelas pagas
        if (qtdParcelas < 7) {
            btn_parcelas_bradesco.innerHTML = 
            `
                <button type="button"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_parcelas_bradesco.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }*/
        
        //Saldo minimo
        if (valor < 501){
            btn_min_bradesco.innerHTML = 
            `
                <button type="button" title="SALDO MINIMO - R$ 200,00"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_min_bradesco.innerHTML =` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        } 
        
        //Restrição banco

        //Saldo maximo
        if (dataDias < 6604) {
            `
            <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias > 27789){
            btn_max_bradesco.innerHTML = 
            `
            <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (valor > 70000){
            btn_max_bradesco.innerHTML = 
            `
            <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias < 22309) {
            btn_max_bradesco.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        } else if (dataDias >= 22310 && dataDias  < 24135 && valor > 60000) {
            btn_max_bradesco.innerHTML = 
            `
            <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias >= 24136 && dataDias < 25961 && valor > 50000) {
            btn_max_bradesco.innerHTML =
            `
            <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias >= 25962 && dataDias < 27788 && valor > 25000) {
            btn_max_bradesco.innerHTML =
            `
            <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_max_bradesco.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        //OLE ---------------------------------------------------------------------------------------------------------

        //Idade
        if (dataDias + (valor * 30) > 29614) {
            btn_idade_ole.innerHTML = 
            `
                <button type="button" title="Terminar o contrato com (85 anos 11 meses)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_idade_ole.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        //Quantidade de parcelas pagas 
        
        //Saldo minimo
        if (valor < 300) {
            btn_min_ole.innerHTML = 
            `
                <button type="button" title="SALDO MINIMO - R$ 200,00"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else {
            btn_min_ole.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        //Restrição a bancos

        //Saldo maximo
        if (dataDias < 9525) {
            btn_max_ole.innerHTML =
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill" >
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias > 29614){
            btn_max_ole.innerHTML = 
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (valor > 85000){
            btn_max_ole.innerHTML = 
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias < 25232){
            btn_max_ole.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        } else if (dataDias >= 25233 && dataDias < 26692 && valor > 70000) {
            btn_max_ole.innerHTML = 
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias >= 26693 && dataDias < 27788 && valor > 30000){
            btn_max_ole.innerHTML = 
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias >= 27789 && dataDias < 28518 && valor > 15000){
            btn_max_ole.innerHTML = 
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else if (dataDias >= 28519 && dataDias < 29614 && valor > 15000){
            btn_max_ole.innerHTML = 
            `
                <button type="button" title="Homem de 26 anos a 70 anos (80 mil ) - de 70 anos + 1 mês 71 anos ( 60 mil) / Mulher  de 24 anos a 70 anos ( 80 mil) - de 70 anos + 1 mês até 74 anos ( 60mil)"
                class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                    <span class="btn-inner--icon"><i
                    class="fas fa-times"></i></span>
                    <span class="btn-inner--text">NEGADO</span>
                </button>
            `
        } else{
            btn_max_ole.innerHTML = ` 
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }      
    }

    dataDiff(nascimento) {
        const DATA_ATUAL = new Date().toLocaleDateString();
    
        const DIAS_ATUAIS = parseInt(DATA_ATUAL.substring(0, 2));
        const MES_DIAS_ATUAIS = parseInt(DATA_ATUAL.substring(3, 5));
        const ANOS_DIAS_ATUAIS = parseInt(DATA_ATUAL.substring(6, 10));
    
        const DIAS_NASCIMENTO_ATUAIS = parseInt(nascimento.substring(0, 2));
        const MES_NASCIMENTO_ATUAIS = parseInt(nascimento.substring(3, 5));
        const ANOS_NASCIMENTO_ATUAIS = parseInt(nascimento.substring(6, 10));
    
        const DIAS_TOTAL_ATUAIS = DIAS_ATUAIS + (MES_DIAS_ATUAIS * 30) + (ANOS_DIAS_ATUAIS * 365);
        const DIAS_TOTAL_NASCIMENTO = DIAS_NASCIMENTO_ATUAIS + (MES_NASCIMENTO_ATUAIS * 30) + (ANOS_NASCIMENTO_ATUAIS * 365);
    
        const DIFF_DATE = DIAS_TOTAL_ATUAIS - DIAS_TOTAL_NASCIMENTO;
    
        return parseInt(DIFF_DATE);
    };

}

export default new Portabilidade();