/*get stylesheet object*/
function getStyleSheet(sheetName) {
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        if (sheet.href && sheet.href.indexOf(sheetName + ".css") > -1) {            
            return sheet;
        }
    }
}