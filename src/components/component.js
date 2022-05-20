class Usuario {
    constructor(names, lastname,age,city,state,ID){
        this.nombre = names;
        this.apellido = lastname;
        this.edad = age;
        this.ciudad = city;
        this.estado = state;
        this.identificacion = ID;
    }
    
}
// funcion que pide y almacena datos en un arreglo que luego almacena en el obejeto
function enviar(){
	let item =localStorage.getItem("ListaUsuarios");

    let names = document.getElementById("nombre").value;
        if (names == ""){
            event.preventDefault();
            document.getElementById("vacioN").innerHTML ="Campo Vacio"
      
            return false;
        }
    let lastname = document.getElementById("apellido").value;
    let age = document.getElementById("edad").value;
        if(isNaN(age)){
            event.preventDefault();
            document.getElementById("error").innerHTML = "No Ingresaste una Edad Valida. INTENTE NUEVAMENTE"
           
            return false;
        } else if(age == ""){
            event.preventDefault();
            document.getElementById("error").innerHTML = "Campo Vacio"
           
            return false;
        }
    let city = document.getElementById("ciudad").value;
    let state = document.getElementById("estado").value;
    let ID = document.getElementById("identificacion").value;
    let usuario_nuevo = new Usuario(names,lastname,age,city,state,ID);
    
        if (item) {
            let save = JSON.parse(localStorage.getItem("ListaUsuarios"));
            save.push(usuario_nuevo);

            let save_string = JSON.stringify(save);
            localStorage.setItem("ListaUsuarios", save_string);
        }else{
            let save = new Array();
            save.push(usuario_nuevo);
        
            let save_string = JSON.stringify(save);
            localStorage.setItem("ListaUsuarios", save_string);
        }
            
            return false;
}
document.getElementById("enviar").addEventListener("submit",enviar)
