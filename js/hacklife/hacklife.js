var hacklife = {
  gvar : {
    inputArticle : 'articles.html',
    defaultConfig : {inputArticle: 'article.html'},
    headerToggle : false
  },
  el : {
    browserWindow : $(window),
    browserDocument : $(document),
    body : $('body'),
    header : $('.top-menu'),
    contentWrapper : $('.content-wrapper'),
    articleWrapper : $('.article-wrapper'),
    openSlideMenu : $('.open-slide-menu'),
    child : $('.child')
  },
  init : function (config) {
    config = config || hacklife.gvar.defaultConfig;
    hacklife.gvar.inputArticle = config.inputArticle;
    hacklife.makeVideosFluidWidth();
    hacklife.bindUIElements();
    hacklife.loadArticles();
  },
  makeVideosFluidWidth : function () {
    hacklife.el.articleWrapper.fitVids();
  },
  loadArticles : function () {
    $.get(hacklife.gvar.inputArticle, function(data) {
      hacklife.el.articleWrapper.html(data);
    });
  },
  bindUIElements : function () {
    hacklife.el.browserDocument.on("scroll", hacklife.toggleHeader);
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