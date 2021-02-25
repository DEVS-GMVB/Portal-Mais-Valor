let empresa = document.getElementById("id-cadusu-empresa");
let divTrocarButtons = document.getElementById("alterarIncluirAcesso");
var lista = [];
let cpfIncluirAcesso = -1;
let tempArray = [];
let rowsAcessos = [];
let linha;
let liTeste;


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};


fetch(URL + "/user/proposta/empresas", requestOptions)
  .then(response => response.json().then(function (data) {
    for (let i = 0; i < data.length; i++) {
      empresa.innerHTML += '<option value="' + data[i].empresa + '">' + data[i].empresa + '</option>;'
    }
  })).catch(error => console.log('error', error));

//INCLUSÃO DE ACESSOS
function incluirAcessoFunction() {
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

  fetch(URL + "/user/cadastro/acesso", requestOptions)
    .then(response => response.json())
    .then(result => {
      // console.log("Resposta da inclusão", result);

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

          let nameTex = document.createTextNode(`${element.usuario}`)
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
          rowsAcessos.push(row);

          alteraVisualizar.innerHTML = `
              <div class="actions ml-3 text-center">
                  <a href="#" class="action-item mr-0" data-toggle="tooltip" title="Alterar">
                      <i class="fas fa-external-link-alt"  onclick="editarCpfAcesso(tempArray[${cpfIncluirAcesso}].id_acesso, rowsAcessos[${cpfIncluirAcesso}])"></i>
                  </a>
              </div>`

          $('#alertSucessoAcesso').show();
          $('#alertSucessoAcesso').fadeIn(300).delay(3000).fadeOut(400);
          document.getElementById("alertSucessoAcesso").textContent = "Acesso cadastrado com sucesso"

        });
      } else if (result.erro === 'usuario já tem acesso cadastrado') {
        if ($("#id-cadusu-cpfcnpj").val() === "") {
          //alert("Preencha os dados");
          $('#alertFalhaAcesso').show();
          $('#alertFalhaAcesso').fadeIn(300).delay(3000).fadeOut(400);
          document.getElementById("alertFalhaAcesso").textContent = "Preencha o campo cpf "
        } else {
          //alert("Usuário já existente")
          $('#alertFalhaAcesso').show();
          $('#alertFalhaAcesso').fadeIn(300).delay(3000).fadeOut(400);
          document.getElementById("alertFalhaAcesso").textContent = "Acesso já existente"
        }
        while (lista.length !== 0) {
          lista.pop();
        }
      }
    })
    .catch(error => console.log('error', error));


}

