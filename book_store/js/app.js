$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".navigation").toggleClass("change");
  });
  lightbox.option({
    // 'resizeDuration': 200,
    wrapAround: true,
  });

  $(window).scroll(function () {
    let position = $(this).scrollTop();
    // console.log(position)
    if (position >= 350) {
      $(".gallery").addClass("change");
    } else {
      $(".gallery").removeClass("change");
    }
  });

  $(".writers-accordion").click(function (event) {
    // console.log('Hello')
    // console.log(event.target.id.split('-'))
    if (event.target.id.split("-")[0] === "button") {
      $("#Book-1").attr(
        "src",
        "img/famous_writters/" + event.target.id.split("-")[1] + "Book1.png"
      );
      // console.log(event.target.id.split("-")[1])
      $("#Book-2").attr(
        "src",
        "img/famous_writters/" + event.target.id.split("-")[1] + "Book2.png"
      );
    }
  });
});
