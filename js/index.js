'use strict'
$('#7-3 button').on('click', function(){
    if($(this).text()=='Activar animacion'){
        $(this).text('Desactivar animacion');
        $(this).parent().find('.box').animate({
            left: "+=200px"
        },3000)
    }else{
        $(this).text('Activar animacion');
        $(this).parent().find('.box').stop();
    }
});
function alertar(){
    alert("alerta");
}