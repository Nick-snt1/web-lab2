import { sendData, addFormActions } from './form_actions.js';
import { redrawDots, removeDots, addGrafActions } from './graf_actions.js';
import { URL } from './constants.js';

$(document).ready(function () {
    var ctx = $("#graf")[0].getContext("2d");

    redrawDots(ctx);

    addFormActions(removeDots, URL, ctx);
    addGrafActions(sendData, URL, ctx);

    $.ajax({
        url: URL + '/controller_servlet?get_table=1',
        dataType: "json",
        success: function(data) {  
            for (let i = 0; i < Object.keys(data).length; i++) {
                $('#result-table').append(getRow(data[i]));
            }
        }
    });
});









