(function () {
  const openNavMenu = document.querySelector(".open-nav-menu");
  const closeNavMenu = document.querySelector(".close-nav-menu");
  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mediaSize = 991;

  navMenu.addEventListener("click", function (event) {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      console.log(event.target);
      const menuItemHasChildren = event.target.parentElement;
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    const activeSubMenu = navMenu.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    if (activeSubMenu) {
      activeSubMenu.removeAttribute("style");
    }
    const activeMenuItem = navMenu.querySelector(
      ".menu-item-has-children.active"
    );
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }
  }
  function resizeFix() {
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }
  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  menuOverlay.addEventListener("click", toggleNav);
  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }
})();
