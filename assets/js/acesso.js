let empresa = document.getElementById("id-cadusu-empresa");
let incluirAcesso = document.getElementById("incluirAcesso");
var lista = [];
let cpfIncluirAcesso = -1;
let tempArray = [];


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch(URL+"/user/proposta/empresas", requestOptions)
  .then(response => response.json().then(function (data) {
    for (let i = 0; i < data.length; i++) {
      empresa.innerHTML += '<option value="' + data[i].empresa + '">' + data[i].empresa + '</option>;'
    }
  })).catch(error => console.log('error', error));


incluirAcesso.addEventListener('click', () => {
  let empre = document.getElementById("id-cadusu-empresa").value;
  let usuario = document.getElementById('id-cadusu-usuario').value;
  let senha = document.getElementById('id-cadusu-senha').value;
  let login = document.getElementById('id-cadusu-login').value;
  let novamenteSenha = document.getElementById('id-cadusu-novamentesenha').value;
  let tipoUsuario = document.getElementById('id-cadusu-tipousu').value;
  let usuMaster = document.getElementById('id-cadusu-usumaster').value;
  let classi = document.getElementById('id-cadusu-classi').value;
  let cc = document.getElementById('id-cadusu-empresa').value;
  let status = document.getElementById('id-cadusu-status').value;
  // let telCelular = document.getElementById('id-cadusu-telcelular').value;
  let cpfcnpjAcesso = document.getElementById('id-cadusu-cpfcnpj').value;
  let email = document.getElementById('id-cadusu-email').value;
  let motCancela = document.getElementById('id-cadusu-motcancela').value;
  let perfilAcesso = document.getElementById('id-cadusu-perfilacesso').value;
  let acessoOle = document.getElementById('id-cadusu-acessoole').value;
  let acessoPan = document.getElementById('id-cadusu-acessopan').value;
  let acessoCetelem = document.getElementById('id-cadusu-acessocetelem').value;
  let acessoItau = document.getElementById('id-cadusu-acessoitau').value;
  let f5bmg = document.getElementById('id-cadusu-acef5bmg').value;
  let f5itau = document.getElementById('id-cadusu-acef5itau').value;
  let aceDaycoval = document.getElementById('id-cadusu-acedaycoval').value;
  let aceSim = document.getElementById('id-cadusu-acesim').value;
  let aceSafra = document.getElementById('id-cadusu-acesafra').value;
  let aceBradesco = document.getElementById('id-cadusu-acebradesco').value;
  let aceParana = document.getElementById('id-cadusu-aceparana').value;
  let aceCrefisa = document.getElementById('id-cadusu-crefisa').value;
  let aceConsorcio = document.getElementById('id-cadusu-aceconsorciobb').value;
  let aceConsCaixa = document.getElementById('ace-cadusu-conscaixa').value;
  let aceConsItau = document.getElementById('id-cadusu-aceconsitau').value;
  let cnpjMatriz = document.getElementById("id-cadusu-cnpjMatriz").value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    cnpj_matriz: cnpjMatriz,
    nome: login,
    empresa: empre,
    perfil: perfilAcesso,
    usuario: usuario,
    senha: senha,
    responsavel: "",
    cpf_usuario: cpfcnpjAcesso,
    tipo_parceiro: tipoUsuario,
    usuario_master: usuMaster,
    classificacao: classi,
    status: status,
    tipo_parceiro2: "",
    email: email,
    data_nascimento: "",
    data_atualizacao: "",
    foto: "",
    telefone: "",
    arquivo1: "",
    arquivo2: "",
    tipo: "",
    motivo_cancelamento: motCancela,
    cetelem: acessoCetelem,
    f5_ole: "",
    f5_pan: "",
    f5_bmg: f5bmg,
    f5_orienta: "",
    f5_itau: f5itau,
    f5_safra: "",
    ole: acessoOle,
    pan: acessoPan,
    sim: aceSim,
    daycoval: aceDaycoval,
    safra: aceSafra,
    bradesco: aceBradesco,
    parana: aceParana,
    consorcio_bb: aceConsorcio,
    consorcio_itau: aceConsItau,
    consorcio_caixa: aceConsCaixa,
    crefisa: aceCrefisa,
    itau: acessoItau
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("http://172.16.0.197:3000/user/cadastro/acesso", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log("Resposta da inclusão",result);

      if (!(result.erro === 'usuario já tem acesso cadastrado')) {

        lista.pop();
        lista.push(result);
        tempArray.push(result);
        lista.forEach((element) => {
          t = element.cpf_usuario;
          let specific_tbody = document.getElementById("lista");
          let row = specific_tbody.insertRow(-1);
          let name = row.insertCell(-1);
          let cpf = row.insertCell(-1);
          let cnpj = row.insertCell(-1);
          let resp = row.insertCell(-1);
          let date = row.insertCell(-1);
          let alteraVisualizar = row.insertCell(-1);

          let nameTex = document.createTextNode(`${element.nome}`)
          name.appendChild(nameTex);

          let cpfText = document.createTextNode(`${element.cpf_usuario}`)
          cpf.appendChild(cpfText);

          let cnpjText = document.createTextNode(`${element.cnpj_matriz}`)
          cnpj.appendChild(cnpjText);

          let respText = document.createTextNode(`${element.responsavel}`)
          resp.appendChild(respText);

          let dateText = document.createTextNode(`${element.data_atualizacao}`)
          date.appendChild(dateText);
         

          cpfIncluirAcesso++;
          alert("Usuário cadastrado com sucesso");
          alteraVisualizar.innerHTML = `
          <div class="actions ml-3 text-center">
              <a href="#" class="action-item mr-0" data-toggle="tooltip" title="Alterar">
                  <i class="fas fa-external-link-alt"  onclick="editarCpfAcesso(tempArray[${cpfIncluirAcesso}].id_acesso)"></i>
              </a>
          </div>`


        });
      }
      else if (result.erro === 'usuario já tem acesso cadastrado') {
        // console.log(result.erro)
        if ($("#id-cadusu-cpfcnpj").val() === "") {
          alert("Preencha os dados");
        } else {
          alert("Usuário já existente")
        }
        while (lista.length !== 0) {
          lista.pop();
        }
      }

      // $("#form-acesso-incluir").each(function () {
      //   this.reset();
      // })


    })
    .catch(error => console.log('error', error));

})

