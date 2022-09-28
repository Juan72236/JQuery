$(document).ready(function(){
    let contenedor = $('#contenedor');
    let contador = 1;

    $('#agregar').on('click', function(){
        // creacion de un elemento html con Jquery
        let caja = $('<div></div>').attr('class', 'caja').text(contador);
        contador++;

        //agregar cajas al inicio del contenedor en orden normal
        // contenedor.append(caja);

        //agrega cajas en orden inverso
        // contenedor.prepend(caja);

        //agregar cajas antes del contenedoor
        // contenedor.before(caja);

        //agregar cajas despues del contenedor
        // contenedor.after(caja);
    });
});