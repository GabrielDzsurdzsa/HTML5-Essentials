/*add to session storage*/
function add_to_storage(key_name, key_value) {
    sessionStorage.setItem(key_name, key_value);    
}

function get_from_storage(key_name) {
    var item = sessionStorage.getItem(key_name);
    return item;
}