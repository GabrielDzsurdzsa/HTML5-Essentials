/*get current user's location*/
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        //nothing
    }
}

/*show user's position on a bing map*/
function showPosition(position) {
    var location = new Microsoft.Maps.Location(position.coords.latitude, position.coords.longitude);
    var map = new Microsoft.Maps.Map('#bing', { credentials: 'AvLnNob-u-d1oyLlBp4kVCHWv8btjpXhXZy69zlvhkg4HdKBHaFnvAlDQgs3BUUN', center: location, zoom: 17 });
    $("#map").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } });
}