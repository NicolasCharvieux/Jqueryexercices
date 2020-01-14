// $(document).ready(function() {

//! texte en orange

//     var or = $("#orange")
//     var para = $("p")

//     $(or).on('click', function() {
//         $(para).css('color', 'orange')
//     })
// });



// $(document).ready(function() {

//! texte en vert avec addClass, ...

//     $("#green").on('click', function() {
//         $("p").toggleClass('vert')
//     })
// });

$(document).ready(function() {

    //! Remplacer le texte du 1er li

    $("#btn1").on('click', function() {
        $("li:first").text('Hello World')
    })

    //! Ajouter du texte à la fin du 2eme li du 1er ul

    $("#btn2").on('click', function() {
        $("ul:first li:nth-child(2)").text($("ul:first li:nth-child(2)").text() + 'Ceci est un ajout !')
    })

    //! Ajouter du texte au début du 3eme li du 1er ul

    $("#btn3").on('click', function() {
        $("ul:first li:nth-child(3)").text('Ceci est un ajout !' + $("ul:first li:nth-child(3)").text())
    })

    //! Ajouter un li au 1er ul

    $("#btn4").on('click', function() {
        $("ul:first li:nth-child(4)").after('<li>Je suis un nouveau li !</li>')
    })

    //! Duppliquer le 2eme ul avant le 1er ul

    $("#btn5").on('click', function() {
        $("ul:first").before($("ul:last").clone())
    })
});