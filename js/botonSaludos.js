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

        if (paginaActual == 6) {
            document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/6";
            document.getElementById("btnInco").style.display = "show";
            puntaje = 0;
            $('ul.bootpag').find('li[data-lp="10"]').children().trigger('click');
            $('ul.bootpag').find('.active').prev().trigger('click');
            $('ul.bootpag').find('li[data-lp="7"]').children().trigger('click');
            $('ul.bootpag').find('.active').prev().trigger('click');
            $('ul.bootpag').find('li[data-lp="4"]').children().trigger('click');
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
    var botones = ["Buenas Tardes", "Buenas Noches", "Buenos Dias",
        "Con mucho gusto", "Como estas", "Buenas Noches",
        "Buenas Tardes", "Hola", "Buenos Dias",
        "Como estas", "Con mucho gusto", "Buenas Noches",
        "Hola", "Buenas Tardes", "Buenos Dias",
        "Buenos Dias", "Como estas", "Buenas Noches",


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
        $("#videoABC").attr("src", "videos/saludos/buenasNoches.mp4");
        $("#videoABC").attr("value", "Buenas Noches");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/saludos/conMuchoGusto.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
        $("#videoABC").attr("value", "Con mucho gusto");
    }
    if (num == 3) {

        $("#content").empty();

        $("#videoABC").attr("src", "videos/saludos/buenasTardes.mp4");
        $("#videoABC").attr("value", "Buenas Tardes");
        $("#content").html($());
        $("body").data("pagina", 3);

    }
    if (num == 4) {
        $("#content").empty();

        $("#videoABC").attr("src", "videos/saludos/comoEstas.mp4");
        $("#videoABC").attr("value", "Como estas");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/saludos/hola.mp4");
        $("#videoABC").attr("value", "Hola");
        $("#content").html($());
        $("body").data("pagina", 5);

    }

    if (num == 6) {
        $("#content").empty();

        $("#videoABC").attr("src", "videos/saludos/buenosDias.mp4");
        $("#videoABC").attr("value", "Buenos Dias");
        $("#content").html($());
        $("body").data("pagina", 6);
    }



});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});