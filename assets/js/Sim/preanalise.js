


function preAnalise(access_token, sessionId, name, email, dateOfBirthFoundation, cpf, ddd, number, renda){
        
    var  dataMaxima = "";
    var  dataMinima = "";
    var  cpAutoKey = "";
    var  cpAutoShow = "";
    var  cpAutoValor = "";
    var  cpAutoParcelasMax = "";
    var  cpPuroKey = "";
    var  cpPuroShow = "";
    var  cpPuroValor = "";
    var  cpPuroParcelasMax = "";
    var  uuid = "";
    var  code = "";
    var  ficoCode = "";


    name =document.getElementById("nome").value;
    email =document.getElementById("email").value;
    dateOfBirthFoundation =document.getElementById("dataNascimento").value;
    ddd =document.getElementById("ddd").value;
    number =document.getElementById("telefone").value;
    cpf=document.getElementById("cpf").value;
    renda =document.getElementById("rendaMensal").value;
    var myHeaders = new Headers();
    myHeaders.append("SessionIdSim", sessionId);
    myHeaders.append("Authorization", "Bearer "+access_token);
    myHeaders.append("Content-Type", "application/json");
       var raw = JSON.stringify({
           "customer":{
               "campaign":"",
               "name": name,
               "email": email,
               "dateOfBirthFoundation": dateOfBirthFoundation,
               "document": cpf,
               "cellPhone":{"ddd": ddd,
               "number": number
           }},
           "purchase":{
               "value":500,
               "financedObject":"CP",
               "subsegment":"0"
           },
           "store":{
               "name":""
           },
           "uuid":""
       });
       var requestOptions = {
       method: 'POST',
       headers: myHeaders,
       body: raw,
       redirect: 'follow'
       };
   fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/identification/cp/", requestOptions)//na hora do fetch da erro 
   .then(response => response.json())
   .then(function (data) {

       if(data.repescResponse.accessMessageText=="EXISTE PROPOSTA EM ANDAMENTO"){
               alert(data.repescResponse.accessMessageText)
           }

       dataMaxima = document.getElementById("dataMaxima").value = data.atxResponse.firstInstallment.maximumDate  
       dataMinima = document.getElementById("dataMinima").value =data.atxResponse.firstInstallment.minimumDate
       cpAutoShow = data.repescResponse.cpauto.show

       if(cpAutoShow=="S"){
           cpAutoKey = document.getElementById("cpAutoKey").innerHTML =data.repescResponse.cpauto.key
           cpAutoValor = document.getElementById("cpAutoValor").innerHTML =data.repescResponse.cpauto.title
           document.getElementById("inputCpAutoValor").value =data.repescResponse.cpauto.title//
           cpAutoParcelasMax =document.getElementById("cpAutoParcelasMax").innerHTML = data.repescResponse.cpauto.message
       }
       cpPuroShow = data.repescResponse.cppuro.show
       if(cpPuroShow=="S"){
           cpPuroKey = document.getElementById("cpPuroKey").innerHTML =data.repescResponse.cppuro.key
           cpPuroValor = document.getElementById("cpPuroValor").innerHTML =data.repescResponse.cppuro.title
           document.getElementById("inputCpPuroValor").value =data.repescResponse.cppuro.title//
           cpPuroParcelasMax = document.getElementById("cpPuroParcelasMax").innerHTML =data.repescResponse.cppuro.message
       } 
       if(cpAutoShow=="N"&&cpPuroShow=="N"){
           alert("No momento nao existe nenhum produto diponível para esse CPF")
       }

       uuid = document.getElementById("uuid").value =data.uuid
       code = document.getElementById("code").value =data.repescResponse.code
       ficoCode = document.getElementById("ficoCode").value =data.repescResponse.ficoCode
         
   })
    .catch(error => console.log('error', error));
};


export { preAnalise };




