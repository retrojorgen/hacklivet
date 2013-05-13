var hacklife = {
  gvar : {
    currentScroll : 0,
    wipeContentWrapperLeft : 'wipe-left',
    wipeContentWrapperRright : 'wipe-right',
    hideWipeContentWrapperLeft : 'hide-wipe-left',
    hideWipeContentWrapperRright : 'hide-wipe-right',
    openLeftMenuButtonClass : 'left-menu',
    openRightMenuButtonClass : 'right-menu',
    openRightMenuButtonSelectedclass : 'right-menu-selected',
    openLeftMenuButtonSelectedclass : 'left-menu-selected'
  },
  el : {
    browserWindow : $(window),
    body : $('body'),
    contentWrapper : $('.content-wrapper'),
    articleWrapper : $('.article-wrapper'),
    openSlideMenu : $('.open-slide-menu'),
    child : $('.child'),
    inner : $('.inner'),
    openArticleButton : $('.article-icon-button'),
    closeArticleButton : $('.close-button'),
    nextArticleButton : $('.next-button'),
    prevArticleButton : $('.prev-button'),
    openLeftMenuButton : $('.left-menu'),
    openRightMenuButton : $('.right-menu'),
    headerButtonGroup : $('.header-button-group'),
    closeRightMenuButton : $('.right-menu-selected'),
    closeLeftMenuButton : $('.left-menu-selected'),
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
    $.get('articles.html', function(data) {
      hacklife.el.articleWrapper.html(data);
    });
  },
  bindUIElements : function () {
    hacklife.el.openArticleButton.on("click", hacklife.addArticleID);
    hacklife.el.contentWrapper.hammer().on("swipeleft", hacklife.changeMarginRight);
    hacklife.el.contentWrapper.hammer().on("swiperight", hacklife.changeMarginLeft);
    hacklife.el.openSlideMenu.on("click", hacklife.changeMarginRight);
  },
  changeMarginRight : function (ev) {
    if(parseInt(hacklife.el.contentWrapper.css("right")) > 0) {
      hacklife.el.contentWrapper.animate({right:'0px'}, 50);  
    } else {
      hacklife.el.contentWrapper.animate({right:'150px'}, 50);
    }      
  },
  changeMarginLeft : function (ev) {
    hacklife.el.contentWrapper.css('right','0px');
  },
  addRightWipeClass : function () {
    hacklife.el.contentWrapper.addClass(hacklife.gvar.wipeContentWrapperRright).removeClass(hacklife.gvar.hideWipeContentWrapperRright);
    hacklife.el.openRightMenuButton.removeClass(hacklife.gvar.openRightMenuButtonClass).addClass(hacklife.gvar.openRightMenuButtonSelectedclass);
  },
  removeRightWipeClass : function () {
    hacklife.el.contentWrapper.addClass(hacklife.gvar.hideWipeContentWrapperRright);
    hacklife.el.openRightMenuButton.removeClass(hacklife.gvar.openRightMenuButtonSelectedclass).addClass(hacklife.gvar.openRightMenuButtonClass);
  },  
  addArticleID : function (event) {
    console.log("hepp");
    $(this).parent().parent().attr("id", "article");
    /** hacklife.setScroll();
    hacklife.hideArticles();
    $(this).parent().parent().parent().removeClass('hidden')
    .attr("id", "article");
    **/
  },
  removeArticleID : function (event) {
    hacklife.showArticles();
    hacklife.scrollTopCurrentScroll();
    $(this).parent().parent().parent().parent().attr("id", "");
  },
  hideArticles : function () {
    hacklife.el.child.addClass('hidden');
  },
  showArticles : function () {
    hacklife.el.child.removeClass('hidden');
  },
  setScroll : function () {
    hacklife.gvar.currentScroll = hacklife.el.browserWindow.scrollTop();
  },
  scrollTopCurrentScroll : function () {
    hacklife.el.browserWindow.scrollTop(hacklife.gvar.currentScroll);
  }
};

hacklife.init();