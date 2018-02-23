(function($) {
  $(() => {
    // toggle navigation for animation
    $('#nav-toggle').click(function() {
      this.classList.toggle('active');
      // if the sidebar is visible
      if ($('body').hasClass('show-nav')) {
        // hide it
        $('body').removeClass('show-nav');
      } else {
        // otherwise it is hidden, and display it
        $('body').addClass('show-nav');
      }
    });
  });
})(jQuery);
