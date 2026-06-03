var paginaActual = 1;
var puntaje = 0;
$(document).ready(function() {

});

comprobar = function(msg) {

    var vid = document.getElementsByName("videoRes").item(0).getAttribute("value");

    var res = document.getElementsByName(msg).item(0).getAttribute("value");

    console.log(vid, res);

    if (vid == res) {

        document.getElementById("ventana_modal").innerHTML = "Correcto ";
        document.getElementById("btnInco").style.display = "none";
        document.getElementById("ventana_modal").style.display = "show";


        puntaje++;

        if (paginaActual == 10) {
            document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/10";
            document.getElementById("btnInco").style.display = "show";
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
    $("#videoABC").focus();

};

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
    var botones = ["Blanco", "Rosado", "Naranja",
        "Negro", "Dorado", "Azul",
        "Azul", "Gis", "Verde",
        "Rojo", "Blanco", "Cafe",
        "Naranja", "Gris", "Rosado",
        "Dorado", "Blanco", "Naranja",
        "Negro", "Rojo", "Cafe",
        "Verde", "Azul", "Rojo",
        "Gris", "Rosado", "Dorado",
        "Azul", "Blanco", "Verde",
    ];
    var posicion = ((num - 1) * 3);
    $("#btnUnoA").text(botones[posicion]);
    $("#btnDosA").text(botones[posicion + 1]);
    $("#btnTresA").text(botones[posicion + 2]);

    $("#btnUnoA").val(botones[posicion]);
    $("#btnDosA").val(botones[posicion + 1]);
    $("#btnTresA").val(botones[posicion + 2]);

    if (num == 1) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorBlanco.mp4");
        $("#videoABC").attr("value", "Blanco");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorDorado.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
        $("#videoABC").attr("value", "Dorado");
    }
    if (num == 3) {

        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorAzul.mp4");
        $("#videoABC").attr("value", "Azul");
        $("#content").html($());
        $("body").data("pagina", 3);

    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorCafe.mp4");
        $("#videoABC").attr("value", "Cafe");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorGris.mp4");
        $("#videoABC").attr("value", "Gris");
        $("#content").html($());
        $("body").data("pagina", 5);

    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorNaranja.mp4");
        $("#videoABC").attr("value", "Naranja");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorNegro.mp4");
        $("#videoABC").attr("value", "Negro");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorRojo.mp4");
        $("#videoABC").attr("value", "Rojo");
        $("#content").html($());
        $("body").data("pagina", 8);
    }
    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorRosado.mp4");
        $("#videoABC").attr("value", "Rosado");
        $("#content").html($());
        $("body").data("pagina", 9);
    }
    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/colores/colorVerde.mp4");
        $("#videoABC").attr("value", "Verde");
        $("#content").html($());
        $("body").data("pagina", 10);
    }


});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});