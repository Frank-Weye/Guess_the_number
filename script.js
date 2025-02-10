function FuncionMostrarAlerta ( ) {  
alert ("¡¡¡¡¡No te distraigas, sigue adivinando!!!!!")}
var secretNumber = Math.floor(Math.random() * 10) + 1;
    // Puedes descomentar la siguiente línea para ver el número en la consola durante pruebas:
    // console.log("Número secreto:", secretNumber);

    function guessNumber() {
      // Obtiene el valor ingresado y lo convierte a número entero
      var guess = parseInt(document.getElementById("guessInput").value, 10);
      
      
      if (isNaN(guess)) {
        document.getElementById("message").textContent = "Por favor, ingresa un número válido.";
        return;
      }

      
      if (guess < secretNumber) {
        document.getElementById("message").textContent = "El número que pienso es mayor.";
      } else if (guess > secretNumber) {
        document.getElementById("message").textContent = "El número que pienso es menor.";
      } else {
        document.getElementById("message").textContent = "¡Felicidades, adivinaste el número!";
      }
    }
  
