// ARAMA

$(".tbSearch").focusin(function () {
    $(this).animate({ width: 300 });
});
$(".tbSearch").focusout(function () {
    $(this).animate({ width: 200 });
});


$(".tbSearch").keyup(function () {
    if ($(this).val() == "") {
        $(".sList li").remove();
        $(".autoSearch li").remove();
    }
    else {
        $(".autoSearch li").remove();
        SearchAutoComplete($(this).val());
    }
});

$(".tbSearchMobile").keyup(function () {
    if ($(this).val() == "") {
        $(".sList li").remove();
        $(".autoSearch li").remove();
    }
    else {
        $(".autoSearch li").remove();
        SearchAutoComplete($(this).val());
    }
});

$(".hdrSearch").mouseleave(function () { $(this).find(".autoSearch").slideUp(); });

function SearchAutoComplete(Search) {
    $.ajax({
        type: "POST",
        url: "/WebServices/Admin.asmx/SearchAutoComplete",
        data: "{'Search': '" + Search + "', 'lang': '" + lang + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) {

            $(".autoSearch").append(msg.d).slideDown(0);

            $(".autoSearch li a").click(function () {
                $(".hdrSearch input[type='text']").val($(this).text());
                $(".autoSearch").slideUp();
            });
        }
    });
}


$(window).load(function () {

    try {
        var sneaky = new ScrollSneak(location.hostname), tabs = document.getElementById('ulMain').getElementsByTagName('li'), i = 0, len = tabs.length;
        for (; i < len; i++) {
            tabs[i].onclick = sneaky.sneak;
        }

        i = 0;
        tabs2 = $(".ulCats li");
        len = tabs2.length;
        for (; i < len; i++) {
            tabs2[i].onclick = sneaky.sneak;
        }
    }
    catch (e) {

    }

});