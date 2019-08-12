function leerNombre(){
    let campoNombre = document.querySelector(".NombreForm");
    let nombre = campoNombre.value;
    let apellido= document.querySelector(".ApellidoForm").value;
    let email=document.querySelector(".MailForm").value;
    let telefono = document.querySelector(".TelefonoForm").value;
    let consulta = document.querySelector(".ConsultaForm").value;
    
    lista = [nombre, apellido,email, telefono,consulta];
    for (i in lista){
        if (lista[i] === ""){
            alert("Error: Formulario vacío!");
            return
    }
    
    //Otra forma de solucionarlo sería
    //  if (nombre || apellido || email || telefono || consulta=== ""){
    //      alert("Esta vacio!");
    //      return
    // }
    }
}

