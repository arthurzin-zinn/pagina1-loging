 function logar(){
    email = document.getElementById("email").value;
    senha = document.getElementById("senha").value;

    if(email == 'teste@gmail.com' && senha == '123'){
        window.location.href = 'https://www.google.com/';
    }
    else {
        alert("errado")
    }
}
