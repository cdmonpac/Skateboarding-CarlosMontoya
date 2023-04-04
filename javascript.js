let timerId;

function update() {
  let clock = document.getElementById('clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  // establece un nuevo intervalo solo si el reloj está detenido
  // de otro modo sobreescribiríamos la referencia timerID del intervalo en ejecución y no podríamos detener el reloj nunca más
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update(); // <--  inicia ahora mismo, no espera 1 second hasta el primer intervalo
}

function clockStop() {
  clearInterval(timerId);
  timerId = null; // <-- borra timerID para indicar que el reloj fue detenido, haciendo posible iniciarlo de nuevo en clockStart()
}