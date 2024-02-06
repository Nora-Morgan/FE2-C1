/* -------------------------------------------------------------------------- */
/*                                  FUNCION 1                                 */
/* -------------------------------------------------------------------------- */
// function iniciarJuego() {

//       // saludamos al usuario
//       alert("Bienvenido al piedra papel o tijera de Frontend II.");
//       // guardamos en una variable en nombre ingresado
//       const nombre = prompt("Ingese su nombre por favor:")
  
//       alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
  
//       // mostramos los datos por consola
//       console.log("----------------------------");
//       console.log("El jugador es:")
//       console.log(nombre);
//       console.log("----------------------------");
  
//       return nombre;
//   }


  /* -------------------------------------------------------------------------- */
  /*                          CONSIGNA MESA DE TRABAJO                          */
  /* -------------------------------------------------------------------------- */
  // 1- Modificar la funcion de iniciarJuego(), validar si ingresa un dato válido como nombre.
  // 2- Si no ingresa un texto, o tiene menos de 3 caracteres debemos volverle a pedir que lo ingrese.
  // 3- Finalmente el nombre devuelto debe estar todo en mayúsculas.

function iniciarJuego() {
      let ok = false;
      let soloLetras;
      // Saludar al usuario 
      alert("Bienvenido al piedra papel o tijera de Frontend II.");
  
      //Este bloque se debe ejecutar al menos una vez => estructura do...while
      do {
            //Pedir el nombre - Al string que ingresa por prompt, convertir a mayúsculas y quitar espacios
            let nombre = prompt("Ingese su nombre por favor:").toUpperCase().trim()
            
            //Expresión regular: solo letras
            soloLetras = /^[a-zA-Z]+$/;

            //Si el nombre contiene 3 o menos letras o si contiene caracteres que no sean letras
            if (nombre.length < 3 || !soloLetras.test(nombre)) {
                  alert("Tu nombre debe tener mas de 3 caracteres y no se permiten numeros");
                  nombre = prompt("Ingese su nombre por favor:").toUpperCase()
                  ok = true;
            } else {
                  ok = false;
                  alert("Gracias por jugar " + nombre + ". ¡Mucha suerte!");
                  // Mostrar los datos por consola
                  console.log("----------------------------");
                  console.log("El jugador es:")
                  console.log(nombre);
                  console.log("----------------------------");
                  return nombre;
            }
      } while (ok == true)
  }
  
  // guardamos el nombre del jugador que nos devuelve la función
  const nombreJugador = iniciarJuego();
  
