var share = {
    fb: function (url, title) {
        return this.share('facebook', 'external.html?link=http://www.facebook.com/sharer.php?u=##URL##&t=##TITLE##', url, title, false);
    },
    tw: function (url, title) {
        return this.share('twitter', 'external.html?link=http://twitter.com/share?url=##URL##&text=##TITLE##', url, title, false, 660, 370);
    },
    gplus: function (url, title) {
        return this.share('gplus', 'external.html?link=https://plus.google.com/share?url=##URL##', url, title, false, 660, 550);
    },
    pinterest: function (url, title, mediaUrl) {

        if (!mediaUrl || mediaUrl == '')
            mediaUrl = $('.logo').attr('src');

        mediaUrl = encodeURIComponent(mediaUrl);
        return this.share('pinterest', 'http://pinterest.com/pin/create/button/?url=##URL##&description=##TITLE##&media=' + mediaUrl, url, title, false, 660, 550);
    },
    share: function (socialnetwork, tpl, url, title, fancyBox, width, height) {
        var pageUrl = url;
        if (!url || url == '')
            url = encodeURIComponent(window.location);
        else
            url = encodeURIComponent(url);
        if (!title || title == '')
            title = encodeURIComponent(document.title);
        else
            title = encodeURIComponent(title);
        tpl = tpl.replace("##URL##", url);
        tpl = tpl.replace("##TITLE##", title);
        var defaultWidth = 660, defaultHeight = 400;
        if (!width || width == '')
            width = defaultWidth;
        if (!height || height == '')
            height = defaultHeight;
        var screenPosX = 250;
        var screenPosY = 250;
        if (width > defaultWidth) {
            screenPosX = 150;
        }
        if (height > defaultHeight) {
            screenPosY = 150;
        }
        if (fancyBox) {
            $.fancybox({
                href: tpl,
                title: title,
                width: width,
                height: height,
                type: 'iframe',
                tpl: {
                    closeBtn: '<div title="' + strings['fancybox.close'] + '" class="fancybox-item fancybox-close"></div>'
                },
                autoSize: false,
                iframe: {
                    scrolling: 'no'
                }
            });
        } else {
            window.open(tpl, title, 'width=' + width + ',height=' + height + ',screenX=' + screenPosX + ',left=' + screenPosX + ',screenY=' + screenPosY + ',top=' + screenPosY
					+ ',status=no,menubar=no');
        }
        // google analytics social event tracker
        if (window.ga) {
            ga('send', 'social', socialnetwork, 'share', pageUrl, { 'page': window.location.pathname });
        }
        return false;
    }
};


$(document).ready(function () {
    //Examples of how to assign the Colorbox event to elements
    $(".group1").colorbox({ rel: 'group1' });
    $(".group2").colorbox({ rel: 'group2', transition: "fade" });
    $(".group3").colorbox({ rel: 'group3', transition: "none", width: "75%", height: "75%" });
    $(".group4").colorbox({ rel: 'group4', slideshow: true });
    $(".ajax").colorbox();
    $(".youtube").colorbox({ iframe: true, innerWidth: 640, innerHeight: 390 });
    $(".vimeo").colorbox({ iframe: true, innerWidth: 500, innerHeight: 409 });
    $(".iframe").colorbox({ iframe: true, width: "80%", height: "80%" });
    $(".inline").colorbox({ inline: true, width: "50%" });
    $(".callbacks").colorbox({
        onOpen: function () { alert('onOpen: colorbox is about to open'); },
        onLoad: function () { alert('onLoad: colorbox has started to load the targeted content'); },
        onComplete: function () { alert('onComplete: colorbox has displayed the loaded content'); },
        onCleanup: function () { alert('onCleanup: colorbox has begun the close process'); },
        onClosed: function () { alert('onClosed: colorbox has completely closed'); }
    });

    $('.non-retina').colorbox({ rel: 'group5', transition: 'none' })
    $('.retina').colorbox({ rel: 'group5', transition: 'none', retinaImage: true, retinaUrl: true });

    //Example of preserving a JavaScript event for inline calls.
    $("#click").click(function () {
        $('#click').css({ "background-color": "#f00", "color": "#fff", "cursor": "inherit" }).text("Open this window again and this message will still be here.");
        return false;
    });
});



/*MASTER*/
$(document).ready(function myfunction() {

    $('#mainSlider').bxSlider({
        pagerCustom: '#bx-pager1',
        auto: true,
        pause: 5000,
        controls: false
    });
    $('#mobileSlider').bxSlider({
        pagerCustom: '#bx-pager',
        auto: true,
        pause: 5000,
        controls: false
    });


});










