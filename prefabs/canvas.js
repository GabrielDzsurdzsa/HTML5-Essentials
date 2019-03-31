window.onload = function () {
    var placeholder = document.getElementById("placeholder_section");
    var canvas = placeholder.getElementsByTagName("canvas");
    for (i = 0; i < canvas.length; i++) {
        var context = canvas[i].getContext("2d");
        var canvas_width = canvas[i].width;
        var canvas_height = canvas[i].height;
        var id = canvas[i].id;
        console.log(id);
        switch (id) {

            case "canvas_line_" + i:
                context.moveTo(0, 0);
                context.lineTo(canvas_width, canvas_height);
                context.stroke();
                break;

            case "canvas_circle" + i:
                context.beginPath();
                context.arc(95, 50, 40, 0, 2 * Math.PI);
                context.stroke();
                break;

            case "canvas_linearG" + i:
                var grd = context.createLinearGradient(0, 0, 200, 0);
                grd.addColorStop(0, "red");
                grd.addColorStop(1, "white");
                context.fillStyle = grd;
                context.fillRect(10, 10, 150, 80);
                break;

            case "canvas_circularG" + i:
                var grd = context.createRadialGradient(75, 50, 5, 90, 60, 100);
                grd.addColorStop(0, "red");
                grd.addColorStop(1, "white");
                context.fillStyle = grd;
                context.fillRect(10, 10, 150, 80);
                break;

        }
    }

}
    