 const dataSession = {
    id_acesso: sessionStorage.getItem('id_acesso'),
    status: sessionStorage.getItem('status'),
    perfil: sessionStorage.getItem('perfil'),
    nome: sessionStorage.getItem('nome'),
    supervisor: sessionStorage.getItem('supervisor'),
    gerente: sessionStorage.getItem('gerente'),
    cnpj_matr: sessionStorage.getItem('cnpj_matriz'),
    cpf_user: sessionStorage.getItem('cpf_usuario'),
    tipo_usuario: sessionStorage.getItem('tipo_usuario'),
    supervisor_cpf: sessionStorage.getItem('supervisor_cpf'),
    gerente_cpf: sessionStorage.getItem('gerente_cpf')
  }

 const INDEXPAGE = "http://127.0.0.1:5501/paginas/assistencia24h.html";
 const LOCALHOST = "http://localhost:3000";


 export { dataSession , INDEXPAGE , LOCALHOST};

  