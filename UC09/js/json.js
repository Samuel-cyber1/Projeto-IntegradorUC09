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

document.getElementById("Json").value = vJson;

}


function exibeJson() {

    var urlJson = new URLSearchParams(location.search);

    document.getElementById("Json").innerHTML =  urlJson.get("vJson");
}