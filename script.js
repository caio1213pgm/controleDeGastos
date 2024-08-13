function validarCampoEmail() {
    botoesHabilitados();
    emailErro();
}

function validarCampoSenha(){
    botoesHabilitados();
    senhaErro();
}

function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}

function emaileValido(){
    const email = document.getElementById('email').value;
    if(!email){
        return false;
    }
    return validarEmail(email);
}

function senhAeValido(){
    const senha = document.getElementById('senha').value;

    if(!senha){
        return false;
    }
    return true;
}

function emailErro(){
    const email = document.getElementById('email').value;
    if(!email){
        document.getElementById('email-Obg-Erro').style.display = "block";
    } 
    else{
        document.getElementById('email-Obg-Erro').style.display = "none";
    }

    if(validarEmail(email)){
        document.getElementById('email-Inv-Erro').style.display = "none";
    }
    else{
        document.getElementById('email-Inv-Erro').style.display = "block";
    }
}

function senhaErro(){
    const senha = document.getElementById('senha').value;

    if(!senha){
        document.getElementById('senha-Erro').style.display = "block";
    }
    else{
        document.getElementById('senha-Erro').style.display = "none";
    }
}

function botoesHabilitados(){
    const emailValido = emaileValido();
    document.getElementById('btn-recuperar').disabled = !emailValido;

    const senhaValida = senhAeValido();
    document.getElementById('btn-login').disabled = !emailValido || !senhaValida;
}
