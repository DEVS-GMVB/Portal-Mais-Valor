const filho14 = document.getElementById('id-filhos-14');
const quantos = document.getElementById('id-quantos');

document.getElementById('id-filhos-14').addEventListener('blur', ()=>{

    if (filho14.value === 'SIM'){
        $("#id-quantos").attr('disabled', false);
    } else {
        $("#id-quantos").attr('disabled', true);
    }

})