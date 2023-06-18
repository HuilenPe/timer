let hs = min = sec = ms = "0" + 0, startTimer;
//Aquí se declaran las variables hs, min, sec, y ms y se les asigna el valor inicial de "0" + 0.    
//También se declara la variable startTimer sin asignarle un valor inicial.
// Estas variables se utilizan para mantener el estado del tiempo en horas, minutos, segundos y milisegundos respectivamente.

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
//Estas líneas obtienen referencias a los elementos del DOM que tienen los ids "start", "stop" y "reset", respectivamente, y los asigna a las variables startBtn, stopBtn y resetBtn.

startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)
//Estas líneas agregan event listeners a los botones de start stop y reset. Cuando se hace clic, se ejecutan las funciones que corresponda.

function start() {
    startBtn.classList.add("active")
    stopBtn.classList.remove("active")
//Esta función se ejecuta cuando se hace clic en el botón de start.
//Agrega "active" a start y elimina "active" de stop. Esto se hace para que el botón start se vea como si estuviera presionado y el botón de parada se vea como si no estuviera presionado.
    startTimer = setInterval(() => { //setI es para ejecutar una función cada 10 milisegundos
        ms++
        ms = ms < 10 ? "0" + ms : ms

        if (ms == 100) {
            sec++
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
}

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
