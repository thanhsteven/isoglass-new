(() => {
  const navMenu = document.querySelector(".menu");
  const mediaSize = 992;

  // * Mở Menu Mobile
  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;

      if (menuItemHasChildren.classList.contains("menu-item-active")) {
        collaseSubMenu();
      } else {
        if (navMenu.querySelector(".menu-item-has-children.menu-item-active")) {
          collaseSubMenu();
        }
        menuItemHasChildren.classList.add("menu-item-active");
        const subMenuSimple =
          menuItemHasChildren.querySelector(".sub-menu-simple");
        subMenuSimple.style.maxHeight = subMenuSimple.scrollHeight + "px";
      }
    }

    function collaseSubMenu() {
      navMenu
        .querySelector(".menu-item-has-children.menu-item-active")
        .classList.remove("menu-item-active");
      navMenu
        .querySelector(
          ".menu-item-has-children.menu-item-active .sub-menu-simple"
        )
        .removeAttribute("style");
    }
  });

  const btnOpenMenu = document.querySelector(".header-open-menu");
  const btnCloseMenu = document.querySelector(".close-menu");
  const openHeaderRight = document.querySelector(".header-toggle-right");
  const headerRight = document.querySelector(".header-right");
  const closeHeaderRight = document.querySelector(".close-header-right");
  const headerOverlay = document.querySelector(".header-overlay");
  // * Mở/đóng Header bên phải
  openHeaderRight.addEventListener("click", toggleHeaderRight);
  closeHeaderRight.addEventListener("click", toggleHeaderRight);
  function toggleHeaderRight() {
    headerRight.classList.toggle("header-right-open");
    headerOverlay.classList.toggle("header-overlay-active");
  }
  // * Mở đóng Menu Mobile
  btnOpenMenu.addEventListener("click", toggleNav);
  btnCloseMenu.addEventListener("click", toggleNav);
  function toggleNav() {
    navMenu.classList.toggle("menu-main-open");
    headerOverlay.classList.toggle("header-overlay-active");
  }
  // * Đóng Menu Mobile và Header phải bằng click bên ngoài
  headerOverlay.addEventListener("click", closeHeaderOverlay);
  function closeHeaderOverlay() {
    headerRight.classList.remove("header-right-open");
    navMenu.classList.remove("menu-main-open");
    headerOverlay.classList.remove("header-overlay-active");
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  function resizeFix() {
    if (headerOverlay.classList.contains("header-overlay-active")) {
      toggleNav();
    }
    if (navMenu.classList.contains("menu-main-open")) {
      toggleNav();
    }
    if (headerRight.classList.contains("header-right-open")) {
      toggleNav();
    }
  }
})();
