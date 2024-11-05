(function () {
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  const navMenu = document.querySelector(".menu-nav");
  const btnCloseMenu = document.querySelector(".menu-close");

  navMenu.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-toggle")) {
      const submenu = event.target.querySelector(".sub-menu");
      console.log(submenu);
      if (submenu.hasAttribute("style")) {
        submenu.removeAttribute("style");
        rotateIcon(event.target);
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        rotateIcon(event.target);
      }
    } else {
      return false;
    }
  });

  function rotateIcon(element) {
    const iconArrow = element.querySelector(".menu-item-icon");
    iconArrow.classList.toggle("icon-show");
  }

  function collapseSubMenu() {
    navMenu
      .querySelector(".menu .menu-item .sub-menu")
      .removeAttribute("style");
  }

  // menuItemAll.forEach(function (menuItem) {
  //   menuItem.addEventListener("click", function (e) {
  //     iconArrow.classList.toggle("menu-item-arrow-rotate");

  //     if (e.target.hasAttribute("data-toggle")) {
  //       submenu.style.maxHeight = submenu.scrollHeight + "px";
  //       console.log(submenu);
  //     } else {
  //       console.log(false);
  //     }
  //   });
  // });

  // navMenu.addEventListener("click", function (e) {
  //   const iconArrow = e.target.querySelector(".menu-item-arrow");
  //   console.log(e.target);

  //   const submenu = navMenu.querySelector(".sub-menu");
  //   if (e.target.hasAttribute("data-toggle")) {
  //     iconArrow.classList.toggle("menu-item-arrow-rotate");
  //     submenu.style.maxHeight = submenu.scrollHeight + "px";
  //   }
  // });

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

