var    vNome   =   document.getElementById("nome").value;
var   vTelefone =  document.getElementById("telefone").value;
var   vCPF  =  document.getElementById("cpf").value;
var  vCEP  =  document.getElementById("cep").value;
var   vRua  =  document.getElementById("rua").value;
var  vNumero  =  document.getElementById("numero").value;
var  vBairro  =  document.getElementById("bairro").value;
var vUf  =  document.getElementById("uf").value;




function gJson()  {

    var  objeto_formulario  = {
                    nome: "",
                    telefone: 0,
                    cpf: "",
                    cep: 0,
                    rua: "",
                    numero: 0,
                    bairro: "",
                    uf: "",
                }


objeto_formulario.nome = document.getElementById("nome").value;
objeto_formulario.telefone = document.getElementById("telefone").value;
objeto_formulario.cpf = document.getElementById("cpf").value;
objeto_formulario.cep = document.getElementById("cep").value;
objeto_formulario.rua = document.getElementById("rua").value;
objeto_formulario.numero = document.getElementById("numero").value;
objeto_formulario.bairro  = document.getElementById("bairro").value;
objeto_formulario.uf  =  document.getElementById("uf").value;

var vJson = JSON.stringify(objeto_formulario);

document.getElementById("Json").innerHTML = vJson;



}