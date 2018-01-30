var $menuElement = $('[data-name="Dropdown"]');
var menuInstanceId = $menuElement.data('id');
var data = Fliplet.Widget.getData(menuInstanceId) || {};

var lastScrollTop = 0;

if (Modernizr.backdropfilter) {
  $('.body').addClass('backdropfilter');
}

$('.fl-menu-overlay').click(function() {
  $(this).closest('.fl-menu').removeClass('active');
});

$('[open-about-overlay]').on('click', function() {
  Fliplet.Navigate.to({
    action: 'about-overlay'
  });
});

$('.fl-menu-swipe-handler').hammer().bind('swiperight', function() {
  Fliplet.Navigate.back();
});

if (data.hide) {
  $(window).scroll(function(event){
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
      // downscroll code
      $('body').addClass('fl-top-menu-hidden');
    } else {
      // upscroll code
      $('body').removeClass('fl-top-menu-hidden');
    }
    lastScrollTop = st;
  });
}