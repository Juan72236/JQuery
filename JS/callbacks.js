$(document).ready(function(){
    //son funciones que se ejecutaran despues que una animacion se haya terminado

    // function saludo () {
    //     alert('funcion ejecutandose');
    // }

    $('#ejecutar').on('click',function(){
        $('.caja').slideUp(1000, function(){
            $(this).slideDown(1000);
        });
    });

    // $('#ejecutar').on('click',function(){
    //     $('.caja').slideUp(300);
    //     alert('animacion iniciada');
    //     $('.caja').slideDown(300)
    // });
});