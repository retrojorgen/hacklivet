var hacklife = {
  gvar : {
  },
  el : {
    browserWindow : $(window),
    body : $('body'),
    contentWrapper : $('.content-wrapper'),
    articleWrapper : $('.article-wrapper'),
    openSlideMenu : $('.open-slide-menu'),
    child : $('.child'),
    videoWrappers: $('.videohack')
  },
  init : function () {
    hacklife.makeVideosFluidWidth();
    hacklife.bindUIElements();
    hacklife.loadArticles();
  },
  makeVideosFluidWidth : function () {
    hacklife.el.videoWrappers.fitVids();
  },
  loadArticles : function () {
    $.get('article.html', function(data) {
      hacklife.el.articleWrapper.html(data);
    });
  },
  bindUIElements : function () {
    hacklife.el.contentWrapper.hammer().on("swipeleft", hacklife.resetMarginLeft);
    hacklife.el.contentWrapper.hammer().on("swiperight", hacklife.changeMarginLeft);
    hacklife.el.openSlideMenu.on("click", hacklife.changeMarginLeft);
    hacklife.el.contentWrapper.on("click", hacklife.resetMarginLeft);
  },
  resetMarginLeft : function (ev) {      
    hacklife.el.contentWrapper.css('left','0px');
  },
  changeMarginLeft : function (ev) {
    if(parseInt(hacklife.el.contentWrapper.css("left")) > 0) {
      hacklife.el.contentWrapper.animate({left:'0px'}, 50);  
    } else {
      hacklife.el.contentWrapper.animate({left:'150px'}, 50);
    }    
  },
  addRightWipeClass : function () {
    hacklife.el.contentWrapper.addClass(hacklife.gvar.wipeContentWrapperRright).removeClass(hacklife.gvar.hideWipeContentWrapperRright);
    hacklife.el.openRightMenuButton.removeClass(hacklife.gvar.openRightMenuButtonClass).addClass(hacklife.gvar.openRightMenuButtonSelectedclass);
  },
  removeRightWipeClass : function () {
    hacklife.el.contentWrapper.addClass(hacklife.gvar.hideWipeContentWrapperRright);
    hacklife.el.openRightMenuButton.removeClass(hacklife.gvar.openRightMenuButtonSelectedclass).addClass(hacklife.gvar.openRightMenuButtonClass);
  }
};

hacklife.init();