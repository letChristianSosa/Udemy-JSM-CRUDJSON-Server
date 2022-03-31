const url = 'http://localhost:3001/clientes';

// Cuando se crea nuevo cliente
export const nuevoCliente = async cliente => {
     try {
          await fetch(url, {
               method: 'POST',
               body: JSON.stringify(cliente),
               headers: {
                     'Content-Type': 'application/json'
               }
          });
          window.location.href = 'index.html';
     } catch (error) {
          console.log(error);
     }
};

// Obtener todos los clientes
export const obtenerClientes = async () => {
     try {
          const resultado = await fetch(url);
          const clientes = await resultado.json();
          return clientes;
     } catch (error) {
          console.log(error);
     }
}

// Eliminar un registro
export const eliminarCliente = async id => {
     try {
          await fetch(`${url}/${id}`,{
               method: 'DELETE'
          })
     } catch (error) {
          console.log(error);
     }
}

// Obtiene un cliente por su ID
export const obtenerCliente = async id => {
     try {
          const resultado = await fetch(`${url}/${id}`);
          const cliente = resultado.json();
          return cliente;
     } catch (error) {
          console.log(error);
     }
}

// Actualizar un registro

export const editarCliente = async cliente => {
     try {
          await fetch(`${url}/${cliente.id}`, {
               method: 'PUT',
               body: JSON.stringify(cliente),
               headers: {
                    'Content-Type': 'application/json'
               }
          });
          window.location.href = 'index.html';
     } catch (error) {
          console.log(error);
     }
}