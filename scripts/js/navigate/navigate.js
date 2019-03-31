/*navigate the site (isolate tag container on screen)*/
function navigate(element) {
    var nodes = element.parentNode.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children;
    var node = null;
    for (i = 0; i < nodes.length; i++) {
        node = nodes[i].children[0].children[0].children[0].innerHTML;        
        $(nodes[i]).fadeIn();
        if (node != element.innerHTML) {            
            if (element.innerHTML == "all") {
                
                $(nodes[i]).fadeIn();
            }
            else {
                $(nodes[i]).toggle();
            }
        }
    }
    if (window.innerWidth < 1920) {
        //    document.getElementsByTagName("nav")[0].style.display = "none";
        $("nav").fadeOut();    
    }
}