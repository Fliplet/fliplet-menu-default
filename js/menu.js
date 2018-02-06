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

$('[data-fl-toggle-menu]').click(function (event) {
  event.preventDefault();
  $('.fl-menu-default .hamburger').toggleClass('is-active');
});
