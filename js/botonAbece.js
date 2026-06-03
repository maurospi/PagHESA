var paginaActual = 1;
var puntaje = 0;
$(document).ready(function() {

});

comprobar = function(msg) {

    var res = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



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
            $('ul.bootpag').find('li[data-lp="6"]').children().trigger('click');
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
    maxVisible: 5,
    leaps: true,
    href: "#result-page-{{number}}",
})

//page click action
$('#pagination-here').on("page", function(event, num) {
    //show / hide content or pull via ajax etc
    paginaActual = num;
    console.log(num);
    var botones = ["B", "Ñ", "A", "Z", "B", "Y", "F", "X", "Z", "E", "T", "F", "C", "G", "T", "E", "S", "P", "O", "J", "D", "H", "L", "W", "Z", "G", "T", "N", "J", "V"];
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
        $("#videoABC").attr("src", "videos/abecedario/letraA.mp4");
        $("#videoABC").attr("value", "A");
        $("#content").html($());
        $("body").data("pagina", 1);

    }
    if (num == 2) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/abecedario/letraB.mp4");
        $("#content").html($());
        $("body").data("pagina", 2);
        $("#videoABC").attr("value", "B");
    }
    if (num == 3) {

        $("#content").empty();
        $("#videoABC").parent().attr("id", "");
        $("#videoABC").attr("src", "videos/abecedario/letraZ.mp4");
        $("#videoABC").attr("value", "Z");
        $("#content").html($());
        $("body").data("pagina", 3);

    }
    if (num == 4) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "d");
        $("#videoABC").attr("src", "videos/abecedario/letraF.mp4");
        $("#videoABC").attr("value", "F");
        $("#content").html($());
        $("body").data("pagina", 4);
    }

    if (num == 5) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "e");
        $("#videoABC").attr("src", "videos/abecedario/letraT.mp4");
        $("#videoABC").attr("value", "T");
        $("#content").html($());
        $("body").data("pagina", 5);

    }

    if (num == 6) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "p");
        $("#videoABC").attr("src", "videos/abecedario/letraP.mp4");
        $("#videoABC").attr("value", "P");
        $("#content").html($());
        $("body").data("pagina", 6);
    }

    if (num == 7) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "d");
        $("#videoABC").attr("src", "videos/abecedario/letraD.mp4");
        $("#videoABC").attr("value", "D");
        $("#content").html($());
        $("body").data("pagina", 7);
    }

    if (num == 8) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "h");
        $("#videoABC").attr("src", "videos/abecedario/letraH.mp4");
        $("#videoABC").attr("value", "H");
        $("#content").html($());
        $("body").data("pagina", 8);
    }
    if (num == 9) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "g");
        $("#videoABC").attr("src", "videos/abecedario/letraG.mp4");
        $("#videoABC").attr("value", "G");
        $("#content").html($());
        $("body").data("pagina", 9);
    }
    if (num == 10) {
        $("#content").empty();
        $("#videoABC").parent().attr("id", "j");
        $("#videoABC").attr("src", "videos/abecedario/letraJ.mp4");
        $("#videoABC").attr("value", "J");
        $("#content").html($());
        $("body").data("pagina", 10);
    }





});

$('#pagination-here').trigger("page", 1);

$("#content").on("click", ".boton", function() {

    alert($("body").data("pagina"));
});