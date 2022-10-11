function onlyOne(checkbox) {
    document.getElementsByName('r').forEach(item => { if (item !== checkbox) item.checked = false })
    
    $('input[type="checkbox"]:checked').is(":checked") ? $('.a').removeClass('invalid') : $('.a').addClass('invalid');

}




function validate() {
    return $("input[type='radio']:checked").length === 1 && document.getElementById("y-field").validity.valid && $('input[type="checkbox"]:checked').is(":checked"); 
}

$('form').on('submit', function (event) {
    event.preventDefault();
    if (!validate()) return;
    $.ajax({
        url: 'php/main.php',
        dataType: "json",
        data: $('form').serialize(),
        beforeSend: () => $('.button').attr('disabled', 'disabled'),
        success: function (data) {
            $('.button').attr('disabled', false);
            $('#result-table').append('<tr>'
                + '<td>' + data.x + '</td>'
                + '<td>' + data.y + '</td>'
                + '<td>' + data.r + '</td>'
                + '<td>' + data.hit + '</td>'
                + '<td>' + data.curtime + '</td>'
                + '<td>' + data.exectime + '</td>');
        },
        statusCode: {
            400: () => alert("Somethig went wrong with parameters")
        },
        error: () => alert("Something went wrong!")
    });
});