function editarCpfAcesso(e) {
  // console.log(e);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // console.log(e)
  var raw = JSON.stringify({
    id_acesso: e
  })

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  }

  fetch("http://172.16.0.197:3000/user/cadastro/busca/acesso", requestOptions).
  then(response => response.json().then(function (data){  

    // console.log("Resposta do alterar", data);

    $("#id-cadusu-usuario").val(data.usuario);
    $("#id-cadusu-login").val(data.nome);
    $("#id-cadusu-senha").val(data.senha);
    $("id-cadusu-novamentesenha").val(data.senha);
    $("#id-cadusu-tipousu").val(data.tipo);
    $("#id-cadusu-usumaster").val(data.usuario_master);
    $("#id-cadusu-classi").val(data.classificacao);
    $("#id-cadusu-empresa").val(data.empresa);
    $("#id-cadusu-status").val(data.status);
    $("#id-cadusu-telcelular").val(data.telefone);
    $("#id-cadusu-cpfcnpj").val(data.cpf_usuario)
    $("#id-cadusu-cnpjMatriz").val(data.cnpj_matriz);
    $("#id-cadusu-email").val(data.email);
    $("#id-cadusu-motcancela").val(data.motivo_cancelamento);
    $("#id-cadusu-perfilacesso").val(data.perfil);
    $("#id-cadusu-acessoole").val(data.ole);
    $("#id-cadusu-acessopan").val(data.pan);
    $("#id-cadusu-acessocetelem").val(data.cetelem);
    $("#id-cadusu-acessoitau").val(data.itau);
    $("#id-cadusu-acef5bmg").val(data.f5_bmg);
    $("#id-cadusu-acef5itau").val(data.f5_itau);
    $("#id-cadusu-acedaycoval").val(data.daycoval);
    $("#id-cadusu-acesim").val(data.sim);
    $("#id-cadusu-acesafra").val(data.safra);
    $("#id-cadusu-acebradesco").val(data.bradesco);
    $("#id-cadusu-aceparana").val(data.parana);
    $("#id-cadusu-crefisa").val(data.crefisa);
    $("#id-cadusu-aceconsorciobb").val(data.consorcio_bb);
    $("#ace-cadusu-conscaixa").val(data.consorcio_caixa);
    $("#id-cadusu-aceconsitau").val(data.consorcio_itau);


  })).catch(error => console.log('error', error))

}



let cpfcnpjIncluir = document.getElementById("validationCpfCadastro");
cpfcnpjIncluir.addEventListener('blur', () => {
  $("#id-cadusu-cnpjMatriz").val(cpfcnpjIncluir.value);
})
