function testaCor(){
    const cor = document.getElementById("cor").value;

    if(cor === "azul" || cor === "Azul"){
        window.location.href = "http://google.com.br";
    }
    else{
        alert('tente novamente!');
    }

}
