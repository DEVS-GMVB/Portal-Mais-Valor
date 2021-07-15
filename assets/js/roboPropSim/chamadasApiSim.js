import {
    editaStatus
} from './helpers.js';
import { updateStatus } from './chamadasPortal.js';
import { horaAgora } from './helpers.js';

export const consultaSim = (arrayConsultaSim) => {

    const myHeaders = new Headers();
    myHeaders.append("SessionIdSim", "293.685.308-747877742977725974");
    myHeaders.append("Authorization", "Bearer eyJlbmMiOiJBMTI4R0NNIiwiYWxnIjoiUlNBLU9BRVAtMjU2In0.LU5GEa0ndhpqv343s0Djty-DiPJ8uSJG_zopZ2hFJBfX-yCe5JNG8UgyY_P_NexikT61gCBEThzYLr-cKy8FwWqoxaHT0NkXq3GCi1KFTdoGA_NH7ywBpBiqDHod0qYWxWMzvXzmKZnbAZsp7pOoQL_1gt6mhI6z-I5MPupZwEHgYybs1HgZuk15HWG-AILorKlLE_voR0ZjEnlmCp9RhOdh6O3LxWne6rdhg7MaWOhFJaM8AM4bBnGqizs3IGyaczG_mhUDh5xfCG1hzHa4_hwJ6zO4cXycMm_SzAPRUGpHr3S-b4RXrOsYdyxj94OfcRWdSoaW9Xd6gPToIgxbUA.ug2qiF4KR1Hm4EY8.-WTiWEpTfnzxbF2h17SXjqqUU5h3Sw2vopQPs1LsTv-4gs5p5UqmiMDICxzhn2VZLa_GCk3VE6lfi_jIHDfmzyfxd7eTZjUbovlpngvPoEjj6SspfN9M8ysp-C8s-N-EM9ROjrLRfusqkvDcfgEbpY_yBP_eTtg_Xkqibn3Ite-KdrJlcPu9PPuHRnzKfbtgFGKHCgmorrMDHcrWd8TG0ic0eqlr06ZuavO2G6x7fnQmK4vlf6s8PP8y4uRftWyqwRLc4CClYP3PfL_74vNWCEOBK6nSJTtBYJS6bU2Heohtast5jtZGm6ax343LL3BWucFXoS4FHjMBqVC9XQdWUHG1Ch3415GYZ7J5ISIt2AREOU2vfpiYC7T2UHhh8a3Xx-vFaQfr30_3lnzV06ltEO5T_UTAqI3jdnB6FXmvKfd9jJf3f1SMlwrFUx53wpD8a1xFCcyO5uahj9u1-HI8bx3e8-TA-DSCo4WARKZb7Eeb-fN32kkxmmg1x-IWpDv4fXRgrhmhDRT8hBbCg9HCb_LIxqq3HX0dJejxpEgSopf9chTZfiyuKl1Io_NRIzgYwBhMAUfy22oYzQNKFPxLA84xxOrLgcT3wHCFZyERzuI4H5b7AbeSZ_9_UfabXMbvTMekjAtHtQGGHqK4qE75j7Ga4M8YxFt3dMpbIHtMD1PPIKhUBW4Nijydt_g.z4RtE48u39JTAjWNmTYGtQ");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "proposalList": arrayConsultaSim
    });
    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://emprestimosim.brazilacs.com/apigw/api/proposal/getProposalResumeList", requestOptions)
        .then(response => response.json())
        .then(function (data) {
            console.log(data)
            const propostas = editaStatus(data);
            let i = 0;
            while (i < propostas.length) {
                    const proposta =propostas[i].proposta;
                    const status = propostas[i].status;
                    const responsavel = "AUTOMATICO";
                    const dateHour = horaAgora();
                   updateStatus(proposta,status,responsavel, dateHour)
                i++;
            }

        })
        .catch(error => console.log('error', error));
}