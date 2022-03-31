import {mostrarAlerta, validar} from './funciones.js';
import {nuevoCliente} from './API.js'

(function(){
     const formulario = document.querySelector('#formulario');
     formulario.addEventListener('submit', validarCliente);

     function validarCliente(e){
          e.preventDefault();

          // Selectores de los inputs
          const nombre = document.querySelector('#nombre').value;
          const email = document.querySelector('#email').value;
          const telefono = document.querySelector('#telefono').value;
          const empresa = document.querySelector('#empresa').value;

          // Se crea un cliente con los values de los inputs
          const cliente = {
               nombre, 
               email, 
               telefono, 
               empresa
          }

          // Si hay un campo vacio, entra a este if
          if(validar(cliente)){
               mostrarAlerta('Todos los campos son obligatorios');
               return;
          }


          nuevoCliente(cliente);
     }     
})();