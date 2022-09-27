$(document).ready(function(){
    //para trabajar el texto del DOM
    // $('#titulo').text('Encabezado Modificado'); //modifica el texto que seleccionemos del html   

    $('#titulo').html('<u>Encabezado Modificado</u>'); //me permite trabajar con etiquetas html 

    let nombre = $('#nombre');
    nombre.on('change', function(){
        $('#titulo').text(nombre.val());
    });

    // $('#enlace').text('ColombianSoft.com'); // tambien se puede modificar el texto del enlace
    // $('#enlace').attr('href', 'http://www.falconmasters.com'); //permite modificar el atributo

    // para modificar varios atributos

    $('#enlace').attr({
        'class': 'azul',
        'target': '_blank'
    });
});