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

        if (paginaActual == 7) {
            document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/7";
            document.getElementById("btnInco").style.display = "show";
            puntaje = 0;

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
    total: 7,
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
    var botones = ["Mi Seña", "Mi Nombre", "Mi Apellido",
        "Mi Dirección", "Mi Nùmero Celular", "Mi Email",
        "Mi Número Fijo", "Mi Seña", "Mi Nombre",
        "Mi Nombre", "Mi Email", "Mi Apellido",
        "Mi Número", "Mi Dirección", "Mi Seña",
        "Mi Email", "Mi Nombre", "Mi Número Celular",
        "Mi Nombre", "Mi Apellido", "Mi Seña"

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
        $("#videoABC").attr("src", "videos/presentacion/miSeña.mp4");
        $("#videoABC").attr("value", "Mi Seña");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/presentacion/miEmail.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
        $("#videoABC").attr("value", "Mi Email");
    }
    if (num == 3) {

        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/presentacion/miNumeroFijo.mp4");
        $("#videoABC").attr("value", "Mi Número Fijo");
        $("#content").html($());
        $("body").data("pagina", 3);

    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/presentacion/apellido.mp4");
        $("#videoABC").attr("value", "Mi Apellido");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "e");
        $("#videoABC").attr("src", "videos/presentacion/miDireccion.mp4");
        $("#videoABC").attr("value", "Mi Dirección");
        $("#content").html($());
        $("body").data("pagina", 5);

    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/presentacion/miNumeroCelular.mp4");
        $("#videoABC").attr("value", "Mi Número Celular");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/presentacion/miNombre.mp4");
        $("#videoABC").attr("value", "Mi Nombre");
        $("#content").html($());
        $("body").data("pagina", 7);
    }


});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});