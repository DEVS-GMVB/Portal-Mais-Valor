import {
  consultaSim
} from "./chamadasApiSim.js";
import { showLayout } from './helpers.js'

const arrayConsultaSim = [];

export const propostasPortal = () => {

  const raw = "";
  const requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow'
  };

  fetch("http://localhost:3000/user/robosim/select", requestOptions)
    .then(response => response.json())
    .then(function (data) {
      let i = 0;
      while (i < data.length) {
        arrayConsultaSim.push({
          proposalId: +data[i].proposta
        })
        i++
      }
      consultaSim(arrayConsultaSim)
    })
    .catch(error => console.log('error', error));
}



export const updateStatus = (proposta, status, responsavel, data_atualizacao) => {

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  const raw = JSON.stringify({
    "proposta": proposta,
    "status": status,
    "responsavel" : responsavel,
    "data_atualizacao" :data_atualizacao
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch("http://localhost:3000/user/robosim/update", requestOptions)
    .then(response => response.json())
    .then(result =>
       showLayout(proposta, status, responsavel, data_atualizacao)) //responsavel e data e hora
    .catch(error => console.log('error', error));
}



// export const filtro =() =>{//exportar pro index e colocar dentro do addevent listener

// const proposta = document.getElementById("proposta").value;
// apagarTudo();
// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "proposta": proposta
// });

// const requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:3000/user/robosim/filtro", requestOptions)
//   .then(response => response.text())
//   .then(function (data) {
// console.log(data)
// const proposta = data.proposta,
//       status = data.status,
//       responsavel = data.responsavel,
//       data_atualizacao = data.data_atualizacao
//       console.log (proposta, status, responsavel, data_atualizacao)
//    showLayout(proposta, status, responsavel, data_atualizacao)

// })
//   .catch(error => console.log('error', error));

// }