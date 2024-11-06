(function () {
  const btnOpenMenu = document.querySelector(".header-right-menu");
  const modal = document.querySelector(".modal");
  const navMenu = document.querySelector(".menu-nav");
  const subMenuAll = navMenu.querySelectorAll(".menu .menu-item .sub-menu");
  const menuIconAll = navMenu.querySelectorAll(".menu-item-icon");
  const btnCloseMenu = document.querySelector(".menu-close");

  console.log(menuIconAll);

  navMenu.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-toggle")) {
      const submenu = event.target.querySelector(".sub-menu");
      if (submenu.hasAttribute("style")) {
        submenu.removeAttribute("style");
        toggleIcon(event.target);
      } else {
        [...subMenuAll].forEach((item) => {
          item.removeAttribute("style");
        });
        [...menuIconAll].forEach((item) => {
          item.classList.remove("icon-show");
        });
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        toggleIcon(event.target);
      }
    } else {
      console.log("Không có menu con - submenu bên trong");
      return false;
    }
  });

  function toggleIcon(element) {
    const iconArrow = element.querySelector(".menu-item-icon");
    iconArrow.classList.toggle("icon-show");
  }

  function collapseSubMenu() {
    const subMenuAll = navMenu.querySelector(".menu .menu-item .sub-menu");
    if (subMenuAll.hasAttribute("style")) {
      subMenuAll.removeAttribute("style");
    }
    // let iconsubMenuAll = navMenu.querySelector(
    //   ".menu .menu-item .menu-item-wrapper .menu-item-icon.icon-show"
    // );
    // if (iconsubMenuAll) {
    //   iconsubMenuAll.classList.remove("icon-show");
    // }
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
