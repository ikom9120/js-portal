/**
 * Ф-ция отправляет запрос для подтягивания новостей с backend
 */
function getNews() {
    $.ajax({
        url: '/backend/news.php',
        type: 'get',
        dataType: 'json',
        timeout: 5 * 1000,
        success: function (response) {
            $('.load-news').hide();
            for (let i = 0; i < response.length; i++) {
                $('.news').append(response[i]['title'] + '<br>');
                $('.news').append('<img src="' + response[i]['image'] + '" class="img-news" > <br>');
                $('.news').append('<div class="text-news">' + response[i]['text'] + '</div>');
                $('.news').append('<div class="indent"></div>');
                $('.news').append('<div class="created-news">' + response[i]['created_at'] + '</div>');
                $('.news').append('<hr><br>');
            }
        },
        error: function (response) {
            Swal.fire(
                'Ошибка отправки'
            );
        }
    });
}

/**
 * Ф-ция отправляет запрос для подтягивания гороскопа с backend
 */
function getHoro(sign) {
    $.ajax({
        url: '/backend/horo.php?sign=' + sign,
        type: 'get',
        dataType: 'json',
        timeout: 5 * 1000,
        success: function (response) {
            $('.load-horo').hide();
            $('#sign-' + sign + ' .card-body').html(response['text']);
        },
        error: function (response) {
            Swal.fire(
                'Ошибка отправки'
            );
        }
    });
}

/**
 * Ф-ция отправляет запрос для подтягивания погоды с backend
 */
function getWeather() {
    $.ajax({
        url: '/backend/weather.php',
        type: 'get',
        dataType: 'json',
        timeout: 5 * 1000,
        success: function (response) {
            console.log(response);
            $('.load-weather').hide();
            let type = '';
            if (response['odessa']['yesterday']['type'] === "snow") {
                type = 'снег';
            }
            if (response['odessa']['yesterday']['type'] === "rain") {
                type = 'дождь';
            }
            if (response['odessa']['yesterday']['type'] === "sun") {
                type = 'солнце';
            }
            $('#yesterday').append(' ' + response['odessa']['yesterday']['degrees'] + ' ℃' + '<br>' + [type]);
            if (response['odessa']['yesterday']['type'] === "snow") {
                $('#yesterday').html('<img src="image/snow.png" class="img-type">' + $('#yesterday').html() + '<br><br>');
            }
            if (response['odessa']['yesterday']['type'] === "rain") {
                $('#yesterday').html('<img src="image/rain.png" class="img-type">' + $('#yesterday').html() + '<br><br>');
            }
            if (response['odessa']['yesterday']['type'] === "sun") {
                $('#yesterday').html('<img src="image/sun.png" class="img-type">' + $('#yesterday').html() + '<br><br>');
            }

            if (response['odessa']['today']['type'] === "snow") {
                type = 'снег';
            }
            if (response['odessa']['today']['type'] === "rain") {
                type = 'дождь';
            }
            if (response['odessa']['today']['type'] === "sun") {
                type = 'солнце';
            }
            $('#today').append(' ' + response['odessa']['today']['degrees'] + ' ℃' + '<br>' + [type]);
            if (response['odessa']['today']['type'] === "snow") {
                $('#today').html('<img src="image/snow.png" class="img-type">' + $('#today').html() + '<br><br>');
            }
            if (response['odessa']['today']['type'] === "rain") {
                $('#today').html('<img src="image/rain.png" class="img-type">' + $('#today').html() + '<br><br>');
            }
            if (response['odessa']['today']['type'] === "sun") {
                $('#today').html('<img src="image/sun.png" class="img-type">' + $('#today').html() + '<br><br>');
            }

            if (response['odessa']['tomorrow']['type'] === "snow") {
                type = 'снег';
            }
            if (response['odessa']['tomorrow']['type'] === "rain") {
                type = 'дождь';
            }
            if (response['odessa']['tomorrow']['type'] === "sun") {
                type = 'солнце';
            }
            $('#tomorrow').append(' ' + response['odessa']['tomorrow']['degrees'] + ' ℃' + '<br>' + [type]);
            if (response['odessa']['tomorrow']['type'] === "snow") {
                $('#tomorrow').html('<img src="image/snow.png" class="img-type">' + $('#tomorrow').html() + '<br><br>');
            }
            if (response['odessa']['tomorrow']['type'] === "rain") {
                $('#tomorrow').html('<img src="image/rain.png" class="img-type">' + $('#tomorrow').html() + '<br><br>');
            }
            if (response['odessa']['tomorrow']['type'] === "sun") {
                $('#tomorrow').html('<img src="image/sun.png" class="img-type">' + $('#tomorrow').html() + '<br><br>');
            }
        },
        error: function (response) {
            Swal.fire(
                'Ошибка отправки'
            );
        }
    });
}





