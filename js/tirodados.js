//Todo el módulo se encuentra dentro de una función
//conocida como función inmediata, en este caso
//también anónima que provoca que todo se ejecute
//de una vez.
(function(){
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else{
    window.attachEvent("onload", iniciar);
    }
    //Variables utilizadas para interactuar
    //con los elementos img presentes en la página
    var i;
    var acumulador;
    var imagenDado1;
    var imagenDado2;
    var imagenDado3;
    var imagenDado4;
    var imagenDado5;
    var imagenDado6;
    //Registrar componentes de escucha del evento clic
    //al presionar el botón denominado botonTirar y obtener
    //todos los elementos img presentes en el documento
    function iniciar(){
    var boton = document.getElementById("botonTirar");
    if(boton.addEventListener){
    boton.addEventListener("click", tirarDados,
    false);
    }
    else{
    boton.attachEvent("onclick", tirarDados);
    }
    imagenDado1 = document.getElementById("dado1");
    imagenDado2 = document.getElementById("dado2");
    imagenDado3 = document.getElementById("dado3");
    imagenDado4 = document.getElementById("dado4");
    imagenDado5 = document.getElementById("dado5");
    imagenDado6 = document.getElementById("dado6");
    }
    function tirarDados(){
    establecerImagen(imagenDado1);
    establecerImagen(imagenDado2);
    establecerImagen(imagenDado3);
    establecerImagen(imagenDado4);
    establecerImagen(imagenDado5);
    establecerImagen(imagenDado6);
    }
    var nombre = [] , total = {}; 
    function establecerImagen(){
    let d1 = getNumRand(1,6);
    let d2 = getNumRand(1,6);
    let d3 = getNumRand(1,6);
    let acumulador = d1 + d2 + d3;
    var name;
    name = prompt("Nombre del jugador")
    nombre.push(name);
    document.getElementById("ImgDado1").src="img/dice"+d1+".png";
    document.getElementById("ImgDado2").src="img/dice"+d2+".png";
    document.getElementById("ImgDado3").src="img/dice"+d3+".png";
    document.getElementById("Total").innerHTML = acumulador;
    total.push(acumulador);
}


    })();