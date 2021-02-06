
//declarar=asignar variables con expresiones regulares
let expresion_regular_rut =/^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
let expresion_regular_nombre =/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let expresion_regular_apellido=/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
let expresion_regular_edad =/^\d{1,2}$/;
let expresion_regular_correo =/\w+@\w+\.+[a-z]/;
let expresion_regular_fecha =  /^\d{2}-\d{2}-\d{4}$/;
let mensaje_final = document.getElementById("mensaje-final");

/*
boton.addEventListener("click", function() {
    validarCampos();
});
*/
//function inicializarCampos(){
   function validar(){
   let rut, nombre, apellido,edad, correo,especialidad, fecha, hora;
    rut= document.getElementById ("rut").value;
    nombre= document.getElementById ("nombre").value;
    apellido= document.getElementById ("apellido").value;
    edad= document.getElementById ("edad").value;
    correo= document.getElementById ("correo").value;
    especialidad=document.getElementById ("especialidad").value;
    fecha= document.getElementById ("fecha").value;
    hora= document.getElementById ("hora").value;
    let boton = document.getElementById("boton");
}
/*
function validarCampos(){
    inicializarCampos();
    */
   let boton = document.getElementById("boton");
   boton.addEventListener("click", function() {
       validar();
    if(rut.value != "" && nombre.value != "" && apellido.value != "" && edad.value != "" && correo.value != "" && fecha.value != "" ){
      if(expresion_regular_fecha.test(fecha.value)){
         if(expresion_regular_correo.test(correo.value)){
            if(expresion_regular_edad.test(edad.value)){
               if(expresion_regular_apellido.test(apellido.value)){
                  if(expresion_regular_nombre.test(nombre.value)){
                     if(expresion_regular_rut.test(rut.value)){
                        mensajeAlerta();
                     }
                     else{
                        alert("RUT Formato Incorrecto ");
                     }
                  }else{
                     alert("nombre Formato Incorrecto ");
                  }
               }else{
                  alert("apellido Formato Incorrecto ");
               }
            }else{
              alert("edad Formato Incorrecto ");
            }
         }else{
            alert("correo Formato Incorrecto ");
         }
      }else{
         alert("fecha Formato Incorrecto ");
      }
   } else{
      alert("Todos los campos son Obligatorios");
   }
})

function mensajeAlerta(){
   console.log("DEBUG:::: ENTRE AL MENSAJE DE ALERTA");
   mensaje_final.innerHTML=`Estimada(o): ${nombre.value} ${apellido.value}, su hora para ${especialidad.value} 
   ha sido reservada para el día ${fecha.value} a las ${hora.value} Además, se le envió un mensaje a su correo ${correo.value} con el detalle de su cita. 
   Gracias por preferirnos.`;
}