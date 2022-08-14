console.clear();
const process = require("process");
let colors = require("colors")

let {crear, actualizar, listar, eliminar, filtrarPorEstados} = require("./funcionesDeTareas");
const funcionesDeTareas = require("./funcionesDeTareas");

let consola = process.argv[2];


if (process.argv[2] !== undefined) {
    consola = process.argv[2].toLowerCase();  
}
/* if (process.argv[3] !== undefined) {
            materia1 = process.argv[3].toLowerCase();
        } */

switch (consola) {

    case "listar":

        listar()
        break;
    
    case "filtrar": 

       let materia = process.argv[3];
       if (!materia) {
           return listar();
       }

       filtrarPorEstados(process.argv[3].toLowerCase());  // en filtrar me tomó el .toLowerCase() pero en las demás operaciónes no me deja. 
       
       let guardarEstado = process.argv[3].toLowerCase();
       
       break;
    


    case "crear":

        let Titulo = process.argv[3];
        let Estado = "pendiente"  // en el TP 2 dice que el estado debe ser siempre : pendiente. 
            if (!Titulo && !Estado) {
                console.log("Error: Debes ingresar datos".red.bold);
                break;
            } else if (!Titulo || !Estado) {
                console.log("Debes ingresar un Título y su estado.".red.bold);
                break;
            }
        let nueva = {
            Titulo,
            Estado : "pendiente"
        }
        crear(nueva)
        break;

    case "actualizar":
        let materia1 = process.argv[3];
        if (!materia1) {
            console.log("Debes ingresar el nombre de la materia que deseas actualizar.".red.bold);
            break;
        }

        /* if (process.argv[3] !== undefined) {
            materia1 = process.argv[3].toLowerCase();
            break;
        } */

        actualizar(process.argv[3]);
        break;    

    case "eliminar":

        let materia2 = process.argv[3];
        if (!materia2) {
            console.log("Debes ingresar el nombre de la materia a eliminar.".red.bold);
            break;
        }

        eliminar(process.argv[3])
        break;   

    case undefined: 
        
        console.log("Atención!! Tienes que pasar una acción:\nlistar, agregar, actualizar, filtrar o eliminar.".yellow);    
        break;

    default:

        console.log("No entiendo qué quieres hacer.".magenta.bold);
        break;
}
