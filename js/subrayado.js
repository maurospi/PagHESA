var element = document.body.children

function Subrayar() {
    for (var i = 0; i < element.length; i++) {
        element[i].style.textDecoration = 'underline'
        for (var k = 0; k < element[i].children; k++) {
            element[i].children[k].style.textDecoration = 'underline'

        }

    }


}

function subrayado() {
    document.body.style.textDecoration = 'underline';
}