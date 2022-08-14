console.clear();

let colors = require("colors");

const fs = require("fs");

let tareas = require("./tareas.json");

const escribirJSON = (tareas) => {
    fs.writeFileSync("./tareas.json", JSON.stringify(tareas, null, 3));
} 

        
 
module.exports = {
    
    crear: (tarea) => {

        tareas.push(tarea);
        escribirJSON (tareas);
        return console.log("Tarea agregada".green);

    },
    
    actualizar:(Titulo) => {

        let chequeo = tareas.filter(tarea => tarea.Titulo === Titulo);

            if (chequeo.length === 0) {
            return console.log("No está registrada esta materia".red);
            }

        let actualizadas = tareas.map(tarea => {
            if (tarea.Titulo === Titulo) {
                tarea.Estado = "terminada";
                return tarea;
            }
            return tarea;
        })
        escribirJSON(actualizadas);
        return console.log("Tarea actualizada".green);
    },
    
    eliminar: (Titulo) => {

        let filtrar = tareas.filter(tarea => {
            return tarea.Titulo !== Titulo;
        })
        escribirJSON(filtrar)
        return console.log("Tarea eliminada".red);
    },
    
    listar: () => {
        tareas.forEach((tarea, index) => {
            console.log(`${index + 1}) ${tarea.Titulo.green}: ${tarea.Estado.yellow}`);
        });
        return null; 
    },

    filtrarPorEstados: (estado) => {

            let leerPorEstado = tareas.filter(tarea =>{
                return tarea.Estado === estado
            })
        
            return console.log(leerPorEstado);
        }
        
} 