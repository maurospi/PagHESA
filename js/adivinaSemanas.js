var paginaActual = 1;
var puntaje = 0;
$(document).ready(function() {
    window.location.href = "adivinaSemanas.html#result-page-1";

});

comprobar = function() {




    var res = ["", "Dia", "Domingo", "Festivo", "Jueves", "Lunes", "Miercoles", "Martes", "Sabado", "Semana", "Semana Santa", "Viernes"];

    var resLetraA = document.getElementsByName("dia")[0].value.trim();

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
            if (paginaActual == 11) {
                document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/11";

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
            puntaje--;
        }

    };



};

limpiar = function() {

    document.getElementsByName("dia")[0].value = " ";
}



$('#pagination-here').bootpag({
    total: 11,
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
        $("#videoABC").parent().attr("id", "dia");
        $("#videoABC").attr("src", "videos/semanas/dia.mp4");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "domingo");
        $("#videoABC").attr("src", "videos/semanas/domingo.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
    }
    if (num == 3) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "festivo");
        $("#videoABC").attr("src", "videos/semanas/festivo.mp4");
        $("#content").html($());
        $("body").data("pagina", 3);
    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "jueves");
        $("#videoABC").attr("src", "videos/semanas/jueves.mp4");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "lunes");
        $("#videoABC").attr("src", "videos/semanas/lunes.mp4");
        $("#content").html($());
        $("body").data("pagina", 5);
    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "miercoles");
        $("#videoABC").attr("src", "videos/semanas/miercoles.mp4");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "martes");
        $("#videoABC").attr("src", "videos/semanas/martes.mp4");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "sabado");
        $("#videoABC").attr("src", "videos/semanas/sabado.mp4");
        $("#content").html($());
        $("body").data("pagina", 8);
    }

    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "semana");
        $("#videoABC").attr("src", "videos/semanas/semana.mp4");
        $("#content").html($());
        $("body").data("pagina", 9);
    }

    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "semana santa");
        $("#videoABC").attr("src", "videos/semanas/semanaSanta.mp4");
        $("#content").html($());
        $("body").data("pagina", 10);
    }

    if (num == 11) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "viernes");
        $("#videoABC").attr("src", "videos/semanas/viernes.mp4");
        $("#content").html($());
        $("body").data("pagina", 11);
    }


});