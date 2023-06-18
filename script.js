 // creamos tres constantes que son las que utilizaremos 

 const stopwatch = document.getElementById('stopwatch'); //display del tiempo 
 const playPauseButton = document.getElementById('play-pause'); //boton de play que se va a ir cambiando en play/pause 
 const secondsSphere = document.getElementById('seconds-sphere'); //circulo que muestra el paso de tiempo 

 //dos variables que nos ayudan a controlar el cronometro.  

 let stopwatchInterval; // dónde vamos a guardar el intervalo del cronometro (que sea de 1 seg)
 let runningTime = 0; //llevar cuenta del tiempo que paso. 

 //variable play/pause que se llama cada vez que el usuario haga click en el boton de play/pause 

 const playPause = () => { 
    const isPaused =!playPauseButton.classList.contains('running'); 
    //esta pausado = (!es negación) NO.el botton playPause. tiene la clase "running". 
    if (isPaused) { 
        playPauseButton.classList.add('running'); //hacemos que arranque el cronometro. 
       start(); //llamamos a la funcion start() 
    } else { 
        playPauseButton.classList.remove('running'); 
      pause(); //llamamos a la funcion pause() 
    }
 }

 //creamos las variables de start()  pause() y stop()

 const pause = () => {
    //cambiamos la animación a pausa y borramos el intervalo que habiamos seteado. 
    secondsSphere.style.animationPlayState = 'paused'; 
    clearInterval(stopwatchInterval);
  };

const stop = () => {
    //creamos los estilos. 
    secondsSphere.style.transform = 'rotate(-90deg) transleteX(60px)';
    secondsSphere.style.animation = 'none';
    playPauseButton.classList.remove('running');

    //volvemos el cronometro a 0
    runningTime = 0;
    clearInterval(stopwatchInterval);
    stopwatch.textContent  = '00:00';    
};

 const start = () => {
    //cuando queremos que empiece tenemos que comenzar con la animación 
    secondsSphere.style.animation ='rotacion 60s linear infinite'; 
    let startTime = Date.now() - runningTime; 
    secondsSphere.style.animationPlayState = 'running'; //con esto lo que hacemos es sobreescribir el "pause" del css. 
    stopwatchInterval = setInterval(() => { 
//para calcular el tiempo que paso. 
        runningTime = Date.now() - startTime; 
        stopwatch.textContent = calculateTime(runningTime); 
    }, 1000); //arrancamos nuestro intervalo que vamos a cambiar cada 1 seg. 
 }

 //funcion de calcular el tiempo 
 const calculateTime = (runningTime) => { 
    const total_seconds = Math.floor(runningTime / 1000); //calcular segundo total 
    const total_minutes = Math.floor(total_seconds / 60); //calcular minuto total 
   
    //hacemos un display second; que van a ser los 60 segundos para que vuelva a 0 y se convierta en minuto. 
    const display_seconds = (total_seconds % 60).toString().padStart(2, '0'); 
    const display_minutes = total_minutes.toString().padStart(2, '0');

return `${display_minutes}:${display_seconds}` 
 }