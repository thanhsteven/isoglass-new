(function () {
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  const navMenu = document.querySelector(".menu-nav");
  const btnCloseMenu = document.querySelector(".menu-close");
  const submenu = document.querySelector(".menu-nav");
  const menuItem = document.querySelectorAll(".menu-item");
  const btnArrow = document.querySelector(".menu-item-icon");

  const mediaSize = 991;

  navMenu.addEventListener("click", function (e) {
    if (
      e.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      console.log(e.target);
    } else {
      console.log("false");
    }
  });

  btnOpenMenu.addEventListener("click", menuMobile);
  btnCloseMenu.addEventListener("click", menuMobile);
  modal.addEventListener("click", menuMobile);

  function menuMobile() {
    navMenu.classList.toggle("menu-nav-show");
    modal.classList.toggle("modal-show");
    if (document.body.style.overflow === "hidden") {
      document.body.style.removeProperty("overflow");
    } else {
      document.body.style.setProperty("overflow", "hidden");
    }
  }
})();

