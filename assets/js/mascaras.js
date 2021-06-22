function mascaraMutuario(o, f) {
    v_obj = o
    v_fun = f
    setTimeout('execmascara()', 1)
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1)
}

function fMascEx() {
    obj.value = masc(obj.value)
}

function mData(data) {
    data = data.replace(/\D/g, "")
    data = data.replace(/(\d{2})(\d)/, "$1/$2");
    data = data.replace(/(\d{2})(\d)/, "$1/$2")
    return data
}

function mTelefone(telefone) {
    telefone = telefone.replace(/\D/g, "")
    telefone = telefone.replace(/(\d{0})(\d)/, "$1($2")
    telefone = telefone.replace(/(\d{2})(\d)/, "$1)$2")
    telefone = telefone.replace(/(\d{5})(\d)/, "$1-$2")
    return telefone
}

function mTelefoneCliente(telefone) {
    telefone = telefone.replace(/\D/g, "")
    telefone = telefone.replace(/(\d{4})(\d)/, "$1-$2")
    return telefone;
}



function mCEP(cep) {
    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/(\d{5})(\d)/, "$1-$2")
    return cep;
}

function moeda(a, e, r, t) {
    let n = "",
        h = j = 0,
        u = tamanho2 = 0,
        l = ajd2 = "",
        o = window.Event ? t.which : t.keyCode;
    a.value = a.value.replace('R$ ', '');
    if (n = String.fromCharCode(o),
        -1 == "0123456789".indexOf(n))
        return !1;
    for (u = a.value.replace('R$ ', '').length,
        h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
    ;
    for (l = ""; h < u; h++)
        -
        1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
    if (l += n,
        0 == (u = l.length) && (a.value = ""),
        1 == u && (a.value = "R$ 0" + r + "0" + l),
        2 == u && (a.value = "R$ 0" + r + l),
        u > 2) {
        for (ajd2 = "",
            j = 0,
            h = u - 3; h >= 0; h--)
            3 == j && (ajd2 += e,
                j = 0),
            ajd2 += l.charAt(h),
            j++;
        for (a.value = "R$ ",
            tamanho2 = ajd2.length,
            h = tamanho2 - 1; h >= 0; h--)
            a.value += ajd2.charAt(h);
        a.value += r + l.substr(u - 2, u)
    }
    return !1
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value)
}

function cpfCnpj(v) {

    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "")

    if (v.length <= 14) { //CPF

        //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2");

        //Coloca um ponto entre o terceiro e o quarto dígitos
        //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, "$1.$2");

        //Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    } else { //CNPJ

        //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})(\d)/, "$1.$2");

        //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");

        //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");

        //Coloca um hífen depois do bloco de quatro dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2");

    }

    return v

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    const $result = $("#result");
    const email = $("#email").val();
    $result.text("");

    if (validateEmail(email)) {
        $result.text(email + " is valid :)");
        $result.css("color", "green");
    } else {
        $result.text(email + " is not valid :(");
        $result.css("color", "red");
    }
    return false;
}

$("#validate").on("click", validate);


function Rg(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/, "$1.$2.$3-$4");
    return v;
}

function FormataConta(campo, tammax, pos, teclapres) {
    var keyCode;
    if (teclapres.srcElement) {
        keyCode = teclapres.keyCode;
    } else if (teclapres.target) {
        keyCode = teclapres.which;
    }
    if (keyCode == 0 || keyCode == 8) {
        return true;
    }
    if ((keyCode < 48 || keyCode > 57) && keyCode != 88 && (keyCode != 120)) {
        return false;
    }
    var tecla = keyCode;
    vr = campo.value;
    vr = vr.replace("-", "");
    vr = vr.replace("/", "");

    tam = vr.length;
    if (tam < tammax && tecla != 8) {
        tam = vr.length + 1;
    }
    if (tecla == 8) {
        tam = tam - 1;
    }
    if (tecla == 8 || tecla == 88 || tecla >= 48 && tecla <= 57 || tecla >= 96 && tecla <= 105 || tecla == 120) {
        if (tam <= 2) {
            campo.value = vr;
        }
        if (tam > pos && tam <= tammax) {
            campo.value = vr.substr(0, tam - pos) + "-" + vr.substr(tam - pos, tam);
        }
    }
}

