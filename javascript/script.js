function leerNombre(){
    let campoNombre = document.querySelector(".NombreForm");
    let nombre = campoNombre.value;
    let apellido= document.querySelector(".ApellidoForm").value;
    let email=document.querySelector(".MailForm").value;
    let telefono = document.querySelector(".TelefonoForm").value;
    let consulta = document.querySelector(".ConsultaForm").value;
    
    lista = [nombre, apellido,email, telefono,consulta];
    // console.log(nombre);
        // "Apellido: ", apellido, "\n",
        // "Email: ", email, "\n", 
        // "Telefono: ", telefono, "\n",
        // "Consulta: ", consulta);
    for (i in lista){
        if (lista[i] === ""){
            alert("Esta vacio vieja!");
            return
    }
    
    //  if (nombre || apellido || email || telefono || consulta=== ""){
    //      alert("Esta vacio vieja!");
    //      return
    // }
    }
}

