$(document).ready(function () {
  initNavbar();
  clikcScrollDownMenu();
});

function initNavbar() {
  const burger = $(".burger");
  const body = $("body");

  burger.click(() => {
    burger.toggleClass("active");
    body.toggleClass("overflow-y-hidden");
  });
}

function clikcScrollDownMenu() {
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.preventDefault();

    const burger = $(".burger");
    const body = $("body");

    burger.removeClass("active");
    body.removeClass("overflow-y-hidden");

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      800
    );
  });
}
