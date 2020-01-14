$(document).ready(function() {

    //! Masquer le texte

    $("#green").on('click', function() {
        $("p").hide()
    })

    //! Afficher le texte

    $("#blue").on('click', function() {
        $("p").show()
    })

    //! Masquer la liste

    $("#orange").on('click', function() {
        $("li").hide()
    })

    //! Afficher la liste

    $("#yellow").on('click', function() {
        $("li").show()
    })

    //! Masquer le texte rapidemment

    $("#red").on('click', function() {
        $("p").hide('fast')
    })

    //! Afficher la liste doucement

    $("#pink").on('click', function() {
        $("li").show('slow')
    })

    //! Afficher le texte en fadeIn

    $("#marron").on('click', function() {
        $("p").fadeIn()
    })

    //! Masquer la liste en fadeOut

    $("#gris").on('click', function() {
        $("li").fadeOut()
    })
});