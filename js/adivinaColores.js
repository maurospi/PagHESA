var paginaActual = 1;
var puntaje = 0;
$(document).ready(function() {

});

comprobar = function() {

    var res = ["", "Azul", "Blanco", "Cafe", "Dorado", "Gris", "Naranja", "Negro", "Rojo", "Rosado", "Verde"];

    var resLetraA = document.getElementsByName("colores")[0].value.trim();

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
            if (paginaActual == 10) {
                document.getElementById("btnInco").style.display = "show";
                document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/10";


                puntaje = 0;
                $('ul.bootpag').find('li[data-lp="9"]').children().trigger('click');
                $('ul.bootpag').find('.active').prev().trigger('click');
                $('ul.bootpag').find('li[data-lp="5"]').children().trigger('click');
                $('ul.bootpag').find('.active').prev().trigger('click');
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

    document.getElementsByName("colores")[0].value = " ";
}



$('#pagination-here').bootpag({
    total: 10,
    page: 1,
    maxVisible: 4,
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
        $("#videoABC").parent().attr("id", "Azul");
        $("#videoABC").attr("src", "videos/colores/colorAzul.mp4");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Blanco");
        $("#videoABC").attr("src", "videos/colores/colorBlanco.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
    }
    if (num == 3) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Cafe");
        $("#videoABC").attr("src", "videos/colores/colorCafe.mp4");
        $("#content").html($());
        $("body").data("pagina", 3);
    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Dorado");
        $("#videoABC").attr("src", "videos/colores/colorDorado.mp4");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Gris");
        $("#videoABC").attr("src", "videos/colores/colorGris.mp4");
        $("#content").html($());
        $("body").data("pagina", 5);
    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Naranja");
        $("#videoABC").attr("src", "videos/colores/colorNaranja.mp4");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Negro");
        $("#videoABC").attr("src", "videos/colores/colorNegro.mp4");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Rojo");
        $("#videoABC").attr("src", "videos/colores/colorRojo.mp4");
        $("#content").html($());
        $("body").data("pagina", 8);
    }

    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Rosado");
        $("#videoABC").attr("src", "videos/colores/colorRosado.mp4");
        $("#content").html($());
        $("body").data("pagina", 9);
    }

    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Verde");
        $("#videoABC").attr("src", "videos/colores/colorVerde.mp4");
        $("#content").html($());
        $("body").data("pagina", 10);
    }


});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});