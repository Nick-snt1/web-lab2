export function sendData(data, URL) {
    function getRow(obj) {
        return '<tr class="removable">'
            + '<td>' + obj.x + '</td>'
            + '<td>' + obj.y + '</td>'
            + '<td>' + obj.r + '</td>'
            + '<td>' + obj.hit + '</td>'
            + '<td>' + obj.curtime + '</td>'
            + '<td>' + obj.exectime + '</td>';
    }

    $.ajax({
        url: URL + '/controller_servlet',
        dataType: "json",
        data: data,
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
}

export function addFormActions(removeDots, URL, ctx) {

    function validate() {
        return $("input[type='radio']:checked").length === 1 && document.getElementById("y-field").validity.valid && $('input[type="checkbox"]').is(":checked");
    }

    function onlyOne(checkbox) {
        document.getElementsByName('r').forEach((item) => { if (item !== checkbox) item.checked = false; });
        $('input[type="checkbox"]').is(":checked")
            ? $('.button-label').removeClass('invalid').removeClass('glowing_bottons')
            : $('.button-label').addClass('invalid');
    }

    $('form').on('submit', function (event) {
        event.preventDefault();
        if (!validate()) return;
        sendData($('form').serialize(), URL);
    });

    $('input.button[type=button]').click(function () {
        $('.button-label').removeClass('invalid').removeClass('glowing_bottons');
        document.getElementsByName('r').forEach(item => item.checked = item.value === '1');
        document.getElementsByName('x').forEach(item => item.checked = item.value === '0');
        $('#y-field').val('0');
        localStorage.clear();
        removeDots(ctx);

        $.ajax({
            url: URL + '/controller_servlet?clear_table=1',
            success: () => $('#result-table tr.removable').remove()
        });
    });

    $('input[type="checkbox"]').click((event) => onlyOne(event.target));


}