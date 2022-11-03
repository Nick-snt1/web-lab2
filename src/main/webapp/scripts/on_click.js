function onlyOne(checkbox) {
    document.getElementsByName('r').forEach((item) => { if (item !== checkbox) item.checked = false; });
    $('input[type="checkbox"]:checked').is(":checked") ? $('.button-label').removeClass('invalid') : $('.button-label').addClass('invalid');

}

function validate() {
    return $("input[type='radio']:checked").length === 1 && document.getElementById("y-field").validity.valid && $('input[type="checkbox"]:checked').is(":checked"); 
}

function getRow(obj) {
    return '<tr class="removable">'
        + '<td>' + obj.x + '</td>'
        + '<td>' + obj.y + '</td>'
        + '<td>' + obj.r + '</td>'
        + '<td>' + obj.hit + '</td>'
        + '<td>' + obj.curtime + '</td>'
        + '<td>' + obj.exectime + '</td>';
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
            $('#result-table').append(getRow(data));
        },
        statusCode: {
            400: (x) => alert(x)
        },
        error: () => alert("Something went wrong!")
    });
});

$(document).ready(function () {
    $.ajax({
        url: 'php/get_table.php',
        dataType: "json",
        success: function(data) {
            for (i = 0; i < Object.keys(data).length; i++) 
		$('#result-table').append(getRow(data[i]));
        }
    });
});

$('input.button[type=button]').click(function () {
    $('.button-label').removeClass('invalid');
    document.getElementsByName('r').forEach(item => item.checked = item.value === '1');
    document.getElementsByName('x').forEach(item => item.checked = item.value === '0');
    $('#y-field').val('0');
    $.ajax({
        url: 'php/clear_table.php',
        success: () => $('#result-table tr.removable').remove()
    });
});
