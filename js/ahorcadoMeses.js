var hombre = new Array("___\n", "   |\n", "   O\n", "  /", "|", "\\\n", "  /", " \\\n", "___")
var palabra
var libreriaPalabras = new Array("e n e r o", "f e b r e r o", "m a r z o", "a b r i l", "m a y o",
    "j u n i o", "j u l i o", "a g o s t o", "s e p t i e m b r e", "o c t u b r e",
    "n o v i e m b r e", "d i c i e m b r e")
var partes = 0
var colNueva = 0
var jugando


function ObtienePalabra() {
    //obtiene la palabra para jugar de forma pseudoaleatoria
    var indice = Math.round(Math.random() * 11)
    var cadena = new String(libreriaPalabras[indice])
    palabra = cadena.split(" ")

}


function DibujaHombre(visor, partes) {
    //dibuja el hombre ahorcado
    //partes indica el numero de partes a dibujar
    var dibujo = ""
    if (partes < 7)
        for (var x = 0; x < partes; x++) {
            dibujo += hombre[x]
        }
    visor.displayHombre.value = dibujo
}


function DibujaLetra(visor, letra) {
    //dibuja una letra de la palabra
    //posicion indica donde debe dibujar la letra
    var flag = false
        //indica si se encontro la letra 
        //obtiene cadena actual
    var cadena = new String(visor.displayPalabra.value)
        //la separa en sus espacios
    var letrasCadena = cadena.split(" ")
    cadena = ""
    for (var x = 0; x < palabra.length; x++) {
        if (palabra[x] == letra) {
            cadena += letra + " "
            flag = true
        } else
            cadena += letrasCadena[x] + " "
    }
    visor.displayPalabra.value = cadena
    return flag
}


function NuevaLetra(visor, letra) {
    //añade letra lista de letras
    visor.displayLetras.value += letra + " "
        //comprueba si ha de pasar a la siguiente fila
    if (colNueva == 3) {
        visor.displayLetras.value += "\n"
        colNueva = 0
    } else
        colNueva++
}


function Juega(visor, letra) {
    //comprueba si esta jugando
    if (jugando) {
        //ciclo de jugada
        //1. añade letra a la lista
        NuevaLetra(visor, letra)
            //2. dibuja la letra y comprueba si acierto
        var acierto = DibujaLetra(visor, letra)
            //3. si no acierto, dibuja hombre
        if (!acierto)
            Dibujar(++partes)
            //DibujaHombre(visor, ++partes)
            //4. comprueba si fin
        if (partes == 8)
            FinJuego(false)
        else if (CompruebaPalabra(visor))
            FinJuego(true)
    } else {
        alert('Pulsa Juego nuevo para comenzar\nuna partida nueva.')
    }
}

function IniciaJuego(visor) {
    //inicializa visor y variables globales
    jugando = true
    partes = 0
    colNueva = 0
    ObtienePalabra()
    Dibujar(partes)
        //DibujaHombre(visor, partes)
    visor.displayPalabra.value = ""
    for (var x = 0; x < palabra.length; x++)
        visor.displayPalabra.value += "_ "
    visor.displayLetras.value = ""
}

function CompruebaPalabra(visor) {
    //comprueba si se completo toda la palabra
    var fin = true
        //obtiene cadena actual
    var cadena = new String(visor.displayPalabra.value)
        //la separa en sus espacios
    var letrasCadena = cadena.split(" ")
    for (var x = 0; x < letrasCadena.length; x++)
        if (letrasCadena[x] == "_")
            fin = false
    return fin
}


function FinJuego(resultado) {
    //indica que si se ha perdido o ganado
    var solucion = ""
    jugando = false
    if (resultado) {
        document.visor.ganadas.value++
            alert("Acertaste !")
    } else {
        document.visor.perdidas.value++
            //construye la palabra solucion
            for (var x = 0; x < palabra.length; x++)
                solucion += palabra[x]
        alert("Fallaste !\n inténtalo de nuevo: " + solucion)
    }
}

/*setTimeout(function() {
    alert("ok");
    document.getElementById("ahoracadoimagen").src = "images/alfabeto/B.JPG";
}, 5000); */


function Dibujar(partes) {
    switch (partes) {
        case 0:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/principal.jpg";
            break;

        case 1:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/primero.jpg";
            break;
        case 2:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/segundo.jpg";
            break;
        case 3:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/tercero.jpg";
            break;
        case 4:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/cuarto.jpg";
            break;
        case 5:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/quinto.jpg";
            break;
        case 6:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/sexto.jpg";
            break;
        case 7:

            document.getElementById("ahoracadoimagen").src = "images/ahorcado/septimo.jpg";
            break;

        default:

    }
}