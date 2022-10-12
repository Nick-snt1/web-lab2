function onlyOne(checkbox) {
    document.getElementsByName('r').forEach(item => { if (item !== checkbox) item.checked = false });
    $('input[type="checkbox"]:checked').is(":checked") ? $('.button-label').removeClass('invalid') : $('.button-label').addClass('invalid');

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
            $('#result-table').append('<tr class="removable">'
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

$(document).ready(function () {
    $.ajax({
        type: "POST",
        url: 'php/get_table.php',
        dataType: "json",
        success: function(data) {
            for (i = 0; i < Object.keys(data).length; i++) {
                row = data[''+ i];
                $('#result-table').append('<tr class="removable">'
                    + '<td>' + row.x + '</td>'
                    + '<td>' + row.y + '</td>'
                    + '<td>' + row.r + '</td>'
                    + '<td>' + row.hit + '</td>'
                    + '<td>' + row.curtime + '</td>'
                    + '<td>' + row.exectime + '</td>');
            }
        },    
    });
});

$('input.button[type=button]').click(function () {
    $('.button-label').removeClass('invalid')
    document.getElementsByName('r').forEach(item => item.checked = item.value == '1' ? true : false);
    document.getElementsByName('x').forEach(item => item.checked = item.value == '0' ? true : false);
    $('#y-field').val('0');
    $.ajax({
        url: 'php/clear_table.php',
        success: () => $('#result-table tr.removable').remove(),
        error: (x, y, z) => alert(x + y + z)
    });

});