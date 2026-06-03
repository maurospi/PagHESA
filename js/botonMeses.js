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

        if (paginaActual == 12) {
            document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/12";
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
    total: 12,
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
    var botones = ["Enero", "Junio", "Julio",
        "Octubre", "Enero", "Marzo",
        "Octubre", "Mayo", "Diciembre",
        "Agosto", "Septiembre", "Febrero",
        "Julio", "Octubre", "Noviembre",
        "Febrero", "Junio", "Agosto",
        "Noviembre", "Mayo", "Marzo",
        "Marzo", "Noviembre", "Octubre",
        "Enero", "Abril", "Julio",
        "Mayo", "Diciembre", "Agosto",
        "Abril", "Febrero", "Marzo",
        "Junio", "Septiembre", "Enero"
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
        $("#videoABC").attr("src", "videos/meses/junio.mp4");
        $("#videoABC").attr("value", "Junio");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/meses/enero.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
        $("#videoABC").attr("value", "Enero");
    }
    if (num == 3) {

        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/meses/diciembre.mp4");
        $("#videoABC").attr("value", "Diciembre");
        $("#content").html($());
        $("body").data("pagina", 3);

    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/meses/agosto.mp4");
        $("#videoABC").attr("value", "Agosto");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "e");
        $("#videoABC").attr("src", "videos/meses/octubre.mp4");
        $("#videoABC").attr("value", "Octubre");
        $("#content").html($());
        $("body").data("pagina", 5);

    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "febrero");
        $("#videoABC").attr("src", "videos/meses/febrero.mp4");
        $("#videoABC").attr("value", "Febrero");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "marzo");
        $("#videoABC").attr("src", "videos/meses/marzo.mp4");
        $("#videoABC").attr("value", "Marzo");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "noviembre");
        $("#videoABC").attr("src", "videos/meses/noviembre.mp4");
        $("#videoABC").attr("value", "Noviembre");
        $("#content").html($());
        $("body").data("pagina", 8);
    }
    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "julio");
        $("#videoABC").attr("src", "videos/meses/julio.mp4");
        $("#videoABC").attr("value", "Julio");
        $("#content").html($());
        $("body").data("pagina", 9);
    }
    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "mayo");
        $("#videoABC").attr("src", "videos/meses/mayo.mp4");
        $("#videoABC").attr("value", "Mayo");
        $("#content").html($());
        $("body").data("pagina", 10);
    }

    if (num == 11) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "abril");
        $("#videoABC").attr("src", "videos/meses/abril.mp4");
        $("#videoABC").attr("value", "Abril");
        $("#content").html($());
        $("body").data("pagina", 11);
    }

    if (num == 12) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "mayo");
        $("#videoABC").attr("src", "videos/meses/septiembre.mp4");
        $("#videoABC").attr("value", "Septiembre");
        $("#content").html($());
        $("body").data("pagina", 12);
    }





});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});