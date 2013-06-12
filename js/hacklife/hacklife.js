var hacklife = {
  gvar : {
    defaultConfig : {},
    headerToggle : false
  },
  el : {
    browserWindow : $(window),
    browserDocument : $(document),
    body : $('body'),
    header : $('.top-menu'),
    contentWrapper : $('.content-wrapper'),
    articleWrapper : $('.article-wrapper'),
    articleHeader : $('.article-header'),
    galleryImage : $('.gallery-row img'),
    galleryFullscrenImage : $('.fullscreen img'),
    articleP : $('article p'),
    openSlideMenu : $('.open-slide-menu'),
    child : $('.child')
  },
  init : function (config) {
    config = config || hacklife.gvar.defaultConfig;
    hacklife.bindUIElements();
    hacklife.makeVideosFluidWidth();
    hacklife.findVideo();
  },
  makeVideosFluidWidth : function () {
    hacklife.el.articleP.fitVids();

  },
  findVideo : function() {
    var video = hacklife.el.articleP.find(".fluid-width-video-wrapper");
    if(hacklife.el.articleHeader.length) {
      var photo_temp = hacklife.el.articleHeader[0].outerHTML;
      if(video.length) {
        hacklife.el.articleHeader[0].outerHTML = video[0].outerHTML;
        video[0].outerHTML = photo_temp;
      }
    }
  },
  bindUIElements : function () {
    hacklife.el.browserDocument.on("scroll", hacklife.toggleHeader);
    hacklife.el.galleryImage.on("click", hacklife.openImage);
  },
  openImage : function (event) {
    if($(this).parent().hasClass('fullscreen')) {
      $(this).unwrap();
    } else {
      $(this).wrap('<div class="fullscreen" />');
    }
  },
  closeImage : function (event) {
    $(this).child()
  },
  toggleHeader : function () {
    if(hacklife.el.browserDocument.scrollTop() > 480 && !hacklife.gvar.headerToggle) {
      hacklife.el.header.addClass("fixed").addClass("hanging-header");
      hacklife.gvar.headerToggle = true;
    }
    if(hacklife.el.browserDocument.scrollTop() < 480 && hacklife.gvar.headerToggle) {
      hacklife.el.header.removeClass("fixed").removeClass("hanging-header");
      hacklife.gvar.headerToggle = false;
    }
  }
};