function mcc(v) {
    v = v.replace(/\D/g, ""); // Permite apenas dígitos
    v = v.replace(/(\d{4})/g, "$1."); // Coloca um ponto a cada 4 caracteres
    v = v.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
    v = v.substring(0, 19) // Limita o tamanho

    return v;
}

function pispasep(v) {
    v = v.replace(/\D/g, "") //Remove tudo o que não é dígito
    v = v.replace(/^(\d{3})(\d)/, "$1.$2") //Coloca ponto entre o terceiro e o quarto dígitos
    v = v.replace(/^(\d{3})\.(\d{5})(\d)/, "$1.$2.$3") //Coloca ponto entre o quinto e o sexto dígitos
    v = v.replace(/(\d{3})\.(\d{5})\.(\d{2})(\d)/, "$1.$2.$3.$4") //Coloca ponto entre o décimo e o décimo primeiro dígitos
    return v
}

function data(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{2})(\d)/, "$1/$2")
    v = v.replace(/(\d{2})(\d)/, "$1/$2")
    return v;
}

function DataHora(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '00/00/0000 00:00:00') {
        campo.value = ""
    }

    caracteres = '0123456789';
    separacao1 = '/';
    separacao2 = ' ';
    separacao3 = ':';
    conjunto1 = 2;
    conjunto2 = 5;
    conjunto3 = 10;
    conjunto4 = 13;
    conjunto5 = 16;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (19)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        else if (campo.value.length == conjunto4)
            campo.value = campo.value + separacao3;
        else if (campo.value.length == conjunto5)
            campo.value = campo.value + separacao3;
    } else
        event.returnValue = false;
}

function Hora(evento, objeto) {
    var keypress = (window.event) ? event.keyCode : evento.which;
    campo = eval(objeto);
    if (campo.value == '00:00:00 00/00/0000') {
        campo.value = ""
    }

    caracteres = '0123456789';
    separacao1 = ':';
    separacao2 = ' ';
    separacao3 = '/';
    conjunto1 = 2;
    conjunto2 = 5;
    conjunto3 = 10;
    conjunto4 = 13;
    conjunto5 = 16;
    if ((caracteres.search(String.fromCharCode(keypress)) != -1) && campo.value.length < (19)) {
        if (campo.value.length == conjunto1)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto2)
            campo.value = campo.value + separacao1;
        else if (campo.value.length == conjunto3)
            campo.value = campo.value + separacao2;
        else if (campo.value.length == conjunto4)
            campo.value = campo.value + separacao3;
        else if (campo.value.length == conjunto5)
            campo.value = campo.value + separacao3;
    } else
        event.returnValue = false;
}

function mHora(val) {
    val = val.split(":");
    return (parseInt(val[0]) > 19)? "HZ:M0" : "H0:M0"

}

function mQtde(v) {
    v = /d{3}-\d{3}-\d{4}/
    return v;
}


// function mHora(v) {
//     v = ([01][0-9]|2[0-3]):[0-5][0-9];
//     return v;


// }

function mQtde(v) {
    v = /d{3}-\d{3}-\d{4}/
    return v;
}


function nCartTrab(v) {
    v = v.replace(/\D/g, ""); // Permite apenas dígitos
    v = v.substring(0, 7) // Limita o tamanho

    return v;
}

function sCartTrab(v) {
    v = v.replace(/\D/g, ""); // Permite apenas dígitos
    v = v.substring(0, 4) // Limita o tamanho

    return v;
}

function nContrtato(v) {
    v = v.replace(/\D/g, ""); // Permite apenas dígitos
    return v;
}

function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    } catch (err) {
        alert(err.Description);
    }
}

//Numero de cartao
// function ncc(v){
//     v = v.replace(/\D/g,""); // Permite apenas dígitos
//     v = v.replace(/(\d{4})/g, "$1."); // Coloca um ponto a cada 4 caracteres
//     v = v.replace(/\.$/, ""); // Remove o ponto se estiver sobrando
//     v = v.substring(0, 19)// Limita o tamanho

//     return v;
//   }

function mComissao(v) {
    var d = v.replace(/\D/g, "");
    d = d.replace(/(\d{2,3})(\d{2,3})$/, "$1.$2");
    return d;
}
