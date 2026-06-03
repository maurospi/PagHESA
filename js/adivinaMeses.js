var paginaActual = 1;
var puntaje = 0;


comprobar = function() {


    //var cLetraA = document.getElementById("a").id;

    var res = ["", "Septiembre", "Enero", "Noviembre", "Marzo", "Diciembre", "Junio", "Febrero", "Octubre", "Abril", "Agosto", "Julio", "Mayo"];

    var resLetraA = document.getElementsByName("meses")[0].value.trim();

    console.log(res[paginaActual], resLetraA);
    if (resLetraA === "") {
        document.getElementById("ventana_modal").innerHTML = "Tienes el campo vacio ";
        document.getElementById("btnInco").style.display = "none";
        return false;

    } else {
        if (resLetraA.toLocaleUpperCase() === res[paginaActual].toLocaleUpperCase()) {

            document.getElementById("ventana_modal").innerHTML = "Correcto ";
            document.getElementById("btnInco").style.display = "none";

            $('ul.bootpag').find('.active').next().children().trigger('click');
            puntaje++;
            if (paginaActual == 12) {
                document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/12";

                $('ul.bootpag').find('li[data-lp="9"]').children().trigger('click');
                $('ul.bootpag').find('.active').prev().trigger('click');
                $('ul.bootpag').find('li[data-lp="5"]').children().trigger('click');
                $('ul.bootpag').find('.active').prev().trigger('click');
                $('ul.bootpag').find('li[data-lp="1"]').children().trigger('click');


            }


        } else {


            document.getElementById("ventana_modal").innerHTML = "Intentalo de Nuevo";
            puntaje--;

        }

    };



};

limpiar = function() {

    document.getElementsByName("meses")[0].value = " ";
}



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
    if (num == 1) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "septiembre");
        $("#videoABC").attr("src", "videos/meses/septiembre.mp4");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "enero");
        $("#videoABC").attr("src", "videos/meses/enero.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
    }
    if (num == 3) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "noviembre");
        $("#videoABC").attr("src", "videos/meses/noviembre.mp4");
        $("#content").html($());
        $("body").data("pagina", 3);
    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "marzo");
        $("#videoABC").attr("src", "videos/meses/marzo.mp4");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "diciembre");
        $("#videoABC").attr("src", "videos/meses/diciembre.mp4");
        $("#content").html($());
        $("body").data("pagina", 5);
    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "junio");
        $("#videoABC").attr("src", "videos/meses/junio.mp4");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "febrero");
        $("#videoABC").attr("src", "videos/meses/febrero.mp4");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "octubre");
        $("#videoABC").attr("src", "videos/meses/octubre.mp4");
        $("#content").html($());
        $("body").data("pagina", 8);
    }

    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "abril");
        $("#videoABC").attr("src", "videos/meses/abril.mp4");
        $("#content").html($());
        $("body").data("pagina", 9);
    }

    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "agosto");
        $("#videoABC").attr("src", "videos/meses/agosto.mp4");
        $("#content").html($());
        $("body").data("pagina", 10);
    }

    if (num == 11) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "julio");
        $("#videoABC").attr("src", "videos/meses/julio.mp4");
        $("#content").html($());
        $("body").data("pagina", 11);
    }

    if (num == 12) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "mayo");
        $("#videoABC").attr("src", "videos/meses/mayo.mp4");
        $("#content").html($());
        $("body").data("pagina", 12);

    }







});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});