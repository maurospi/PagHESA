var paginaActual = 1;
var puntaje = 0;





comprobar = function() {


    //var cLetraA = document.getElementById("a").id;

    var res = ["", "Z", "T", "U", "A", "W", "J", "P", "S", "B", "Q", "M", "F", "O", "G", "V", "H", "X", "I", "Y", "D", "L", "N", "C", "R", "K", "Ñ", "E"];

    var resLetraA = document.getElementsByName("a")[0].value.trim();

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
            if (paginaActual == 27) {
                document.getElementById("btnInco").style.display = "show";
                document.getElementById("ventana_modal").innerHTML = "Correcto Tu Puntaje es: " + puntaje + "/27";


                puntaje = 0;



                refrescar()


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

    document.getElementsByName("a")[0].value = " ";
}

function refrescar() {
    $('ul.bootpag').find('li[data-lp="25"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="22"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="19"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="16"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="13"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="10"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="7"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="4"]').children().trigger('click');
    $('ul.bootpag').find('.active').prev().trigger('click');
    $('ul.bootpag').find('li[data-lp="1"]').children().trigger('click');

}



$('#pagination-here').bootpag({
    total: 27,
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
        $("#videoABC").parent().attr("id", "z");
        $("#videoABC").attr("src", "videos/abecedario/letraZ.mp4");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "t");
        $("#videoABC").attr("src", "videos/abecedario/letraT.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
    }
    if (num == 3) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "u");
        $("#videoABC").attr("src", "videos/abecedario/letraU.mp4");
        $("#content").html($());
        $("body").data("pagina", 3);
    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "a");
        $("#videoABC").attr("src", "videos/abecedario/letraA.mp4");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "w");
        $("#videoABC").attr("src", "videos/abecedario/letraW.mp4");
        $("#content").html($());
        $("body").data("pagina", 5);
    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "j");
        $("#videoABC").attr("src", "videos/abecedario/letraJ.mp4");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "p");
        $("#videoABC").attr("src", "videos/abecedario/letraP.mp4");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "s");
        $("#videoABC").attr("src", "videos/abecedario/letraS.mp4");
        $("#content").html($());
        $("body").data("pagina", 8);
    }

    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "b");
        $("#videoABC").attr("src", "videos/abecedario/letraB.mp4");
        $("#content").html($());
        $("body").data("pagina", 9);
    }

    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "q");
        $("#videoABC").attr("src", "videos/abecedario/letraQ.mp4");
        $("#content").html($());
        $("body").data("pagina", 10);
    }

    if (num == 11) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "m");
        $("#videoABC").attr("src", "videos/abecedario/letraM.mp4");
        $("#content").html($());
        $("body").data("pagina", 11);
    }

    if (num == 12) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "f");
        $("#videoABC").attr("src", "videos/abecedario/letraF.mp4");
        $("#content").html($());
        $("body").data("pagina", 12);
    }

    if (num == 13) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "o");
        $("#videoABC").attr("src", "videos/abecedario/letraO.mp4");
        $("#content").html($());
        $("body").data("pagina", 13);
    }

    if (num == 14) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "g");
        $("#videoABC").attr("src", "videos/abecedario/letraG.mp4");
        $("#content").html($());
        $("body").data("pagina", 14);
    }

    if (num == 15) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "v");
        $("#videoABC").attr("src", "videos/abecedario/letraV.mp4");
        $("#content").html($());
        $("body").data("pagina", 15);
    }

    if (num == 16) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "h");
        $("#videoABC").attr("src", "videos/abecedario/letraH.mp4");
        $("#content").html($());
        $("body").data("pagina", 16);
    }

    if (num == 17) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "x");
        $("#videoABC").attr("src", "videos/abecedario/letraX.mp4");
        $("#content").html($());
        $("body").data("pagina", 17);
    }
    if (num == 18) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "i");
        $("#videoABC").attr("src", "videos/abecedario/letraI.mp4");
        $("#content").html($());
        $("body").data("pagina", 18);
    }
    if (num == 19) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "y");
        $("#videoABC").attr("src", "videos/abecedario/letraY.mp4");
        $("#content").html($());
        $("body").data("pagina", 19);
    }
    if (num == 20) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "d");
        $("#videoABC").attr("src", "videos/abecedario/letraD.mp4");
        $("#content").html($());
        $("body").data("pagina", 20);
    }
    if (num == 21) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "l");
        $("#videoABC").attr("src", "videos/abecedario/letraL.mp4");
        $("#content").html($());
        $("body").data("pagina", 21);
    }
    if (num == 22) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "n");
        $("#videoABC").attr("src", "videos/abecedario/letraN.mp4");
        $("#content").html($());
        $("body").data("pagina", 22);
    }
    if (num == 23) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "c");
        $("#videoABC").attr("src", "videos/abecedario/letraC.mp4");
        $("#content").html($());
        $("body").data("pagina", 23);
    }
    if (num == 24) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "r");
        $("#videoABC").attr("src", "videos/abecedario/letraR.mp4");
        $("#content").html($());
        $("body").data("pagina", 24);
    }

    if (num == 25) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "k");
        $("#videoABC").attr("src", "videos/abecedario/letraK.mp4");
        $("#content").html($());
        $("body").data("pagina", 25);
    }
    if (num == 26) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "ñ");
        $("#videoABC").attr("src", "videos/abecedario/letraÑ.mp4");
        $("#content").html($());
        $("body").data("pagina", 26);
    }

    if (num == 27) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "e");
        $("#videoABC").attr("src", "videos/abecedario/letraE.mp4");
        $("#content").html($());
        $("body").data("pagina", 27);



    }



});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});