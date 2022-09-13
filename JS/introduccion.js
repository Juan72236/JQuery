$(document).ready(function(){
    /**Aca le estamos diciendo: quiero acceder al documento, y cuando este halla cargado, acceda a la funcion y ejecute ese codigo. */
    /**Aca pongo el codigo que quiero ejecutar */
    // alert('si se ejecuta');
    /**esta funcion me permite que los scripts se ejecuten luego de todo el html haya cargado. Sin importar en que lugar del html hicimos el llamado de los scripts */

    /**----- SINTAXIS DE JQUERY ------------
     *  $(selector).accion();
     * 
     * slector: elemento al que queremos acceder
     * accion: es lo que queremos ejecutar
     */

    $('h1').show();

});

/**OTRA FORMA DE EJECUTAR JQUERY */
$(function(){
    /**codigo que se ejecutará hasta que el documento haya cargado */
});