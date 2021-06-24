
import { preAnalise } from './preanalise.js';




function gerarToken(){

    var access_token = "";
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic aW50ZWdyYV9jbGk6MTIzNDU2");
    var raw = JSON.stringify({"username":"ZELIA.LEONTINA@AQUIMAISVALOR.COM.BR","password":"!QAZ2wsx"});
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://viverebrasil.com.br/sanredapigwpro/uaa/pro/auth/token", requestOptions)
    .then(response => response.json())
    .then(function (response) {
        access_token = response.access_token,
        document.getElementById("access_token").value = response.access_token,
        gerarSession(access_token)}) 
    .catch(error => console.log('error', error));

}


function gerarSession(access_token,cpf){

    var sessionId="";
    var  name =document.getElementById("nome").value;
    var  email =document.getElementById("email").value;
    var dateOfBirthFoundation =document.getElementById("dataNascimento").value;
    var cpf=document.getElementById("cpf").value;
    var ddd =document.getElementById("ddd").value;
    var number =document.getElementById("telefone").value;
    var ddd= ddd.toString();
    number = number.toString();
    var  renda =document.getElementById("rendaMensal").value;

    var myHeaders = new Headers();
    myHeaders.append("Content_type", "application/json");
    myHeaders.append("Authorization", "Bearer "+access_token);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"documentId":cpf});
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/login/getSessionIdSim", requestOptions)
    .then(response => response.json())
    .then(function (response) {
        sessionId = response.sessionId,
        document.getElementById("sessionId").value = response.sessionId,
    preAnalise(access_token, sessionId, name, email, dateOfBirthFoundation, cpf, ddd, number,renda)}) //chamar uma função aqui que tenha todos os paremetros da preanálise 
    .catch(error => console.log('error', error));

};

export { gerarToken };