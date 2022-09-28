$(document).ready(function(){
    $('#boton').on('click', function(){
        // $(this).addClass('naranja'); // para añadir una clase al elemento
        // $(this).removeClass('boton'); // para quitar una clase al elemento
        $(this).toggleClass('naranja'); //para poner y quitar la clase al elemento

        $(this).css({'heigth':'200px', 'width':'200px'}); // para modificar los estilos css desde Jquery
    });
});