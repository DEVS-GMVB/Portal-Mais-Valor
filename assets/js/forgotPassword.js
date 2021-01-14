



const PrimeiraSenha = document.getElementById('input-password-1')
PrimeiraSenha.addEventListener('focusout',()=>{
    // PrimeiraSenha.value
    console.log('olá');

    

})
// addEventListener('focusout',alert('saiu'));






// const token = document.getElementById('input-token').value;
// console.log(token);
function senhaValida(senha){

    let retorno = false;
    let letrasMaiusculas = /[A-Z]/;
    let letrasMinusculas = /[a-z]/; 
    let numeros = /[0-9]/;
    let caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    if(senha.length > 8)
            return retorno;
    
    if(senha.length < 8)
        return retorno;
    
    let auxMaiuscula = 0;
    let auxMinuscula = 0;
    let auxNumero = 0;
    let auxEspecial = 0;

    for(var i=0; i<senha.length; i++){

        if(letrasMaiusculas.test(senha[i]))
        auxMaiuscula++;
        else if(letrasMinusculas.test(senha[i]))
        auxMinuscula++;
        else if(numeros.test(senha[i]))
        auxNumero++;
        else if(caracteresEspeciais.test(senha[i]))
        auxEspecial++;
    }
    if (auxMaiuscula > 0){
        if (auxMinuscula > 0){
            if (auxNumero > 0){
                if (auxEspecial) {
                        retorno = true;
                }
            }
        }
    }
}
