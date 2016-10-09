/**
 * Created by nikita on 09/10/2016.
 */
$(function() {
    $.getJSON('package.json', function(data) {
        $('#books').append('<caption>' + data.title + '</caption>');
        for(var i = 0; i < data.books.length; i++){
            $('#books').append('<tr>' +
                '<td>' + data.books[i].title + '</td>' +
                '<td>' + data.books[i].author + '</td>' +
                '<td>' + data.books[i].date + '</td>' +
                '</tr>' );
        }
    });
});