$(document).ready(function(){
    // $('#tercera').parent();  //me trae el elemtento padre de tercera
    // $('#tercera').parent().css({
    //     background: '#1b3d82'
    // }); //me permite traer el elemento padre y darle estilos css

    // acceder a los elementos hijo
    // $('#padre').children();

    //find: encontrar adentro de un contenedor algun elemento

    // $('#contenedor').find('div.caja').slideUp(3000); //find permite buscar dentro de un contenedor a todos los niveles

    //Siblings: seleccionar los elementos hermanos
    // $('#tercera').siblings().fadeOut(3000);

    // Next - Prev: acceder a los elementos siguientes y anteriores
    // $('#tercera').prev().css({
    //     background: '#000'
    // });

    // $('#tercera').next().css({
    //     background: '#ccc'
    // });
    // todos los elementos antes del actual
    // nextAll


    //- - - - - - - - - - - FILTRAR LOS ELEMENTOS DEL DOM - - - - - - - - - - - - - - - - - - - - - - - - - -
    // $('.caja').first().css({
    //     background:'#000'
    // }); // me regresa el primer elemento

    // $('.caja').last().css({
    //     background:'#000'
    // }); // me regresa el ultimo elemento

    // $('.caja').eq(0).css({background:'#000'}); // el metodo eq, me trae el elemento en la posicion 2 del arreglo de elementos. En este caso trae la caja 3.

    // $('.caja').filter('#tercera').css({background:'#f9a03f'}); // filter nos permite seleccionar varios elementos a diferencia de eq que trae solo un elemento

    // $('.caja').not('#tercera').css({
    //     background:'#f9a03f'
    // }); // en este caso la propiedad not nos permite seleccionar el elemento que no queremos afectar con los cambios, en este caso la tercera caja.
});