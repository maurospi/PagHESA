$(document).ready(function() {
    $("#subText").click(function() {
        $("h1").toggleClass("subTexto")
        $("h2").toggleClass("subTexto")
        $("p").toggleClass("subTexto")
        $("a").toggleClass("subTexto")
        $("body").toggleClass("subTexto")
    });
});



function fondoGris() {

    document.getElementsByTagName('body')[0].classList.add('ponerG');

}

function fondoBlan() {

    document.getElementsByTagName('body')[0].classList.remove('ponerG');
}