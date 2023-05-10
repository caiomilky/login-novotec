//definindo variaveis de login
var usuario = "milkycaiolol@senai.com.br";
var senha = "lolo123";

//função que valida o login
function autenticalogin(){
    let verificausuario = document.getElementById("name").value;
    let verificasenha = document.getElementById("password-example").value;
    if (verificausuario==usuario && verificasenha==senha) {
        
    } else {
        
    }
    alert("Usuario ou senha incorretos");
}