var $menuElement = $('[data-name="Overlay"]');
var menuInstanceId = $menuElement.data('id');

$($menuElement).translate();

if (menuInstanceId) {
  init();
}

function init() {
  var data = Fliplet.Widget.getData(menuInstanceId) || {};
  var lastScrollTop = 0;

  Fliplet.Hooks.on('addExitAppMenuLink', function() {
    var $exitButton = $([
      '<li class="linked with-icon" data-fl-exit-app>',
      '<div class="fl-menu-icon">',
      '<i class="fa fa-fw fa-sign-out"></i>',
      '</div>',
      '<i class="fa fa-angle-right linked-icon" aria-hidden="true"></i>',
      '<span class="internal-link buttonControl">Exit</span>',
      '</li>'
    ].join(''));

    $exitButton.on('click', function onExitClick() {
      Fliplet.Navigate.exitApp();
    });

    $menuElement.find('ul').append($exitButton);

    // Prevent default "Exit" link from being added
    return Promise.reject();
  });

  if ($('li.with-icon').length) {
    $('.main-menu').addClass('with-icons');
  }

  if (Modernizr.backdropfilter) {
    $('.body').addClass('backdropfilter');
  }

  if (data.hide) {
    $(window).scroll(function() {
      var st = $(this).scrollTop();

      if (st > lastScrollTop) {
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
    $(this).closest('.fl-menu').removeClass('active').addClass('hidden');
    $('.fl-viewport-header .hamburger').removeClass('is-active');
    $('body').removeClass('has-overlay-menu');
  });

  $('[open-about-overlay]').on('click', function() {
    Fliplet.Navigate.to({
      action: 'about-overlay'
    });
  });

  $menuElement.find('.nav-right.focus-outline').on('click keydown', function(event) {
    if (event.type !== 'click' && event.which !== 32 && event.which !== 13) {
      return;
    }

    var $body = $('body');

    $body.find('.fl-menu.fl-app-menu').toggleClass('hidden');

    setTimeout(function() {
      $('.fl-viewport-header .hamburger').toggleClass('is-active');
      $body.toggleClass('has-overlay-menu');
      $body.find('.fl-menu').toggleClass('active');
    }, 0);
  });
}
