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
