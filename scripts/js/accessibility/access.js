/*toggle accessibility*/
function tg_accs(element) {
    var stylesheet = getStyleSheet("styles");
    if (element.checked) {
        stylesheet.disabled = true;
    }
    else {
        stylesheet.disabled = false;
    }
}