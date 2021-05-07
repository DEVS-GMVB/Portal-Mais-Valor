class GovernoSp {
    obterVerificacoesGovernoSp(){
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
        if (dataDias > 29906) {
            btn_idade_sant.innerHTML = 
            `<button type="button" title="Terminar o contrato com (80 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_sant.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if (qtdParcelas > 96 || qtdParcelas  < 3){
            btn_parcelas_sant.innerHTML = 
            `<button type="button" title="PARCELA ACIMA DE 84X OU MENOR QUE 3X"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_sant.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo maximo
        if (valor > 200000) {
            btn_max_sant.innerHTML =
            `<button type="button" title="Saldo maximo maior que R$ 200000"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_sant.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo minimo
        if (valor < 300) {
            btn_min_sant.innerHTML = 
            `<button type="button" title="SALDO MINÍMO - R$ 300,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_min_sant.innerHTML =
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

         //BRADESCO ---------------------------------------------------------------------------------------------------------

         //Idade
        if (dataDias > 29176) {
            btn_idade_bradesco.innerHTML = 
            `<button type="button" title="Terminar o contrato com (79 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_bradesco.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if ((dataDias >= 6911 && dataDias < 25526) && qtdParcelas > 96){
            btn_parcelas_bradesco.innerHTML = 
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias > 25527 && dataDias < 27716) && qtdParcelas > 96){
            btn_parcelas_bradesco.innerHTML =
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 27717 & dataDias < 28081) && qtdParcelas > 48) {
            btn_parcelas_bradesco.innerHTML =
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28447 && dataDias < 28811) && qtdParcelas > 24) {
            btn_parcelas_bradesco.innerHTML =
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28812 && dataDias < 29176) && qtdParcelas > 12) {
            btn_parcelas_bradesco.innerHTML =
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_bradesco.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo Maximo
        if ((dataDias >= 6911 && dataDias < 25526) && valor > 250000) {
            btn_max_bradesco.innerHTML = 
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12 
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 25527 && dataDias < 27716) && valor > 100000){
            btn_max_bradesco.innerHTML = 
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12 
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 27717 && dataDias < 29176) && valor > 10000) {
            btn_max_bradesco.innerHTML = 
            `<button type="button" title="DE 18 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 
            DE 70 A 75 ANOS 11 MESES E 29 DIAS R$ 100.000,00 MAX PARC 96
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX  PARC 12 
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_bradesco.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo minimo
        if (valor < 30){
            btn_min_bradesco.innerHTML = 
            `<button type="button" title="SALDO MINÍMO - R$ 30 - PARCELA"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_min_bradesco.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //OLE ---------------------------------------------------------------------------------------------------------

        //Idade
        if (dataDias > 27351) {
            btn_idade_ole.innerHTML =
            `<button type="button" title="Terminar o contrato com (74 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_ole = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade Parcelas
        if (qtdParcelas > 96) {
            btn_parcelas_ole.innerHTML = 
            `<button type="button" title="Maior que 96 parcelas"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_ole.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo Maxinmo
        if ((dataDias >= 6911 && dataDias < 24796) && valor > 230000) {
            btn_max_ole.innerHTML = 
            `<button type="button" title="De 18 a 67 anos e 11 meses R$ 230.000,00
            De 68 a 69 anos e 11 meses R$ 190.000,00
            De 70 a 70 anos e 11 meses R$ 150.000,00
            De 71 a 71 anos e 11 meses R$ 120.000,00
            De 72 a 74 anos e 11 meses R$   20.000,00                          
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 24797 && dataDias < 25526) && valor > 190000){
            btn_max_ole.innerHTML = 
            `<button type="button" title="De 18 a 67 anos e 11 meses R$ 230.000,00
            De 68 a 69 anos e 11 meses R$ 190.000,00
            De 70 a 70 anos e 11 meses R$ 150.000,00
            De 71 a 71 anos e 11 meses R$ 120.000,00
            De 72 a 74 anos e 11 meses R$   20.000,00                          
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 25527 && dataDias < 25891) && valor > 150000){
            btn_max_ole.innerHTML = 
            `<button type="button" title="De 18 a 67 anos e 11 meses R$ 230.000,00
            De 68 a 69 anos e 11 meses R$ 190.000,00
            De 70 a 70 anos e 11 meses R$ 150.000,00
            De 71 a 71 anos e 11 meses R$ 120.000,00
            De 72 a 74 anos e 11 meses R$   20.000,00                          
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 25892 && dataDias < 26256) && valor > 120000){
            btn_max_ole.innerHTML = 
            `<button type="button" title="De 18 a 67 anos e 11 meses R$ 230.000,00
            De 68 a 69 anos e 11 meses R$ 190.000,00
            De 70 a 70 anos e 11 meses R$ 150.000,00
            De 71 a 71 anos e 11 meses R$ 120.000,00
            De 72 a 74 anos e 11 meses R$   20.000,00                          
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 26257 && dataDias < 27351) && valor > 20000){
            btn_max_ole.innerHTML = 
            `<button type="button" title="De 18 a 67 anos e 11 meses R$ 230.000,00
            De 68 a 69 anos e 11 meses R$ 190.000,00
            De 70 a 70 anos e 11 meses R$ 150.000,00
            De 71 a 71 anos e 11 meses R$ 120.000,00
            De 72 a 74 anos e 11 meses R$   20.000,00                          
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_ole.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo minimo
        if (valor < 250) {
            btn_min_ole.innerHTML = 
            `<button type="button" title="SALDO MINÍMO - R$ 250,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_min_ole.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //PARANA ---------------------------------------------------------------------------------------------------------

        //Idade
        if (dataDias > 28811) {
            btn_idade_parana.innerHTML = 
            `<button type="button" title="Terminar o contrato com (96 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_parana.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if (qtdParcelas > 96 || qtdParcelas < 12) {
            btn_parcelas_parana.innerHTML = 
            `<button type="button" title="Maior que 96 parcelas ou menor que 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_parana.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo maximo
        if ((dataDias >= 6911 && dataDias < 28446) && valor > 200000) {
            btn_max_parana.innerHTML =
            `<button type="button" title="DE 18 A 77 ANOS 11 MESES E 29 DIAS R$ 200.000,00 MAX PARC: 96"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_parana.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo minimo
        if (valor < 1) {
            btn_min_parana.innerHTML =
            `<button type="button" title="SALDO MINÍMO - R$ 1,00
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_min_parana.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //PAN ---------------------------------------------------------------------------------------------------------

        //Idade
        if (dataDias > 29176) {
            btn_idade_pan.innerHTML = 
            `<button type="button"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_pan.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if ((dataDias >= 6911 && dataDias < 25526) && qtdParcelas > 96) {
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 25527 && dataDias < 26986) && qtdParcelas > 84){
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 26987 && dataDias < 27351) && qtdParcelas > 72){
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if((dataDias >= 27352 && dataDias < 27716) && qtdParcelas > 60){
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if((dataDias >= 27717 && dataDias < 28081) && qtdParcelas > 48){
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28082 && dataDias < 28446) && qtdParcelas > 36){
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28447 && dataDias < 28811) && qtdParcelas > 24){ 
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28812 && dataDias < 29176) && qtdParcelas > 12){ 
            btn_parcelas_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_pan.innerHTML =
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }
        
        //Saldo maximo
        if ((dataDias >= 6911 && dataDias < 25526) && valor > 250000) {
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 25527 && dataDias < 26986) && valor > 70000){
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 26987 && dataDias < 27351) && valor > 70000){
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 27352 && dataDias < 27716) && valor > 50000){
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 27717 && dataDias < 28081) && valor > 40000){
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28082 && dataDias < 28446) && valor > 30000) {
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28447 && dataDias < 28811) && valor > 20000) {
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((dataDias >= 28812 && dataDias < 29176) && valor > 10000) {
            btn_max_pan.innerHTML = 
            `<button type="button" title="DE 22 A 69 ANOS 11 MESES E 29 DIAS R$ 250.000,00 MAX PARC 96
            DE 70 A 73 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 84
            DE 74 A 74 ANOS 11 MESES E 29 DIAS R$ 70.000,00 MAX PARC 72
            DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 50.000,00 MAX PARC 60
            DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 40.000,00 MAX PARC 48
            DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC 36
            DE 78 A 78 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC 24
            DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 10.000,00 MAX PARC 12
            "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_pan.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo minimo
        if (valor < 200) {
            btn_min_pan.innerHTML =
            `<button type="button" title="SALDO MINÍMO - R$ 200"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_min_pan.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //DAYCOVAL ---------------------------------------------------------------------------------------------------------
        
        //Idade
        if (dataDias > 27351) {
            btn_idade_daycoval.innerHTML = 
            `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_daycoval.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if (qtdParcelas > 96) {
            btn_parcelas_daycoval.innerHTML = 
            `<button type="button" title="Maior que 84 parcelas"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_daycoval.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Saldo maximo
        if ((dataDias >= 7642 && dataDias < 25891) && valor > 250000){
            btn_max_daycoval.innerHTML = 
            `<button type="button" title="DE 21  A 69 ANOS 11 MESES E 29 DIAS  R$ 250.000,00 DE 70 A 74 ANOS 11 MESES E 29 DIAS R$ 75.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        }else if ((dataDias >= 25892 && dataDias < 27351) && valor > 75000){
            btn_max_daycoval.innerHTML = 
            `<button type="button" title="DE 21  A 69 ANOS 11 MESES E 29 DIAS  R$ 250.000,00 DE 70 A 74 ANOS 11 MESES E 29 DIAS R$ 75.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_daycoval.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //BB ---------------------------------------------------------------------------------------------------------
        
        //Idade
        if (dataDias > 29541) {
            btn_idade_bb.innerHTML = 
            `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_bb.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if (qtdParcelas > 96 || qtdParcelas < 2) {
            btn_parcelas_bb.innerHTML = 
            `<button type="button" title="Maior que 84 parcelas ou menor que 2"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_bb.innerHTML = 
            `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
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

export default new GovernoSp();