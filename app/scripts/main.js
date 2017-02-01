
// Hide loader after 5 secs
$('.full-page-loader').delay(6000).fadeOut('slow');

  $("#owl-demo").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      paginationSpeed : 400,
      singleItem: true,
      pagination: true,
      touchDrag: true

  });
