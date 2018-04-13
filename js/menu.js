var $menuElement = $('[data-name="Overlay"]');
var menuInstanceId = $menuElement.data('id');

if (menuInstanceId) {
  init();
}

function init() {
  var data = Fliplet.Widget.getData(menuInstanceId) || {};
  var lastScrollTop = 0;

  if (Modernizr.backdropfilter) {
    $('.body').addClass('backdropfilter');
  }

  if (data.hide) {
    $(window).scroll(function(){
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

  $('.fl-menu-overlay').click(function() {
    $(this).closest('.fl-menu').removeClass('active');
    $('.fl-viewport-header .hamburger').removeClass('is-active');
  });

  $('[open-about-overlay]').on('click', function() {
    Fliplet.Navigate.to({
      action: 'about-overlay'
    });
  });

  $('[data-fl-toggle-menu]').click(function (event) {
    event.preventDefault();
    $('.fl-viewport-header .hamburger').toggleClass('is-active');
  });

  if (data.swipeBack) {
    $('body').hammer().bind('swiperight', function() {
      Fliplet.Navigate.back();
    });
  }
}