// faz parte do acesso quando incluido dispara este
function editarCpfAcesso(e, idRow) {
  console.log("Cliquei em alterar me passa a linha exata" + idRow)
  linha = idRow;

  // Trocar para o botão alterar
  divTrocarButtons.innerHTML = `
  <button type="button" class="btn btn-primary btn-icon-label" id="AlterarAcesso" onclick="alterarAcesso(${e},linha)">
    <span class="btn-inner--icon">
        <i class="fas fa-plus"></i>
    </span>
    <span class="btn-inner--text">Alterar</span>
  </button>`

  // Request para buscar este acesso pelo id
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
  then(response => response.json().then(function (data) {

    $("#id-cadusu-usuario").val(data.nome);
    $("#id-cadusu-login").val(data.usuario);
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
//Fim função de inclusão de acessos para mostrar suas aletrações

//Função de alterar quando gerado a lista de acessos vinculado a um cpf no cadastro
function funcCadastroAcessoAlterar(data, li) {
  liTeste = li;
  console.log(li)
  divTrocarButtons.innerHTML = `
  <button type="button" class="btn btn-primary btn-icon-label" id="AlterarAcesso" onclick="alterarAcesso(${data.id_acesso}, liTeste)">
    <span class="btn-inner--icon">
        <i class="fas fa-plus"></i>
    </span>
    <span class="btn-inner--text">Alterar</span>
  </button>`

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
  //-----------------
}

function alterarAcesso(idAcesso, objTr) {
  let cellsTr = objTr.cells;
  console.log("Recebi a linha após no botão alterar apareceu esta linha" + objTr)

  const empre = document.getElementById("id-cadusu-empresa").value;
  const usuario = document.getElementById('id-cadusu-usuario').value;
  const senha = document.getElementById('id-cadusu-senha').value;
  const login = document.getElementById('id-cadusu-login').value;
  const novamenteSenha = document.getElementById('id-cadusu-novamentesenha').value;
  const tipoUsuario = document.getElementById('id-cadusu-tipousu').value;
  const usuMaster = document.getElementById('id-cadusu-usumaster').value;
  const classi = document.getElementById('id-cadusu-classi').value;
  const cc = document.getElementById('id-cadusu-empresa').value;
  const status = document.getElementById('id-cadusu-status').value;
  // let telCelular = document.getElementById('id-cadusu-telcelular').value;
  const cpfcnpjAcesso = document.getElementById('id-cadusu-cpfcnpj').value;
  const email = document.getElementById('id-cadusu-email').value;
  const motCancela = document.getElementById('id-cadusu-motcancela').value;
  const perfilAcesso = document.getElementById('id-cadusu-perfilacesso').value;
  const acessoOle = document.getElementById('id-cadusu-acessoole').value;
  const acessoPan = document.getElementById('id-cadusu-acessopan').value;
  const acessoCetelem = document.getElementById('id-cadusu-acessocetelem').value;
  const acessoItau = document.getElementById('id-cadusu-acessoitau').value;
  const f5bmg = document.getElementById('id-cadusu-acef5bmg').value;
  const f5itau = document.getElementById('id-cadusu-acef5itau').value;
  const aceDaycoval = document.getElementById('id-cadusu-acedaycoval').value;
  const aceSim = document.getElementById('id-cadusu-acesim').value;
  const aceSafra = document.getElementById('id-cadusu-acesafra').value;
  const aceBradesco = document.getElementById('id-cadusu-acebradesco').value;
  const aceParana = document.getElementById('id-cadusu-aceparana').value;
  const aceCrefisa = document.getElementById('id-cadusu-crefisa').value;
  const aceConsorcio = document.getElementById('id-cadusu-aceconsorciobb').value;
  const aceConsCaixa = document.getElementById('ace-cadusu-conscaixa').value;
  const aceConsItau = document.getElementById('id-cadusu-aceconsitau').value;
  const cnpjMatriz = document.getElementById("id-cadusu-cnpjMatriz").value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id_acesso: idAcesso,
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

  //UPDATE ACESSOS SOMENTE
  fetch(URL + "/user/cadastro/acesso/alterar", requestOptions).
  then(response => response.text()).
  then(function (data) {
    atualizaListaAcesso(cellsTr)

    $('#alertSucessoAcesso').show();
    $('#alertSucessoAcesso').fadeIn(300).delay(3000).fadeOut(400);
    document.getElementById("alertSucessoAcesso").textContent = "Acesso alterado com sucesso"


  }).catch(error => console.log('erro', error))
  
  // Trocar o botão para fazer um insert
  divTrocarButtons.innerHTML = `
    <button type="button" class="btn btn-primary btn-icon-label" id="incluirAcesso" onclick="incluirAcessoFunction()">
    <span class="btn-inner--icon">
        <i class="fas fa-plus"></i>
    </span>
    <span class="btn-inner--text">Incluir / Alterar</span>
</button>
  `

}

let cpfcnpjIncluir = document.getElementById("validationCpfCadastro");
cpfcnpjIncluir.addEventListener('blur', () => {
  $("#id-cadusu-cnpjMatriz").val(cpfcnpjIncluir.value);
})

function atualizaListaAcesso(r){
  r[0].textContent = $("#id-cadusu-usuario").val()
  r[1].textContent = $("#id-cadusu-cpfcnpj").val()
  r[2].textContent = $("#id-cadusu-cnpjMatriz").val()

  // r.innerHTML = `
  // <td>${$("#id-cadusu-usuario").val()}</td>
  // <td>${$("#id-cadusu-cpfcnpj").val()}</td>
  // <td>${$("#id-cadusu-cnpjMatriz").val()}</td>
  // <td></td>
  // <td></td>
  
  // `
}