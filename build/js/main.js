console.log("1");

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

$(".slider").slick({
  arrows: true,
  prevArrow: ".arrowLeft",
  nextArrow: ".arrowRight",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1130,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//# sourceMappingURL=../maps/main.js.map
