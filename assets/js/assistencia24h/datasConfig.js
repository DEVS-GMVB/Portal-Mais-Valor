

 function configuracaoVencimento() {

    var now = new Date
    var dia = now.getDate();
    var mes_atual = now.getMonth();
    var mes = parseInt(mes_atual + 1);
    var ano = now.getFullYear();
    var hoje = dia + "/" + mes + "/" + ano;
  
    var vencimentoMin = somaDias(hoje, 5);
  
    var vencimentoMin2 = vencimentoMin.split('/').reverse().join('/');
    var vencimentoMin3 = vencimentoMin2.replace("/", "-");
    var vencimentoMin4 = vencimentoMin3.replace("/", "-");
  
    var vencimentoMax = somaDias(hoje, 35);
  
    var vencimentoMax2 = vencimentoMax.split('/').reverse().join('/');
    var vencimentoMax3 = vencimentoMax2.replace("/", "-");
    var vencimentoMax4 = vencimentoMax3.replace("/", "-");
  
    document.getElementById("vencimento").min = vencimentoMin4;
    document.getElementById("vencimento").max = vencimentoMax4;
  
  
  }
 
  
  function somaDias(dt, qtd) {
  
    var dt1 = dt.split("/");
    var hj1 = dt1[2] + "-" + dt1[1] + "-" + dt1[0];
    var dtat = new Date(hj1);
    dtat.setDate(dtat.getDate());
    var myDate = new Date(hj1);
    myDate.setDate(myDate.getDate() + (qtd + 1));
    var ano = myDate.getFullYear();
    var dia = myDate.getDate();
    if (dia < 10) {
      dia = '0' + dia
    };
    var mes = (myDate.getMonth() + 1);
    if (mes < 10) {
      mes = '0' + mes
    }
    return (dia + "/" + mes + "/" + ano);
  
  }
  
  
   function vigenciaInicial() { //chamar na hora da inclusao
  
    var vencimento = document.getElementById("vencimento").value;
    var vigencia = vencimento.split('-').reverse().join('-');
    var vigencia1 = vigencia.replace("-", "/");
    var vigencia2 = vigencia1.replace("-", "/");
    var vigencia3 = somaDias(vigencia2, 5);
  
    return vigencia3;
  
  }
  
  
   function vigenciaFinal() {
    var now = new Date
    var ano = now.getFullYear();
    var anoFormatado = parseInt(ano);
    var anoFinal = anoFormatado + 1;
    var vgInicial = vigenciaInicial();
    var vigencia = vgInicial.split('/')
    vigencia[2] = anoFinal;
    var vigenciaFinal = vigencia.join('/');
    return vigenciaFinal
  
  }
  
  export { configuracaoVencimento, vigenciaInicial, vigenciaFinal };