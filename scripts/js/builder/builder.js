window.onload = function () {
    //builder
    var html_placeholder = document.getElementById("HTML_placeholder");
    var html_header = document.getElementById("placeholder_header");
    var html_main = document.getElementById("placeholder_main");
    var html_section = document.getElementById("placeholder_section");
    var html_footer = document.getElementById("placeholder_footer");
    for (var i = 0; i < sessionStorage.length; i++) {
        var obj = get_from_storage("article_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("aside_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("canvas_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("figfigcaption_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("footer_" + i);
        if (obj != null) {
            html_footer.innerHTML += obj;
        };
        obj = get_from_storage("header_" + i);
        if (obj != null) {
            html_header.innerHTML = obj + html_header.innerHTML;
        };
        //            obj = get_from_storage("main_" + i);
        //            if (obj != null) {
        //                var temp = html_main.innerHTML;
        //                html_main.innerHTML = "";
        //                html_main.innerHTML += obj;
        //                html_main.childNodes[4].innerHTML = temp;
        //            };
        obj = get_from_storage("mark_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("meter_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("nav_" + i);
        if (obj != null) {
            html_header.innerHTML += obj;
        };
        obj = get_from_storage("progress_" + i);
        if (obj != null) {
            html_header.innerHTML = obj + html_header.innerHTML;
        };
        obj = get_from_storage("section_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
        obj = get_from_storage("video_" + i);
        if (obj != null) {
            html_section.innerHTML += obj;
        };
    }
    //prepare document for download
    var final_html = document.getElementById("HTML_placeholder").innerHTML;
    $.get('prefabs/html.html', function (data) { add_to_storage("html_template", data.replace("data", final_html)) }, 'html');
}

function add_to_html(element) {
    var reader = new FileReader();
    var parent = element.parentNode.parentNode;
    var id = parent.id;
    //
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1;
    } else {
        sessionStorage.clickcount = 0;
    }
    //    
    switch (id) {
        case "add_new_article":
            var article_image = parent.article_image.files[0];
            var article_title = parent.article_title.value;
            var article_text = parent.article_text.value;
            var article_link = parent.article_link.value;
            //
            if (article_image) {
                reader.readAsDataURL(article_image);
            }
            //
            $.get('prefabs/article.html', function (data) {
                add_to_storage("article_" + sessionStorage.clickcount, data.replace("img_src", reader.result).replace("article_title", article_title).replace("image_caption", article_image.name).replace("article_text", article_text).replace("article_link", article_link))
            }, 'html');
            break;

        case "add_new_aside":
            var aside_title = parent.aside_title.value;
            var aside_text = parent.aside_text.value;
            $.get('prefabs/aside.html', function (data) {
                add_to_storage("aside_" + sessionStorage.clickcount, data.replace("aside_title", aside_title).replace("aside_text", aside_text))
            }, 'html');
            break;

        case "add_new_canvas":
//            var canvas_id = parent.canvas_id.value;
            var canvas_width = parent.canvas_width.value;
            var canvas_height = parent.canvas_height.value;
            var canvas_draw_type = parent.canvas_draw_type.options[parent.canvas_draw_type.selectedIndex].value;
            $.get('prefabs/canvas.html', function (data) {
                add_to_storage("canvas_" + sessionStorage.clickcount, data.replace("canvas_id", canvas_draw_type + "_" + sessionStorage.clickcount).replace("canvas_width", canvas_width).replace("canvas_height", canvas_height))
            }, 'html');
            break;

        //        case "add_new_feedback":
        case "add_new_figfigcaption":            
            var figfigcaption_image = parent.figfigcaption_image.files[0];
            var figfigcaption_text = parent.figfigcaption_text.value;
            //
            if (figfigcaption_image) {
                reader.readAsDataURL(figfigcaption_image);
            }
            $.get('prefabs/fig_figcaption.html', function (data) {
                add_to_storage("figfigcaption_" + sessionStorage.clickcount, data.replace("img_id", "img_id" + sessionStorage.clickcount).replace("img_src", reader.result).replace("image_caption", figfigcaption_text))
            }, 'html');
            break;

        case "add_new_footer":
            var footer_link = parent.footer_link.value;
            var link_text = parent.link_text.value;
            var footer_text = parent.footer_text.value;
            $.get('prefabs/footer.html', function (data) {
                add_to_storage("footer_" + sessionStorage.clickcount, data.replace("footer_link", footer_link).replace("link_text", link_text).replace("footer_text", footer_text))
            }, 'html');

        case "add_new_header":
            var header_image = parent.header_image.files[0];
            var header_site_title = parent.header_site_title.value;
            //
            if (header_image) {
                reader.readAsDataURL(header_image);
            }
            $.get('prefabs/header.html', function (data) {
                add_to_storage("header_" + sessionStorage.clickcount, data.replace("web_logo_src", reader.result).replace("web_title", header_site_title))
            }, 'html');
            break;

//        case "add_new_main":
//            var main_text = parent.main_text.value;
//            $.get('prefabs/main.html', function (data) {
//                add_to_storage("main_" + sessionStorage.clickcount, data)
//            }, 'html');
//            break;

        case "add_new_mark":
            var mark_color = parent.mark_color.value;
            var mark_text = parent.mark_text.value;
            $.get('prefabs/mark.html', function (data) {
                add_to_storage("mark_" + sessionStorage.clickcount, data.replace("mark_color", mark_color).replace("mark_text", mark_text))
            }, 'html');
            break;

        case "add_new_meter":
            var meter_color = parent.meter_color.value;
            var meter_value = parent.meter_value.value;
            $.get('prefabs/meter.html', function (data) {
                add_to_storage("meter_" + sessionStorage.clickcount, data.replace("meter_color", meter_color).replace("meter_value", meter_value).replace("meter_value_text", meter_value.toString()))
            }, 'html');
            break;

        case "add_new_nav":
            var link1 = parent.link1.value;
            var link1_text = parent.link1_text.value;
            var link2 = parent.link2.value;
            var link2_text = parent.link2_text.value;
            var link3 = parent.link3.value;
            var link3_text = parent.link3_text.value;
            $.get('prefabs/nav.html', function (data) {
                add_to_storage("nav_" + sessionStorage.clickcount, data.replace("link1", link1).replace("link1_text", link1_text).replace("link2", link2).replace("link2_text", link2_text).replace("link3", link3).replace("link3_text", link3_text))
            }, 'html');
            break;

        case "add_new_progress":
            var progress_color = parent.progress_color.value;
            $.get('prefabs/progress.html', function (data) {
                add_to_storage("progress_" + sessionStorage.clickcount, data.replace("progress_color", progress_color))
            }, 'html');
            break;

        case "add_new_section":
            var section_headline = parent.section_headline.value;
            var section_text = parent.section_text.value;
            $.get('prefabs/section.html', function (data) {
                add_to_storage("section_" + sessionStorage.clickcount, data.replace("section_headline", section_headline).replace("section_text", section_text))
            }, 'html');
            break;

        case "add_new_video":
            var video_source = parent.video_source.value;
            $.get('prefabs/video.html', function (data) {
                add_to_storage("video_" + sessionStorage.clickcount, data.replace("video_source", video_source))
            }, 'html');
            break;

        //new elements here

    }
    //disable default form behaviour
    //return false;

}


/*generate any form element should always this */
function gen_form(element, formName, inputList, nameList, idList, typeList, defaultValueList) {
    try {
        var parent = element.parentNode;
        var inputs = inputList.split(',');
        var names = nameList.split(',');
        var ids = idList.split(',');
        var types = typeList.split(',');
        var values = defaultValueList.split(',');
        var input = null;
        var form = document.createElement("form");
        form.name = formName;
        var submit = null;
        for (i = 0; i < inputs.length; i++) {
            input = document.createElement(inputs[i]);
            input.id = ids[i];
            if (types[i] != "textarea" || types[i] != "label") {
                input.type = types[i];
            }
            if (values[i] != "" || values[i] != null) {
                input.value = values[i];
            }
            if (types[i] == "label" || inputs[i] == "label") {
                input.htmlFor = ids[i + 1];
                input.innerHTML = names[i];
            }
            else {
                input.attributes.required = true;
            }
            form.appendChild(input);
            form.appendChild(document.createElement("br"));
        }
        parent.appendChild(form);
        parent.children[1].style.display = "none";
        parent.children[2].style.display = "none";
        console.log(form);
    }
    catch (ex) {
        console.log(ex);
        alert("Something happened. Please try again later.")
    }
}