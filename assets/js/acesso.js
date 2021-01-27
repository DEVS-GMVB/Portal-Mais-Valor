var usuario = document.getElementById('id-cadusu-usuario');
var senha = document.getElementById('id-cadusu-senha');
var login = document.getElementById('id-cadusu-login');
var novamenteSenha = document.getElementById('id-cadusu-novamentesenha');
var tipoUsuario = document.getElementById('id-cadusu-tipousu');
var usuMaster= document.getElementById('id-cadusu-usumaster');
var classi= document.getElementById('id-cadusu-classi');
var empresa = document.getElementById('id-cad-usu-empresa');
var status = document.getElementById('id-cadusu-status');
var telCelular = document.getElementById('id-cadusu-telcelular');
var cpfcnpj = document.getElementById('id-cadusu-cpfcnpj');
var email = document.getElementById('id-cadusu-email');
var motCancela = document.getElementById('id-cadusu-motcancela');
var perfilAcesso = document.getElementById('id-cadusu-perfilacesso');
var acessoOle = document.getElementById('id-cadusu-acessoole');
var acessoPan = document.getElementById('id-cadusu-acessopan');
var acessoCetelem = document.getElementById('id-cadusu-acessocetelem');
var acessoItau = document.getElementById('id-cadusu-acessoitau');
var f5bmg = document.getElementById('id-cadusu-acef5bmg');
var f5itau = document.getElementById('id-cadusu-acef5itau');
var aceDaycoval = document.getElementById('id-cadusu-acedaycoval');
var aceSim = document.getElementById('id-cadusu-acesim');
var aceSafra = document.getElementById('id-cadusu-acesafra');
var aceBradesco = document.getElementById('id-cadusu-acebradesco');
var aceParana = document.getElementById('id-cadusu-aceparana');
var aceCrefisa = document.getElementById('id-cadusu-crefisa');
var aceConsorcio = document.getElementById('id-cadusu-aceconsorciobb');
var aceConsCaixa = document.getElementById('ace-cadusu-conscaixa');
var aceConsCaixa = document.getElementById('id-cadusu-aceconsitau');

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://172.16.0.197:3000/user/proposta/empresas", requestOptions)
  .then(response => response.json().then(function(data){
    for(let i = 0; i < data.length; i++){
        empresa.innerHTML += '<option value="'+data[i].empresa+'">'+data[i].empresa+'</option>;'
    }
})).catch(error => console.log('error', error));
