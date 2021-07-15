import { novaSolicitacao } from './apiBrasilInDoc.js';
import { apis } from '../utils.js';

export const  localizaProposta = () =>{

    //pegar numero da proposta de uma tag

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJuYmYiOjE2MjQyODQ0MDMsImV4cCI6MTYyNDI4ODAwMywiaXNzIjoiaHR0cHM6Ly9icnQtaWRlbnRpdHlzZXJ2ZXIuZWNvYnJ0LmNvIiwiY2xpZW50X2lkIjoiZWNvc3Npc3RlbWFjYXJ0b2VzIiwic3ViIjoiTWFpc1ZhbG9yIiwiYXV0aF90aW1lIjoxNjI0Mjg0NDAzLCJpZHAiOiJsb2NhbCIsInJvbGUiOiJlY29zc2lzdGVtYWNhcnRvZXMuYXBpIiwidXNlcm5hbWUiOiJVc2VyX0Vjb3NzaXN0ZW1hQ2FydG9lcyIsImp0aSI6IkQxMEVFNDNDNkM5RTc0QTIxRkE5NDBBRDEyQzJEQjZBIiwiaWF0IjoxNjI0Mjg0NDAzLCJzY29wZSI6WyJlY29zc2lzdGVtYWNhcnRvZXMiXSwiYW1yIjpbInB3ZCJdfQ.bIrrqjcdhn8cW09RM7yLMWpkwonMJFBh4M9899sSr7NsVGswfG3zC53sOX0xeoEGBK_93O8opC14k9pBItJMXPniFCbL4GqnR7GG_JLNLTEuMmgChIj0gjBq7QNPoRRLetzpkWaVg3jQc5L_iSFlE9rcF4Z8NYD9A4LSxOZH1dGBq9ydzDM6IVMtUZ4qHbW0ifIJ6JfgB0AYQ3ISYbgm-WExjeW6_WffTzt7WAPru7-Fgjp6_PjUZxf9KJVA5TNIH3-VN3kuOlJ31g9waziVBsT6GqiXD8myrgBuAH-Nt6dp8aYyz0Z02T4Ip0ED80RBCYnOQnZcdNr-rydtIwUA5Q");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "proposta": "123456789"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(`${apis.LOCALHOST}/user/Antifraude/brasilInDoc`, requestOptions)
      .then(response => response.json())
      .then(result => novaSolicitacao(result))
      .catch(error => console.log('error', error));

}
