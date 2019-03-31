$(document).ready(function () {
    var i = 1;
    /*populate grid section divs in sequence with fade effect*/
    $("section div").each(function (i) { $(this).delay(50 * i).fadeTo(50, 1) });
    /*make grid items (using div containers) draggable and re-organizable*/
    //$("section div").each(function () { $(this).draggable({containment: "parent", snap: true, snapMode: "outer", revert: true }) });
    $("section div").draggable({ containment: "parent", snap: true, snapMode: "outer", revert: true });
})