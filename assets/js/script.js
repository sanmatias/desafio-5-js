listaTareas = [{id:16,tarea:'Hacer Mercado',estado:true},{id:60,tarea:'Estudiar para la prueba',estado:false},{id:24,tarea:'Aacar a pasear a Tobby',estado:false}]
contador = idMayor()
tarea = document.querySelector('.nuevaTarea')
lista = document.querySelector('.listaTareas')
total = document.querySelector('#total')
realizada = document.querySelector('#realizada')
cargarElementos()

function idMayor(){
   return listaTareas.reduce((idMmayor,trabajo)=>(trabajo.id> idMmayor ? trabajo.id:idMmayor),0)
}

function guardar(){
 contador++
    listaTareas.push({id:contador,tarea:tarea.value,estado:false})
    cargarElementos()
console.log(listaTareas)
}
function validarCheckBox(tarea){
    if(tarea.estado){
        
        return '<td> <input type="checkbox" class="centro" checked id="tarea'+tarea.id+'" onclick="chequeoEstado('+tarea.id +')"> </td>'
      }else{
        
          return '<td> <input type="checkbox" class="centro" onclick="chequeoEstado('+tarea.id +')" id="tarea'+tarea.id+'"> </td>'
      }
}
function eliminar(id){
const indice = listaTareas.findIndex( posicion => posicion.id == id)
listaTareas.splice(indice,1)

cargarElementos()
}
function cargarElementos(){
    contadorRealizadas = 0
    lista.innerHTML = ''
listaTareas.forEach(element => {
    
    lista.innerHTML += 
    '<p >'+element.id+'</p>'+
    '<p >'+element.tarea+'</p>'+
    validarCheckBox(element)

    +'<div > <button onclick="eliminar('+element.id+')">X</button> </div>';

    contarRealizadas()
});
total.innerHTML = listaTareas.length
}
function chequeoEstado(id){
    tareaEstado = document.querySelector("#tarea"+id)
    if(tareaEstado.checked){
        buscarEstado(id,true)
    }else{
        buscarEstado(id,false)
    }
    
    contarRealizadas()
}

function buscarEstado(id,estado){
    listaTareas.find(item => item.id == id).estado =estado
}

function contarRealizadas(){
    let contador= 0
    for(trabajo of listaTareas){
        if(trabajo.estado){
 contador++
        }
     } 
     realizada.innerHTML = contador
}