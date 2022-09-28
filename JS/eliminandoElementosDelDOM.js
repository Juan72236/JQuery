$(document).ready(function(){

    //eliminar elemento padre y elementos hijos: .remove()
    // $('#contenedor').remove();

    //eliminar solo elementos hijos: 
    $('#contenedor').children().remove();
    //eliminar un elemento hijo seleccionado
    $('#contenedor').children('#segunda').remove();
    //otra forma de eliminar elementos hijo
    $('#contenedor').empty();


});