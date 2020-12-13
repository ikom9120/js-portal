$(document).ready(function () {
    getNews();

    $('.btn-outline-secondary').on('click', function () {
        getHoro($(this).attr('data-sign'));
    });

    getWeather();

    getCurrencies();
});
