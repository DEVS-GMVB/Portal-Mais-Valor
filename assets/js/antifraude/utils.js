

export const apis = {

    LOCALHOST : "http://localhost:3000",
    URL_BRASIL_INDOC : "https://sistema.brasilindoc.com.br/api/v1",
    URL_BRT : "https://ecossistema-cartoes-hom.azurewebsites.net/v1",
    URL_CLARO : "https://api.claro.com.br",
    URL_CONFIRME_ONLINE: "https://consulta.confirmeonline.com.br/IntegracaoRest/webresources/integracao",
    URL_SERPRO: "https://gateway.apiserpro.serpro.gov.br",
    URL_UNICO: "https://www2.acesso.io/aquimaisvalor/services/v3/AcessoService.svc/messages",
    KEY_BRASILINDOC : `325.381.568-40@$2y$10$SsDF/gHSsGiAbxiFqyoXPu4x0Hxx/AnzlwAOSF29bcwUDCYW1FI6C`

}

export const session = {

        id_acesso: sessionStorage.getItem('id_acesso'),
        status: sessionStorage.getItem('status'),
        perfil: sessionStorage.getItem('perfil'),
        nome: sessionStorage.getItem('nome'),
        supervisor: sessionStorage.getItem('supervisor'),
        gerente: sessionStorage.getItem('gerente'),
        cnpj_matr: sessionStorage.getItem('cnpj_matriz'),
        cpf_user: sessionStorage.getItem('cpf_usuario'),
        tipo_usuario: sessionStorage.getItem('tipo_usuario'),
        supervisor_cpf: sessionStorage.getItem('supervisor_cpf'),
        gerente_cpf: sessionStorage.getItem('gerente_cpf')
  
}


export const toBase64 = (url,callback) =>{

    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        let reader = new FileReader();
        reader.onloadend = function() {
        callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}


const data = new Date();
var dia = data.getDate();
var dia_sem = data.getDay();
var mes= data.getMonth();  
var ano4 = data.getFullYear(); 
var hora = data.getHours();
var min = data.getMinutes(); 
var seg = data.getSeconds(); 
var dia_hoje = dia + '/' + (mes+1) + '/' + ano4;
var hora_agora = hora + ':' + min + ':' + seg;

export const dataHora = {
   hoje : dia_hoje,
   agora : hora_agora
  };








