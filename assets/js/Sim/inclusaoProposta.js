
function confirmarProposta (){


    var nome = document.getElementById("nome").value
    var ddd = document.getElementById("ddd").value
    var telefone = document.getElementById("telefone").value
    var cpf = document.getElementById("cpf").value
    var email = document.getElementById("email").value
    var myRange = document.getElementById("myRange").value
    var dataNascimento = document.getElementById("dataNascimento").value
    var rendaMensal = document.getElementById("rendaMensal").value
    var formaPagamento = document.getElementById("formaPagamento").value
    var agencia = document.getElementById("agencia").value
    var conta = document.getElementById("conta").value
    var digito = document.getElementById("digito").value
    var vencimento = document.getElementById("vencimento").value
    var qtdParcelas = document.getElementById("qtdParcelas").value
    var cep = document.getElementById("cep").value
    var rua = document.getElementById("rua").value
    var bairro = document.getElementById("bairro").value
    var cidade = document.getElementById("cidade").value
    var uf = document.getElementById("uf").value
    var ocupacao = document.getElementById("ocupacao").value
    var patrimonio = document.getElementById("patrimonio").value
    var nomeMae = document.getElementById("nomeMae").value
    var documento = document.getElementById("documento").value
    var emissao = document.getElementById("emissao").value
    var genero = document.getElementById("genero").value
    var estadoCivil = document.getElementById("estadoCivil").value
    var ufDoc = document.getElementById("ufDoc").value
    var now = new Date
    var data_envio = "" + now.getDate() + "/" + now.getMonth() + "/" + now.getFullYear()+" "+ now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds()
    var mes =  "" + now.getMonth() + "/" + now.getFullYear()
    var inputTaxaAnual = document.getElementById("inputTaxaAnual").value
    inputTaxaAnual = inputTaxaAnual*100
    var inputTaxaMensal = document.getElementById("inputTaxaMensal").value
    inputTaxaMensal = inputTaxaMensal*100
    var inputParcelas = document.getElementById("inputParcelas").value
    var inputProposta = document.getElementById("inputProposta").value


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "taxa_anual": inputTaxaAnual,
    "taxa": inputTaxaMensal,
    "valor_parcela": inputParcelas,
    "nome": nome,
    "telefone_ddd_1": ddd,
    "telefone": telefone,
    "data_nascimento": dataNascimento,
    "email": email,
    "cpf": cpf,
    "entregue": myRange,
    "salario": rendaMensal,
    "tipo_conta": formaPagamento,
    "agencia_cliente": agencia,
    "conta_cliente": conta,
    "digito_conta": digito,
    "primeiro_vencimento": vencimento,
    "parcela": qtdParcelas,
    "cep": cep,
    "endereco": rua,
    "bairro": bairro,
    "municipio": cidade,
    "uf": uf,
    "codigo_profissao": ocupacao,
    "patrimonio": patrimonio,
    "nome_mae": nomeMae,
    "rg": documento,
    "data_emissao": emissao,
    "nacionalidade": 23,
    "genero" :genero,
    "estado_civil": estadoCivil,
    "documento_uf": ufDoc,
    "status ": "IDENTIFICACAO PROPOSTA - AGUARDANDO DOCUMENTACAO",
    "produto": "CREDITO EM CONTA",
    "convenio": "-",
    "tipo": "NOVO",
    "parceiro": sessionStorage.getItem('nome'),
    "id_parceiro": sessionStorage.getItem('id_acesso'),
    "supervisor": sessionStorage.getItem('supervisor'),
    "gerente": sessionStorage.getItem('gerente'),
    "tipo_parceiro": sessionStorage.getItem('tipo_usuario'),
    "data_envio": data_envio,
    "mes": mes,
    "banco_origi": "SIM",
    "proposta": inputProposta,
    "id_sim": "Novo Portal"
    });

    var requestOptions = { 
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost:3000/user/proposta/inclusao", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}


function ervj(data){

if((data.errors[0].match(/@ERFSE0502/)>=0)){
alert('Verifique a data de vencimento');
};

if((data.errors[0].match(/@ERFSE0552/)>=0)){
alert('Erro Produtox Tabela');
};

if((data.errors[0].match(/@ERFSE0564/)>=0)){
alert('Erro Pessoax tabela');
};

if((data.errors[0].match(/@ERFSE0579/)>=0)){
alert('Erro IOF Tabela');
};

if((data.errors[0].match(/@ERFSE0589/)>=0)){
alert('Ano ou percentual mínimo de entrada inválido');
};

if((data.errors[0].match(/@ERFSE0768/)>=0)){
alert('CARENCIA MAIOR QUE MÁXIMA CADASTRADA');
};

if((data.errors[0].match(/@ERQCE0122/)>=0)){
alert('erro PS7');
};

if((data.errors[0].match(/@ERSQE0018/)>=0)){
alert('TAMANHO ENDERECO EXCEDEU O LIMITE. FAVOR ABREVIAR');
};

if((data.errors[0].match(/@ERSQE0058/)>=0)){
alert('NAO HA AGENTE CERTIFICADO');
};

if((data.errors[0].match(/@ERVJE0003/)>=0)){
alert('ACESSO ROTINA CIPR32F ERRO ACESSO VSAM - C');
};

if((data.errors[0].match(/@ERVJE0010/)>=0)){
alert('TIPO DE PRODUTO INVALIDO";');
};

if((data.errors[0].match(/@ERVJE0016/)>=0)){
alert('DATAS INVÁLIDAS');
};

if((data.errors[0].match(/@ERVJE0019/)>=0)){
alert('O CANAL UTILIZADO ESTA INDISPONIVEL PARA ESSA LOJA');
};

if((data.errors[0].match(/@ERVJE0028/)>=0)){
alert('CAMPO CÓDIGO PROPOSTA, CEP OU RENDA MENSAL NAO INFORMADO CORRETAMENTE');
};

if((data.errors[0].match(/@ERVJE0033/)>=0)){
alert('FINANCIAMENTO NAO DISPONIVEL PARA ESSE VEICULO');
};

if((data.errors[0].match(/@ERVJE0039/)>=0)){
alert('ERRO DB2 NA TABELA VJGT0010 - SQLCODE -0904');
};

if((data.errors[0].match(/@ERVJE0046/)>=0)){
alert('CAMPO NOME MÃE, DATA DE NASCIMENTO , CIDADE , OU AGENTE INVÁLIDO(S)');
};

if((data.errors[0].match(/@ERVJE0050/)>=0)){
alert('CLI-CPF DO CONJUGE INVÁLIDO');
};

if((data.errors[0].match(/@ERVJE0051/)>=0)){
alert('DATA DE NASCIMENTO É MAIOR QUE A DATA DE EMISSAO DO DOCUMENTO');
};

if((data.errors[0].match(/@ERVJE0054/)>=0)){
alert('ERRO NO START DO ARQUIVO . EIBRES.');
};

if((data.errors[0].match(/@ERVJE0061/)>=0)){
alert('');
};

if((data.errors[0].match(/@ERVJE0064/)>=0)){
alert('VALOR DO BEM INVALIDO OU NAO INFORMADO');
};

if((data.errors[0].match(/@ERVJE0074/)>=0)){
alert('DATA DO PRIMEIRO VENCIMENTO MENOR QUE O PERMITIDO');
};

if((data.errors[0].match(/@ERVJE0096/)>=0)){
alert('ERRO FILIAL');
};

if((data.errors[0].match(/@ERVJE0097/)>=0)){
alert('UF - DESPESA CARTORIO INVALIDA');
};

if((data.errors[0].match(/@ERVJE0100/)>=0)){
alert('ERRO CHAMADA SUB-ROTINA AFCS0002');
};

if((data.errors[0].match(/@ERVJE0115/)>=0)){
alert('ERRO DDD TELEFONE FIXO');
};

if((data.errors[0].match(/@ERVJE0147/)>=0)){
alert('FORMA DE PAGAMENTO NAO AUTORIZADA PARA O INTERMEDIARIO / PRODUTO');
};

if((data.errors[0].match(/@ERVJE0152/)>=0)){
alert('CONTA CORRENTE DEVE TER NO MINIMO 7 DIGITOS');
};

if((data.errors[0].match(/@ERVJE0154/)>=0)){
alert('RENDA MENSAL DO TITULAR DEVE ESTAR ENTRE R$ 0,00 A R$ 199.999,99');
};

if((data.errors[0].match(/@ERVJE0160/)>=0)){
alert('DATA DE NASCIMENTO - IDADE DEVE SER MENOR OU IGUAL A 100 ANOS');
};

if((data.errors[0].match(/@ERVJE0167/)>=0)){
alert('ANO DE FABRICACAO E ANO DO MODELO ESTAO INCOERENTES');
};

if((data.errors[0].match(/@ERVJE0168/)>=0)){
alert('ANO FABRICACAO DEVE SER MENOR OU IGUAL AO ANO MODELO');
};

if((data.errors[0].match(/@ERVJE0208/)>=0)){
alert('SUBSEG INVALIDO PARA O INTERMEDIARIO');
};

}


export { confirmarProposta }
