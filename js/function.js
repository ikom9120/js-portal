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
            $('.load').hide();
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





