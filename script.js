// Estas variables se usan para mantener el estado del tiempo en hs, min, seg y miliseg.
let hs = "0" + 0
let min = "0" + 0
let sec = "0" + 0
let ms = "0" + 0
//Esta variable se utiliza para almacenar el valor devuelto por la función setInterval. Se utiliza para detener el temporizador.
let startTimer

//Esta contantes obtienen referencias a los elementos del DOM que tienen los ids "start", "stop" y "reset", respectivamente, y los asigna a las variables startBtn, stopBtn y resetBtn.
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

//Aquí se agrega un evento a los botones de start, stop y reset. Cuando se hace clic, se ejecutan las funciones que corresponda.
startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)

//Esta función se ejecuta cuando se hace clic en el botón de start.
//Agrega "active" a start y elimina "active" de stop. Esto se hace para que el btn start se vea como presionado y el btn de parada se vea como activo.
function start() {
    startBtn.classList.add("active")
    stopBtn.classList.remove("active")

    //setInterval para ejecutar una función cada 10 milisegundos
    //esta función se encarga de actualizar los valores de las variables del reloj y mostrarlos en el DOM.
    startTimer = setInterval(() => {
        ms++ 
        ms = ms < 10 ? "0" + ms : ms //esta variable depende de una condición, si es menor a 10, se le agrega un 0 al inicio, si no, se deja como está.

        if (ms == 100) {
            sec++ //
            sec = sec < 10 ? "0" + sec : sec
            ms = "0" + 0
        }

        if (sec == 60) {
            min++
            min = min < 10 ? "0" + min : min
            sec = "0" + 0
        }

        if (min == 60) {
            hr++
            hs = hs < 10 ? "0" + hs : hs
            min = "0" + 0
        }

        putValue()
    }, 10)

    function stop() {
        startBtn.classList.remove("active")
        stopBtn.classList.remove("stopActive")
        clearInterval(startTimer)
    }

    function reset() {
        startBtn.classList.remove("active")
        stopBtn.classList.remove("stopActive")
        clearInterval(startTimer)
        hs = min = sec = ms = "0" + 0
        putValue()
    }

    function putValue() {
        document.getElementById("millisecond").innerHTML = ms
        document.getElementById("second").innerHTML = sec
        document.getElementById("minute").innerHTML = min
        document.getElementById("hour").innerHTML = hs
    }
}
