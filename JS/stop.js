$(document).ready(function(){
    $('#ejecutar').on('click', function(){

        //acceder a la caja y desplazarla hacia la derecha
        $('.caja').animate({
            marginLeft: '500px'
        }, 5000);
        $('.caja').animate({
            marginLeft: '0'
        }, 5000);
    });
    // para parar la animacion
    $('#parar').on('click', function(){
        //.stop(limpiarAnimaciones(booleano), SaltarAlFinal(booleano));
        //limpiar las animaciones: sirve para cuando se tienen varias animaciones
        $('.caja').stop(true, false);

    });
})