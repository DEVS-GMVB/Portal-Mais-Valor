const filho14 = document.getElementById('id-filhos-14');
//Table
const table = document.getElementById("list");

document.getElementById('id-filhos-14').addEventListener('blur', ()=>{
    if (filho14.value === 'SIM'){
        $("#id-quantos").attr('disabled', false);
    } else {
        $("#id-quantos").attr('disabled', true);
    }

})


const reoloadTable = (qtd) => {
    if(qtd !== "" && qtd !== null && qdt !== undefined) {
        for(let i in qtd) {
            table.innerHTML = 
            `
                <tr></tr>
            `
        }
    }
} 

