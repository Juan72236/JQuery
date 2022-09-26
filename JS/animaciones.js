$(document).ready(function(){

    // $(selector).animate({parametros}, velocidad, callback);

     $('#boton').on('click',function(){
         $('#caja').animate({
    //         // width: '300px'
    //         // opacity: '0.2'

    //         // width: '+=300px' para que se incremente 300px cada vez que se presione el boton
            marginLeft: '+=100px'
         }, 300, function(){
    //         // alert('fin de la animacion');
         });
         $('#caja').animate({
            marginLeft: '-=100px'
         }, 1000);

        
        // $('#caja').addClass('animacion');
     });
    //  $('#quitar').on('click', function(){
    //     $('#caja').removeClass('animacion');
    //  });
    // no hay animaciones de color con jquery. Para eso se requiere de un plug in

    //OTRA FORMA DE ANIMAR LOS ELEMENTOS ES CON CSS
});