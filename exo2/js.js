$(document).ready(function() {

    //! texte en orange

    var or = $("#orange")
    var para = $("p")

    $(or).on('click', function() {
        $(para).css('color', 'orange')
    })
});

//! texte en noir

$(document).ready(function() {

    function noir() {
        $("p").css('color', 'black')
    }
    $("#noir").on('click', function() {
        noir()
    })
});

//! texte en violet

$(document).ready(function() {

    var vio = $("#violet")
    var para = $("p")

    $(vio).on('click', function() {
        $(para).css('color', 'blueviolet')
    })
});