function validarCampo() {
    const email = document.getElementById('email').value;

    if(!email){
        document.getElementById('btn-recuperar').disabled = true;
    }
    else if(validarEmail(email)){
        document.getElementById('btn-recuperar').disabled = false;
    }
    else{
        document.getElementById('btn-recuperar').disabled = true;
    }

    function validarEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    }
}

