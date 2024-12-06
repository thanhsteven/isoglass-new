(() => {
  const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 991;
  // Mở / đóng menu trên Tablet
  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  menuOverlay.addEventListener("click", toggleNav);
  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }
  // Menu con hoạt động
  navMenu.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-toggle")) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      console.log(menuItemHasChildren);
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu(); // Nếu li có chứa active thì bỏ nó đi
      } else {
        // ngược lại nếu nó không chứa thì thêm vào
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu(); // Nhưng trước khi thêm vào thì phải xoá nó đi trước đã
        }
        menuItemHasChildren.classList.add("active"); // để chuyển dấu + sang -
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style"); // đóng subMenu
    navMenu
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active"); // chuyển dấu + sang -
  }
  function resizeFix() {
    // if navMenu is open ,close it
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    // if menuItemHasChildren is expanded , collapse it
    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();
