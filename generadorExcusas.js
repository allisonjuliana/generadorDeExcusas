window.onload = function generadorExcusas(){
    let persona = ['Maria', 'Julio', 'Luis', 'Angela'];
    let accion = ['comerá', 'jugará', 'dormirá', 'correrá'];
    let donde = ['en la sala', 'en la calle', 'en la cocina', 'en el comedor'];
    let cuando = ['el lunes', 'el martes', 'el miercoles', 'el jueves', 'el viernes'];

    let personaIndex = Math.floor(Math.random() * persona.length);
    let accionIndex = Math.floor(Math.random() * accion.length);
    let dondeIndex = Math.floor(Math.random() * donde.length);
    let cuandoIndex = Math.floor(Math.random() * cuando.length);
    
    document.getElementById('result').innerHTML = "<div><h2>"+persona[personaIndex]+' '+accion[accionIndex]+' '+donde[dondeIndex]+' '+cuando[cuandoIndex]+"</h2></div>";
};