
function getAnoCombustivel(access_token,sessionId,marca){

    var marca =  document.getElementById("marca").value;
    var access_token =  document.getElementById("access_token").value;
    var sessionId =  document.getElementById("sessionId").value;
    var anoCombustivel =  document.getElementById("anoCombustivel");



        var myHeaders = new Headers();
        myHeaders.append("SessionIdSim", sessionId);
        myHeaders.append("Authorization", "Bearer "+access_token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/domains/vehicle-year-fuel/"+marca+"/false", requestOptions)
        .then(response => response.json())
        .then( function (data) {
            for (let i = 0; i < data.length; i++) {
               anoCombustivel.innerHTML += '<option value="' + data[i].year + '" data-combustivel = "'+ data[i].fuelCode +'" > '+ data[i].description + '</option>;' 
            }})
        .catch(error => console.log('error', error));

};


function getModeloVeiculo(access_token,sessionId,marca,ano,combustivel){//onblur do campo combustivel veiculo, pegar o valor do id e chamar aqui
        var marca =  document.getElementById("marca").value;
        var select =  document.getElementById("anoCombustivel");
        var ano =  select.querySelector('option:checked').value;
        var modelo =  document.getElementById("modelo");

        var option = $( "#anoCombustivel" ).find("option:checked");
        var combustivel    = option.data('combustivel');
        
        var access_token =  document.getElementById("access_token").value;
        var sessionId =  document.getElementById("sessionId").value;

        var myHeaders = new Headers();
        myHeaders.append("SessionIdSim", sessionId);
        myHeaders.append("Authorization", "Bearer "+access_token);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("https://viverebrasil.com.br/sanredapigwpro/api/pro/domains/vehicle-make/"+marca+"/vehicle-model/"+ano+"/"+combustivel+"/false", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
               modelo.innerHTML += '<option value="' + data[i].id + '" data-yearFuelId = "'+ data[i].yearFuelId +'">' + data[i].description + '</option>;' 
            }})
        .catch(error => console.log('error', error));
        
};


function salvarVeiculo(option,vAutoYearFuel,vAutoMake,vAutoModel,vAutoTypeId,vAutoYear){//onclur do estado salvar as variaveis em um arrai e retornar esse array na funcao
     arrayVeiculo =[];
     option = $( "#anoCombustivel" ).find("option:checked");
     vAutoYearFuel    = option.data('yearfuelid');
     vAutoMake = $( "#marca" ).find("option:checked").value;
     vAutoModel = $( "#modelo" ).find("option:checked").value;
     vAutoTypeId=4;
     vAutoYear = $( "#anoCombustivel" ).find("option:checked").value;
    
    arrayVeiculo.push(vAutoYearFuel,vAutoMake,vAutoModel,vAutoTypeId,vAutoYear);
    return arrayVeiculo;
 
};

