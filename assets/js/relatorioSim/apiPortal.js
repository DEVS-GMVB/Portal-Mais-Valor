import {
    factoryPropostasPortal,
    showLayout
} from './helpers.js'

const arrayPortal = [];
export const matchPortal = (proposta, legado, status, email) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "proposta": proposta
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("http://localhost:3000/user/vw/relatorio", requestOptions)
        .then(response => response.json())
        .then((data) => {
            if (data.cpf) {
                arrayPortal.push(factoryPropostasPortal(data.cpf, data.parceiro, data.supervisor, data.gerente, proposta, legado, status, email))
            } else {
                arrayPortal.push(factoryPropostasPortal("-", "-", "-", "-", proposta, legado, status, email))
            }
        })
        .catch(error => console.log('error', error));
}

export const resultadoPortal = () => {

   // console.log(arrayPortal)

            let i = 0;
            while (i < arrayPortal.length) {
                    const cpf =arrayPortal[i].cpf;
                    const proposta =arrayPortal[i].proposta;
                    const legado =arrayPortal[i].legado;
                    const status =arrayPortal[i].status;
                    const email =arrayPortal[i].email;
                    const parceiro =arrayPortal[i].parceiro;
                    const supervisor =arrayPortal[i].supervisor;
                    const gerente =arrayPortal[i].gerente;
                   showLayout(proposta, legado, status, email, cpf, parceiro, supervisor, gerente)
                i++;
            }


}