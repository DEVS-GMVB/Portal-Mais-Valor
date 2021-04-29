btnSimular.addEventListener('click', (e) => {
    if(convenioSelect.value === "index_multi_inss_novo.asp") {
        const value = document.querySelectorAll("#table-1 tbody tr")[0];
        console.log(value.cells[3]);
        //SANTANDER
        const diffDate = dataDiff(dataNascimento.value);
        if(diffDate > 29579) {

        }
    }
})