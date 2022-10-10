function onlyOne(checkbox) {
    document.getElementsByName('r').forEach(item => { if (item !== checkbox) item.checked = false })
    
    $('.checkbox:checked').is(":checked") ? $('.a').removeClass('invalid') : $('.a').addClass('invalid');

}


$(function () {

    function validate() {
        return $(".radio:checked").length === 1 && document.getElementById("y-field").validity.valid && $('.checkbox:checked').is(":checked"); 
    }

    $('form').on('submit', function (event) {
        event.preventDefault();
        if (!validate()) return;
        $.ajax({
            url: 'php/main.php',
            method: 'GET',
            data: $(this).serialize() + '&timezone=' + new Date().getTimezoneOffset(),
            dataType: "json",
            beforeSend: () => $('.button').attr('disabled', 'disabled'),
            success: data => {
                $('.button').attr('disabled', false);
                if (data.validate) 
                    $('#result-table').append('<tr>'
                    + '<td>' + data.x + '</td>'
                    + '<td>' + data.y + '</td>'
                    + '<td>' + data.r + '</td>'
                    + '<td>' + data.curtime + '</td>'
                    + '<td>' + data.exectime + '</td>'
                    + '<td>' + data.hitres + '</td>');    
            }
        });
    });
});