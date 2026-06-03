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

        if (paginaActual == 11) {
            document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/11";
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
    total: 11,
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
    var botones = ["Día", "Festivo", "Jueves",
        "Sabado", "Domingo", "Miercoles",
        "Martes", "Festivo", "Viernes",
        "Jueves", "Sabado", "Miercoles",
        "Festivo", "Martes", "Lunes",
        "Miercoles", "Viernes", "Sabado",
        "Lunes", "Festivo", "Martes",
        "Sabado", "Miercoles", "Día",
        "Domingo", "Semana", "Semana Santa",
        "Viernes", "Semana Santa", "Martes",
        "Lunes", "Viernes", "Día",

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
        $("#videoABC").attr("src", "videos/semanas/dia.mp4");
        $("#videoABC").attr("value", "Día");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/semanas/domingo.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
        $("#videoABC").attr("value", "Domingo");
    }
    if (num == 3) {

        $("#content").empty();

        $("#videoABC").attr("src", "videos/semanas/festivo.mp4");
        $("#videoABC").attr("value", "Festivo");
        $("#content").html($());
        $("body").data("pagina", 3);

    }
    if (num == 4) {
        $("#content").empty();

        $("#videoABC").attr("src", "videos/semanas/jueves.mp4");
        $("#videoABC").attr("value", "Jueves");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/semanas/lunes.mp4");
        $("#videoABC").attr("value", "Lunes");
        $("#content").html($());
        $("body").data("pagina", 5);

    }

    if (num == 6) {
        $("#content").empty();

        $("#videoABC").attr("src", "videos/semanas/miercoles.mp4");
        $("#videoABC").attr("value", "Miercoles");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/semanas/martes.mp4");
        $("#videoABC").attr("value", "Martes");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();

        $("#videoABC").attr("src", "videos/semanas/sabado.mp4");
        $("#videoABC").attr("value", "Sabado");
        $("#content").html($());
        $("body").data("pagina", 8);
    }
    if (num == 9) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/semanas/semana.mp4");
        $("#videoABC").attr("value", "Semana");
        $("#content").html($());
        $("body").data("pagina", 9);
    }
    if (num == 10) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/semanas/semanaSanta.mp4");
        $("#videoABC").attr("value", "Semana Santa");
        $("#content").html($());
        $("body").data("pagina", 10);
    }

    if (num == 11) {
        $("#content").empty();
        $("#videoABC").attr("src", "videos/semanas/viernes.mp4");
        $("#videoABC").attr("value", "Viernes");
        $("#content").html($());
        $("body").data("pagina", 11);
    }

});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});