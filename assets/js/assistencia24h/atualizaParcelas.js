
import { LOCALHOST } from './session.js'

function updateParcelasRestantes(codigo, parcelas_restantes, mes_ultimo_debito) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    var raw = JSON.stringify({
      "codigo": codigo,
      "parcelas_restantes": parcelas_restantes,
      "mes_ultimo_debito": mes_ultimo_debito
    });
  
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
  
    fetch(`${LOCALHOST}/user/assistencia/atualizaParcelas`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  
  }

  export { updateParcelasRestantes };
  
  