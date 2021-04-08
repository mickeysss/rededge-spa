$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger,.header-menu').toggleClass('active')
    })
    $('body').toggleClass('active')
})