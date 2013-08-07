define(['jquery', 'jquery.fitvids.require'], function($,fitvids) {

    $.fn.fitVids = fitvids;

    var hacklife = {
        gvar : {
            defaultConfig : {},
            headerToggle : false,
            fluidWidthVideoWrapper : '.fluid-width-video-wrapper',
            hangingHeaderClass : 'hanging-header',
            fullscreenClass : '.fullscreen',
            currentScrollHeight : '0',
            shareWrapperOffset : (function () {
                return $('.share-wrapper').offset();
            } ())
        },
        el : {
            browserWindow : $(window),
            browserDocument : $(document),
            body : $('body'),
            header : $('.top-menu'),
            headerLogo : $('.hack-livet-logo'),
            headerTagline : $('.hack-livet-tagline'),
            headerAboutmeWrapper : $('.about-me-wrapper'),
            headerAboutmeCloseButton : $('.about-me-close-button'),
            contentWrapper : $('.content-wrapper'),
            articleWrapper : $('.article-wrapper'),
            shareWrapper : $('.share-wrapper'),
            articleHeader : $('.article-header'),
            gallery : $('.gallery-row'),
            galleryImage : $('.gallery-row img'),
            articleP : $('article p'),
            openSlideMenu : $('.open-slide-menu'),
            child : $('.child'),
            wpCaption : $('.wp-caption')
        },
        init : function (config) {
            config = config || hacklife.gvar.defaultConfig;
            hacklife.bindUIElements();
            hacklife.makeVideosFluidWidth();
            hacklife.findVideo();
            hacklife.removeAttributes();
        },
        removeAttributes : function () {
            hacklife.el.wpCaption.removeAttr('style');
        },
        makeVideosFluidWidth : function () {
            hacklife.el.articleP.fitVids();
        },
        findVideo : function() {
            var video = hacklife.el.articleP.find(hacklife.gvar.fluidWidthVideoWrapper);
            if(hacklife.el.articleHeader.length) {
                var photoTemp = hacklife.el.articleHeader[0].outerHTML;
                if(video.length) {
                    hacklife.el.articleHeader[0].outerHTML = video[0].outerHTML;
                    video[0].outerHTML = photoTemp;
                }
            }
        },
        bindUIElements : function () {
            hacklife.el.browserDocument.on('scroll', hacklife.scrollController);
            hacklife.el.galleryImage.on('click', hacklife.openImage);
            hacklife.el.headerTagline.on('click', hacklife.taglineEffect);
            hacklife.el.headerAboutmeCloseButton.on('click', hacklife.taglineEffectClose);
            hacklife.el.body.on('keydown', hacklife.keyPressController);
        },

        taglineEffect : function() {
            if(hacklife.el.browserDocument.scrollTop() < 410) {
                hacklife.el.browserWindow.scrollTop(410);
            }
            hacklife.el.headerAboutmeWrapper.addClass('active');
            hacklife.el.headerTagline.addClass('active');
            hacklife.el.headerLogo.addClass('active');
        },

        taglineEffectClose : function() {
            hacklife.el.headerAboutmeWrapper.removeClass('active');
            hacklife.el.headerTagline.removeClass('active');
            hacklife.el.headerLogo.removeClass('active');
        },

        openImage : function () {
            if($(this).parent().hasClass('fullscreen')) {
                $(this).unwrap();
            } else {
                var newDiv = $('<div>').addClass('fullscreen');
                $(this).wrap(newDiv);
            }
        },

        closeImage : function () {
            $(this).child();
        },

        scrollController : function () {
            if((hacklife.gvar.shareWrapperOffset.top - 10) <=
                hacklife.el.browserDocument.scrollTop()) {
                hacklife.el.shareWrapper.css({'position':'fixed', 'top':'10px',
                 'left': '50%', 'margin-left': '450px'});
            } else {
                hacklife.el.shareWrapper.css({'position':'relative', 'top':'auto',
                    'left': 'auto', 'margin-left': 'auto'});
            }
        },

        keyPressController : function (event) {
            if(event.keyCode === 27) {
                var galleryTemp = hacklife.el.gallery.find(hacklife.gvar.fullscreenClass);
                if(galleryTemp.length) {
                    galleryTemp.children().unwrap();
                }
            }
        }
    };
    hacklife.init();
    return hacklife;
});