var paginaActual = 1;
var puntaje = 0;
$(document).ready(function() {

});

comprobar = function() {

    var res = ["", "Como estas", "Hola", "Buenas Tardes", "Con mucho gusto", "Buenos Dias", "Buenas Noches"];

    var resLetraA = document.getElementsByName("hola")[0].value.trim();

    console.log(res[paginaActual], resLetraA);
    if (resLetraA === "") {
        document.getElementById("ventana_modal").innerHTML = "Tienes el campo vacio ";
        document.getElementById("btnInco").style.display = "none";

        return false;

    } else {
        if (resLetraA.toLocaleUpperCase() === res[paginaActual].toLocaleUpperCase()) {

            document.getElementById("ventana_modal").innerHTML = "Correcto ";
            document.getElementById("btnInco").style.display = "none";

            puntaje++;
            if (paginaActual == 6) {
                document.getElementById("btnInco").style.display = "show";
                document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/6";


                puntaje = 0;
                $('ul.bootpag').find('li[data-lp="4"]').children().trigger('click');
                $('ul.bootpag').find('.active').prev().trigger('click');
                $('ul.bootpag').find('li[data-lp=""]').children().trigger('click');



                $('ul.bootpag').find('li[data-lp="1"]').children().trigger('click');

            } else {
                $('ul.bootpag').find('.active').next().children().trigger('click');

            }


        } else {


            document.getElementById("ventana_modal").innerHTML = "Intentalo de Nuevo";
            document.getElementById("btnInco").style.display = "none";

            puntaje--;

        }

    };



};

limpiar = function() {

    document.getElementsByName("hola")[0].value = " ";
}



$('#pagination-here').bootpag({
    total: 6,
    page: 1,
    maxVisible: 3,
    leaps: true,
    href: "#result-page-{{number}}",
})

//page click action
$('#pagination-here').on("page", function(event, num) {
    //show / hide content or pull via ajax etc
    paginaActual = num;
    console.log(num);
    if (num == 1) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Como Estas");
        $("#videoABC").attr("src", "videos/saludos/comoEstas.mp4");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Hola");
        $("#videoABC").attr("src", "videos/saludos/hola.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
    }
    if (num == 3) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Buenas Tardes");
        $("#videoABC").attr("src", "videos/saludos/buenasTardes.mp4");
        $("#content").html($());
        $("body").data("pagina", 3);
    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Con mucho gusto");
        $("#videoABC").attr("src", "videos/saludos/conMuchoGusto.mp4");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Buenos Dias");
        $("#videoABC").attr("src", "videos/saludos/buenosDias.mp4");
        $("#content").html($());
        $("body").data("pagina", 5);
    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Buenas Noches");
        $("#videoABC").attr("src", "videos/saludos/buenasNoches.mp4");
        $("#content").html($());
        $("body").data("pagina", 6);
    }


});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});