$(document).ready(function () {


    /*Dismiss notifications window*/
    $("#notifications_dismiss").click(function () { $(this.parentNode.parentNode).fadeToggle(); });

    /*Navigation*/
    $("nav a.menu-item").click(function () { navigate(this) });
    //$("#menu").menu();

    /*Toggle example section, each <div><aside> */
    $("main button:nth-of-type(1)").click(function () { $(this.parentNode.children[1]).fadeToggle() });

    /*Toggle reader friendly fonts: large, medium, small*/
    $("#menu li:nth-of-type(21) a").click(function () { $("body").css("font-size", "large") });
    $("#menu li:nth-of-type(22) a").click(function () { $("body").css("font-size", "medium") });
    $("#menu li:nth-of-type(23) a").click(function () { $("body").css("font-size", "small") });

    /*Toggle info section modal*/
    $("#info").click(function () { $("#info-dialog").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    /*Toggle HTML Document View*/
    $("#html_document").click(function () { $("#your_document_dialog").dialog({ modal: true, dialogClass: "modal", buttons: { Download: function () { var template = get_from_storage("html_template"); var filename = "mydocument.html"; var blob = new Blob([template], { type: "text/plain;charset=utf-8" }); saveAs(blob, filename) }, Cancel: function () { $(this).dialog("close") } } }) });

    $("#toggle_article_settings").click(function () { $("#article_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_aside_settings").click(function () { $("#aside_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_canvas_settings").click(function () { $("#canvas_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_feedback_settings").click(function () { $("#feedback_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_figfigcaption_settings").click(function () { $("#figfigcaption_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_footer_settings").click(function () { $("#footer_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_header_settings").click(function () { $("#header_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_main_settings").click(function () { $("#main_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_mark_settings").click(function () { $("#mark_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_meter_settings").click(function () { $("#meter_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_nav_settings").click(function () { $("#nav_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_progress_settings").click(function () { $("#progress_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_section_settings").click(function () { $("#section_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_svg_settings").click(function () { $("#svg_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_video_settings").click(function () { $("#video_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#toggle_geolocate_settings").click(function () { $("#geolocate_modal").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });

    /*HTML document & KB controls*/
    $("#show_me_how").click(function () { $("#info-dialog").dialog({ modal: true, dialogClass: "modal", buttons: { Ok: function () { $(this).dialog("close") } } }) });
    $("#document_menu").click(function () { $("#your_document_dialog").dialog({ modal: true, dialogClass: "modal", buttons: { Download: function () { var template = get_from_storage("html_template"); var filename = "mydocument.html"; var blob = new Blob([template], { type: "text/plain;charset=utf-8" }); saveAs(blob, filename) }, Cancel: function () { $(this).dialog("close") } } }) });
    $("#document_menu2").click(function () { $("#your_document_dialog").dialog({ modal: true, dialogClass: "modal", buttons: { Download: function () { var template = get_from_storage("html_template"); var filename = "mydocument.html"; var blob = new Blob([template], { type: "text/plain;charset=utf-8" }); saveAs(blob, filename) }, Cancel: function () { $(this).dialog("close") } } }) });

})