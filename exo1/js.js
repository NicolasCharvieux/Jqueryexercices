$(document).ready(function() {

    //! p en vert

    var p = $("#green")
    var para = $("p")

    $(p).on('click', function() {
        $(para).css('color', 'green')
    })

    //! li en bleu

    var liste = $("#blue")
    var couleur = $("li")

    $(liste).on('click', function() {
        $(couleur).css('color', 'blue')
    })

    //! 1er li en orange

    var but = $("#orange")
    var prems = $("li:nth-child(1)")

    $(but).on('click', function() {
        $(prems).css('color', 'orange')
    })

    //! 2eme li en jaune

    var jaune = $("#yellow")
    var deusio = $("li:nth-child(2)")

    $(jaune).on('click', function() {
        $(deusio).css('color', 'yellow')
    })

    //! class "red" en rouge

    var rouge = $("#red")
    var classe = $(".red")

    $(rouge).on('click', function() {
        $(classe).css('color', 'red')
    })

    //! 2eme li du 2eme ul en rose

    var rose = $("#pink")
    var second = $("ul:last-child li:nth-child(2)")

    $(rose).on('click', function() {
        $(second).css('color', 'pink')
    })

    //! 4eme li du 1er ul en rose

    var mar = $("#marron")
    var quart = $("ul:first li:nth-child(4)")

    $(mar).on('click', function() {
        $(quart).css('color', 'brown')
    })

});