// SEARCH PAGE
$(document).ready(function () {
    $('#slider-range').slider({
        range: true,
        min: new Date('2020.09.31').getTime() / 1000,
        max: new Date('2022.02.31').getTime() / 1000,
        step: 86400,
        values: [
            new Date('2021.02.18').getTime() / 1000,
            new Date('2021.09.09').getTime() / 1000,
        ],
        slide: function (event, ui) {
            $('#amount-1').val(
                new Date(ui.values[0] * 1000).getFullYear() +
                ' ' +
                (new Date(ui.values[0] * 1000).getMonth() + 1) +
                ' ' +
                new Date(ui.values[0] * 1000).getDate()
            );
            $('#amount-2').val(
                new Date(ui.values[1] * 1000).getFullYear() +
                ' ' +
                (new Date(ui.values[1] * 1000).getMonth() + 1) +
                ' ' +
                new Date(ui.values[1] * 1000).getDate()
            );
        },
    });
    $('#amount-1').val(
        new Date(
            $('#slider-range').slider('values', 0) * 1000
        ).getFullYear() +
        ' ' +
        (new Date(
            $('#slider-range').slider('values', 0) * 1000
        ).getMonth() +
            1) +
        ' ' +
        new Date($('#slider-range').slider('values', 0) * 1000).getDate()
    );
    $('#amount-2').val(
        new Date(
            $('#slider-range').slider('values', 1) * 1000
        ).getFullYear() +
        ' ' +
        (new Date(
            $('#slider-range').slider('values', 1) * 1000
        ).getMonth() +
            1) +
        ' ' +
        new Date($('#slider-range').slider('values', 1) * 1000).getDate()
    );
});

$('.open_btn, .filter_search-block-open-btn').click(function () {
    $('.open_btn').toggleClass('close');
    $('.filter_search-block-open-btn').toggleClass('close');
    $('.filter--block_open').toggleClass('open');
    $('.filter_search-block').toggleClass('open');
});
$('.filter--block_open, .filter_search-block-close-btn').click(
    function () {
        $('.open_btn').toggleClass('close');
        $('.filter_search-block-open-btn').toggleClass('close');
        $('.filter--block_open').toggleClass('open');
        $('.filter_search-block').toggleClass('open');
    }
);

// Menu
$(document).ready(function () {
    $('#animation_menu_btn').click(function () {
        $(".megamenu").toggleClass('open_with_animation');
        $(".megamenu").toggleClass('megamenu-closed');
        $(".menu_icon_burger").toggleClass('close_burger_icon');
        $(".menu_icon_close").toggleClass('open_close_icon');
    });
}) 