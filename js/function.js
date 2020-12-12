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
                let news = $('.news');
                news.append(response[i]['title'] + '<br>');
                news.append('<img src="' + response[i]['image'] + ' " class="img-news" alt=""> <br>');
                news.append('<div class="text-news">' + response[i]['text'] + '</div>');
                news.append('<div class="indent"></div>');
                news.append('<div class="created-news">' + response[i]['created_at'] + '</div>');
                news.append('<hr><br>');
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
            $('.load-weather').hide();

            let arr = ['yesterday', 'today', 'tomorrow'];
            for (let i = 0; i < arr.length; i++) {

                let type = getType(response, arr[i]);

                $('#' + arr[i]).append(' ' + response['odessa'][arr[i]]['degrees'] + ' ℃' + '<br>' + type
                    + '<br>влажность: ' + response['odessa'][arr[i]]['humidity']);

                if (response['odessa'][arr[i]]['type'] === "snow") {
                    appendContent(arr[i], imgSnow);
                }
                if (response['odessa'][arr[i]]['type'] === "rain") {
                    appendContent(arr[i], imgRain);
                }
                if (response['odessa'][arr[i]]['type'] === "sun") {
                    appendContent(arr[i], imgSun);
                }
            }
        },
        error: function (response) {
            Swal.fire(
                'Ошибка отправки'
            );
        }
    });
}

let imgSnow = '<img src="image/snow.png" class="img-type" alt="">';
let imgRain = '<img src="image/rain.png" class="img-type" alt="">';
let imgSun = '<img src="image/sun.png" class="img-type" alt="">';

/**
 * Ф-ция добавляет информацию о погоде
 */
function appendContent(nameDay, nameImage) {
    $('#' + nameDay).html(nameImage + $('#' + nameDay).html() + '<br><br>')
}

/**
 * Ф-ция добавляет тип погоды
 */
function getType(response, nameDay) {
    let type = '';
    if (response['odessa'][nameDay]['type'] === "snow") {
        type = 'снег';
    }
    if (response['odessa'][nameDay]['type'] === "rain") {
        type = 'дождь';
    }
    if (response['odessa'][nameDay]['type'] === "sun") {
        type = 'солнце';
    }
    return type;
}




