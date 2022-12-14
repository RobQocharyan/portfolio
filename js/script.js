$(function () {
  const workSlider = $('[data-slider="slick"]');

  // filter===================
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat === "all") {
      $("[data-cat").removeClass("hide");
    } else {
      $("[data-cat").each(function () {
        let workCat = $(this).data("cat");

        if (workCat !== cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  // modal====================

  let modalCall = $("[data-modal");
  let modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data("modal");

    $(modalId).addClass("show");
    $("body").addClass("no-scroll");

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({ transform: "scale(1)" });
    }, 200);

    workSlider.slick("setPosition");
  });

  modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents(".modal");

    modalParent.find(".modal__dialog").css({ transform: "scale(0)" });

    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({ transform: "scale(0)" });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 200);
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

  // Slider:https://kenwheeler.github.io/slick/----===================

  workSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents(".modal").find(workSlider);

    currentSlider.slick("slickPrev");
  });

  $(".slickNext").on("click", function (event) {
    event.preventDefault();
    let currentSlider = $(this).parents(".modal").find(workSlider);
    currentSlider.slick("slickNext");
  });

  // Mobile nav==============================================================

  const navToggle = $("#navToggle");
  const nav = $("#nav");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show")
  });
});


// const route = (event)=>{
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({},"",event.target.href)
//   handleLocation()
// }

// const routes = {
//   404:"/templates/404.html",
//   "/work":"/templates/work.html",
//   "/blog":"/templates/blog.html",
//   "/contact":"/templates/contact.html",
//   "/about":"/templates/about.html",
//   "/":"index.html"
// }


// const handleLocation = async()=>{
//   const path = window.location.pathname
//   const route = routes[path] || routes[404]
//   const html = await fetch(route).then((data)=>data.text());
//   document.getElementById("main-page").innerHTML = html
// }


// window.onpopstate = handleLocation
// window.route = route;

// handleLocation()