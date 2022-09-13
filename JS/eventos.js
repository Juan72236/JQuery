$(document).ready(function(){

    var boton = $('#boton'); //variable que trae el boton desde el documento

    // boton.click(function(){
    //     alert('hola');
    // }); // callback: funcion anonima que se va a aejecutar luego de que el boton haya sido presionado


//-- EVENTO CON UNA FUNCION:
    function saludo() {
        alert('Saludos');
    }
    // boton.click(saludo); una forma de darle funcionalidad al boton

//-- EVENTO CON FALLBACK: Se va a ejecutar solamente cuando se cumpla el evento.
    // boton.on('mouseenter', function(){
    //     $('body').css({
    //         background: '#000'
    //     });
    // });

    // boton.on('mouseleave', function () {  
    //     $('body').css({
    //         background: '#fff'
    //     });
    // });

//-- ELIMINANDO EVENTOS: se hace con el método off.
    // boton.on('click', function(){
    //     alert('saludos');
    // });

    // $('#desactivar').on('click', function(){
    //     boton.off('click'); 
    //     alert('Boton de ejecutar Desactivado');
    // });

//-- PREVENIR EL COMPORTAMIENTO DE LOS ENLACES
    // $('a').on('click', function(e){
    //     e.preventDefault(); //previene el comportamiento por defecto del enlace, o el objeto que se esté afectando. En este caso el link ya no conducirá a ninguna página a menos que yo lo determine.

    //     alert('Enlace desactivado :('); // el enlace al ser presionado devolverá esto en pantalla
    // });
});