class InssRefin {
    #dataDias = this.dataDiff();
    #valor = parseFloat(document.getElementById('campo-valor').value);
    #qtdParcelas = parseInt(document.getElementById('campo-quantidade-parcelas').value);

    obterVerificacoesInssRefin() {
        //Botões Santander
        const btn_idade_sant = document.getElementById('div-idade-santander');
        const btn_parcelas_sant = document.getElementById('btn-qtd-parcelas-santander');
        const btn_max_sant = document.getElementById('div-saldo-max-santander');
        const btn_min_sant = document.getElementById('div-saldo-min-santander');

        //Botoes Bradesco
        const btn_idade_bradesco = document.getElementById('div-idade-bradesco');
        const btn_parcelas_bradesco = document.getElementById('div-parcelas-bradesco');
        const btn_max_bradesco = document.getElementById('div-saldo-max-bradesco');
        const btn_min_bradesco = document.getElementById('div-saldo-min-bradesco');

        //Botoes Ole
        const btn_idade_ole = document.getElementById('div-idade-ole');
        const btn_parcelas_ole = document.getElementById('div-parcelas-ole');
        const btn_max_ole = document.getElementById('div-max-ole');
        const btn_min_ole = document.getElementById('div-min-ole');

        //Botões Paraná
        const btn_idade_parana = document.getElementById('div-idade-parana');
        const btn_parcelas_parana = document.getElementById('div-parcelas-parana');
        const btn_max_parana = document.getElementById('div-max-parana');
        const btn_min_parana = document.getElementById('div-min-parana');

        //Botões DayCoval
        const btn_idade_daycoval = document.getElementById('div-idade-daycoval');
        const btn_parcelas_daycoval = document.getElementById('div-parcelas-daycoval');
        const btn_max_daycoval = document.getElementById('div-max-daycoval');
        const btn_min_daycoval = document.getElementById('div-min-daycoval');

        //Botões BB
        const btn_idade_bb = document.getElementById('div-idade-bancobrasil');
        const btn_parcelas_bb = document.getElementById('div-parcela-bancobrasil');
        const btn_max_bb = document.getElementById('div-max-bancobrasil');
        const btn_min_bb = document.getElementById('div-min-bancobrasil');

        //Botoes PAN
        const btn_idade_pan = document.getElementById('div-idade-pan');
        const btn_parcelas_pan = document.getElementById('div-parcelas-pan');
        const btn_max_pan = document.getElementById('div-max-pan');
        const btn_min_pan = document.getElementById('div-min-pan');

        //Politica de Idade
        if(this.#dataDias > 29579) {
            btn_idade_sant.innerHTML =
            `
                <button type="button" title="Terminar o contrato com (80 ANOS 11 MESES 29 DIAS)"
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

        //Quantidade parcelas
        if (this.#qtdParcelas.value > 84 || this.#qtdParcelas.value < 3) {
            btn_parcelas_sant.innerHTML =
                `
            <button type="button" title="PARCELA ACIMA DE 84X OU MENOR QUE 3X"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_sant.innerHTML =
            `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        if(this.#valor > 200000) {
            btn_max_sant.innerHTML = 
            `
            <button type="button" title="SALDO MAXIMO MAIOR QUE 200000"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>
            `
        } else {
            btn_max_sant.innerHTML =
            `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        if(this.#valor < 300) {
            btn_min_sant.innerHTML = 
            `
            <button type="button" title="SALDO MINíMO - R$ 300,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>
            `
        } else {
            btn_min_sant.innerHTML = 
            `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITA</span>
            </button>
            `
        }

        // Bradesco

        //Idade
        if (this.#dataDias > 27375) {
            btn_idade_bradesco.innerHTML =
                `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
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

        //Quantidade parcelas
        if (this.#qtdParcelas > 84) {
            btn_parcelas_bradesco.innerHTML =
                `<button type="button" title="Maior que 84 parcelas"
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

        //Saldo maximo
        if ((this.#dataDias >= 6570 && this.#dataDias < 22241) && this.#valor > 70000) {
            btn_max_bradesco.innerHTML =
                `<button type="button" title="De 18 anos a 60 anos 11 meses 29 dias 
                R$ 70.000,00 - MAX PARC: 84 meses
                
                De 61 anos a 65 anos 11 meses 29 dias 
                R$ 60.000,00 - MAX PARC: 84 meses
                
                De 66 anos a 70 anos 11 meses 29 dias 
                R$ 50.000,00 - MAX PARC: 84 meses
                
                De 71 anos a 75 anos 11 meses 29 dias 
                R$ 25.000,00 - MAX PARC: 84 meses"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 22242 && this.#dataDias < 24066) && this.#valor > 60000) {
            btn_max_bradesco.innerHTML =
            `<button type="button" title="De 18 anos a 60 anos 11 meses 29 dias 
            R$ 70.000,00 - MAX PARC: 84 meses
            
            De 61 anos a 65 anos 11 meses 29 dias 
            R$ 60.000,00 - MAX PARC: 84 meses
            
            De 66 anos a 70 anos 11 meses 29 dias 
            R$ 50.000,00 - MAX PARC: 84 meses
            
            De 71 anos a 75 anos 11 meses 29 dias 
            R$ 25.000,00 - MAX PARC: 84 meses"
        class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
        </button>`
        } else if ((this.#dataDias >= 24067 && this.#dataDias < 25891) && this.#valor > 50000) {
            btn_max_bradesco.innerHTML =
            `<button type="button" title="De 18 anos a 60 anos 11 meses 29 dias 
            R$ 70.000,00 - MAX PARC: 84 meses
            
            De 61 anos a 65 anos 11 meses 29 dias 
            R$ 60.000,00 - MAX PARC: 84 meses
            
            De 66 anos a 70 anos 11 meses 29 dias 
            R$ 50.000,00 - MAX PARC: 84 meses
            
            De 71 anos a 75 anos 11 meses 29 dias 
            R$ 25.000,00 - MAX PARC: 84 meses"
        class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
        <span class="btn-inner--icon"><i
        class="fas fa-times"></i></span>
        <span class="btn-inner--text">NEGADO</span>
        </button>`
        } else if ((this.#dataDias >= 25892 && this.#dataDias < 29176) && this.#valor > 25000) {
            btn_max_bradesco.innerHTML =
            `<button type="button" title="De 18 anos a 60 anos 11 meses 29 dias 
            R$ 70.000,00 - MAX PARC: 84 meses
            
            De 61 anos a 65 anos 11 meses 29 dias 
            R$ 60.000,00 - MAX PARC: 84 meses
            
            De 66 anos a 70 anos 11 meses 29 dias 
            R$ 50.000,00 - MAX PARC: 84 meses
            
            De 71 anos a 75 anos 11 meses 29 dias 
            R$ 25.000,00 - MAX PARC: 84 meses"
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
        if (this.#valor < 900) {
            btn_min_bradesco.innerHtml =
                `<button type="button" title="SALDO MINÍMO - R$ 900,01"
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

        //OLE ---------------------------------------------------------------------------------------------------
        if (this.#dataDias > 29176) {
            btn_idade_ole.innerHTML =
                `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_ole.innerHTML =
                `<button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
            <span class="btn-inner--icon"><i class="far fa-check"></i></span>
            <span class="btn-inner--text">ACEITA</span>
            </button>`
        }

        //Quantidade de parcelas
        if (this.#qtdParcelas > 84) {
            btn_parcelas_ole.innerHTML =
                `<button type="button" title="Maior que 84 parcelas"
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

        //Saldo maximo
        if ((this.#dataDias >= 9125 && this.#dataDias < 25161) && this.#valor > 85000) {
            btn_max_ole.innerHTML =
                `<button type="button" title="NOVO                                                                                                    
                De 25 a 68 anos e 11 meses R$ 85.000,00
                De 69 a 72 anos e 11 meses R$ 70.000,00
                De 73 a 75 anos e 11 meses R$ 30.000,00
                De 76 a 77 anos e 11 meses R$ 15.000,00
                De 78 a 80 anos e 11 meses R$   5.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 25162 && this.#dataDias < 26621) && this.#valor > 70000) {
            btn_max_ole.innerHTML =
                `<button type="button" title="NOVO                                                                                                    
                De 25 a 68 anos e 11 meses R$ 85.000,00
                De 69 a 72 anos e 11 meses R$ 70.000,00
                De 73 a 75 anos e 11 meses R$ 30.000,00
                De 76 a 77 anos e 11 meses R$ 15.000,00
                De 78 a 80 anos e 11 meses R$   5.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 26622 && this.#dataDias < 27716) && this.#valor > 30000) {
            btn_max_ole.innerHTML =
                `<button type="button" title="NOVO                                                                                                    
                De 25 a 68 anos e 11 meses R$ 85.000,00
                De 69 a 72 anos e 11 meses R$ 70.000,00
                De 73 a 75 anos e 11 meses R$ 30.000,00
                De 76 a 77 anos e 11 meses R$ 15.000,00
                De 78 a 80 anos e 11 meses R$   5.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27717 && this.#dataDias < 28446) && this.#valor > 15000) {
            btn_max_ole.innerHTML =
                `<button type="button" title="NOVO                                                                                                    
                De 25 a 68 anos e 11 meses R$ 85.000,00
                De 69 a 72 anos e 11 meses R$ 70.000,00
                De 73 a 75 anos e 11 meses R$ 30.000,00
                De 76 a 77 anos e 11 meses R$ 15.000,00
                De 78 a 80 anos e 11 meses R$   5.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28447 && this.#dataDias < 29176) && this.#valor > 5000) {
            btn_max_ole.innerHTML =
                `<button type="button" title="NOVO                                                                                                    
                De 25 a 68 anos e 11 meses R$ 85.000,00
                De 69 a 72 anos e 11 meses R$ 70.000,00
                De 73 a 75 anos e 11 meses R$ 30.000,00
                De 76 a 77 anos e 11 meses R$ 15.000,00
                De 78 a 80 anos e 11 meses R$   5.000,00"
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
        if (this.#valor < 300) {
            btn_min_ole.innerHTML =
                `<button type="button" title="SALDO MINÍMO - R$ 300,00"
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

        //PARANÁ--------------------------
        if (this.#dataDias > 29176) {
            btn_idade_parana.innerHTML =
                `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_parana.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if (this.#qtdParcelas > 84) {
            btn_parcelas_parana.innerHTML =
                `<button type="button" title="Maior que 84 parcelas"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_parana.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if (this.#dataDias < 26986 && this.#valor > 60.000) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 26987 && this.#dataDias < 27351) && this.#valor > 60.000 && this.#qtdParcelas > 72) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27352 && this.#dataDias < 27716) && this.#valor > 25.000 && this.#qtdParcelas > 60) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27717 && this.#dataDias < 28081) && this.#valor > 16.000 && this.#qtdParcelas > 48) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28082 && this.#dataDias < 28446) && this.#valor > 10.000 && this.#qtdParcelas > 36) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28447 && this.#dataDias < 28811) && this.#valor > 1.000 && this.#qtdParcelas > 24) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28812 && this.#dataDias < 29176) && this.#valor > 500 && this.#qtdParcelas > 12) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if (this.#dataDias >= 29177) {
            btn_max_parana.innerHTML =
                `<button type="button" title="ATÉ 73 ANOSR$ 60.000,00 - MAX PARC: 84 
                74 ANOS R$ 60.000,00 - MAX PARC: 72                            
                75 ANOS R$ 25.000,00 - MAX PARC: 60                              
                76 ANOS R$ 16.000,00 - MAX PARC: 48                              
                77 ANOS R$ 10.000,00 - MAX PARC: 36                                    
                78 ANOS R$   1.000,00 - MAX PARC: 24                                     
                79 ANOS  R$     500,00 - MAX PARC: 12                         
                "
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_parana.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if (this.#valor < 1) {
            btn_min_parana.innerHTML =
                `<button type="button" title="SALDO MINÍMO - R$ 300,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_min_parana.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        //PAN ---------------------------------------------------------------------------------------------------

        //Idade
        if (this.#dataDias > 29176) {
            btn_idade_pan.innerHTML =
                `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
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
        if ((this.#dataDias >= 27010 && this.#dataDias < 27351) && this.#qtdParcelas > 84) {
            btn_parcelas_pan.innerHTML =
                `<button type="button" title="DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27372 && this.#dataDias < 27716) && this.#qtdParcelas > 60) {
            btn_parcelas_pan.innerHTML =
                `<button type="button" title="DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27717 && this.#dataDias < 27740) && this.#qtdParcelas > 48) {
            btn_parcelas_pan.innerHTML =
                `<button type="button" title="DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27741 && this.#dataDias < 28105) && this.#qtdParcelas > 36) {
            btn_parcelas_pan.innerHTML =
                `<button type="button" title="DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28106 && this.#dataDias < 28811) && this.#qtdParcelas > 24) {
            btn_parcelas_pan.innerHTML =
                `<button type="button" title="DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28812 && this.#dataDias < 29176) && this.#qtdParcelas > 12) {
            btn_parcelas_pan.innerHTML =
                `<button type="button" title="DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
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
        if ((this.#dataDias >= 27372 && this.#dataDias < 27716) && this.#qtdParcelas > 60 && this.#valor > 30000) {
            btn_max_pan.innerHTML =
                `<button type="button" title="
                DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27717 && this.#dataDias < 27740) && this.#qtdParcelas > 48 && this.#valor > 20000) {
            btn_max_pan.innerHTML =
                `<button type="button" title="
                DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 27741 && this.#dataDias < 28105) && this.#qtdParcelas > 36 && this.#valor > 15000) {
            btn_max_pan.innerHTML =
                `<button type="button" title="
                DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28106 && this.#dataDias < 28811) && this.#qtdParcelas > 24 && this.#valor > 4000) {
            btn_max_pan.innerHTML =
                `<button type="button" title="
                DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 28812 && this.#dataDias < 29176) && this.#qtdParcelas > 12 && this.#valor > 2000) {
            btn_max_pan.innerHTML =
                `<button type="button" title="
                DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if (this.#dataDias >= 29177) {
            btn_max_pan.innerHTML =
                `<button type="button" title="
                DE 22 A 74 ANOS 11 MESES E 29 DIAS  CONFORME MARGEM MAX PARC: 72
                DE 75 A 75 ANOS 11 MESES E 29 DIAS R$ 30.000,00 MAX PARC: 60
                DE 76 A 76 ANOS 11 MESES E 29 DIAS R$ 20.000,00 MAX PARC: 48
                DE 77 A 77 ANOS 11 MESES E 29 DIAS R$ 15.000,00 MAX PARC: 36
                DE 78 A 78 ANOS 11 M3ESES E 29 DIAS R$ 4.000,00 MAX PARC: 24
                DE 79 A 79 ANOS 11 MESES E 29 DIAS R$ 2.000,00 MAX PARC 12"
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

        if (this.#valor < 200) {
            btn_min_pan.innerHTML =
                `<button type="button" title="SALDO MINÍMO - R$ 300,00"
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

        //DayCoval------------
        if (this.#dataDias > 27351) {
            btn_idade_daycoval.innerHTML =
                `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_daycoval.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if (this.#qtdParcelas > 84) {
            btn_parcelas_daycoval.innerHTML =
                `<button type="button" title="Maior que 84 parcelas"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_daycoval.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if ((this.#dataDias >= 7642 && this.#dataDias < 25891) && this.#valor > 250.000) {
            btn_max_daycoval.innerHTML =
                `<button type="button" title="DE 21  A 69 ANOS 11 MESES E 29 DIAS  R$ 250.000,00 DE 70 A 74 ANOS 11 MESES E 29 DIAS R$ 75.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else if ((this.#dataDias >= 25892 && this.#dataDias < 27351) && this.#valor > 75.000) {
            btn_max_daycoval.innerHTML =
                `<button type="button" title="DE 21  A 69 ANOS 11 MESES E 29 DIAS  R$ 250.000,00 DE 70 A 74 ANOS 11 MESES E 29 DIAS R$ 75.000,00"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_daycoval.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        // BANCO DO BRASIL------------------
        if (this.#dataDias > 29541) {
            btn_idade_bb.innerHTML =
                `<button type="button" title="Terminar o contrato com (75 ANOS 11 MESES 29 DIAS)"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
            <span class="btn-inner--icon"><i
            class="fas fa-times"></i></span>
            <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_idade_bb.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if (this.#qtdParcelas > 84 && this.#qtdParcelas < 2) {
            btn_parcelas_bb.innerHTML =
                `<button type="button" title="Maior que 84 parcelas"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_parcelas_bb.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

        if (this.#valor > 100.000) {
            btn_max_bb.innerHTML =
                `<button type="button" title="VALOR MAIOR QUE R$100.000"
            class="btn btn-sm btn-soft-danger btn-icon rounded-pill">
                <span class="btn-inner--icon"><i
                class="fas fa-times"></i></span>
                <span class="btn-inner--text">NEGADO</span>
            </button>`
        } else {
            btn_max_bb.innerHTML =
                `
            <button type="button" class="btn btn-sm btn-soft-success btn-icon rounded-pill">
                <span class="btn-inner--icon"><i class="far fa-check"></i></span>
                <span class="btn-inner--text">ACEITO</span>
            </button>
            `
        }

    }

     dataDiff() {
        const nascimento = document.getElementById('campo-data-nascimento').value;

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

export default InssRefin;