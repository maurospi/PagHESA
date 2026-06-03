var paginaActual = 1;
var puntaje = 0;


comprobar = function() {


    //var cLetraA = document.getElementById("a").id;

    var res = ["", "Mi Nombre", "Mi Seña", "Mi Numero Celular", "Mi Apellido", "Mi Direccion", "Mi Email", "Mi Numero Fijo"];

    var resLetraA = document.getElementsByName("presentacion")[0].value.trim();

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
            if (paginaActual == 8) {
                document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/7";

                puntaje = 0;
                $('ul.bootpag').find('li[data-lp="7"]').children().trigger('click');
                $('ul.bootpag').find('.active').prev().trigger('click');
                $('ul.bootpag').find('li[data-lp="4"]').children().trigger('click');
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

    document.getElementsByName("presentacion")[0].value = " ";
}



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
    if (num == 1) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Nombre");
        $("#videoABC").attr("src", "videos/presentacion/miNombre.mp4");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Seña");
        $("#videoABC").attr("src", "videos/presentacion/miSeña.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
    }
    if (num == 3) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Numero Celular");
        $("#videoABC").attr("src", "videos/presentacion/miNumeroCelular.mp4");
        $("#content").html($());
        $("body").data("pagina", 3);
    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Apellido");
        $("#videoABC").attr("src", "videos/presentacion/apellido.mp4");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Direccion");
        $("#videoABC").attr("src", "videos/presentacion/miDireccion.mp4");
        $("#content").html($());
        $("body").data("pagina", 5);
    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Email");
        $("#videoABC").attr("src", "videos/presentacion/miEmail.mp4");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "Mi Numero Fijo");
        $("#videoABC").attr("src", "videos/presentacion/miNumeroFijo.mp4");
        $("#content").html($());
        $("body").data("pagina", 7);
    }


});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});