function drawDot(ctx, x, y) {
    let circle = new Path2D();
    circle.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.fillStyle = "#f5f5f5";
    ctx.fill(circle);
}

export function removeDots(ctx) {
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.restore();
}

export function redrawDots(ctx) {
    for (let dot of Object.values(localStorage)) {
        dot = JSON.parse(dot);
        drawDot(ctx, dot.x * (ctx.canvas.width / dot.canvas_size), dot.y * (ctx.canvas.width / dot.canvas_size));
    }
}

export function addGrafActions(sendData, URL, ctx) {

    function resizeCtxCanvas(ctx) {
        const { width, height } = ctx.canvas.getBoundingClientRect();
        ctx.canvas.width = width;
        ctx.canvas.height = height;
    }

    function transformCoords(x, y, half_canvas_size) {
        var r = Number($('input[type="checkbox"]:checked').val());
        x = ((x - half_canvas_size) * ((r + (r * 0.705)) / half_canvas_size)).toFixed(5);
        y = (((-1 * (y - half_canvas_size))) * ((r + (r * 0.705)) / half_canvas_size)).toFixed(5);
        return { x: x, y: y, r: r };    
    }

    resizeCtxCanvas(ctx);

    window.addEventListener('resize', () => {
        resizeCtxCanvas(ctx);
        redrawDots(ctx);
    });


    $("#graf").click((e) => {
        var x = e.offsetX;
        var y = e.offsetY;

        if ($('input[type="checkbox"]:checked').is(":checked")) {
            localStorage.setItem(localStorage.length,
                JSON.stringify({ x: x, y: y, canvas_size: ctx.canvas.width }));

            drawDot(ctx, x, y);

            sendData(transformCoords(x, y, ctx.canvas.width / 2), URL);
        } else {
            $('.button-label').addClass('glowing_bottons');
        }
    });

}
