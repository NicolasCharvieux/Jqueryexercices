$(document).ready(function() {

    //! texte en vert avec addClass, ...

    $("#green").on('click', function() {
        $("p").toggleClass('vert')
    })

    //! texte en bleu avec addClass, ...

    $("#blue").on('click', function() {
        $("p").toggleClass('bleu')
    })

    //! texte en gras avec addClass, ...

    $("#bold").on('click', function() {
        $("p").addClass('gras')
    })

    //! supprimer le gras du texte avec addClass, ...

    $("#ss_bold").on('click', function() {
        $("p").removeClass('gras')
    })

    //! texte en italique avec addClass, ... puis recliquer sur le boutton pour l'enlever.

    $("#italic").on('click', function() {
        $("p").toggleClass('italic')
    })
});